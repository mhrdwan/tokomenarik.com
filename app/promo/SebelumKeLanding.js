// app/product/[slug]/page.tsx
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "../core/api";
import ProductLanding from "../../components/ProductLanding";

async function getProductData(slug) {
  try {
    const res = await fetch(`${BASE_URL}/api/product/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

async function getTestimonials(slug) {
  try {
    const res = await fetch(`${BASE_URL}/api/testimonials/${slug}`);
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export default async function SebelumKeLanding({ params }) {
  if (!params.slug) {
    return notFound();
  }

  const productData = await getProductData(params.slug);
  const testimonials = await getTestimonials(params.slug);

  if (!productData) {
    return notFound();
  }

  return <ProductLanding productData={productData} testimonials={testimonials} />;
}
