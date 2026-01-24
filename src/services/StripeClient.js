class StripeClient {
  constructor(secretKey = '') {
    this.secretKey = secretKey;
    if (secretKey) {
      const Stripe = require('stripe');
      this.client = Stripe(secretKey);
    } else {
      this.client = null;
    }
  }

  isAvailable() {
    return !!this.client;
  }

  async createSubscriptionCheckout({ priceId, userId, successUrl, cancelUrl }) {
    if (this.client) {
      return this.client.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        client_reference_id: userId
      });
    }
    // Simulated session
    return { id: `cs_sim_${Math.random().toString(36).slice(2,10)}`, url: `https://test.pay/checkout/sub/${priceId}/${userId}`, client_reference_id: userId };
  }

  async createPaymentIntentForVendor({ amount, currency = 'usd', vendorAccountId, platformFee = 0, description = '' }) {
    if (this.client) {
      // Create PaymentIntent with transfer to connected account
      const pi = await this.client.paymentIntents.create({
        amount,
        currency,
        description,
        payment_method_types: ['card'],
        transfer_data: vendorAccountId ? { destination: vendorAccountId } : undefined,
        application_fee_amount: platformFee || undefined,
      });
      return pi;
    }
    // Simulate
    return { id: `pi_sim_${Math.random().toString(36).slice(2,10)}`, amount, currency, vendor: vendorAccountId, platformFee };
  }

  async createConnectAccountLink({ accountId, refreshUrl, returnUrl, type = 'account_onboarding' }) {
    if (this.client) {
      return this.client.accountLinks.create({ account: accountId, refresh_url: refreshUrl, return_url: returnUrl, type: 'account_onboarding' });
    }
    return { url: `https://connect.stripe.com/onboard/${accountId || 'sim'}` };
  }

  verifyWebhook(payload, sigHeader, secret) {
    if (this.client && secret) {
      try {
        const event = this.client.webhooks.constructEvent(payload, sigHeader, secret);
        return event;
      } catch (err) {
        throw err;
      }
    }
    // fallback to JSON parse
    try {
      return JSON.parse(payload);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = StripeClient;
module.exports.default = StripeClient;
