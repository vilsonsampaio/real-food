/* eslint-disable @typescript-eslint/no-require-imports */
import { useFonts } from "expo-font";
import { Main } from "./src/Main";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Jost-400": require("./src/assets/fonts/Jost-Regular.ttf"),
    "Jost-500": require("./src/assets/fonts/Jost-Medium.ttf"),
    "Jost-600": require("./src/assets/fonts/Jost-SemiBold.ttf"),
    "Jost-700": require("./src/assets/fonts/Jost-Bold.ttf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Main />
    </>
  );
}
