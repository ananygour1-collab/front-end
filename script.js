// --- Global Configuration ---
// Store Identity — tenant "x9" on the Devcarts backend
const TENANT_ID = 'x9';
const API_KEY   = 'f000b374dc66bdbb5b41bee0db897e3e6aafe408f6b3dad3d06b416dfdbf5c55';

// Backend is running at localhost:3001  (Next.js / Devcarts)
// Storefront is running at localhost:3000 (npx serve)
// CORS is already enabled on the backend for all /api/* routes
const BACKEND_URL = 'http://localhost:3001';
const API_BASE    = `${BACKEND_URL}/api/${TENANT_ID}`;

// Default headers sent with every API request
function apiHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  };
}

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});

// --- API Helpers ---

/**
 * Fetch published products from the Devcarts API.
 * Supported params: search, category, status, featured, page, limit
 */
async function fetchProducts(params = {}) {
  try {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') query.append(k, v);
    });
    const url = `${API_BASE}/products${query.toString() ? '?' + query.toString() : ''}`;
    const res = await fetch(url, { headers: apiHeaders() });
    if (!res.ok) throw new Error(`Products fetch failed: ${res.status}`);
    return await res.json(); // { data: Product[], count, page, limit }
  } catch (err) {
    console.error('[fetchProducts]', err);
    return { data: [], count: 0 };
  }
}

/**
 * Fetch a single product by ID or slug.
 */
async function fetchProduct(idOrSlug) {
  try {
    const res = await fetch(`${API_BASE}/products/${idOrSlug}`, { headers: apiHeaders() });
    if (!res.ok) throw new Error(`Product fetch failed: ${res.status}`);
    const json = await res.json();
    return json.data ?? json;
  } catch (err) {
    console.error('[fetchProduct]', err);
    return null;
  }
}

/**
 * Fetch all categories for this store.
 */
async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`, { headers: apiHeaders() });
    if (!res.ok) throw new Error(`Categories fetch failed: ${res.status}`);
    return await res.json(); // { data: Category[] }
  } catch (err) {
    console.error('[fetchCategories]', err);
    return { data: [] };
  }
}

/**
 * Validate a coupon code against an order total.
 * Returns { discount, success } or null on failure.
 */
async function validateCoupon(code, orderTotal) {
  try {
    const res = await fetch(`${API_BASE}/coupons/validate`, {
      method: 'POST',
      headers: apiHeaders(),
      body: JSON.stringify({ code, order_total: orderTotal }),
    });
    if (!res.ok) throw new Error(`Coupon validation failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('[validateCoupon]', err);
    return null;
  }
}

// --- Cart System (localStorage-backed) ---
function getCart() {
  const cart = localStorage.getItem(`cart_${TENANT_ID}`);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(`cart_${TENANT_ID}`, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product, variant = null, quantity = 1) {
  const cart = getCart();

  const cartItemId = variant ? `${product.id}_${variant.id}` : product.id;
  const existingIdx = cart.findIndex(item => item.cartItemId === cartItemId);

  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      cartItemId,
      productId: product.id,
      variantId: variant ? variant.id : null,
      name: product.name,
      variantName: variant ? variant.name : null,
      price: variant ? variant.price : product.price,
      image:
        product.product_images && product.product_images[0]
          ? product.product_images[0].url
          : 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      quantity,
    });
  }

  saveCart(cart);
  showToast('Added to cart!');
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

// --- Fastrr Checkout (per Devcarts guide) ---
/**
 * Trigger Fastrr headless checkout modal.
 * Clears cart automatically on success.
 */
function triggerFastrrCheckout({ couponCode = null, discountAmount = 0 } = {}) {
  const cart = getCart();
  if (!cart.length) {
    showToast('Your cart is empty.');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const payload = {
    cart_items: cart.map(item => ({
      id: item.productId,
      variant_id: item.variantId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    })),
    coupon: couponCode || null,
    discount: discountAmount,
    total: total - discountAmount,
  };

  if (typeof window.Fastrr === 'undefined') {
    console.warn('[Fastrr] SDK not loaded yet.');
    showToast('Checkout is loading, please try again in a moment.');
    return;
  }

  window.Fastrr.checkout({
    payload,
    onSuccess: (response) => {
      console.log('[Fastrr] Order placed:', response);
      saveCart([]);
      window.location.href = './order-confirmation.html?order=' + (response?.order_id || Date.now());
    },
    onError: (error) => {
      console.error('[Fastrr] Checkout error:', error);
      showToast('Checkout failed. Please try again.');
    },
  });
}

// --- UI Utilities ---
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
