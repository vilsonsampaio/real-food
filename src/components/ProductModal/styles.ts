import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  align-items: stretch;
  justify-content: flex-end;
  padding-top: 24px;
`;

const { height } = Dimensions.get("window");

export const Body = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: ${height * 0.9}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 170px;
  padding: 24px;
  background: #32b768;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const HeaderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #215b39;
  border-radius: 8px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  gap: 40px;
  padding: 24px;
  padding-top: 0;
  background: #f7f7f7;
`;

export const Photo = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: -100px;
  object-fit: contain;
`;

export const Sellers = styled.View`
  flex: 1;
  width: 100%;
  margin-top: -16px;
`;

export const Seller = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding: 0 16px;
  height: 120px;
  background-color: #fff;
  border-radius: 16px;
  border: solid 1px ${({ isSelected }) => (isSelected ? "#32B768" : "#dde0de")};
`;

export const SellerPhoto = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const SellerContent = styled.View`
  flex: 1;
  gap: 8px;
`;

export const SellerPrice = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`;

export const SellerInfo = styled.View`
  gap: 4px;
`;

export const SellerInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const SellerAbout = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Footer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const Quantity = styled.TextInput`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border: solid 1px #dde0de;
  border-radius: 8px;
  text-align: center;
`;

export const AddToCart = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 56px;
  background: #32b768;
  border-radius: 8px;
`;
