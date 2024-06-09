import { Box, Text, Heading, VStack, Flex, Input, Button } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>Contact Us</Heading>
      <Text fontSize="lg" mb={6}>
        Have any questions? We'd love to hear from you.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Get in Touch</Heading>
      <VStack spacing={5}>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Input placeholder="Your Message" />
        <Button colorScheme="blue">Send Message</Button>
      </VStack>
    </Box>
  </Box>
);

export default Contact;