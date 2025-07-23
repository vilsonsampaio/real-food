import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  border: solid 1px #dde0de;
`;

export const Content = styled.SafeAreaView`
  flex-direction: row;
`;

export const NavItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Icon = styled.View`
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
`;
