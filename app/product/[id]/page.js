export default async function Home({ params }) {
  // const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/product/${params.id}` , { cache: "no-store" });

  const data = await fetch(
    `http://localhost:3000/${process.env.NEXT_PUBLIC_API_BASE}/product/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const product = await data.json();
  // console.log(product);
  // console.log({ product, category: product.category });
  // const id = params.id;
  return (
    <div className="m-4">
      <h1>{product.name}</h1>
      <p className="font-bold text-xl text-blue-800">car </p>
      <p>{product.description}</p>
      <p>{product.price} Baht</p>
      <p>Category: car eiei</p>
    </div>
  );
}
