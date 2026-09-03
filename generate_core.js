const fs = require('fs');

const layoutTop = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-brand-name>Store</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>

  <!-- Trust Bar (New) -->
  <div class="trust-bar">
    <div class="container">
      <div class="trust-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5l10 -10"></path></svg>
        Free Shipping on Orders Over $100
      </div>
      <div class="trust-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Secure Payment Options
      </div>
      <div class="trust-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
        Premium Quality Guarantee
      </div>
    </div>
  </div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="container">
      <a href="./index.html" class="brand-logo" data-brand-name>Brand</a>
      <div class="nav-links">
        <a href="./products.html">Shop All</a>
        <a href="./products.html?category=new">New Arrivals</a>
        <a href="./sale.html" style="color: #DC2626; font-weight: 600;">Sale</a>
      </div>
      <div class="nav-actions">
        <a href="./login.html" class="user-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </a>
        <a href="./cart.html" class="cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-badge" id="cartBadge" style="display: none;">0</span>
        </a>
      </div>
    </div>
  </nav>

  <main>
`;

const layoutBottom = `
  </main>
  <!-- Mega Footer -->
  <footer class="mega-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h3 data-brand-name>Brand</h3>
          <p>We craft premium vibrant apparel for those who want to stand out. Our mission is to provide high-quality, sustainable fashion.</p>
          <div style="margin-top: 1.5rem;">
            <p><strong>Subscribe to our newsletter</strong></p>
            <form style="display: flex; gap: 0.5rem; margin-top: 0.5rem;" onsubmit="event.preventDefault(); alert('Subscribed!');">
              <input type="email" placeholder="Email address" class="form-control" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white;" required>
              <button type="submit" class="btn btn-primary" style="padding: 0.5rem 1rem;">Go</button>
            </form>
          </div>
        </div>
        <div class="footer-col">
          <h3>Shop</h3>
          <ul class="footer-links">
            <li><a href="./products.html">All Products</a></li>
            <li><a href="./sale.html">Sale</a></li>
            <li><a href="./blog.html">Lookbook</a></li>
            <li><a href="./gift-cards.html">Gift Cards</a></li>
            <li><a href="./store-locator.html">Store Locator</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Support</h3>
          <ul class="footer-links">
            <li><a href="./faq.html">FAQ</a></li>
            <li><a href="./contact.html">Contact Us</a></li>
            <li><a href="./shipping-policy.html">Shipping & Delivery</a></li>
            <li><a href="./returns.html">Returns Center</a></li>
            <li><a href="./size-guide.html">Size Guide</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Company</h3>
          <ul class="footer-links">
            <li><a href="./about.html">Our Story</a></li>
            <li><a href="./terms.html">Terms & Conditions</a></li>
            <li><a href="./privacy.html">Privacy Policy</a></li>
            <li><a href="./returns-policy.html">Refund Policy</a></li>
            <li><a href="./security.html">Payment Security</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; 2026 <span data-brand-name>Brand</span>. All rights reserved.</div>
        <div class="payment-icons">
          <!-- Trust/Payment Badges -->
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal">
        </div>
      </div>
    </div>
  </footer>

  <script src="./script.js"></script>
