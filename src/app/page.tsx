import { VStack } from "@chakra-ui/react";
import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <VStack as="main" gap={0}>
      <HeroSection />
    </VStack>
  );
}