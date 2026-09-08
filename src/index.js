export async function GET(request) {
  const response = await fetch('https://api.vercel.app/products');
  const products = await response.json();
  console.log('TEST - ', products);
  return Response.json(products);
}
