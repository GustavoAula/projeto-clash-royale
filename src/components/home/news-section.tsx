import { Box, VStack, Heading, Flex, Link as ChakraLink, Button } from "@chakra-ui/react";
import { NewsCard } from "./news-card";

const newsItems = [
  {
    title: "Mid-March Update",
    img: "/images/small_thumb_1.png",
    href: "https://supercell.com/en/games/clashroyale/blog/news/mid-march-update/",
  },
  {
    title: "March Balance Changes",
    img: "/images/balance_changes_440x440_1.jpg",
    href: "https://supercell.com/en/games/clashroyale/blog/release-notes/march-balance-changes-2026/",
  },
];

export function NewsSection() {
  return (
    <Box w="100%" pb={0} mt={"-5.9"} borderBottomWidth={1} borderColor="gray.200">
      <VStack maxW="1200px" mx="auto" px={6} gap={6}>

        <Heading
          as="h2"
          fontSize="41px"
          fontWeight="black"
          fontFamily="mono"
          textTransform="uppercase"
          letterSpacing="tight"
          textAlign="center"
          paddingBottom={11}
          w="100%"
          pt={4}
        >
          Clash<Box as="sup" fontSize="sm" verticalAlign="super">®</Box> News
        </Heading>

        <Flex gap={6} w="100vw" flexWrap="wrap" justify="center">
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </Flex>

        <ChakraLink
          href="https://supercell.com/en/games/clashroyale/blog/"
          target="_blank"
        >
          <Button
            bg="blue.500"
            color="white"
            rounded="lg"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="medium"
            px={6}
            py={6}
            _hover={{ bg: "blue.600" }}
            marginBottom={9}
          >
            Clash Royale News
          </Button>
        </ChakraLink>

      </VStack>
    </Box>
  );
}