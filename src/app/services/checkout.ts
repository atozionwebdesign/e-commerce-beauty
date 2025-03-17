/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchClientSecret(data: any){
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
