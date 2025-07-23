import { FlatList } from "react-native";
import { Text } from "../Text";
import { Container, Content, Photo, Price, Product } from "./styles";
import { Product as ProductType } from "../../mocks/products";
import { ArrowRight } from "../Icons/ArrowRight";
import { Dispatch, SetStateAction } from "react";
import { formatPrice } from "../../utils/price";

interface ProductsProps {
  products: ProductType[];
  setSelectedProduct: Dispatch<SetStateAction<ProductType | null>>;
}

export function Products({ products, setSelectedProduct }: ProductsProps) {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(product) => product.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item: product }) => {
          const minPrice = product.sellers.reduce((acc, cur) => {
            if (cur.price < acc) {
              return cur.price;
            }

            return acc;
          }, Infinity);

          return (
            <Product
              key={product.id}
              onPress={() => setSelectedProduct(product)}
            >
              <Photo source={product.image} />

              <Content>
                <Text weight={600} size={18} color="#52665A">
                  {product.name}
                </Text>

                <Price>
                  <Text size={10}>ofertas a partir de</Text>

                  <Text weight={700} size={18} color="#32B768">
                    {formatPrice(minPrice)}/kg
                  </Text>
                </Price>
              </Content>

              <ArrowRight />
            </Product>
          );
        }}
      />
    </Container>
  );
}
