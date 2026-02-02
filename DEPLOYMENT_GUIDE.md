# Deployment & Operations Guide

## 🚀 Quick Start Deployment

### Prerequisites
```bash
- Node.js 18+
- npm or yarn
- Cloudflare account
- Wrangler CLI configured
```

### 5-Minute Setup

```bash
# 1. Install dependencies
npm install

# 2. Set environment variables
cp .env.example .env.local
# Edit .env.local with your keys

# 3. Start development
npm start
# Server runs at http://localhost:8787

# 4. Deploy to Cloudflare
npm run deploy
```

---

## 📋 Configuration

### Environment Variables Setup

Create `.env.local` file:

```env
# OpenAI
OPENAI_API_KEY=sk_test_xxxxxxxxxxxxx

# Stripe Payment
STRIPE_API_KEY=sk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# Clerk Auth
CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Admin Access
ADMIN_TOKEN=your_unique_admin_token_here

# Database (Optional - Production)
NEON_DATABASE_URL=postgresql://user:pass@host/db
REDIS_URL=redis://host:port

# Monitoring
DD_API_KEY=dd_xxxxxxxxxxxxx
DD_APP_KEY=dd_xxxxxxxxxxxxx

# Domain
DOMAIN=https://your-domain.com
```

### Wrangler Configuration

File: `wrangler.toml`

```toml
name = "ai-marketplace"
type = "javascript"
account_id = "your_cloudflare_account_id"
workers_dev = true
route = "example.com/*"
zone_id = "your_zone_id"
compatibility_date = "2026-02-01"
nodejs_compat = true

[env.production]
name = "ai-marketplace-prod"
vars = { ENVIRONMENT = "production" }

[env.development]
name = "ai-marketplace-dev"
vars = { ENVIRONMENT = "development" }

[[kv_namespaces]]
binding = "STORE"
id = "your_kv_namespace_id"

[[analytics_engine_datasets]]
binding = "ANALYTICS"
```

---

## 🔄 Development Workflow

### Start Development Server

```bash
npm start
# Server runs at http://localhost:8787
# Auto-reloads on file changes
```

### Run Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/keyword.test.js

# Run with coverage (if configured)
npm test -- --coverage
```

### Debug Mode

```bash
# With verbose logging
DEBUG=* npm start

# Watch mode with nodemon
npm run dev

# Inspect worker locally
wrangler dev --inspect
```

### Code Quality

```bash
# Format code
npm run format

# Lint code
npm run lint

# Type check (if TypeScript)
npm run type-check
```

---

## 📦 Production Deployment

### Pre-Deployment Checklist

- [ ] All tests passing (`npm test`)
- [ ] Environment variables set in Cloudflare dashboard
- [ ] Database connection tested
- [ ] Payment gateway API keys verified
- [ ] SSL certificate installed
- [ ] Domain DNS configured
- [ ] Backups configured
- [ ] Monitoring enabled

### Deploy to Production

```bash
# Login to Cloudflare
wrangler login

# Deploy production build
wrangler publish

# Or with npm script
npm run deploy

# Verify deployment
curl https://your-domain.com/

# Check logs
wrangler tail
```

### Rollback Procedure

```bash
# List deployment history
wrangler deployments list

# Rollback to previous version
wrangler rollback

