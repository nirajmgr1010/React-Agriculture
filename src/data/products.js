import Tomato from "../assets/Images/Tomato.jpg";
import Spinach from "../assets/Images/spinach.jpg";
import Carrot from "../assets/Images/Carrot.jpg";
import farmers from "./farmers";
const products = [
  {
    id: 1,
    name: "Organic Tomato",
    category: "Vegetable",
    price: 120,
    rating: 4.5,
    image: Tomato,
    farmersid:1
  },
  {
    id: 2,
    name: "Fresh Spinach",
    category: "Vegetable",
    price: 80,
    rating: 4.2,
    image: Spinach,
    farmersid:2
  },
  {
    id: 3,
    name: "Organic Carrot",
    category: "Fruit",
    price: 250,
    rating: 4.8,
    image: Carrot,
    farmersid:3
  },
];

export default products;