// import 'server-only'

import Stripe from 'stripe';

export const stripe = new Stripe(`${process.env.SECRET_STRIPE_KEY}`);