# Or deploy specific version
wrangler publish --compatibility-date 2026-01-15
```

---

## 🗄️ Database Setup

### PostgreSQL (Neon) Setup

1. **Create Account**
   - Visit https://neon.tech
   - Sign up for free tier
   - Create new project

2. **Get Connection String**
   ```
   postgresql://user:password@host/database?sslmode=require
   ```

3. **Set Environment Variable**
   ```env
   NEON_DATABASE_URL=postgresql://...
   ```

4. **Create Tables**
   ```sql
   -- Users table
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR(255) UNIQUE NOT NULL,
     password_hash VARCHAR(255),
     name VARCHAR(255),
     role VARCHAR(50),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Orders table
   CREATE TABLE orders (
     id SERIAL PRIMARY KEY,
     user_id INT REFERENCES users(id),
     total DECIMAL(10,2),
     status VARCHAR(50),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Products table
   CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255),
     description TEXT,
     price DECIMAL(10,2),
     category VARCHAR(100),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Create indexes
   CREATE INDEX idx_users_email ON users(email);
   CREATE INDEX idx_orders_user_id ON orders(user_id);
   CREATE INDEX idx_products_category ON products(category);
   ```

### Redis Cache Setup

1. **Create Redis Instance**
   - Via Upstash: https://upstash.com
   - Or AWS ElastiCache
   - Or Heroku Redis

2. **Get Connection String**
   ```
   redis://host:port
   ```

3. **Configure in `.env.local`**
   ```env
   REDIS_URL=redis://default:password@host:6379
   ```

4. **Usage Example**
   ```javascript
   // Cache product catalog
   const products = await redis.get('products:catalog');
   if (!products) {
     const fresh = await fetchProducts();
     await redis.setex('products:catalog', 3600, JSON.stringify(fresh));
     return fresh;
   }
   return JSON.parse(products);
   ```

---

## 💳 Payment Gateway Setup

### Stripe Configuration

1. **Create Account**
   - Go to https://stripe.com
   - Sign up and verify account
   - Get API keys from Dashboard

2. **Set Environment Variables**
   ```env
   STRIPE_API_KEY=sk_live_xxxxxxxxxxxxx
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
   ```

3. **Configure Webhook**
   - Go to Stripe Dashboard > Webhooks
   - Add endpoint: `https://your-domain.com/webhooks/stripe`
   - Subscribe to events:
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`
     - `invoice.payment_succeeded`
     - `charge.refunded`

4. **Test Payments**
   ```
   Card: 4242 4242 4242 4242
   Date: 12/25
   CVC: 123
   ```

### Gumroad Integration

1. **Create Account**
   - Go to https://gumroad.com
   - Create products/subscriptions
   - Get API token from Settings

2. **Configure Webhook**
   - Settings > Webhooks
   - Add: `https://your-domain.com/webhooks/gumroad`
   - Subscribe to events:
     - Sale
     - Subscription created
     - Subscription cancelled
     - Subscription updated

---

## 🔐 Security Configuration

### CORS Setup

```javascript
// In worker.js
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://your-domain.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

if (request.method === 'OPTIONS') {
  return new Response(null, { headers: corsHeaders });
}
```

### Rate Limiting

```javascript
// Implement rate limiting
const rateLimit = new Map();

function checkRateLimit(ip, limit = 100) {
  const now = Date.now();
  const key = `${ip}:${Math.floor(now / 60000)}`;
  
  rateLimit.set(key, (rateLimit.get(key) || 0) + 1);
  
  if (rateLimit.get(key) > limit) {
    return new Response('Too many requests', { status: 429 });
  }
}
```

### HTTPS Enforcement

```toml
# In wrangler.toml
[env.production]
vars = { ENVIRONMENT = "production" }
routes = [
  { pattern = "example.com/*", zone_name = "example.com" },
]
```

---

## 📊 Monitoring & Analytics

### Datadog Setup

1. **Create Account**
   - Visit https://datadoghq.com
   - Sign up for free tier

2. **Get API Keys**
   - Go to Integrations > APIs
   - Copy API key and App key

3. **Configure Environment**
   ```env
   DD_API_KEY=your_api_key
   DD_APP_KEY=your_app_key
   ```

4. **Add Monitoring Code**
   ```javascript
   // Example: Track API calls
   async function trackMetric(name, value) {
     await fetch('https://api.datadoghq.com/api/v1/series', {
       method: 'POST',
       headers: {
         'DD-API-KEY': env.DD_API_KEY,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         series: [{
           metric: `ai_marketplace.${name}`,
           points: [[Date.now() / 1000, value]],
           type: 'gauge'
         }]
       })
     });
   }
   ```

### Cloudflare Analytics

```javascript
// Built-in Cloudflare Analytics Engine
if (env.ANALYTICS) {
  await env.ANALYTICS.writeDataPoint({
    indexes: ['api_route'],
    blobs: ['POST /api/cart/add'],
    doubles: [200, 0.045]
  });
}
```

### Custom Metrics

Track these KPIs:
- User registration rate
- Login success rate
- Cart abandonment rate
- Payment success rate
- API response times
- Error rates
- Daily active users
- Revenue metrics

---

## 🔄 Continuous Integration/Deployment

### GitHub Actions Setup

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

### Pre-Deploy Testing

```bash
# Before deploying to production
npm test
npm run lint
npm run build
wrangler publish --dry-run
```

---

## 🆘 Troubleshooting

### Common Issues

#### Port 8787 Already in Use
```bash
# Find and kill process
lsof -ti:8787 | xargs kill -9
npm start
```

