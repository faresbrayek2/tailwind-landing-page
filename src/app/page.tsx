"use client";
// import Compoenents
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Card from "./components/card";
import SectionMoney from "./components/sectionmoney";
import CashBack from "./components/cashback";
import Compliance from "./components/compliance";
import Pricing from "./components/pricing";
import FAQS from "./components/faqs";
import Footer from "./components/footer";
import Business from "./components/businesses";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Card />
      <SectionMoney />
      <CashBack />
      <Compliance />
      <Business />
      <Pricing />
      <FAQS />
      <Footer />
    </>
  );
}
