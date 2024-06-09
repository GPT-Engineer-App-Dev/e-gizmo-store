import { Box, Text, Heading, SimpleGrid, Image, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const query = useQuery();

  useEffect(() => {
    const searchQuery = query.get("search")?.toLowerCase() || "";
    setFilteredProducts(
      sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      )
    );
  }, [query]);

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">Our Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack spacing={2} mt={4}>
              <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;