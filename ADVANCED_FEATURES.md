# Advanced Features & Authentication Guide

## 📋 Table of Contents
1. [Authentication](#authentication)
2. [Advanced API Features](#advanced-api-features)
3. [Email System](#email-system)
4. [Webhook System](#webhook-system)
5. [Promo Codes](#promo-codes)
6. [License Management](#license-management)
7. [Support Tickets](#support-tickets)
8. [Complete API Reference](#complete-api-reference)

---

## Authentication

### User Registration

Register a new user account.

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

**Response (Success - 201):**
```json
{
  "message": "User registered successfully",
  "userId": 1648372847123
}
```

**Response (Error - 400):**
```json
{
  "error": "Password must be at least 8 characters"
}
```

**Validation:**
- Password must be at least 8 characters
- Email must be unique
- Name is required

---

### User Login

Authenticate user and receive JWT token.

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (Success - 200):**
```json
{
  "token": "eyJzZXJpYWxpemVkVG9rZW4iOnsidXNlcklkIjoxNjQ4MzcyODQ3MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiY3VzdG9tZXIifX0=",
  "user": {
    "id": 1648372847123,
    "email": "user@example.com",
    "name": "John Doe",
    "role": "customer"
  }
}
```

**Response (Error - 401):**
```json
{
  "error": "Invalid credentials"
}
```

**Usage in Headers:**
```
Authorization: Bearer eyJzZXJpYWxpemVkVG9rZW4iOnsidXNlcklkIjoxNjQ4MzcyODQ3MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiY3VzdG9tZXIifX0=
```

---

## Advanced API Features

### Email Notifications

Queue email notifications for various events.

**Endpoint:** `POST /api/email/send`

**Request Body:**
```json
{
  "to": "user@example.com",
  "subject": "Order Confirmation",
  "type": "order_confirmation",
  "data": {
    "orderId": "ORD-2025-001",
    "amount": 99.99,
    "items": 3
  }
}
```

**Email Types:**
- `order_confirmation` - Order placed confirmation
- `shipment_tracking` - Shipment update
- `password_reset` - Password reset link
- `welcome` - Welcome email
- `invoice` - Invoice document
- `promotional` - Marketing email

**Response (Success - 200):**
```json
{
  "message": "Email notification queued",
  "emailId": 1648372847456
}
```

---

### Webhook Events

Handle webhook events from payment processors and third-party services.

**Endpoint:** `POST /api/webhooks/event`

**Request Body:**
```json
{
  "type": "payment.success",
  "data": {
    "transactionId": "txn_123456",
    "amount": 99.99,
    "currency": "USD",
    "timestamp": "2025-02-02T10:30:00Z"
  }
}
```

**Event Types:**
- `payment.success` - Payment processed successfully
- `payment.failed` - Payment failed
- `subscription.created` - New subscription
- `subscription.cancelled` - Subscription cancelled
- `refund.issued` - Refund processed
- `invoice.paid` - Invoice paid

**Response (Success - 200):**
```json
{
  "message": "Webhook processed",
  "webhookId": 1648372847789
}
```

---

### Promo Code System

Apply discount promo codes to orders.

**Endpoint:** `POST /api/promo/apply`

**Request Body:**
```json
{
  "code": "SAVE20",
  "cartTotal": 500.00
}
```

**Available Promo Codes:**
| Code | Discount | Type |
|------|----------|------|
| SAVE10 | 10% | Percentage |
| SAVE20 | 20% | Percentage |
| SAVE50 | $50 | Fixed |
| NEWYEAR | 15% | Percentage |

**Response (Success - 200):**
```json
{
  "code": "SAVE20",
  "discount": 100.00,
  "discountType": "percentage",
  "newTotal": 400.00
}
```

**Response (Error - 400):**
```json
{
  "error": "Invalid promo code"
}
```

---

### License Key Management

Issue and manage product license keys.

**Endpoint:** `POST /api/licenses/issue`

**Request Body:**
```json
{
  "email": "customer@example.com",
  "productId": 1,
  "duration": 365
}
```

**Response (Success - 201):**
```json
{
  "key": "LIC-A7B9C2K4X1",
  "email": "customer@example.com",
  "productId": 1,
  "issuedAt": "2025-02-02T10:30:00Z",
  "expiresAt": "2026-02-02T10:30:00Z",
  "active": true
}
```

**License Key Format:**
- Format: `LIC-XXXXXXXXX` (random alphanumeric)
- Default duration: 365 days
- Can be activated on multiple machines

---

### Support Ticket System

Create and manage customer support tickets.

**Endpoint:** `POST /api/support/tickets`

**Request Body:**
```json
{
  "email": "customer@example.com",
  "subject": "License activation issue",
  "description": "I'm unable to activate my license key on my machine.",
  "priority": "high"
}
```

**Priority Levels:**
- `low` - General inquiry
- `medium` - Standard issue (default)
- `high` - Blocking issue
- `critical` - System down

**Response (Success - 201):**
```json
{
  "id": "TKT-1648372847123",
  "email": "customer@example.com",
  "subject": "License activation issue",
  "description": "I'm unable to activate my license key on my machine.",
  "priority": "high",
  "status": "open",
  "createdAt": "2025-02-02T10:30:00Z",
  "responses": []
}
```

**Ticket Statuses:**
- `open` - New ticket, awaiting response
- `in_progress` - Being investigated
- `waiting_customer` - Awaiting customer reply
- `resolved` - Issue resolved
- `closed` - Ticket closed

---

## Complete API Reference

### E-Commerce APIs

#### Shopping Cart
- `GET /api/cart` - Get cart contents
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/clear` - Clear entire cart

#### Products
- `GET /api/products/search?q=query` - Search products
- `GET /api/products/filter?category=X&minPrice=Y&maxPrice=Z` - Filter products
- `GET /api/recommendations?category=X` - Get recommendations

#### User Profile
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

#### Orders & Subscriptions
- `GET /api/orders` - Get user orders
- `GET /api/orders/{orderId}` - Get order details
- `POST /api/orders` - Create new order
- `GET /api/subscriptions` - Get subscriptions
- `POST /api/subscriptions` - Create subscription

#### Reviews
- `GET /api/reviews?productId=1` - Get product reviews
- `POST /api/reviews` - Create review

#### Wishlist
- `GET /api/wishlist` - Get wishlist items
- `POST /api/wishlist/add` - Add to wishlist
- `POST /api/wishlist/remove` - Remove from wishlist

#### Analytics
- `GET /api/analytics/summary` - Get analytics summary
- `GET /api/search?q=query` - Global search

### Authentication APIs
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and get token

### Advanced Features
- `POST /api/email/send` - Queue email notification
- `POST /api/webhooks/event` - Process webhook event
- `POST /api/promo/apply` - Apply promo code
- `POST /api/licenses/issue` - Issue license key
- `POST /api/support/tickets` - Create support ticket

---

## Admin Dashboard Pages

### Dashboard (`/admin`)
- Overview of key metrics
- Recent orders
- Top performing products
- Quick action buttons

### Analytics (`/admin/analytics`)
- Revenue analytics
- Customer analytics
- Product performance
- Charts and visualizations

### Products Management (`/admin/products`)
- Product list
- Add/Edit/Delete products
- Manage inventory
- Set pricing

### Orders Management (`/admin/orders`)
- View all orders
- Track order status
- Process refunds
- Generate invoices

### Customers Management (`/admin/customers`)
- Customer list
- View customer details
- Order history per customer
- Customer communication

### Settings (`/admin/settings`)
- Store configuration
- Payment method setup
- Email configuration
- Danger zone actions

---

## Integration Examples

### JavaScript - User Registration

```javascript
async function registerUser() {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'user@example.com',
      password: 'securePassword123',
      name: 'John Doe'
    })
  });
  
  const data = await response.json();
  console.log('User registered:', data);
}
```

### JavaScript - Apply Promo Code

```javascript
async function applyPromo() {
  const response = await fetch('/api/promo/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code: 'SAVE20',
      cartTotal: 500.00
    })
  });
  
  const data = await response.json();
  console.log('Discount applied:', data);
}
```

### JavaScript - Create Support Ticket

```javascript
async function createTicket() {
  const response = await fetch('/api/support/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'customer@example.com',
      subject: 'License activation issue',
      description: 'I need help activating my license',
      priority: 'high'
    })
  });
  
  const data = await response.json();
  console.log('Ticket created:', data);
}
```

### React - Login Component

```jsx
import React, { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      window.location.href = '/dashboard';
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### cURL - Create License

```bash
curl -X POST https://api-marketplace.com/api/licenses/issue \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@example.com",
    "productId": 1,
    "duration": 365
  }'
```

---

## Best Practices

### Authentication
- Always store tokens securely (httpOnly cookies or secure localStorage)
- Validate tokens on the server before processing requests
- Implement token refresh mechanism
- Clear tokens on logout

### Email System
- Use professional email templates
- Include unsubscribe links
- Track email delivery and opens
- Implement rate limiting (max 5 per user per hour)

### Webhooks
- Verify webhook signatures for security
- Implement idempotency for duplicate events
- Return 200 OK immediately, process async
- Log all webhook events for debugging

### Promo Codes
- Track promo usage and set limits
- Implement expiration dates
- Prevent stacking of multiple codes
- Monitor for fraud

### License Keys
- Implement activation endpoints
- Track license usage per machine
- Set machine limits per license
- Monitor for key sharing

### Support Tickets
- Set SLA response times
- Auto-assign based on priority
- Send status updates via email
- Track resolution time

---

## Data Storage

### Current Implementation
All data is stored in browser `localStorage` for demo purposes.

### Production Migration
When migrating to production, replace localStorage with:

**PostgreSQL (Neon) Schema:**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  role VARCHAR(50),
  created_at TIMESTAMP
);

