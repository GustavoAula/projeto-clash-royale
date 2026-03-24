import { Box, Flex, HStack, VStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const footerSocials = [
  { label: "YouTube", img: "/images/some_youtube.f44dd04e.png", href: "https://supr.cl/2FyB6q2" },
  { label: "Facebook", img: "/images/some_facebook.82dbdf8f.png", href: "https://supr.cl/353IhiL" },
  { label: "Instagram", img: "/images/some_instagram.969a65ca.png", href: "https://supr.cl/3j8f2Ai" },
  { label: "Twitter", img: "/images/some_twitter.4a955afb.png", href: "https://supr.cl/2pzzIsf" },
  { label: "LinkedIn", img: "/images/some_linkedin.ad862f8c.png", href: "https://supr.cl/2T3yYJS" },
  { label: "Glassdoor", img: "/images/glassdoor.png", href: "https://supr.cl/2H81F5R" },
];

const legalLinks = [
  { label: "Terms of Service", href: "https://supercell.com/en/terms-of-service/" },
  { label: "Privacy Policy", href: "https://supercell.com/en/privacy-policy/" },
  { label: "Parent's Guide", href: "https://supercell.com/en/parents/" },
  { label: "Safe and Fair Play Policy", href: "https://supercell.com/en/safe-and-fair-play/" },
  { label: "Accessibility Statement", href: "https://supercell.com/en/accessibility-statement-supercell-com/" },
  { label: "Other Legal Docs", href: "https://supercell.com/en/our-legal-documents/" },
  { label: "Media Center", href: "https://supercell.com/en/media-center/" },
  { label: "Our Domains", href: "https://supercell.com/en/our-domains/" },
  { label: "Manage Cookies", href: "#" },
];

export function Footer() {
  return (
    <Box as="footer" bg="#000000" color="white" pt={10} pb={20} paddingBottom={192}>
      <Box maxW="1680px" mx="auto" px={10}>

        {/* Social + Store */}
        <Flex justify="space-between" align="center" mb={11} flexWrap="wrap" gap={6}>
          <VStack align="start" gap={3}>
            <Text fontSize="xs" color="white" fontWeight="bold">Follow us on</Text>
            <HStack gap={5} flexWrap="wrap">
              {footerSocials.map((s) => (
                <ChakraLink key={s.label} href={s.href} target="_blank">
                  <img
                    src={s.img}
                    alt={s.label}
                    style={{ height: "23px", width: "auto", filter: "brightness(0) invert(1)" }}
                  />
                </ChakraLink>
              ))}
            </HStack>
          </VStack>

          <VStack align="end" gap={3}>
            <HStack gap={3}>
              <ChakraLink href="https://supr.cl/appstorescgames" target="_blank">
                <img
                  src="/images/appstore.075318d2.png"
                  alt="App Store"
                  style={{ height: "50px", width: "auto" }}
                />
              </ChakraLink>
              <ChakraLink href="https://play.google.com/store/apps/dev?id=6715068722362591614" target="_blank">
                <img
                  src="/images/googleplay.80b3d249.png"
                  alt="Google Play"
                  style={{ height: "50px", width: "auto" }}
                />
              </ChakraLink>
            </HStack>
          </VStack>
        </Flex>

        {/* Legal Links */}
        <Box borderTopWidth={1} borderColor="gray.800" pt={6} mb={6}>
          <HStack gap={6} flexWrap="wrap">
            {legalLinks.map((l) => (
              <ChakraLink
                key={l.label}
                href={l.href}
                fontSize="13px"
                color="white"
                fontWeight="bold"
                _hover={{ color: "white" }}
              >
                {l.label}
              </ChakraLink>
            ))}
          </HStack>
        </Box>

        {/* Address + Logo */}
        <Flex justify="space-between" align="end" flexWrap="wrap" gap={3}>
          <VStack align="start" gap={1}>
            <Text fontSize="13px" color="whiteAlpha.700">Supercell Oy</Text>
            <Text fontSize="13px" color="whiteAlpha.700">Jätkäsaarenlaituri 1</Text>
            <Text fontSize="13px" color="whiteAlpha.700">00180 Helsinki</Text>
            <Text fontSize="13px" color="whiteAlpha.700">Finland</Text>
          </VStack>
          <ChakraLink asChild>
            <NextLink href="/">
              <img
                src="/images/supercell_logo.e02d3635.png"
                alt="Supercell"
                style={{ height: "44px", width: "auto" }}
              />
            </NextLink>
          </ChakraLink>
        </Flex>

      </Box>
    </Box>
  );
}