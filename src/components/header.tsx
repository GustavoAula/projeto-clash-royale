"use client";

import { useState } from "react";
import { Box, Flex, HStack, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  highlighted?: boolean;
  links: NavLink[];
}

const navItems: NavItem[] = [
  {
    label: "Games",
    href: "https://supercell.com/en/games/",
    highlighted: true,
    links: [
      { label: "mo.co", href: "https://mo.co" },
      { label: "Squad Busters", href: "https://squadbusters.supercell.com/en/" },
      { label: "Brawl Stars", href: "https://supercell.com/en/games/brawlstars/" },
      { label: "Clash Royale", href: "/", highlight: true },
      { label: "Boom Beach", href: "https://supercell.com/en/games/boombeach/" },
      { label: "Clash of Clans", href: "https://supercell.com/en/games/clashofclans/" },
      { label: "Hay Day", href: "https://supercell.com/en/games/hayday/" },
    ],
  },
  {
    label: "Careers",
    href: "https://supercell.com/en/careers/",
    links: [
      { label: "Open Positions", href: "https://supercell.com/en/careers/#join" },
      { label: "Why You Might Love It Here", href: "https://supercell.com/en/careers/why-you-might-love-it-here/" },
      { label: "Our Offices", href: "https://supercell.com/en/careers/our-offices/" },
      { label: "Joining Supercell", href: "https://supercell.com/en/careers/joining-supercell/" },
      { label: "Living in Helsinki", href: "https://supercell.com/en/careers/living-helsinki/" },
      { label: "Living in London", href: "https://supercell.com/en/careers/living-london/" },
      { label: "Living in Shanghai", href: "https://supercell.com/en/careers/living-shanghai/" },
      { label: "Career Stories", href: "https://supercell.com/en/career-stories/" },
    ],
  },
  {
    label: "Support",
    href: "https://supercell.com/en/support/",
    links: [
      { label: "Be Safe & Play Fair", href: "https://supercell.com/en/safe-fair-play/" },
    ],
  },
  {
    label: "About Us",
    href: "https://supercell.com/en/about-us/",
    links: [
      { label: "News", href: "https://supercell.com/en/news/" },
      { label: "Investments", href: "https://investments.supercell.com/" },
      { label: "Level Up", href: "https://supercell.com/en/levelup/" },
      { label: "Ilkka's Long Texts", href: "https://supercell.com/en/ilkkas-long-texts/" },
      { label: "Games First", href: "https://gamesfirsthelsinki.com/" },
      { label: "Spark", href: "https://spark.supercell.com/" },
    ],
  },
];

