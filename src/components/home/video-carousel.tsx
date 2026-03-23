"use client";

import { useState } from "react";
import { Box, Flex, Text, HStack, Link as ChakraLink, IconButton } from "@chakra-ui/react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
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
      <ChakraLink href={video.href} target="_blank" display="block">
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
              border="3px solid white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="transparent"
            >
              <Box
                w={0}
                h={0}
                ml="6px"
                style={{
                  borderTop: "14px solid transparent",
                  borderBottom: "14px solid transparent",
                  borderLeft: "22px solid white",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Flex px={6} py={4} align="center" justify="space-between" minH="70px">
          <Text color="blue.500" fontWeight="medium" fontSize="md" _hover={{ color: "gray.700" }}>
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
  const [current, setCurrent] = useState(0);
  const pairs = [videos.slice(0, 2), videos.slice(2, 4)];

  return (
    <Box w="100%" py={12} position="relative">
      <Box maxW="1600px" mx="auto" px={6}>

        <Box display={{ base: "none", md: "block" }} position="relative" overflow="visible">

          <Box overflow="hidden">
            <Box
              display="flex"
              style={{
                transform: `translateX(-${current * 110}%)`,
                transition: "transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
              }}
              gap="10%"
            >
              {pairs.map((pair, i) => (
                <Box key={i} minW="100%" display="flex" gap={6}>
                  {pair.map((v) => (
                    <VideoCard key={v.caption} video={v} />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Botão próximo */}
          {current < pairs.length - 1 && (
            <Box
              position="absolute"
              right="-178px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
            >
              <IconButton
                aria-label="Próximo"
                bg="gray.900"
                color="white"
                borderRadius="full"
                w="65px"
                h="75px"
                onClick={() => setCurrent(current + 1)}
                _hover={{ bg: "gray.700" }}
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <LuChevronRight style={{ width: "32px", height: "32px" }} />
              </IconButton>
            </Box>
          )}

          {/* Botão anterior */}
          {current > 0 && (
            <Box
              position="absolute"
              left="-178px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
            >
              <IconButton
                aria-label="Anterior"
                bg="gray.900"
                color="white"
                borderRadius="full"
                w="65px"
                h="75px"
                onClick={() => setCurrent(current - 1)}
                _hover={{ bg: "gray.700" }}
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <LuChevronLeft style={{ width: "32px", height: "32px" }} />
              </IconButton>
            </Box>
          )}

          {/* Dots */}
          <HStack justify="center" mt={6} gap={3} paddingTop={8}>
            {pairs.map((_, i) => (
              <Box
                key={i}
                w="14px"
                h="14px"
                borderRadius="full"
                bg={current === i ? "blue.500" : "gray.300"}
                cursor="pointer"
                onClick={() => setCurrent(i)}
              />
            ))}
          </HStack>
        </Box>

      </Box>
    </Box>
  );
}