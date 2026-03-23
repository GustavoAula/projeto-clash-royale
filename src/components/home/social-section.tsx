import { Box, Flex, VStack, Heading, Text, HStack, Link as ChakraLink } from "@chakra-ui/react";
import NextImage from "next/image";

const socials = [
  { label: "Reddit", img: "https://supercell.com/images/c102f30d03300e410a6b73bf164bbb6e/some_reddit.dbd15d85.webp", href: "https://www.reddit.com/r/ClashRoyale" },
  { label: "YouTube", img: "https://supercell.com/images/1cbcfdb137b3f803f6ff7ec23b897f52/some_youtube.6b5d0c55.webp", href: "https://www.youtube.com/clashroyale" },
  { label: "Facebook", img: "https://supercell.com/images/858b03c0c605caaf4e5cd02e1a482159/some_facebook.49531fac.webp", href: "https://www.facebook.com/ClashRoyale" },
  { label: "Instagram", img: "https://supercell.com/images/37120b1db33f8157bfb4fefb42d7c583/some_instagram.2eaa320b.webp", href: "https://www.instagram.com/ClashRoyale/" },
  { label: "Twitter", img: "https://supercell.com/images/e1adc66c0d13d05e51abe148363ee874/some_twitter.c380be0d.webp", href: "https://twitter.com/ClashRoyale" },
];

export function SocialSection() {
  return (
    <Box position="relative" w="100%" h="617px" overflow="hidden">

      {/* Background */}
      <Box position="absolute" inset={0} zIndex={0} w="100%" h="100%">
        <NextImage
          src="/images/bg_gamesocial_clashroyale.04a9aa88.webp"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Celular — lado esquerdo */}
      <Box
        position="absolute"
        left="8%"
        top="12%"
        w="26%"
        zIndex={1}
      >
        <NextImage
          src="/images/bg_social_clashroyale.dcfa9885.webp"
          alt=""
          width={734}
          height={833}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Texto — lado direito */}
      <Box
        position="absolute"
        left="51%"
        top="58%"
        transform="translateY(-50%)"
        zIndex={1}
        w="42%"
      >
        <VStack align="start" gap={6} color="white">
          <Heading
            as="h2"
            fontSize="42px"
            fontWeight="900"
            textAlign="left"
            textTransform="uppercase"
            fontFamily="mono"
            letterSpacing="tighter"
          >
            See the latest
          </Heading>
          <Text fontSize="lg" lineHeight="tall" letterSpacing="tight">
            To stay on top of your game, keep an eye on the in-game News section.
            Follow us on <br /> social media for the latest chatter and sneak peeks on what
            the team is working on.<br /> Dont be a stranger and join the conversation.
          </Text>
          <Text fontSize="sm" fontWeight="500" textTransform="uppercase" letterSpacing="tight">
            Follow Clash Royale on
          </Text>
          <HStack gap={5} flexWrap="wrap">
            {socials.map((s) => (
              <ChakraLink key={s.label} href={s.href} target="_blank">
                <NextImage
                  src={s.img}
                  alt={s.label}
                  width={83}
                  height={59}
                  style={{ height: "24px", width: "auto" }}
                  unoptimized
                />
              </ChakraLink>
            ))}
          </HStack>
        </VStack>
      </Box>

    </Box>
  );
}