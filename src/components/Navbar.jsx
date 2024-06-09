import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    navigate(`/products?search=${e.target.value}`);
  };

  return (
  <Box bg="blue.500" p={4} color="white">
    <Flex maxW="1200px" mx="auto" align="center">
      <Text fontSize="xl" fontWeight="bold">Electronics Store</Text>
      <InputGroup mx={4} maxW="400px">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          bg="white"
          color="black"
        />
      </InputGroup>
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
};

export default Navbar;