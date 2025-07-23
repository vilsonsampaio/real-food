import { Dispatch, SetStateAction, useState } from "react";
import { Text } from "../Text";
import {
  Button,
  Container,
  Content,
  Image,
  Info,
  Item,
  Remove,
  Resume,
  Total,
} from "./styles";
import { CartItem } from "../../Main";
import { products } from "../../mocks/products";
import { Minus } from "../Icons/Minus";
import { ConfirmationModal } from "../ConfirmationModal";
import { formatPrice } from "../../utils/price";

interface CartProps {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}
export function Cart({ cart, setCart }: CartProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!cart.length) {
    return null;
  }

  const onRemoveItem = (index: number) => {
    setCart((prevState) =>
      [...prevState].filter((_, cartIndex) => index !== cartIndex)
    );
  };

  const total = cart.reduce((acc, cur) => {
    const product = products.filter(({ id }) => id === cur.id)[0];
    const price =
      product.sellers.filter(({ id }) => id === cur.sellerId)[0].price *
      cur.quantity;

    return acc + price;
  }, 0);

  return (
    <>
      <ConfirmationModal
        visible={isConfirmed}
        onConfirmed={() => {
          setIsConfirmed(false);
          setCart([]);
        }}
      />

      <Container>
        <Content>
          {cart.map((item, index) => {
            const product = products.filter(
              (product) => product.id === item.id
            )[0];
            const price =
              product.sellers.filter((seller) => seller.id === item.sellerId)[0]
                .price * item.quantity;

            return (
              <Item key={`cart-${index}`}>
                <Image source={product.image} />

                <Text size={12}>{item.quantity}kg</Text>

                <Info>
                  <Text weight={600}>{product.name}</Text>
                  <Text>{formatPrice(price)}</Text>
                </Info>

                <Remove onPress={() => onRemoveItem(index)}>
                  <Minus />
                </Remove>
              </Item>
            );
          })}
          <Resume>
            <Total>
              <Text size={14}>Total</Text>
              <Text weight={600}>{formatPrice(total)}</Text>
            </Total>

            <Button onPress={() => setIsConfirmed(true)}>
              <Text weight={600} color="#fff">
                Finalizar compra
              </Text>
            </Button>
          </Resume>
        </Content>
      </Container>
    </>
  );
}
