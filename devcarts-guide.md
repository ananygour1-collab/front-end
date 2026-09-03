---
name: devcarts-storefront
description: Use this skill when building or modifying storefronts, themes, or frontend apps that connect to the Devcarts multi-tenant ecommerce backend.
---

# Devcarts Storefront Integration Skill

This document provides instructions for agents building frontend websites (storefronts) that connect to the Devcarts multi-tenant backend.

## 1. Multi-Tenant Architecture
Devcarts is a multi-tenant platform. This means every API request to the backend MUST include the store's `tenantId` in the URL path. 
- **Base API Path:** `/api/[tenantId]/`
- Ensure the frontend captures the `tenantId` (e.g., from the domain name, URL params, or environment variables) and dynamically injects it into API calls.

## 2. Available Storefront APIs

### Products
- **List Products:** `GET /api/[tenantId]/products`
  - Query Params: `search`, `category`, `status`, `featured` (true/false), `page`, `limit`.
  - Returns: `{ data: Product[], count: number, page, limit }`
- **Single Product:** `GET /api/[tenantId]/products/[id]`
  - Returns the product details including variants, images, categories, and tags.

### Categories & Tags
- **List Categories:** `GET /api/[tenantId]/categories`
- **List Tags:** `GET /api/[tenantId]/tags`

### Coupons
- **Validate Coupon:** `POST /api/[tenantId]/coupons/validate`
  - Body: `{ code: "SAVE20", order_total: 1500 }`
  - Returns: `{ discount: number, success: true }`

## 3. Checkout Flow (Fastrr Integration)
**CRITICAL:** Do NOT build custom payment gateway integrations (e.g., Razorpay, Stripe) or standard manual checkout forms for this backend. Devcarts is optimized for **Fastrr Headless Checkout** by Shiprocket.

### Steps to implement checkout:
1. **Cart Management:** Manage the user's cart locally (e.g., `localStorage` or React Context).
2. **Fastrr SDK:** Inject the Fastrr JS SDK in the checkout page or layout:
   ```html
   <script src="https://fastrr-checkout.shiprocket.com/fastrr.js" async></script>
   ```
3. **Trigger Checkout:** Map the cart items and trigger the Fastrr modal:
   ```javascript
   const payload = {
     cart_items: cart.map(item => ({
       id: item.id,
       variant_id: item.variantId,
       name: item.name,
       price: item.price,
       quantity: item.quantity,
       image: item.image,
     })),
     coupon: couponCode || null,
     discount: discountAmount,
     total: finalTotal,
   };

   window.Fastrr.checkout({
     payload: payload,
     onSuccess: (response) => {
       // Clear local cart and show success page
     },
     onError: (error) => {
       // Handle error
     }
   });
   ```
4. **Order Creation:** You do not need to manually POST to an `/orders` endpoint. The Fastrr backend automatically sends a webhook to `/api/[tenantId]/checkout/fastrr-webhook` on the backend, which securely records the order in the database.

## 4. Frontend Technology & Styling
- The backend is built with Next.js (App Router), but the storefront can be any framework (Next.js, React, plain HTML/JS).
- When styling the storefront, prioritize high-quality UI/UX. Use responsive design, clean typography, and micro-animations for an engaging shopping experience.

## 5. Required Pages
When building a custom theme or storefront, you **must** include and fully implement the following essential pages:
- **Login Page (`login.html`)**: Necessary for user authentication to access orders and account details.
- **View Product Page**: Essential for displaying detailed product information, variants, and allowing users to add items to the cart.
- **View My Orders Page**: Necessary for users to track their past purchases and current order status.
- **Terms and Conditions**: Required for legal compliance, refund policies, and checkout agreements.