</body>
</html>
`;

// Helper to wrap pages in layout
function generatePage(filename, content, extraScript = '') {
  const fullHtml = layoutTop + content + layoutBottom + extraScript;
  fs.writeFileSync(filename, fullHtml);
}

// ============================================
// PAGE CONTENT DEFINITIONS
// ============================================

const pages = {
  'products.html': {
    content: `
      <section class="section">
        <div class="container shop-layout">
          <aside class="shop-sidebar">
            <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Filters</h2>
            
            <div class="filter-group">
              <h3 class="filter-title">Category</h3>
              <select id="categoryFilter" class="form-control">
                <option value="">All Categories</option>
              </select>
            </div>
            
            <div class="filter-group">
              <h3 class="filter-title">Price Range</h3>
              <ul class="filter-list">
                <li><label><input type="radio" name="price" value="0-50"> Under $50</label></li>
                <li><label><input type="radio" name="price" value="50-100"> $50 - $100</label></li>
                <li><label><input type="radio" name="price" value="100+"> Over $100</label></li>
              </ul>
            </div>
            
            <div class="filter-group">
              <h3 class="filter-title">Size</h3>
              <div class="variant-options">
                <div class="variant-btn">XS</div>
                <div class="variant-btn">S</div>
                <div class="variant-btn">M</div>
                <div class="variant-btn">L</div>
                <div class="variant-btn">XL</div>
              </div>
            </div>
          </aside>
          
          <div class="shop-main">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
              <h1 class="section-title" style="margin: 0; text-align: left; font-size: 2rem;">All Products</h1>
              <div style="display: flex; gap: 1rem;">
                <input type="text" id="searchInput" class="form-control" placeholder="Search..." style="width: 200px;">
                <select class="form-control" style="width: 150px;">
                  <option>Sort: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>
            
            <div class="grid product-grid" id="productsContainer">
              <div class="skeleton skeleton-card"></div>
              <div class="skeleton skeleton-card"></div>
              <div class="skeleton skeleton-card"></div>
              <div class="skeleton skeleton-card"></div>
            </div>
          </div>
        </div>
      </section>
    `,
    script: `
      <script>
        document.addEventListener('DOMContentLoaded', async () => {
          const container = document.getElementById('productsContainer');
          const searchInput = document.getElementById('searchInput');
          const categoryFilter = document.getElementById('categoryFilter');
          
          let currentQuery = '';
          let currentCategory = '';

          async function loadCategories() {
            const res = await fetchCategories();
            if (res.data) {
              res.data.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.slug;
                option.textContent = cat.name;
                categoryFilter.appendChild(option);
              });
            }
          }

          async function renderProducts() {
            container.innerHTML = \`
              <div class="skeleton skeleton-card"></div>
              <div class="skeleton skeleton-card"></div>
              <div class="skeleton skeleton-card"></div>
              <div class="skeleton skeleton-card"></div>
            \`;
            
            const params = { status: 'published' };
            if (currentQuery) params.search = currentQuery;
            if (currentCategory) params.category = currentCategory;

            try {
              const res = await fetchProducts(params);
              container.innerHTML = '';
              
              if (!res.data || res.data.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1;">No products found.</p>';
                return;
              }

              res.data.forEach(product => {
                const imageUrl = (product.product_images && product.product_images.length > 0) 
                  ? product.product_images[0].url 
                  : 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80';
                
                const comparePriceHtml = product.compare_price 
                  ? \`<span class="compare-price">\${formatCurrency(product.compare_price)}</span>\` 
                  : '';

                const card = document.createElement('a');
                card.href = \`./product.html?slug=\${product.slug}\`;
                card.className = 'product-card';
                card.innerHTML = \`
                  <div class="product-image-wrapper">
                    \${product.featured ? '<div class="product-badge">Featured</div>' : ''}
                    <img src="\${imageUrl}" alt="\${product.name}" class="product-image" loading="lazy">
                  </div>
                  <div class="product-info">
                    <div class="product-title">\${product.name}</div>
                    <div class="product-price">
                      \${formatCurrency(product.price)} \${comparePriceHtml}
                    </div>
                  </div>
                \`;
                container.appendChild(card);
              });
            } catch (err) {
              container.innerHTML = '<p style="grid-column: 1/-1; color: red;">Failed to load products.</p>';
            }
          }

          let debounceTimer;
          searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
              currentQuery = e.target.value;
              renderProducts();
            }, 500);
          });

          categoryFilter.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderProducts();
          });

          loadCategories();
          
          const urlParams = new URLSearchParams(window.location.search);
          if (urlParams.has('category')) {
              currentCategory = urlParams.get('category');
          }
          
          renderProducts();
        });
      </script>
    `
  },
  'product.html': {
    content: `
      <div class="container">
        <div id="loadingState" style="padding: 4rem 0;">
          <div class="product-detail-grid">
            <div class="skeleton" style="height: 500px;"></div>
            <div>
              <div class="skeleton" style="height: 40px; margin-bottom: 1rem;"></div>
              <div class="skeleton" style="height: 30px; margin-bottom: 2rem; width: 150px;"></div>
              <div class="skeleton" style="height: 100px; margin-bottom: 2rem;"></div>
            </div>
          </div>
        </div>
        
        <div id="productDetail" style="display: none;">
          <!-- Populated by JS -->
        </div>

        <!-- Size Guide Modal -->
        <div class="modal-overlay" id="sizeGuideModal">
          <div class="modal-content">
            <button class="modal-close" onclick="document.getElementById('sizeGuideModal').classList.remove('active')">&times;</button>
            <h2 style="margin-bottom: 1.5rem;">Size Guide</h2>
            <p style="margin-bottom: 1rem; color: var(--text-muted);">Find your perfect fit. Measurements are in inches.</p>
            <table style="width: 100%; text-align: left; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="padding: 0.75rem;">Size</th>
                  <th style="padding: 0.75rem;">Chest</th>
                  <th style="padding: 0.75rem;">Length</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 0.75rem;">S</td><td style="padding: 0.75rem;">38-40</td><td style="padding: 0.75rem;">28</td></tr>
                <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 0.75rem;">M</td><td style="padding: 0.75rem;">40-42</td><td style="padding: 0.75rem;">29</td></tr>
                <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 0.75rem;">L</td><td style="padding: 0.75rem;">42-44</td><td style="padding: 0.75rem;">30</td></tr>
                <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 0.75rem;">XL</td><td style="padding: 0.75rem;">44-46</td><td style="padding: 0.75rem;">31</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `,
    script: `
      <script>
        document.addEventListener('DOMContentLoaded', async () => {
          const urlParams = new URLSearchParams(window.location.search);
          const slug = urlParams.get('slug');
          
          const loadingState = document.getElementById('loadingState');
          const productDetail = document.getElementById('productDetail');

          if (!slug) {
            loadingState.innerHTML = '<p class="text-center">Product not found.</p>';
            return;
          }

          try {
            const res = await fetchProducts({ search: slug });
            const product = res.data && res.data.find(p => p.slug === slug);
            
            if (!product) {
              loadingState.innerHTML = '<p class="text-center mt-8">Product not found.</p>';
              return;
            }

            document.title = \`\${product.name} — Store\`;

            const images = product.product_images && product.product_images.length > 0 
              ? product.product_images 
              : [{ url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', id: 'default' }];
            
            let activeImage = images[0].url;
            let selectedVariant = product.product_variants && product.product_variants.length > 0 
              ? product.product_variants[0] 
              : null;

            const comparePriceHtml = product.compare_price 
              ? \`<span class="compare-price">\${formatCurrency(product.compare_price)}</span>\` 
              : '';

            function render() {
              loadingState.style.display = 'none';
              productDetail.style.display = 'block';
              
              let variantsHtml = '';
              if (product.product_variants && product.product_variants.length > 0) {
                variantsHtml = \`
                  <div class="variant-selector">
                    <h3>Select Option <span class="size-guide-link" onclick="document.getElementById('sizeGuideModal').classList.add('active')">Size Guide</span></h3>
                    <div class="variant-options">
                      \${product.product_variants.map(v => \`
                        <button class="variant-btn \${selectedVariant && selectedVariant.id === v.id ? 'selected' : ''}" data-variant-id="\${v.id}">
                          \${v.name}
                        </button>
                      \`).join('')}
                    </div>
                  </div>
                \`;
              }
              
              let thumbnailsHtml = '';
              if (images.length > 1) {
                thumbnailsHtml = \`
                  <div class="thumbnail-list">
                    \${images.map(img => \`
                      <img src="\${img.url}" class="thumbnail \${img.url === activeImage ? 'active' : ''}" data-img="\${img.url}">
                    \`).join('')}
                  </div>
                \`;
              }

              productDetail.innerHTML = \`
                <div class="product-detail-grid">
                  <div class="product-gallery">
                    <img src="\${activeImage}" alt="\${product.name}" class="main-image" id="mainImage">
                    \${thumbnailsHtml}
                  </div>
                  <div class="product-meta">
                    <h1>\${product.name}</h1>
                    <div class="stars" style="margin-bottom: 1rem;">★★★★★ <span style="color:var(--text-muted); font-size:0.875rem;">(12 Reviews)</span></div>
                    <div class="price">
                      \${formatCurrency(selectedVariant ? selectedVariant.price : product.price)} 
                      \${!selectedVariant ? comparePriceHtml : ''}
                    </div>
                    
                    <p style="color: #059669; font-weight: 500; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                      <span style="display:inline-block; width:8px; height:8px; background:#059669; border-radius:50%;"></span>
                      In Stock & Ready to Ship
                    </p>

                    <div class="description">\${product.description || product.short_description || 'A premium garment crafted with precision.'}</div>
                    
                    \${variantsHtml}

                    <div class="add-to-cart-wrapper">
                      <input type="number" id="qtyInput" class="qty-input" value="1" min="1" max="\${product.stock_quantity || 99}">
                      <button id="addToCartBtn" class="btn btn-primary btn-block" \${product.stock_status === 'out_of_stock' ? 'disabled' : ''}>
                        \${product.stock_status === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Reviews Section -->
                <div class="reviews-section">
                  <h2>Customer Reviews</h2>
                  <div class="stars mb-4">4.9 out of 5 ★★★★★</div>
                  
                  <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <h4 style="margin: 0.5rem 0;">Perfect Fit!</h4>
                    <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 0.5rem;">Sarah J. on Oct 12, 2026</p>
                    <p>Absolutely love the quality. It fits perfectly and the material feels incredibly premium.</p>
                  </div>
                  <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <h4 style="margin: 0.5rem 0;">Stunning Color</h4>
                    <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 0.5rem;">Mike T. on Sep 28, 2026</p>
                    <p>The vibrancy is exactly as pictured. Shipping was super fast too. Highly recommend!</p>
                  </div>
                </div>

                <!-- Related Products Placeholder -->
                <div class="section" style="padding-top: 0;">
                  <h2 style="font-size: 1.5rem; margin-bottom: 2rem;">You Might Also Like</h2>
                  <div class="grid product-grid" id="relatedProducts">
                    <div class="skeleton skeleton-card"></div>
                    <div class="skeleton skeleton-card"></div>
                    <div class="skeleton skeleton-card"></div>
                    <div class="skeleton skeleton-card"></div>
                  </div>
                </div>
              \`;

              // Event Listeners for render
              document.querySelectorAll('.thumbnail').forEach(th => {
                th.addEventListener('click', (e) => {
                  activeImage = e.target.getAttribute('data-img');
                  render();
                });
              });

              document.querySelectorAll('.variant-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                  const vid = e.target.getAttribute('data-variant-id');
                  selectedVariant = product.product_variants.find(v => v.id === vid);
                  render();
                });
              });

              const addToCartBtn = document.getElementById('addToCartBtn');
              if (addToCartBtn) {
                addToCartBtn.addEventListener('click', () => {
                  const qty = parseInt(document.getElementById('qtyInput').value) || 1;
                  addToCart(product, selectedVariant, qty);
                });
              }

              // Load related mock
              setTimeout(() => {
                const rel = document.getElementById('relatedProducts');
                if(rel) rel.innerHTML = '<p style="color:var(--text-muted);">Related products will appear here...</p>';
              }, 1000);
            }

            render();

          } catch (err) {
            loadingState.innerHTML = '<p class="text-center mt-8 text-red">Failed to load product details.</p>';
          }
        });
      </script>
    `
  },
  'cart.html': {
    content: `
      <div class="container">
        <div class="cart-layout">
          <div class="cart-items-wrapper">
            <h1 class="mb-8" style="font-size: 2.5rem;">Your Cart</h1>
            <div id="cartItemsContainer" class="cart-items">
              <!-- Cart items injected here -->
            </div>
          </div>
          
          <div class="summary-wrapper">
            <div class="summary-card">
              <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Order Summary</h2>
              <div class="summary-row">
                <span>Subtotal</span>
                <span id="subtotalAmount">$0.00</span>
              </div>
              <div class="summary-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              
              <!-- Promo Code Field -->
              <div style="margin: 1.5rem 0; border-top: 1px dashed var(--border-color); padding-top: 1.5rem;">
                <p style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">Promo Code</p>
                <div class="promo-code-input">
                  <input type="text" class="form-control" placeholder="Enter code">
                  <button class="btn btn-outline" style="padding: 0.5rem 1rem;">Apply</button>
                </div>
              </div>

              <div class="summary-row summary-total">
                <span>Total</span>
                <span id="totalAmount">$0.00</span>
              </div>
              <a href="./checkout.html" class="btn btn-primary btn-block" id="checkoutBtn">Proceed to Checkout</a>
              <a href="./products.html" class="btn btn-outline btn-block mt-4">Continue Shopping</a>
              
              <div style="text-align: center; margin-top: 1.5rem; font-size: 0.75rem; color: var(--text-muted);">
                <p>Secure Checkout Guaranteed</p>
                <div class="payment-icons" style="justify-content: center; margin-top: 0.5rem;">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    script: `
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const container = document.getElementById('cartItemsContainer');
          const subtotalEl = document.getElementById('subtotalAmount');
          const totalEl = document.getElementById('totalAmount');
          const checkoutBtn = document.getElementById('checkoutBtn');

          function renderCart() {
            const cart = getCart();
            container.innerHTML = '';
            
            if (cart.length === 0) {
              container.innerHTML = \`
                <div class="text-center" style="padding: 3rem 0; background: var(--bg-offset); border-radius: var(--radius-md);">
                  <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Your cart is currently empty.</p>
                  <a href="./products.html" class="btn btn-primary">Start Shopping</a>
                </div>
              \`;
              subtotalEl.textContent = formatCurrency(0);
              totalEl.textContent = formatCurrency(0);
              checkoutBtn.style.pointerEvents = 'none';
              checkoutBtn.style.opacity = '0.5';
              return;
            }

            checkoutBtn.style.pointerEvents = 'auto';
            checkoutBtn.style.opacity = '1';

            let subtotal = 0;

            cart.forEach((item, index) => {
              const itemTotal = item.price * item.quantity;
              subtotal += itemTotal;

              const el = document.createElement('div');
              el.className = 'cart-item';
              el.innerHTML = \`
                <img src="\${item.image}" alt="\${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                  <div class="cart-item-title">\${item.name}</div>
                  \${item.variantName ? \`<div class="cart-item-variant">\${item.variantName}</div>\` : ''}
                  <div style="font-weight: 600; margin-bottom: 1rem;">\${formatCurrency(item.price)}</div>
                  
                  <div class="cart-item-actions">
                    <div class="qty-controls">
                      <button class="qty-btn minus" data-id="\${item.cartItemId}">-</button>
                      <span>\${item.quantity}</span>
                      <button class="qty-btn plus" data-id="\${item.cartItemId}">+</button>
                    </div>
                    <button class="remove-btn" data-id="\${item.cartItemId}">Remove</button>
                  </div>
                </div>
              \`;
              container.appendChild(el);
            });

            subtotalEl.textContent = formatCurrency(subtotal);
            totalEl.textContent = formatCurrency(subtotal); 
            
            attachEventListeners();
          }

          function attachEventListeners() {
            document.querySelectorAll('.qty-btn.plus').forEach(btn => {
              btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                updateQuantity(id, 1);
              });
            });

            document.querySelectorAll('.qty-btn.minus').forEach(btn => {
              btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                updateQuantity(id, -1);
              });
            });

            document.querySelectorAll('.remove-btn').forEach(btn => {
              btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                removeItem(id);
              });
            });
          }

          function updateQuantity(id, change) {
            let cart = getCart();
            const index = cart.findIndex(i => i.cartItemId === id);
            if (index > -1) {
              cart[index].quantity += change;
              if (cart[index].quantity < 1) {
                cart.splice(index, 1);
              }
              saveCart(cart);
              renderCart();
            }
          }

          function removeItem(id) {
            let cart = getCart();
            cart = cart.filter(i => i.cartItemId !== id);
            saveCart(cart);
            renderCart();
          }

          renderCart();
        });
      </script>
    `
  },
  'checkout.html': {
    content: `
      <div class="container">
        <div class="cart-layout">
          
          <div class="checkout-form-wrapper">
            <h1 class="mb-8" style="font-size: 2.5rem;">Checkout</h1>
            
            <form id="checkoutForm">
              <!-- Express Checkout -->
              <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); text-align: center;">
                <p style="margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-muted);">Express Checkout</p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                  <button type="button" class="btn btn-outline" style="flex:1; background: #0070ba; color: white; border:none;">PayPal</button>
                  <button type="button" class="btn btn-outline" style="flex:1; background: black; color: white; border:none;">Apple Pay</button>
                </div>
              </div>
              
              <div style="text-align: center; margin-bottom: 2rem; color: var(--text-muted);">OR</div>

              <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">1. Shipping Information</h2>
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-control" required>
                </div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" class="form-control" required>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="city">City</label>
                  <input type="text" id="city" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <input type="text" id="state" class="form-control" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="zip">ZIP Code</label>
                  <input type="text" id="zip" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="country">Country</label>
                  <select id="country" class="form-control" required>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="IN">India</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
              
              <h2 style="font-size: 1.5rem; margin: 2rem 0 1.5rem;">2. Payment Method</h2>
              <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem;">
                <label style="display: flex; align-items: center; gap: 1rem; font-weight: 500;">
                  <input type="radio" name="payment" checked> Credit Card (Simulated)
                </label>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--border-color);">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Card Number" value="4242 4242 4242 4242">
                  </div>
                  <div class="form-row">
                    <input type="text" class="form-control" placeholder="MM/YY" value="12/26">
                    <input type="text" class="form-control" placeholder="CVC" value="123">
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="notes">Order Notes (Optional)</label>
                <textarea id="notes" class="form-control" rows="3"></textarea>
              </div>
            </form>
          </div>
          
          <div class="summary-wrapper">
            <div class="summary-card">
              <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Order Summary</h2>
              <div id="checkoutItems" style="margin-bottom: 1.5rem; font-size: 0.875rem;">
                <!-- Items list -->
              </div>
              <div class="summary-row">
                <span>Subtotal</span>
                <span id="subtotalAmount">$0.00</span>
              </div>
              <div class="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div class="summary-row summary-total">
                <span>Total</span>
                <span id="totalAmount">$0.00</span>
              </div>
              <button type="submit" form="checkoutForm" class="btn btn-primary btn-block" id="placeOrderBtn">Complete Secure Order</button>
            </div>
          </div>
        </div>
      </div>
    `,
    script: `
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const cart = getCart();
          const checkoutItems = document.getElementById('checkoutItems');
          const subtotalEl = document.getElementById('subtotalAmount');
          const totalEl = document.getElementById('totalAmount');
          const checkoutForm = document.getElementById('checkoutForm');
          const placeOrderBtn = document.getElementById('placeOrderBtn');

          if (cart.length === 0) {
            window.location.href = './cart.html';
            return;
          }

          let subtotal = 0;
          checkoutItems.innerHTML = '';
          
          cart.forEach(item => {
            subtotal += item.price * item.quantity;
            checkoutItems.innerHTML += \`
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; color: var(--text-muted);">
                <span>\${item.quantity}x \${item.name} \${item.variantName ? \`(\${item.variantName})\` : ''}</span>
                <span>\${formatCurrency(item.price * item.quantity)}</span>
              </div>
            \`;
          });

          subtotalEl.textContent = formatCurrency(subtotal);
          totalEl.textContent = formatCurrency(subtotal);

          checkoutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            placeOrderBtn.disabled = true;
            placeOrderBtn.textContent = 'Processing...';

            const orderData = {
              order_number: \`ORD-\${Date.now()}\`,
              status: 'pending',
              payment_status: 'unpaid',
              subtotal: subtotal,
              total: subtotal,
              shipping_address: {
                first_name: document.getElementById('firstName').value,
                last_name: document.getElementById('lastName').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zip').value,
                country: document.getElementById('country').value
              },
              notes: document.getElementById('notes').value
            };

            const res = await placeOrder(orderData);
            
            if (res) {
              saveCart([]);
              window.location.href = \`./order-confirmation.html?order=\${orderData.order_number}\`;
            } else {
              alert('Failed to place order. Please try again.');
              placeOrderBtn.disabled = false;
              placeOrderBtn.textContent = 'Complete Secure Order';
            }
          });
        });
      </script>
    `
  }
};

for (const [filename, data] of Object.entries(pages)) {
  generatePage(filename, data.content, data.script);
}

console.log("Core pages generated successfully.");
