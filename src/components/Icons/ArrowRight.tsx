import { SvgXml } from "react-native-svg";

export function ArrowRight() {
  const markup = `
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#AAB2AD"/>
</svg>
`;

  return <SvgXml xml={markup} />;
}
