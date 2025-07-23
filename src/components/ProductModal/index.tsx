import { FlatList, Modal } from "react-native";
import { Text } from "../Text";
import {
  AddToCart,
  Body,
  Content,
  Footer,
  Header,
  HeaderButton,
  Overlay,
  Photo,
  Quantity,
  Seller,
  SellerAbout,
  SellerContent,
  SellerInfo,
  SellerInfoItem,
  SellerPhoto,
  Sellers,
} from "./styles";
import { ArrowDown } from "../Icons/ArrowDown";
import { Heart } from "../Icons/Heart";
import { Product } from "../../mocks/products";
import { Cart } from "../Icons/Cart";
import { Pin } from "../Icons/Pin";
import { Star } from "../Icons/Star";
import { useState } from "react";
import { RadioSelected } from "../Icons/RadioSelected";
import { Radio } from "../Icons/Radio";
import { CartItem } from "../../Main";
import { formatPrice } from "../../utils/price";

interface ProductModalProps {
  selectedProduct: Product | null;
  visible: boolean;
  setVisible: (state: boolean) => void;
  onAddToCart: (item: CartItem) => void;
}

export function ProductModal({
  selectedProduct,
  visible,
  setVisible,
  onAddToCart: _onAddToCart,
}: ProductModalProps) {
  const [selectedSeller, setSelectedSeller] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function onClose() {
    setVisible(false);
    setSelectedSeller(0);
  }

  function onAddToCart() {
    if (!selectedProduct) {
      return;
    }
    const seller = selectedProduct.sellers[selectedSeller];
    _onAddToCart({
      id: selectedProduct.id,
      sellerId: seller.id,
      quantity,
    });
    onClose();
    setQuantity(1);
  }

  if (!selectedProduct) {
    return null;
  }

  return (
    <Modal transparent visible={visible} animationType="slide">
      <Overlay>
        <Body>
          <Header>
            <HeaderButton onPress={onClose}>
              <ArrowDown />
            </HeaderButton>
            <HeaderButton onPress={() => alert("Favoritar")}>
              <Heart />
            </HeaderButton>
          </Header>

          <Content>
            <Photo source={selectedProduct.image} />

            <Text weight={600} size={30} color="#52665A">
              {selectedProduct.name}
            </Text>

            <Sellers>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={selectedProduct.sellers}
                keyExtractor={(seller) => seller.id}
                renderItem={({ item: seller, index }) => {
                  const isSelected = selectedSeller === index;

                  const distance =
                    seller.distance < 1
                      ? `${seller.distance * 100}m`
                      : `${seller.distance}km`;

                  return (
                    <Seller
                      isSelected={isSelected}
                      onPress={() => setSelectedSeller(index)}
                    >
                      <SellerPhoto source={seller.image} />

                      <SellerContent>
                        <Text weight={600} size={18} color="#52665A">
                          {seller.name}
                        </Text>
                        <SellerInfo>
                          <Text weight={700} size={18} color="#32B768">
                            {formatPrice(seller.price)}/kg
                          </Text>

                          <SellerAbout>
                            <SellerInfoItem>
                              <Pin />
                              <Text color="#AAB2AD" size={10}>
                                {distance} de distância
                              </Text>
                            </SellerInfoItem>

                            <SellerInfoItem>
                              <Star />
                              <Text color="#AAB2AD" size={10}>
                                {seller.rating}
                              </Text>
                            </SellerInfoItem>
                          </SellerAbout>
                        </SellerInfo>
                      </SellerContent>

                      {isSelected ? <RadioSelected /> : <Radio />}
                    </Seller>
                  );
                }}
              />
            </Sellers>

            <Footer>
              <Quantity
                placeholderTextColor="#666"
                keyboardType="number-pad"
                value={String(quantity)}
                onChangeText={setQuantity}
                cursorColor="#32B768"
              />
              <AddToCart onPress={onAddToCart}>
                <Cart />
                <Text weight={600} size={16} color="#fff">
                  Adicionar ao carrinho
                </Text>
              </AddToCart>
            </Footer>
          </Content>
        </Body>
      </Overlay>
    </Modal>
  );
}
