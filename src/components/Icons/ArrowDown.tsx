import { SvgXml } from "react-native-svg";

export function ArrowDown() {
  const markup = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99989 10.9767L14.1249 6.85168L15.3032 8.03002L9.99989 13.3334L4.69656 8.03002L5.87489 6.85168L9.99989 10.9767Z" fill="#DAF2E4"/>
</svg>
`;

  return <SvgXml xml={markup} />;
}
