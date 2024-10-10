import Product from "@/models/Product";

export async function POST(request) {
  const body = await request.json();

  const product = new Product(body);

  //   await product.save();

  await Product.create(body);

  return Response.json(product);
}

export async function GET(request) {
  return Response.json(await Product.find());
}
