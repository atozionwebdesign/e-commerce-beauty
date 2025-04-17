let baseURL: string | undefined = '';

if(process.env.NODE_ENV == "development") {
  baseURL = process.env.NEXT_PUBLIC_URL;
}

export async function getProducts(){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/products', {method: 'GET'});
    const products = await res.json();
    return products;
}