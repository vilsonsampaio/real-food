import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  border: solid 1px #dde0de;
`;

export const Content = styled.SafeAreaView``;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 8px 24px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Remove = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Resume = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
`;

export const Total = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 40px;
  background: #32b768;
  border-radius: 8px;
`;
