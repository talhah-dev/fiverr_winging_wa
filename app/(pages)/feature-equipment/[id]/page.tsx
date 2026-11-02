import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductDetailView } from "@/components/stock/ProductDetailView";
import { getStockItemById, staticInventory } from "@/data/stockInventory";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = async () => {
  return staticInventory.map((item) => ({
    id: item.id,
  }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const product = getStockItemById(id);

  if (!product) {
    return {
      title: "Equipment Not Found | Winging WA",
    };
  }

  return {
    title: `${product.name} | Feature Equipment | Winging WA`,
    description: `${product.name} - ${product.specs}. Direct stock available in Western Australia. ${product.description}`,
  };
};

const ProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = getStockItemById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = staticInventory.filter(
    (item) => item.id !== product.id
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 lg:pt-36">
        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;