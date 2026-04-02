import { Box, VStack, Heading, Link as ChakraLink, Button } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

export function CareersSection() {
  return (
    <Box
      w="100%"
      position="relative"
      h="193px"
      overflow="visible"
      style={{
        background: "linear-gradient(180deg, #245FC6 0%, #2887F0 100%)",
      }}
    >
      {/* Texto centralizado */}
      <Box
        position="absolute"
        left="30%"
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex={1}
        textAlign="center"
      >
        <VStack align="center" gap={4}>
          <Heading
            as="h2"
            fontSize="36px"
            fontWeight="900"
            fontFamily="'Supercell', sans-serif"
            color="white"
            textTransform="uppercase"
            letterSpacing="tighter"
            whiteSpace="nowrap"
            paddingBottom={3}
          >
            Interested in working with us?
          </Heading>
          <ChakraLink href="https://supercell.com/en/careers/#join" asChild>
            <Button
              bg="white"
              color="black"
              rounded="md"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              px={6}
              py={5}
            >
              See all positions
            </Button>
          </ChakraLink>
        </VStack>
      </Box>

      {/* Mini Pekka */}
      <Box
        position="absolute"
        right="23.5%"
        bottom="-19%"
        zIndex={2}
        h="280px"
      >
        <img
          src="/images/mini_pekka_fl.9f294fd5.png"
          alt="Mini Pekka"
          style={{ height: "245px", width: "auto" }}
        />
      </Box>

    </Box>
  );
}