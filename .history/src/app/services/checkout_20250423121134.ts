/* eslint-disable @typescript-eslint/no-explicit-any */
let baseURL: string | undefined = '';

const baseURL = process.env.NEXT_PUBLIC_URL;

export async function fetchClientSecret(data: any){
    const res = await fetch(baseURL + '/api/checkout', {
        method: 'POST',
        headers : { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : 'true' ,
        }, 
        body: JSON.stringify(data),
    });
    const checkoutSession = await res.json(); 
    return checkoutSession;
}
