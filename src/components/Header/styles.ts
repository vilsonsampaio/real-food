import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 24px;
  padding-bottom: 48px;
  background-color: #32b768;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

export const Texts = styled.View`
  flex: 1;
`;

export const NotificationButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #2b9c58;
  border-radius: 8px;
`;
