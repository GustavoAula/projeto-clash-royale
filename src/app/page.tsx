import { VStack } from "@chakra-ui/react";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { NewsSection } from "@/components/home/news-section";

export default function Home() {
  return (
    <VStack as="main" gap={0}>
      <HeroSection />
      <IntroSection />
      <NewsSection />
    </VStack>
  );
}