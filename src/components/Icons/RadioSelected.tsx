import { SvgXml } from "react-native-svg";

export function RadioSelected() {
  const markup = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11.5" stroke="#DADADA"/>
<circle cx="12" cy="12" r="6" fill="#32B768"/>
</svg>
`;

  return <SvgXml xml={markup} />;
}
