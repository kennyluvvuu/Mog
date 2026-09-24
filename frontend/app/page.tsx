// Главная страница (лендинг) со всеми промо-секциями проекта

import { CallToAction } from "@/components/landing/CallToAction";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Metrics } from "@/components/landing/Metrics";
import { Modes } from "@/components/landing/Modes";
import { TierScale } from "@/components/landing/TierScale";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Metrics />
      <TierScale />
      <Modes />
      <CallToAction />
    </>
  );
}
