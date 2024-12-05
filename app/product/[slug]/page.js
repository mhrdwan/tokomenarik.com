// app/product/[slug]/page.tsx
import { notFound } from "next/navigation";
import SebelumKeLanding from "../SebelumKeLanding";
import { BASE_URL } from "../../core/api";



async function getProductData(slug){
  console.log(`ini adalah get produk2`, slug);
  try {
    const params = await Promise.resolve({ slug });
    const res = await fetch(`${BASE_URL}/api/product/${params.slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function generateMetadata(
  { params }) {
  const productData = await getProductData(params.slug);

  if (!productData) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${productData.name} | Our Store`,
    description: productData.tagline,
    openGraph: {
      title: `${productData.name} | Our Store`,
      description: productData.tagline,
      images: [productData.photos[0]],
    },
  };
}


export default async function ProductPage({ params }) {

  if (!params.slug) {
    return notFound();
  }

  const productData = await getProductData(params.slug);

  if (!productData) {
    return notFound();
  }

  return <SebelumKeLanding params={params} productData={productData} />;
}