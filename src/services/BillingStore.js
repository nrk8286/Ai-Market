class BillingStore {
  constructor(options = {}) {
    const explicitFile = !!options.useFile;
    const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
    this.useFile = explicitFile && isNode;
    this.filePath = null;
    this.customers = [];

    if (this.useFile) {
      try {
        const fs = require('fs');
        const path = require('path');
        this.filePath = path.join(process.cwd(), 'data', 'billing.json');
        if (!fs.existsSync(path.dirname(this.filePath))) {
          fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
        }
        if (fs.existsSync(this.filePath)) {
          const raw = fs.readFileSync(this.filePath, 'utf8') || '[]';
          this.customers = JSON.parse(raw);
        } else {
          this.customers = [];
          fs.writeFileSync(this.filePath, JSON.stringify(this.customers, null, 2));
        }
      } catch (err) {
        this.useFile = false;
        this.customers = [];
      }
    }
  }

  _persist() {
    if (this.useFile && this.filePath) {
      try {
        const fs = require('fs');
        fs.writeFileSync(this.filePath, JSON.stringify(this.customers, null, 2));
      } catch (err) {
        // ignore
      }
    }
  }

  // Create or update a customer record by userId
  upsertCustomer(userId, data) {
    let c = this.customers.find(x => x.userId === userId);
    if (!c) {
      c = { userId, subscriptions: [], createdAt: new Date().toISOString(), ...data };
      this.customers.push(c);
    } else {
      Object.assign(c, data);
    }
    this._persist();
    return c;
  }

  getCustomer(userId) {
    return this.customers.find(x => x.userId === userId) || null;
  }

  // Upsert subscription record for a customer
  upsertSubscription(userId, sub) {
    const cust = this.getCustomer(userId) || this.upsertCustomer(userId, {});
    const idx = cust.subscriptions.findIndex(s => s.id === sub.id);
    if (idx === -1) cust.subscriptions.push(sub);
    else cust.subscriptions[idx] = Object.assign(cust.subscriptions[idx], sub);
    this._persist();
    return sub;
  }

  hasActiveSubscription(userId) {
    const cust = this.getCustomer(userId);
    if (!cust) return false;
    return cust.subscriptions.some(s => s.status === 'active' || s.status === 'trialing');
  }
}

module.exports = BillingStore;
module.exports.default = BillingStore;
