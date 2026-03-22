import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

export function HeroSection() {
  return (
    <Box position="relative" w="100vw" h="710px" overflow="hidden">
      <Box position="absolute" inset={0} zIndex={1} bg="blackAlpha.70" />

      <Box position="absolute" inset={0} zIndex={0} w="100%" h="100%">
        <NextImage
          src="https://supercell.com/images/c96611b5b4ccd331e2b4dcb797811894/hero_bg_clashroyale.612fcf42.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 52%" }}
          unoptimized
        />
      </Box>

      <Box
        position="absolute"
        zIndex={2}
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        w={{ base: "200px", md: "260px", lg: "300px" }}
      >
        <NextImage
          src="https://supercell.com/images/53c91cc7ddf17d5b6fa13cae4762af1b/main_logo_clashroyale.5e3fbb70__1_.webp"
          alt="Clash Royale"
          width={900}
          height={390}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </Box>
    </Box>
  );
}