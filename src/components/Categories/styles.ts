import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  margin-top: 24px;
`;

export const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  width: 70px;
  margin-left: 8px;
  padding: 16px 0;
  background-color: ${({ isSelected }) => (isSelected ? "#32B768" : "#f5faf7")};
  border: solid 1px #dde0de;
  border-radius: 10px;
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
`;
