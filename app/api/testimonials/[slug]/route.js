import { NextResponse } from "next/server";
import testimonials from "../../../../data/testimonials.json";

export async function GET(request, { params }) {
  try {
    const testimonialsBySlug = testimonials[params.slug];

    if (!testimonialsBySlug) {
      return NextResponse.json(
        { error: "Testimonials not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(testimonialsBySlug);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
