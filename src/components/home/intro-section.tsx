import { Box, Heading, Text, HStack, Link as ChakraLink } from "@chakra-ui/react";
import NextImage from "next/image";

export function IntroSection() {
  return (
    <Box w="100%" bg="white" position="relative" h={{ base: "auto", md: "730px" }}>

      {/* Imagem — lado esquerdo */}
      <Box
        position={{ base: "relative", md: "absolute" }}
        left={{ md: "8%" }}
        top={{ md: "9%" }}
        w={{ base: "100%", md: "25%" }}
      >
        <NextImage
          src="/images/bg_intro_clashroyale.ebe0a281.webp"
          alt=""
          width={743}
          height={923}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Texto — lado direito */}
      <Box
        position={{ base: "relative", md: "absolute" }}
        left={{ md: "50.8%" }}
        top={{ md: "50%" }}
        transform={{ md: "translateY(-50%)" }}
        w={{ base: "100%", md: "35%" }}
        px={{ base: 6, md: 0 }}
        py={{ base: 8, md: 0 }}
      >
        <Heading
          as="h2"
          fontSize="4xl"
          fontWeight="black"
          fontFamily="mono"
          textTransform="uppercase"
          letterSpacing="tight"
          color="black"
          mb={4}
        >
          Epic Real-Time Card Battles
        </Heading>

        <Text fontSize="lg" fontWeight="normal" lineHeight="tall" color="gray.1100" paddingBottom={8}>
          Clash Royale is a real-time multiplayer game starring the Royales, your favourite
          Clash® characters and much, much more. Collect and upgrade dozens of cards featuring
          the Clash of Clans troops, spells and defenses you know and love, as well as the
          Royales: Princes, Knights, Baby Dragons and more. Knock the enemy King and Princesses
          from their towers to defeat your opponents and win Trophies, Crowns and glory in the Arena.
        </Text>

        <HStack gap={4} flexWrap="wrap">
          <ChakraLink href="https://itunes.apple.com/app/id1053012308?mt=8" target="_blank">
            <NextImage
              src="/images/appstore.c44572b2.webp"
              alt="Download on App Store"
              width={294}
              height={99}
              style={{ height: "51px", width: "auto" }}
            />
          </ChakraLink>
          <ChakraLink href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale" target="_blank">
            <NextImage
              src="/images/googleplay.4ced544f.webp"
              alt="Download on Google Play"
              width={332}
              height={99}
              style={{ height: "51px", width: "auto" }}
            />
          </ChakraLink>
        </HStack>
      </Box>

    </Box>
  );
}