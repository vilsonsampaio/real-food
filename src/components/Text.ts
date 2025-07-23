import styled from "styled-components/native";

interface TextProps {
  weight?: "400" | "500" | "600" | "700";
  color?: string;
  size?: number;
  opacity?: number;
  align?: string;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => (weight ? `Jost-${weight}` : "Jost-400")};
  color: ${({ color }) => color || "#5C6660"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ align }) => align || "initial"};
`;
