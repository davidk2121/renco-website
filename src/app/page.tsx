"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProcessSection from "@/components/ProcessSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import BookCallSection from "@/components/BookCallSection";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import IntroScreen from "@/components/IntroScreen";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <IntroScreen />
      <Header onGetEstimate={() => setFormOpen(true)} />
      <main>
        <Hero onGetEstimate={() => setFormOpen(true)} />
        <StorySection />
        <ProcessSection />
        <BookCallSection />
        <ShowcaseSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <ReviewsSection />
        <FAQSection />
        <ServiceAreaSection />
        <GallerySection />
      </main>
      <Footer />
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />
      <StickyCTA onGetEstimate={() => setFormOpen(true)} />
      <ExitIntentPopup onGetEstimate={() => setFormOpen(true)} />
    </>
  );
}
