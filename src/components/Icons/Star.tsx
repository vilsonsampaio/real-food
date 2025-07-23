import { SvgXml } from "react-native-svg";

export function Star() {
  const markup = `
 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_24_624)">
<path d="M5.00005 7.61161L2.0613 9.25661L2.71755 5.95328L0.244629 3.66661L3.58921 3.26994L5.00005 0.211609L6.41088 3.26994L9.75546 3.66661L7.28255 5.95328L7.9388 9.25661L5.00005 7.61161ZM5.00005 6.65661L6.76963 7.64703L6.37421 5.65828L7.86296 4.28119L5.84921 4.04244L5.00005 2.20119L4.15088 4.04286L2.13713 4.28119L3.62588 5.65828L3.23046 7.64703L5.00005 6.65661Z" fill="#AAB2AD"/>
</g>
<defs>
<clipPath id="clip0_24_624">
<rect width="10" height="10" fill="white" transform="translate(0 0.0032959)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={markup} />;
}
