"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import RoiSection from "@/components/RoiSections";
import Solution from "@/components/Solution";
import Investment from "@/components/Investment";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <RoiSection />
      <Solution />
      <Investment />
      <FAQ />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
