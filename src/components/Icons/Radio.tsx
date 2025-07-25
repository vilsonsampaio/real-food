import { SvgXml } from "react-native-svg";

export function Radio() {
  const markup = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11.5" stroke="#DADADA"/>
</svg>
`;

  return <SvgXml xml={markup} />;
}
