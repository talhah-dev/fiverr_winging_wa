import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Mark Mawby | Winging WA | AFS Foils & Manta Foil Assist",
  description:
    "Get in touch with WingingWA, the Australian distributor for AFS Foils and Western Australian dealer for Manta Foil Assist. Call Mark Mawby on 0487 042 694.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7]">
      <Navbar />
      <main className="flex-1">
        <ContactHero />

        <section className="relative w-full py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 w-full">
                <ContactInfoCards />
              </div>
              <div className="lg:col-span-7 w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
