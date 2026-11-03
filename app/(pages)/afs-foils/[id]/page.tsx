import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfsDynamicDetailContent from "@/components/afs/product-detail/AfsDynamicDetailContent";
import { afsProducts } from "@/data/afsProducts";
import { getAfsProductDetail } from "@/data/afsProductDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = async () => {
  return afsProducts.map((p) => ({
    id: p.id,
  }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const product = getAfsProductDetail(id);

  if (!product) {
    return {
      title: "AFS Product | Winging WA",
    };
  }

  return {
    title: `${product.name} | AFS Foils | Winging WA`,
    description: `${product.name} - ${product.subtitle}. Official Western Australia dealer. Enquire with Mark Mawby on 0487 042 694.`,
  };
};

const AfsProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = getAfsProductDetail(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Suspense fallback={<div className="h-20 bg-[#4A505B]" />}>
        <Navbar />
      </Suspense>
      <main className="flex-1 pt-24 sm:pt-28">
        <Suspense fallback={<div className="min-h-screen bg-[#4A505B]" />}>
          <AfsDynamicDetailContent product={product} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AfsProductDetailPage;
