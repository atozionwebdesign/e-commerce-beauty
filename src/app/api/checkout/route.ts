import { stripe } from '@/app/lib/stripe';
import { headers } from 'next/headers';
// import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
    const cart_items = await req.json();
    console.log(cart_items);
    const line_items = cart_items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.name,
              images: [process.env.NEXT_PUBLIC_AWS_BUCKET_URL + item.product.img],
            },
            unit_amount: item.product.price * 100, // TODO: Price should be retrieved from db
          },
          quantity: item.quantity,
        };
      });
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        ui_mode: 'embedded',
        line_items:line_items,
        mode: 'payment',
        return_url: `${process.env.NEXT_PUBLIC_URL}/return?success=true`
    })
    return Response.json(session.client_secret);
}
