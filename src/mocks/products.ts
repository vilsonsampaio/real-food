export const products = [
  {
    id: "1",
    name: "Maçã",
    image: require("../assets/image/apple.png"),
    sellers: [
      {
        id: "1a",
        name: "Fazenda do Seu Zé",
        image: require("../assets/image/farmer-1.jpeg"),
        price: 4.99,
        distance: 0.6,
        rating: 4.8,
      },
      {
        id: "1b",
        name: "Horta da Maria",
        image: require("../assets/image/farmer-2.jpg"),
        price: 5.29,
        distance: 1.2,
        rating: 4.2,
      },
    ],
  },
  {
    id: "2",
    name: "Laranja",
    image: require("../assets/image/orange.png"),
    sellers: [
      {
        id: "2a",
        name: "Citrus Vale",
        image: require("../assets/image/farmer-3.jpg"),
        price: 3.49,
        distance: 1.0,
        rating: 4.6,
      },
      {
        id: "2b",
        name: "Frutaria Tropical",
        image: require("../assets/image/farmer-4.jpg"),
        price: 3.79,
        distance: 2.1,
        rating: 4.4,
      },
    ],
  },
  {
    id: "3",
    name: "Banana",
    image: require("../assets/image/banana.webp"),
    sellers: [
      {
        id: "3a",
        name: "Bananal do Interior",
        image: require("../assets/image/farmer-1.jpeg"),
        price: 2.99,
        distance: 0.9,
        rating: 4.7,
      },
      {
        id: "3b",
        name: "Quitanda do João",
        image: require("../assets/image/farmer-2.jpg"),
        price: 3.15,
        distance: 1.5,
        rating: 4.3,
      },
    ],
  },
  {
    id: "4",
    name: "Melancia",
    image: require("../assets/image/watermelon.png"),
    sellers: [
      {
        id: "4a",
        name: "Sítio Santa Rita",
        image: require("../assets/image/farmer-3.jpg"),
        price: 7.89,
        distance: 2.3,
        rating: 4.6,
      },
      {
        id: "4b",
        name: "Frutas do Campo",
        image: require("../assets/image/farmer-4.jpg"),
        price: 8.25,
        distance: 1.8,
        rating: 4.5,
      },
    ],
  },
  {
    id: "5",
    name: "Manga",
    image: require("../assets/image/mango.png"),
    sellers: [
      {
        id: "5a",
        name: "Plantação do Chico",
        image: require("../assets/image/farmer-1.jpeg"),
        price: 5.49,
        distance: 1.3,
        rating: 4.9,
      },
      {
        id: "5b",
        name: "Armazém da Ju",
        image: require("../assets/image/farmer-2.jpg"),
        price: 5.75,
        distance: 0.8,
        rating: 4.6,
      },
    ],
  },
  {
    id: "6",
    name: "Limão Siciliano",
    image: require("../assets/image/lemon.png"),
    sellers: [
      {
        id: "6a",
        name: "Horta Natural",
        image: require("../assets/image/farmer-3.jpg"),
        price: 4.19,
        distance: 1.1,
        rating: 4.3,
      },
      {
        id: "6b",
        name: "Empório Verde",
        image: require("../assets/image/farmer-4.jpg"),
        price: 4.35,
        distance: 2.0,
        rating: 4.1,
      },
    ],
  },
];

export type Product = (typeof products)[number];
