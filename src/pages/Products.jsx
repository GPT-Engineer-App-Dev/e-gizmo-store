import { Box, Text, Heading, SimpleGrid, Image, VStack, Checkbox, CheckboxGroup, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const categories = ["Smartphone", "Laptop", "Headphones"];
const brands = ["Brand A", "Brand B", "Brand C"];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const query = useQuery();

  useEffect(() => {
    const searchQuery = query.get("search")?.toLowerCase() || "";
    const filtered = sampleProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.name);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.name);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });
    setFilteredProducts(filtered);
  }, [query, selectedCategories, selectedBrands, priceRange]);

  const handleCategoryChange = (categories) => setSelectedCategories(categories);
  const handleBrandChange = (brands) => setSelectedBrands(brands);
  const handlePriceChange = (value) => setPriceRange(value);

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">Our Products</Heading>
      <Box mb={4}>
        <Text>Filter by Category:</Text>
        <CheckboxGroup onChange={handleCategoryChange}>
          <Stack direction="row">
            {categories.map(category => (
              <Checkbox key={category} value={category}>{category}</Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box mb={4}>
        <Text>Filter by Brand:</Text>
        <CheckboxGroup onChange={handleBrandChange}>
          <Stack direction="row">
            {brands.map(brand => (
              <Checkbox key={brand} value={brand}>{brand}</Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box mb={4}>
        <Text>Filter by Price:</Text>
        <Slider min={0} max={1000} step={50} defaultValue={[0, 1000]} onChangeEnd={handlePriceChange}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
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