#### Database Connection Failed
```bash
# Verify connection string
echo $NEON_DATABASE_URL

# Test connection
node -e "
const { createConnection } = require('postgresql');
const conn = createConnection(process.env.NEON_DATABASE_URL);
conn.connect((err) => {
  if (err) console.error('Connection failed:', err);
  else console.log('Connected successfully');
  process.exit(0);
});
"
```

#### Stripe Webhook Not Working
```bash
# Check webhook secret
echo $STRIPE_WEBHOOK_SECRET

# Verify endpoint in Stripe Dashboard
# Check webhook delivery history
# Re-send webhook for testing
```

#### Deployment Fails
```bash
# Check wrangler auth
wrangler whoami

# Verify wrangler.toml
wrangler publish --dry-run

# Check logs
wrangler tail --format json
```

### Debug Commands

```bash
# View live logs
wrangler tail

# Check deployment status
wrangler deployments list

# Verify KV storage
wrangler kv:namespace list

# Test API locally
curl http://localhost:8787/api/products/search?q=test

# Check environment variables
wrangler env list
```

---

## 📈 Performance Optimization

### Caching Strategy

```javascript
// Cache static assets
if (request.method === 'GET' && /\.(js|css|png|jpg)$/.test(url.pathname)) {
  const response = new Response(content, { headers: { 'Cache-Control': 'public, max-age=86400' } });
  return response;
}

// Cache API responses
const cache = caches.default;
const cached = await cache.match(request);
if (cached) return cached;

// After fetching
await cache.put(request, response.clone());
```

### Database Query Optimization

```javascript
// Use indexes
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_user_id ON orders(user_id);

// Batch operations
await db.query(`
  INSERT INTO orders (user_id, total) VALUES 
  ($1, $2), ($3, $4), ($5, $6)
`, [user1, total1, user2, total2, user3, total3]);

// Use prepared statements
const stmt = await db.prepare('SELECT * FROM products WHERE id = $1');
const result = await stmt.all(productId);
```

### CDN Configuration

```toml
# Cache static assets via Cloudflare CDN
[[routes]]
pattern = "*.js"
zone_name = "example.com"
custom_domain = true

[[routes]]
pattern = "*.css"
zone_name = "example.com"
custom_domain = true
```

---

## 📅 Maintenance Schedule

### Daily
- [ ] Monitor error rates in Datadog
- [ ] Check payment processing status
- [ ] Review support tickets

### Weekly
- [ ] Review analytics dashboard
- [ ] Check for failed webhooks
- [ ] Update database backups
- [ ] Security scan logs

### Monthly
- [ ] Analyze performance metrics
- [ ] Update dependencies (`npm audit`)
- [ ] Review and optimize slow queries
- [ ] Audit user accounts
- [ ] Plan feature releases

### Quarterly
- [ ] Full security audit
- [ ] Database optimization
- [ ] Capacity planning
- [ ] Disaster recovery test

---

## 🔒 Backup & Recovery

### Database Backups

```bash
# Automated Neon backups (included)
# Manual backup export
pg_dump postgresql://user:pass@host/db > backup.sql

# Restore from backup
psql postgresql://user:pass@host/db < backup.sql
```

### Disaster Recovery Plan

1. **Backup Strategy**
   - Database: Daily automated backups
   - Code: Git version control
   - Assets: Cloudflare R2

2. **Recovery Time Objectives (RTO)**
   - Database restore: < 30 minutes
   - Full service: < 1 hour

3. **Recovery Point Objectives (RPO)**
   - Data loss acceptable: < 1 hour
   - Transaction logs: Every 15 minutes

---

## 📞 Support & Resources

### Documentation
- [API Documentation](API_DOCUMENTATION.md)
- [Advanced Features](ADVANCED_FEATURES.md)
- [Sales Site Guide](SALES_SITE_GUIDE.md)

### External Resources
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### Support Channels
- 📧 Email: support@ai-marketplace.com
- 🎫 Tickets: `POST /api/support/tickets`
- 💬 GitHub Issues: [Create issue](https://github.com/yourrepo/issues)

---

## ✅ Production Readiness Checklist

- [ ] All environment variables configured
- [ ] Database migrated and tested
- [ ] Payment processing verified
- [ ] SSL/HTTPS enabled
- [ ] Domain DNS configured
- [ ] CDN enabled (Cloudflare)
- [ ] Monitoring and alerts set up
- [ ] Backup and recovery tested
- [ ] Load testing completed
- [ ] Security audit passed
- [ ] Documentation updated
- [ ] Team trained on operations
- [ ] Incident response plan ready
- [ ] SLAs defined and monitored

---

**Last Updated:** February 2025  
**Status:** ✅ Production Ready
