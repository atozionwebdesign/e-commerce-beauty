import { stripe } from '@/app/lib/stripe';
import ICartItem from '@/app/models/CartItem';

let baseURL: string | undefined = '';

if(process.env.NODE_ENV == "development") {
  baseURL = process.env.NEXT_PUBLIC_URL;
}

export async function POST(req: Request) {
    const cart_items = await req.json();
    console.log(cart_items);
    const line_items = cart_items.map((item:ICartItem ) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.name,
              images: [process.env.NEXT_PUBLIC_AWS_BUCKET_URL + item.product.images[0]],
              tax_code: 'txcd_99999999',
            },
            tax_behavior: 'exclusive',
            unit_amount: parseFloat(item.product.price) * 100, 
          },
          quantity: item.quantity
        };
      });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        ui_mode: 'embedded',
        line_items:line_items,
        mode: 'payment',
        automatic_tax: {enabled: true},
        // return_url: `${baseURL}/return?success=true`,
        shipping_options:  [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 500,
                currency: 'usd',
              },
              display_name: 'Ground Shipping',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1500,
                currency: 'usd',
              },
              display_name: 'Next Day Shipping',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 1,
                },
                maximum: {
                  unit: 'business_day',
                  value: 1,
                },
              },
            },
          }
        ]
    })
    return Response.json(session.client_secret);
}