CREATE TABLE licenses (
  id SERIAL PRIMARY KEY,
  key VARCHAR(50) UNIQUE,
  email VARCHAR(255),
  product_id INT,
  issued_at TIMESTAMP,
  expires_at TIMESTAMP,
  active BOOLEAN
);

CREATE TABLE support_tickets (
  id VARCHAR(50) PRIMARY KEY,
  email VARCHAR(255),
  subject VARCHAR(255),
  description TEXT,
  priority VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMP
);

CREATE TABLE email_logs (
  id BIGINT PRIMARY KEY,
  to_email VARCHAR(255),
  subject VARCHAR(255),
  type VARCHAR(50),
  sent_at TIMESTAMP,
  status VARCHAR(50)
);

CREATE TABLE webhook_logs (
  id BIGINT PRIMARY KEY,
  event_type VARCHAR(50),
  received_at TIMESTAMP,
  processed BOOLEAN
);
```

---

## Security Considerations

### Input Validation
✅ All endpoints validate required fields
✅ Email format validation
✅ Password strength requirements (8+ chars)

### HTTPS
🔒 Use HTTPS in production
🔒 Set secure flags on cookies
🔒 Implement CORS properly

### Rate Limiting
⏱️ Implement rate limiting per IP (coming soon)
⏱️ Email: max 5 per hour per user
⏱️ API endpoints: 100 requests per minute

### Password Security
🔐 Passwords hashed with bcrypt (production)
🔐 Implement 2FA for admin accounts
🔐 Reset tokens with expiration

---

## Troubleshooting

### "Email already exists"
User is attempting to register with existing email address.
→ Solution: Use login instead or reset password

### "Invalid credentials"
Email/password combination doesn't match.
→ Solution: Verify email and password, implement password reset

### "Invalid promo code"
Promo code doesn't exist or has expired.
→ Solution: Check available codes or contact support

### "License key failed"
License key couldn't be issued.
→ Solution: Verify product ID is valid

### "Support ticket creation failed"
Missing required fields or system error.
→ Solution: Check all fields are provided

---

## Monitoring & Analytics

Track these metrics:
- Registration success rate
- Login attempt failures
- Promo code usage
- License activation rate
- Support ticket volume
- Email delivery rate
- API response times

---

## Future Enhancements

- [ ] 2FA/MFA support
- [ ] OAuth integration (Google, GitHub)
- [ ] Email verification
- [ ] Advanced email templates
- [ ] Webhook retry logic
- [ ] Promo code analytics
- [ ] License device binding
- [ ] AI-powered support ticketing
- [ ] Rate limiting
- [ ] API key management

---

## Support

For issues or questions:
- Create a support ticket: `POST /api/support/tickets`
- Email: support@ai-marketplace.com
- Documentation: See [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
