import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
  padding: 0 24px;
`;

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 16px;
  padding: 16px;
  min-height: 120px;
  background-color: #fff;
  border: solid 1px #dde0de;
  border-radius: 16px;
`;

export const Photo = styled.Image`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

export const Content = styled.View`
  flex: 1;
  gap: 8px;
`;

export const Price = styled.View`
  gap: 2px;
`;

export const PriceValue = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: 2px;
`;
