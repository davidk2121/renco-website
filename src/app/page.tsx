"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Header onGetEstimate={() => setFormOpen(true)} />
      <main>
        <Hero onGetEstimate={() => setFormOpen(true)} />
        <StorySection />
        <ShowcaseSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
