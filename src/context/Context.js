import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Notebook",
      price: 45,
      image: "/images/notebook.jpg",
      inStock: 6,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "2",
      name: "Gel Pen Set",
      price: 25,
      image: "/images/pen.jpg",
      inStock: 3,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "3",
      name: "Eraser",
      price: 10,
      image: "/images/eraser.jpg",
      inStock: 5,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "4",
      name: "Scale",
      price: 15,
      image: "/images/scale.jpg",
      inStock: 2,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "5",
      name: "Color Pencils",
      price: 80,
      image: "/images/colors.jpg",
      inStock: 7,
      fastDelivery: true,
      ratings: 4,
    },
    {
    id: "6",
    name: "Sticky Notes",
    price: 30,
    image: "/images/sticky_notes.jpg",
    inStock: 8,
    fastDelivery: true,
    ratings: 4,
  },
  {
    id: "7",
    name: "Highlighters",
    price: 60,
    image: "/images/highlighters.jpg",
    inStock: 3,
    fastDelivery: false,
    ratings: 5,
  },
  {
    id: "8",
    name: "Drawing Compass",
    price: 55,
    image: "/images/compass.jpg",
    inStock: 4,
    fastDelivery: true,
    ratings: 3,
  },
  {
    id: "9",
    name: "Stapler",
    price: 90,
    image: "/images/stapler.jpg",
    inStock: 2,
    fastDelivery: false,
    ratings: 4,
  },
  {
    id: "10",
    name: "Clipboard",
    price: 50,
    image: "/images/clipboard.jpg",
    inStock: 6,
    fastDelivery: true,
    ratings: 2,
  },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
