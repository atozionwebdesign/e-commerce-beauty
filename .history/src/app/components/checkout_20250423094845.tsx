'use client'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ICartItem from '../models/CartItem';
import { useCallback, useState } from 'react';

export default function Checkout(props:{cart:ICartItem[]}) {
  const [clientSecret, setClientSecret] = useState();

let baseURL: string | undefined = '';
if(process.env.NODE_ENV == "development") {
  baseURL = process.env.NEXT_PUBLIC_URL;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_STRIPE_KEY as string);
const data = props.cart;
const fetchClientSecret = useCallback(async () => {
  try{
    const res = await fetch(baseURL + '/api/checkout', {
      method: 'POST',
      headers : { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials" : 'true' ,
      }, 
      body: JSON.stringify(data),
  });
  const checkoutSession = await res.json();
  setClientSecret(checkoutSession);
  }

}, []);

  return (
    <div id="checkout" className="w-full h-full overflow-y-scroll">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}