export function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        zIndex={1001}
        bg="black"
        h="100px"
        w={{ base: "100%", md: "768px", lg: "1024px", xl: "1200px", "2xl": "1600px" }}
      >
        <Flex h="100%" px={6} align="center" justify="space-between" gap={8}>

          {/* Logo */}
          <ChakraLink asChild flexShrink={0}>
            <NextLink href="/">
              <NextImage
                src="/images/supercell_logo.e02d3635.png"
                alt="Supercell"
                width={121}
                height={98}
                style={{ height: "50px", width: "auto" }}
              />
            </NextLink>
          </ChakraLink>

          {/* Nav */}
          <HStack gap={14} display={{ base: "none", lg: "flex" }} h="100%" flex={1} pl={12}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                position="relative"
                h="100%"
                display="flex"
                alignItems="center"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <ChakraLink
                  href={item.href}
                  color={item.highlighted ? "white" : "gray.500"}
                  fontSize="lg"
                  fontWeight={item.highlighted ? "bold" : "medium"}
                  _hover={{ color: "white" }}
                  textDecoration="none"
                >
                  {item.label}
                </ChakraLink>

                {/* Dropdown com animação */}
                <Box
                  position="fixed"
                  top="100px"
                  left={0}
                  right={0}
                  bg="blackAlpha.800"
                  display="flex"
                  zIndex={1000}
                  px={10}
                  gap={6}
                  alignItems="center"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    maxHeight: hoveredItem === item.label ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease-in-out, padding 0.35s ease-in-out",
                    paddingTop: hoveredItem === item.label ? "38px" : "0px",
                    paddingBottom: hoveredItem === item.label ? "38px" : "0px",
                  }}
                >
                  {item.links.map((sub) => (
                    <ChakraLink
                      key={sub.label}
                      href={sub.href}
                      color={sub.highlight ? "white" : "gray.400"}
                      fontSize="18px"
                      fontWeight="medium"
                      whiteSpace="nowrap"
                      _hover={{ color: "white" }}
                      textDecoration="none"
                    >
                      {sub.label}
                    </ChakraLink>
                  ))}
                </Box>
              </Box>
            ))}
          </HStack>

          {/* Ícones direita */}
          <HStack gap={8} display={{ base: "none", lg: "flex" }} alignItems="center">
            <ChakraLink href="https://store.supercell.com" target="_blank">
              <svg width="64" height="27" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.69428 11.5989L0 50H101.125C107.925 50 113.678 44.9757 114.594 38.2381L117.695 15.4235C118.804 7.26389 112.461 0 104.226 0H19.14C12.403 0 6.68246 4.93479 5.69428 11.5989Z" fill="#878787"/>
                <path d="M29.7917 33.3919C28.559 33.3919 27.4132 32.6628 26.3542 31.2044C25.9896 30.701 25.6944 30.1367 25.4687 29.5117L28.4375 28.7305C28.8715 29.5117 29.3142 30.0499 29.7656 30.3451H33.6979C33.75 30.3451 33.9236 30.1975 34.2187 29.9023C34.5139 29.6072 34.6615 29.4336 34.6615 29.3815V27.8971C34.6615 27.8103 34.6354 27.7582 34.5833 27.7409L27.9948 25.9701C27.3003 25.7791 26.7622 25.3971 26.3802 24.8242C26.0156 24.2513 25.8333 23.6263 25.8333 22.9492V21.5951C25.8333 21.2131 25.8681 20.8919 25.9375 20.6315C26.0069 20.3711 26.1545 20.0846 26.3802 19.7721C26.5712 19.4944 26.8403 19.1819 27.1875 18.8346C27.5347 18.4874 27.8385 18.227 28.099 18.0534C28.4115 17.8277 28.6979 17.6801 28.9583 17.6107C29.2187 17.5412 29.5399 17.5065 29.9219 17.5065H33.5677C34.2795 17.5065 34.9306 17.7322 35.5208 18.1836C36.1111 18.6176 36.6059 19.1211 37.0052 19.694C37.3872 20.2322 37.6823 20.7964 37.8906 21.3867L34.9219 22.168C34.4878 21.3867 34.0451 20.8485 33.5937 20.5534H29.974C29.9219 20.5534 29.7483 20.701 29.4531 20.9961C29.158 21.2912 29.0104 21.4648 29.0104 21.5169V22.8451C29.0104 22.9405 29.0365 22.9753 29.0885 23.0013L35.7031 24.7982C36.3802 24.9892 36.9097 25.3711 37.2917 25.944C37.6736 26.5169 37.8646 27.1419 37.8646 27.819V29.3034C37.8646 29.6853 37.8299 30.0065 37.7604 30.2669C37.691 30.5273 37.5434 30.8138 37.3177 31.1263C37.1267 31.4041 36.8576 31.7166 36.5104 32.0638C36.1632 32.411 35.8594 32.6714 35.599 32.8451C35.2865 33.0707 35 33.2183 34.7396 33.2878C34.4792 33.3572 34.158 33.3919 33.776 33.3919H29.7917ZM50.564 17.6367V20.6836H46.3713V33.2617H43.1681V20.6836H38.9494V17.6367H50.564ZM56.1133 33.3919C55.7313 33.3919 55.4102 33.3572 55.1497 33.2878C54.8893 33.2183 54.6029 33.0707 54.2904 32.8451C54.0126 32.6541 53.7001 32.385 53.3529 32.0378C53.023 31.6905 52.7626 31.3867 52.5716 31.1263C52.3459 30.8138 52.1983 30.5273 52.1289 30.2669C52.0595 30.0065 52.0247 29.6853 52.0247 29.3034V21.5951C52.0247 21.2131 52.0595 20.8919 52.1289 20.6315C52.1983 20.3711 52.3459 20.0846 52.5716 19.7721C52.7626 19.4944 53.0317 19.1819 53.3789 18.8346C53.7261 18.4874 54.0299 18.227 54.2904 18.0534C54.6029 17.8277 54.8893 17.6801 55.1497 17.6107C55.4102 17.5412 55.7313 17.5065 56.1133 17.5065H60.0195C60.4015 17.5065 60.7227 17.5412 60.9831 17.6107C61.2435 17.6801 61.5299 17.8277 61.8424 18.0534C62.1202 18.2444 62.424 18.5135 62.7539 18.8607C63.1011 19.2079 63.3702 19.5117 63.5612 19.7721C63.7869 20.0846 63.9345 20.3711 64.0039 20.6315C64.0733 20.8919 64.1081 21.2131 64.1081 21.5951V29.3034C64.1081 29.6853 64.0733 30.0065 64.0039 30.2669C63.9345 30.5273 63.7869 30.8138 63.5612 31.1263C63.3702 31.4041 63.1011 31.7166 62.7539 32.0638C62.4067 32.411 62.1029 32.6714 61.8424 32.8451C61.5299 33.0707 61.2435 33.2183 60.9831 33.2878C60.7227 33.3572 60.4015 33.3919 60.0195 33.3919H56.1133ZM55.2018 29.3815C55.2018 29.4336 55.3494 29.6072 55.6445 29.9023C55.9397 30.1975 56.1133 30.3451 56.1654 30.3451H59.9674C60.0195 30.3451 60.1931 30.1975 60.4883 29.9023C60.7834 29.6072 60.931 29.4336 60.931 29.3815V21.5169C60.931 21.4648 60.7834 21.2912 60.4883 20.9961C60.1931 20.701 60.0195 20.5534 59.9674 20.5534H56.1654C56.1133 20.5534 55.9397 20.701 55.6445 20.9961C55.3494 21.2912 55.2018 21.4648 55.2018 21.5169V29.3815ZM71.8945 27.2982H69.3945V33.2617H66.2174V17.6367H73.5872C73.9692 17.6367 74.2904 17.6714 74.5508 17.7409C74.8112 17.8103 75.0977 17.9579 75.4102 18.1836C75.6879 18.3746 75.9918 18.6437 76.3216 18.9909C76.6688 19.3381 76.9379 19.6419 77.1289 19.9023C77.3546 20.2148 77.5022 20.5013 77.5716 20.7617C77.6411 21.0221 77.6758 21.3433 77.6758 21.7253V23.2096C77.6758 23.5916 77.6411 23.9128 77.5716 24.1732C77.5022 24.4336 77.3546 24.7201 77.1289 25.0326C76.9379 25.3103 76.6688 25.6228 76.3216 25.9701C75.9744 26.2999 75.6706 26.5603 75.4102 26.7513C75.2713 26.8555 75.1671 26.9249 75.0977 26.9596L78.5352 33.2617H74.9935L71.8945 27.2982ZM69.3945 24.2513H73.5352C73.5872 24.2513 73.7608 24.1037 74.056 23.8086C74.3511 23.5135 74.4987 23.3398 74.4987 23.2878V21.6471C74.4987 21.5951 74.3511 21.4214 74.056 21.1263C73.7608 20.8312 73.5872 20.6836 73.5352 20.6836H69.3945V24.2513ZM90.4272 20.6836H83.3439V23.8867H90.1929V26.9336H83.3439V30.2148H90.4272V33.2617H80.1668V17.6367H90.4272V20.6836Z" fill="black"/>
              </svg>
            </ChakraLink>

            <ChakraLink href="https://creators.supercell.com/" target="_blank">
              <img src="/images/supercell_creators_grey.f699541d.svg" alt="Creators" style={{ height: "26px", width: "auto", filter: "brightness(0) invert(0.5)" }} />
            </ChakraLink>

            <ChakraLink href="https://make.supercell.com/en/" target="_blank">
              <img src="/images/supercell_make_grey.964b2d8d.svg" alt="Make" style={{ height: "33px", width: "auto", filter: "brightness(0) invert(0.5)" }} />
            </ChakraLink>

            <ChakraLink paddingRight="2" href="https://supercell.com/en/supercell-id/" target="_blank">
              <img src="/images/supercell_id_grey.62affa0b.svg" alt="Supercell ID" style={{ height: "28px", width: "auto", filter: "brightness(0) invert(0.5)" }} />
            </ChakraLink>
          </HStack>

        </Flex>
      </Box>
    </>
  );
}