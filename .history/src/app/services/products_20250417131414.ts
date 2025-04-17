

export async function getProducts(){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/products', {method: 'GET'});
    const products = await res.json();
    return products;
}