import Product from "@/models/Product";

export async function GET(request, { params }) {
  const id = params.id;
  const product = await Product.findById(id);
  return Response.json(product);
}

export async function DELETE(request, { params }) {
  const id = params.id;
  await Product.findByIdAndDelete(id);
  return Response.json({ kuauy: "kuay" });
}

export async function PUT(request, { params }) {
  const id = params.id;

  const body = await request.json();

  //   const product = new Product(body);

  await Product.findByIdAndUpdate(id, body);
  return Response.json({ success: true });
}
