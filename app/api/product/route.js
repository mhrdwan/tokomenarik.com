import { NextResponse } from "next/server";
import productsData from "../../../data/products.json";

export async function GET(request, { params }) {
  if (!productsData) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(productsData);
}
