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

function generatePage(filename, content, extraScript = '') {
  const fullHtml = layoutTop + content + layoutBottom + extraScript;
  fs.writeFileSync(filename, fullHtml);
}

const pages = {
  'order-confirmation.html': `
    <div class="container text-center" style="padding: 6rem 0;">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" style="margin: 0 auto 1.5rem;">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
      <h1 class="mb-4">Thank You For Your Order!</h1>
      <p style="color: var(--text-muted); font-size: 1.25rem; margin-bottom: 2rem;">Order Number: <strong id="orderNumberDisplay">#PENDING</strong></p>
      <p style="max-width: 500px; margin: 0 auto 3rem; color: var(--text-muted);">We've received your order and are getting it ready to ship. You will receive an email confirmation shortly.</p>
      <a href="./products.html" class="btn btn-primary">Continue Shopping</a>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.has('order')) {
          document.getElementById('orderNumberDisplay').textContent = urlParams.get('order');
        }
      });
    </script>
  `,
  
  'login.html': `
    <div class="auth-layout">
      <h1 class="text-center mb-8" style="font-size: 2rem;">Welcome Back</h1>
      <form onsubmit="event.preventDefault(); window.location.href='./account.html';">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">Sign In</button>
        <div class="text-center">
          <a href="./register.html" style="color: var(--primary); text-decoration: underline;">Create an account</a>
        </div>
      </form>
    </div>
  `,

  'register.html': `
    <div class="auth-layout">
      <h1 class="text-center mb-8" style="font-size: 2rem;">Create Account</h1>
      <form onsubmit="event.preventDefault(); window.location.href='./account.html';">
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" required>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" required>
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">Register</button>
        <div class="text-center">
          <a href="./login.html" style="color: var(--primary); text-decoration: underline;">Already have an account? Sign in</a>
        </div>
      </form>
    </div>
  `,

  'account.html': `
    <div class="container dashboard-layout">
      <aside>
        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">My Account</h2>
        <ul class="dashboard-nav">
          <li><a href="#" class="active">Dashboard</a></li>
          <li><a href="./order-tracking.html">Order History</a></li>
          <li><a href="#">Addresses</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="./login.html">Logout</a></li>
        </ul>
      </aside>
      <div>
        <h1 class="mb-8">Welcome, Jane!</h1>
        <div class="grid" style="grid-template-columns: 1fr 1fr;">
          <div class="dashboard-card">
            <h3 class="mb-4">Recent Orders</h3>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">ORD-1234567890 (Pending)</p>
            <a href="./order-tracking.html" style="color: var(--primary);">Track Order &rarr;</a>
          </div>
          <div class="dashboard-card">
            <h3 class="mb-4">Default Address</h3>
            <p style="color: var(--text-muted);">Jane Doe<br>123 Fashion Ave<br>New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  `,

  'order-tracking.html': `
    <div class="container dashboard-layout">
      <aside>
        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">My Account</h2>
        <ul class="dashboard-nav">
          <li><a href="./account.html">Dashboard</a></li>
          <li><a href="#" class="active">Order History</a></li>
          <li><a href="#">Addresses</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="./login.html">Logout</a></li>
        </ul>
      </aside>
      <div>
        <h1 class="mb-8">Order History & Tracking</h1>
        <div class="dashboard-card" style="margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1rem;">
            <div>
              <h3>Order #ORD-1234567890</h3>
              <p style="color: var(--text-muted); font-size: 0.875rem;">Placed on Oct 15, 2026</p>
            </div>
            <div style="text-align: right;">
              <span style="background: #FEF3C7; color: #92400E; padding: 0.25rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 600;">SHIPPED</span>
              <p style="font-weight: 600; margin-top: 0.5rem;">$129.98</p>
            </div>
          </div>
          
          <div style="background: var(--bg-offset); padding: 1.5rem; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">Tracking ID: AWB987654321</h4>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Via Shiprocket</p>
            <div style="margin-top: 1rem; display: flex; gap: 1rem; align-items: center;">
               <div style="flex:1; height:4px; background:var(--primary); border-radius:2px;"></div>
               <div style="flex:1; height:4px; background:var(--primary); border-radius:2px;"></div>
               <div style="flex:1; height:4px; background:var(--border-color); border-radius:2px;"></div>
            </div>
            <p style="font-size: 0.875rem; margin-top: 0.5rem; text-align: center; color: var(--primary); font-weight: 600;">In Transit - Arriving Tomorrow</p>
          </div>

          <div style="display: flex; gap: 1rem;">
            <a href="./returns.html" class="btn btn-outline" style="font-size: 0.875rem;">Request Return/Exchange</a>
          </div>
        </div>
      </div>
    </div>
  `,

  'returns.html': `
    <div class="container rich-text">
      <h1>Return or Exchange Request</h1>
      <p>Not completely satisfied? We've got you covered. Enter your order details below to start a return or exchange via our automated portal.</p>
      <form style="margin-top: 2rem; max-width: 500px;">
        <div class="form-group">
          <label>Order Number</label>
          <input type="text" class="form-control" placeholder="e.g. ORD-1234567890">
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-control" placeholder="The email used for the order">
        </div>
        <button type="submit" class="btn btn-primary" onclick="event.preventDefault(); alert('Return initiated! Check your email for the shipping label.');">Find My Order</button>
      </form>
    </div>
  `,

  'about.html': `
    <div class="container rich-text">
      <h1>Our Story</h1>
      <img src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=1200&q=80" alt="Our Team" style="border-radius: var(--radius-md); margin-bottom: 2rem;">
      <p>We started with a simple belief: high-quality fashion should make a statement without destroying the planet. Founded in the heart of the city, we craft garments that speak for themselves.</p>
      <h2>The Process</h2>
      <p>Every piece is carefully designed, sourced from ethical suppliers, and stitched with precision. We don't believe in fast fashion; we believe in forever fashion.</p>
      <h2>Community First</h2>
      <p>When you wear our brand, you join a community of creators, thinkers, and style icons. Thank you for being part of our journey.</p>
    </div>
  `,

  'faq.html': `
    <div class="container rich-text">
      <h1>Frequently Asked Questions</h1>
      <div style="margin-top: 2rem;">
        <h3 style="margin-bottom: 0.5rem;">How long does shipping take?</h3>
        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Standard shipping takes 3-5 business days. Express takes 1-2 business days.</p>
        
        <h3 style="margin-bottom: 0.5rem;">Do you ship internationally?</h3>
        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Yes, we ship globally! International rates are calculated at checkout.</p>
        
        <h3 style="margin-bottom: 0.5rem;">What is your return policy?</h3>
        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">We accept returns within 30 days of delivery. The items must be unworn and unwashed with original tags attached.</p>
      </div>
    </div>
  `,

  'shipping-policy.html': `
    <div class="container rich-text">
      <h1>Shipping & Delivery</h1>
      <h2>Domestic Shipping</h2>
      <p>We process all orders within 24 hours. Depending on your location, standard delivery takes 3 to 5 business days. We partner with reliable carriers to ensure your package arrives safely.</p>
      <h2>International Shipping</h2>
      <p>International shipping times vary by destination. Please note that customs duties and taxes are the responsibility of the customer.</p>
      <h2>Tracking</h2>
      <p>Once your order ships, you will receive an email with a tracking link so you can follow your package every step of the way.</p>
    </div>
  `,

  'returns-policy.html': `
    <div class="container rich-text">
      <h1>Returns & Refund Policy</h1>
      <p>We want you to love your purchase. If you are not completely satisfied, we gladly accept returns and exchanges within 30 days of receipt.</p>
      <h2>Conditions for Return</h2>
      <ul>
        <li>Items must be unworn, unwashed, and have original tags attached.</li>
        <li>Final sale items are not eligible for return.</li>
        <li>Original shipping charges are non-refundable.</li>
      </ul>
      <h2>Refund Process</h2>
      <p>Once we receive your return, please allow 5-7 business days for processing. Refunds will be credited back to your original form of payment.</p>
    </div>
  `,

  'contact.html': `
    <div class="container rich-text">
      <h1>Contact Us</h1>
      <p>Have a question or need assistance? We're here to help.</p>
      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 2rem;">
        <form onsubmit="event.preventDefault(); alert('Message sent!');">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
        <div>
          <h3>Our Office</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">123 Fashion District<br>New York, NY 10001<br>United States</p>
          <h3>Email Support</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">support@ourbrand.com</p>
          <h3>Phone</h3>
          <p style="color: var(--text-muted);">+1 (555) 123-4567<br>Mon-Fri, 9am - 5pm EST</p>
        </div>
      </div>
    </div>
  `,

  'terms.html': `
    <div class="container rich-text">
      <h1>Terms & Conditions</h1>
      <p>Last updated: October 2026</p>
      <p>Please read these terms and conditions carefully before using Our Service.</p>
      <h2>Intellectual Property</h2>
      <p>The Service and its original content, features and functionality are and will remain the exclusive property of the Company and its licensors.</p>
      <h2>User Accounts</h2>
      <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.</p>
    </div>
  `,

  'privacy.html': `
    <div class="container rich-text">
      <h1>Privacy Policy</h1>
      <p>Last updated: October 2026</p>
      <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service.</p>
      <h2>Information Collection</h2>
      <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      <h2>Use of Data</h2>
      <p>We use the collected data to provide and maintain the Service, to notify you about changes, and to provide customer care and support.</p>
    </div>
  `,

  'security.html': `
    <div class="container rich-text text-center">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" style="margin: 0 auto 1.5rem;">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <h1>Secure Payment Processing</h1>
      <p style="font-size: 1.25rem; max-width: 600px; margin: 0 auto 2rem;">Your security is our top priority. We use industry-standard encryption to protect your personal and payment information.</p>
      <div class="grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 2rem; text-align: left; margin-top: 3rem;">
        <div class="dashboard-card">
          <h3>SSL Encrypted</h3>
          <p style="color: var(--text-muted); font-size: 0.875rem;">All data transmitted is secured using AES-256 bit encryption.</p>
        </div>
        <div class="dashboard-card">
          <h3>PCI DSS Compliant</h3>
          <p style="color: var(--text-muted); font-size: 0.875rem;">Our payment gateways (Razorpay, Stripe) meet the highest security standards.</p>
        </div>
        <div class="dashboard-card">
          <h3>Fraud Protection</h3>
          <p style="color: var(--text-muted); font-size: 0.875rem;">Advanced machine learning helps detect and prevent unauthorized transactions.</p>
        </div>
      </div>
    </div>
  `,

  'blog.html': `
    <div class="container rich-text" style="max-width: 1000px;">
      <h1 class="text-center mb-8">Lookbook & Editorial</h1>
      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 3rem;">
        <div>
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80" style="border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <h2>Summer Collection '26</h2>
          <p>Discover the vibrant colors and lightweight fabrics that define our latest summer drops.</p>
          <a href="#" style="color: var(--primary); font-weight: 600;">Read More &rarr;</a>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1550614000-4b95d4ed79ea?w=600&q=80" style="border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <h2>The Art of Layering</h2>
          <p>How to transition your wardrobe smoothly from warm afternoons to chilly evenings.</p>
          <a href="#" style="color: var(--primary); font-weight: 600;">Read More &rarr;</a>
        </div>
      </div>
    </div>
  `,

  'sale.html': `
    <div class="container section">
      <div style="background: var(--primary); color: white; padding: 4rem; border-radius: var(--radius-lg); text-align: center; margin-bottom: 4rem;">
        <h1 style="font-size: 4rem; margin-bottom: 1rem;">END OF SEASON SALE</h1>
        <p style="font-size: 1.5rem;">Up to 50% off on selected styles. Use code <strong>EXTRA10</strong> for an additional 10% off.</p>
      </div>
      <h2 class="section-title">Sale Highlights</h2>
      <div class="grid product-grid" id="saleProducts">
        <div class="skeleton skeleton-card"></div>
        <div class="skeleton skeleton-card"></div>
        <div class="skeleton skeleton-card"></div>
        <div class="skeleton skeleton-card"></div>
      </div>
    </div>
    <script>
      // Mimic fetching sale products
      document.addEventListener('DOMContentLoaded', async () => {
        const container = document.getElementById('saleProducts');
        const res = await fetchProducts({ status: 'published', limit: 4 });
        if(res && res.data) {
          container.innerHTML = '';
          res.data.forEach(product => {
            const imageUrl = (product.product_images && product.product_images.length > 0) ? product.product_images[0].url : 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80';
            container.innerHTML += \`
              <a href="./product.html?slug=\${product.slug}" class="product-card">
                <div class="product-image-wrapper">
                  <div class="product-badge" style="background: #DC2626; color: white;">SALE</div>
                  <img src="\${imageUrl}" class="product-image">
                </div>
                <div class="product-info">
                  <div class="product-title">\${product.name}</div>
                  <div class="product-price">
                    <span style="color: #DC2626;">\${formatCurrency(product.price * 0.7)}</span>
                    <span class="compare-price">\${formatCurrency(product.price)}</span>
                  </div>
                </div>
              </a>
            \`;
          });
        }
      });
    </script>
  `,

  '404.html': `
    <div class="container text-center" style="padding: 10rem 0;">
      <h1 style="font-size: 6rem; color: var(--primary); margin-bottom: 1rem;">404</h1>
      <h2 class="mb-4">Oops! Page not found.</h2>
      <p style="color: var(--text-muted); margin-bottom: 3rem;">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="./index.html" class="btn btn-primary">Back to Homepage</a>
    </div>
  `,

  'size-guide.html': `
    <div class="container rich-text">
      <h1 class="text-center">Comprehensive Size Guide</h1>
      <p class="text-center mb-8">Measurements are taken in inches. If you are between sizes, we recommend sizing up for a more relaxed fit.</p>
      
      <h2>Men's Tops</h2>
      <table style="width: 100%; text-align: left; border-collapse: collapse; margin-bottom: 3rem;">
        <thead><tr style="border-bottom: 2px solid var(--border-color);"><th style="padding: 1rem;">Size</th><th style="padding: 1rem;">Chest</th><th style="padding: 1rem;">Length</th></tr></thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">S</td><td style="padding: 1rem;">38-40</td><td style="padding: 1rem;">28</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">M</td><td style="padding: 1rem;">40-42</td><td style="padding: 1rem;">29</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">L</td><td style="padding: 1rem;">42-44</td><td style="padding: 1rem;">30</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">XL</td><td style="padding: 1rem;">44-46</td><td style="padding: 1rem;">31</td></tr>
        </tbody>
      </table>

      <h2>Women's Tops</h2>
      <table style="width: 100%; text-align: left; border-collapse: collapse; margin-bottom: 3rem;">
        <thead><tr style="border-bottom: 2px solid var(--border-color);"><th style="padding: 1rem;">Size</th><th style="padding: 1rem;">Bust</th><th style="padding: 1rem;">Length</th></tr></thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">XS</td><td style="padding: 1rem;">32-34</td><td style="padding: 1rem;">24</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">S</td><td style="padding: 1rem;">34-36</td><td style="padding: 1rem;">25</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">M</td><td style="padding: 1rem;">36-38</td><td style="padding: 1rem;">26</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><td style="padding: 1rem;">L</td><td style="padding: 1rem;">38-40</td><td style="padding: 1rem;">27</td></tr>
        </tbody>
      </table>
    </div>
  `,

  'store-locator.html': `
    <div class="container section">
      <h1 class="section-title">Find a Store</h1>
      <div class="grid" style="grid-template-columns: 1fr 2fr; gap: 4rem;">
        <div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter ZIP or City" style="margin-bottom: 1rem;">
            <button class="btn btn-primary btn-block">Search</button>
          </div>
          <div style="margin-top: 2rem;">
            <div class="dashboard-card">
              <h3>Flagship Store - SoHo</h3>
              <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1rem;">123 Fashion Ave<br>New York, NY 10001</p>
              <p style="font-size: 0.875rem; color: #059669; font-weight: 600;">Open today: 10am - 8pm</p>
            </div>
            <div class="dashboard-card">
              <h3>Downtown Boutique</h3>
              <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1rem;">456 Creative Blvd<br>Los Angeles, CA 90015</p>
              <p style="font-size: 0.875rem; color: #059669; font-weight: 600;">Open today: 11am - 7pm</p>
            </div>
          </div>
        </div>
        <div style="background: var(--bg-offset); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; min-height: 500px;">
          <p style="color: var(--text-muted);">Interactive Map Placeholder</p>
        </div>
      </div>
    </div>
  `,

  'gift-cards.html': `
    <div class="container section">
      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: var(--radius-lg); aspect-ratio: 1.6; display: flex; align-items: center; justify-content: center; color: white; font-family: var(--font-heading); font-size: 2.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
          Digital Gift Card
        </div>
        <div>
          <h1 class="mb-4">The Perfect Gift</h1>
          <p style="color: var(--text-muted); margin-bottom: 2rem;">Not sure what size or color they'd like? Give the gift of choice with a digital gift card. Delivered instantly via email.</p>
          <div class="form-group">
            <label>Select Amount</label>
            <div class="variant-options mb-4">
              <button class="variant-btn selected">$25</button>
              <button class="variant-btn">$50</button>
              <button class="variant-btn">$100</button>
              <button class="variant-btn">$200</button>
            </div>
          </div>
          <button class="btn btn-primary btn-block" onclick="alert('Added Gift Card to cart!');">Add to Cart</button>
        </div>
      </div>
    </div>
  `
};

for (const [filename, content] of Object.entries(pages)) {
  generatePage(filename, content);
}

console.log("20 extra pages generated successfully.");
