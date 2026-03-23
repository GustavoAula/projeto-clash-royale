import { VStack } from "@chakra-ui/react";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { NewsSection } from "@/components/home/news-section";
import { SocialSection } from "@/components/home/social-section";
import { VideoCarousel } from "@/components/home/video-carousel";
import { CareersSection } from "@/components/home/careers-section";

export default function Home() {
  return (
    <VStack as="main" gap={0}>
      <HeroSection />
      <IntroSection />
      <NewsSection />
      <SocialSection />
      <VideoCarousel />
      <CareersSection />
    </VStack>
  );
}