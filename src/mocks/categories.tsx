import { Broccoli } from "../components/Icons/Broccoli";
import { Carrot } from "../components/Icons/Carrot";
import { IceCream } from "../components/Icons/IceCream";
import { Pineapple } from "../components/Icons/Pineapple";
import { Sandwich } from "../components/Icons/Sandwich";

export const categories = [
  {
    _id: "6372d595f9ebdda354700c8d",
    icon: <Pineapple />,
    name: "Frutas",
  },
  {
    _id: "6372d5bff9ebdda354700c90",
    icon: <Broccoli />,
    name: "Verduras",
  },
  {
    _id: "6372d5d2f9ebdda354700c92",
    icon: <Carrot />,
    name: "Legumes",
  },
  {
    _id: "6372d5dcf9ebdda354700c94",
    icon: <Sandwich />,
    name: "Lanches",
  },
  {
    _id: "6372d5d2f9ebdda354700ca92",
    icon: <IceCream />,
    name: "Sobremesas",
  },
];

export type Category = (typeof categories)[number];
