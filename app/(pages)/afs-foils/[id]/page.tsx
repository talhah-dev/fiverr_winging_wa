import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfsSilkDetailContent from "@/components/afs/product-detail/AfsSilkDetailContent";
import { afsProducts } from "@/data/afsProducts";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = async () => {
  return afsProducts.map((p) => ({
    id: p.id,
  }));
};

export const metadata: Metadata = {
  title: "AFS Silk V2 Front Wing | Winging WA | Western Australia Dealer",
  description:
    "Explore the AFS Silk V2 Front Wing - Sharper, Stronger, Smoother. More Silk than ever. High performance hydrofoil by AFS Foils.",
};

const AfsProductDetailPage = async ({ params }: PageProps) => {
  await params;

  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Suspense fallback={<div className="h-20 bg-[#4A505B]" />}>
        <Navbar />
      </Suspense>
      <main className="flex-1 pt-24 sm:pt-28">
        <Suspense fallback={<div className="min-h-screen bg-[#4A505B]" />}>
          <AfsSilkDetailContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AfsProductDetailPage;
