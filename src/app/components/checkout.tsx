'use client'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

export default function Checkout(props) {

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_STRIPE_KEY);

const data = props.order

async function fetchClientSecret(){
  const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/checkout', {
      method: 'POST',
      headers : { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data),
  });
  const checkoutSession = await res.json();
  
  return checkoutSession;
}


  return (
    <div id="checkout" className="w-full h-full overflow-y-scroll">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret }}
        
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}