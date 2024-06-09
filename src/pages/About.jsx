import { Box, Text, Heading, VStack, Flex } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Our Store</Heading>
      <Text fontSize="lg" mb={6}>
        Welcome to our electronics e-commerce store. We offer a wide range of electronic products to meet all your needs.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Our Mission</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>To provide the best electronic products at competitive prices.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>To ensure customer satisfaction with top-notch service.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>To stay updated with the latest technology trends.</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;