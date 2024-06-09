import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="blue.500" p={4} color="white">
    <Flex maxW="1200px" mx="auto" align="center">
      <Text fontSize="xl" fontWeight="bold">Electronics Store</Text>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
        <Link as={RouterLink} to="/products" p={2} mx={2}>Products</Link>
        <Link as={RouterLink} to="/about" p={2} mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" p={2} mx={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;