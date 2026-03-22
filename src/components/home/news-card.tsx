import { VStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextImage from "next/image";

interface NewsCardProps {
  title: string;
  img: string;
  href: string;
}

export function NewsCard({ title, img, href }: NewsCardProps) {
  return (
    <VStack align="center" gap={3} w="800px" minW="800px">
      <ChakraLink href={href}>
        <NextImage
          src={img}
          alt={title}
          width={800}
          height={433}
          style={{ width: "100%", height: "420px", objectFit: "cover" }}
        />
      </ChakraLink>
      <Text fontSize="small" fontWeight="bold" textTransform="uppercase" color="pink.500" letterSpacing="wider">
        Clash Royale
      </Text>
      <ChakraLink
        href={href}
        fontSize="2xl"
        fontWeight="medium"
        textAlign="center"
        color="black"
        paddingBottom={43}
      >
        {title}
      </ChakraLink>
    </VStack>
  );
}