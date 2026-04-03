"use client";

import { Box, Flex, Text, Link as ChakraLink, IconButton, Carousel } from "@chakra-ui/react";
import { LuChevronRight, LuChevronLeft, LuPlay } from "react-icons/lu";
import NextImage from "next/image";

const videos = [
  { caption: "It's Time To EVOLVE!", href: "https://www.youtube.com/watch?v=1gusR1iGar8&t=1s", thumb: "https://supercell.com/images/17a98c092d968db4cff1370188609d32/maxresdefault.jpg" },
  { caption: "Super Archers!", href: "https://www.youtube.com/watch?v=hMnKVDy53e8", thumb: "https://supercell.com/images/9a1ba8268229a4857bb3fbf4cd1073f4/maxresdefault__14_.jpg" },
  { caption: "Deck the Arena!", href: "https://www.youtube.com/watch?v=2SqviHphY8A", thumb: "/images/games_clashroyale_video_deckthearena_thumbnail.f500bc2b.webp" },
  { caption: "Happy Lunar New Year! 🎊", href: "https://www.youtube.com/watch?v=RJh1fmSU7E8", thumb: "https://supercell.com/images/0e1ecd55af768addc82e98fc2cbf84bf/maxresdefault__15_.jpg" },
];

function VideoCard({ video }: { video: typeof videos[0] }) {
  return (
    <Box
      bg="white"
      boxShadow="lg"
      flex="1"
      minW="0"
      border="1px solid"
      borderColor="gray.100"
      marginTop={62}
    >
      <ChakraLink
        href={video.href}
        target="_blank"
        display="block"
        _hover={{ textDecoration: "none", "& p": { color: "gray.700" } }}
      >
        <Box position="relative">
          <NextImage
            src={video.thumb}
            alt={video.caption}
            width={1280}
            height={720}
            style={{ width: "100%", height: "470px", objectFit: "cover", display: "block" }}
            unoptimized
          />
          <Box
            position="absolute"
            inset={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="170px"
              h="170px"
              borderRadius="full"
              border="5px solid white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="transparent"
            >
              <LuPlay size={64} color="white" style={{ marginLeft: "8px", strokeWidth: "1.8px" }} />
            </Box>
          </Box>
        </Box>

        <Flex px={6} py={4} align="center" justify="space-between" minH="70px">
          <Text color="blue.500" fontWeight="medium" fontSize="md" transition="color 0.2s">
            {video.caption}
          </Text>
          <NextImage
            src="/images/bg_logo_youtube.b6c3084d.png"
            alt="YouTube"
            width={239}
            height={54}
            style={{ height: "24px", width: "auto" }}
          />
        </Flex>
      </ChakraLink>
    </Box>
  );
}

export function VideoCarousel() {
  const videoChunks = [];
  for (let i = 0; i < videos.length; i += 2) {
    videoChunks.push(videos.slice(i, i + 2));
  }

  return (
    <Box w="100%" py={12} position="relative">
      <Box maxW="1648px" mx="auto" px={6}>

        <Box display={{ base: "none", md: "block" }} position="relative" overflow="visible">
          
          <Carousel.Root 
            slidesPerPage={1} 
            spacing="120px" 
            slideCount={videoChunks.length}
          >
            <Carousel.ItemGroup 
              style={{
                transitionDuration: "0.35s",
                transitionTimingFunction: "ease-in"
              }}
            >
              {videoChunks.map((chunk, i) => (
                <Carousel.Item key={i} index={i}>
                  <Flex gap="24px" w="100%">
                    {chunk.map((v) => (
                      <Box key={v.caption} flex="1" minW="0">
                        <VideoCard video={v} />
                      </Box>
                    ))}
                  </Flex>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.Control>
              <Carousel.PrevTrigger asChild>
                <Box
                  position="absolute"
                  left="-178px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={10}
                  _disabled={{ opacity: 0, pointerEvents: "none" }}
                  transition="opacity 0.2s"
                >
                  <IconButton
                    aria-label="Anterior"
                    bg="gray.900"
                    color="white"
                    borderRadius="full"
                    w="86px"
                    h="75px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingLeft="15px"
                    _hover={{ bg: "gray.700" }}
                    style={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    <LuChevronLeft style={{ width: "32px", height: "32px" }} />
                  </IconButton>
                </Box>
              </Carousel.PrevTrigger>

              <Carousel.NextTrigger asChild>
                <Box
                  position="absolute"
                  right="-178px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex={10}
                  _disabled={{ opacity: 0, pointerEvents: "none" }}
                  transition="opacity 0.2s"
                >
                  <IconButton
                    aria-label="Próximo"
                    bg="gray.900"
                    color="white"
                    borderRadius="full"
                    w="86px"
                    h="75px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingRight="15px"
                    _hover={{ bg: "gray.700" }}
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <LuChevronRight style={{ width: "32px", height: "32px" }} />
                  </IconButton>
                </Box>
              </Carousel.NextTrigger>

              <Carousel.IndicatorGroup w="100%" justifyContent="center" mt={6} gap={3} paddingTop={8} display="flex">
                {Array.from({ length: videoChunks.length }).map((_, i) => (
                  <Carousel.Indicator
                    key={i}
                    index={i}
                    w="14px"
                    h="14px"
                    borderRadius="full"
                    bg="gray.300"
                    _current={{ bg: "blue.500" }}
                    _active={{ bg: "blue.500" }}
                    cursor="pointer"
                    css={{
                      "&[data-current]": { bg: "var(--chakra-colors-blue-500)" },
                      "&[data-selected]": { bg: "var(--chakra-colors-blue-500)" },
                      "&[data-state=active]": { bg: "var(--chakra-colors-blue-500)" }
                    }}
                  />
                ))}
              </Carousel.IndicatorGroup>
            </Carousel.Control>

          </Carousel.Root>
        </Box>

      </Box>
    </Box>
  );
}