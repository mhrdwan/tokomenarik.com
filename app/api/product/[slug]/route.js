import { NextResponse } from "next/server";
import productsData from "../../../../data/products.json";


export async function GET(request, { params }) {
  const product = productsData[params.slug];

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
