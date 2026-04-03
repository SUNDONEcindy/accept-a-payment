import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    // Never put any keys in code! Always use an environment variable
    // or secrets vault (as shown here) to supply keys to your integration.
    //
    // See https://docs.stripe.com/keys-best-practices and find your
    // keys at https://dashboard.stripe.com/apikeys.
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2025-12-15.clover",
      appInfo: {
        name: "stripe-samples/accept-a-payment/prebuilt-checkout-page",
        version: "0.0.1",
        url: "https://github.com/stripe-samples/accept-a-payment",
      },
    });
  }
  return stripeInstance;
}
