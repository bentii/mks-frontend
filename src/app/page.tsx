"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Cart from "../components/Cart";
import "../styles/_globals.scss";
import { CartStateInterface, ProductInterface } from "../types/interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { updateCart } from "@/redux/features/cart-slice";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCartVisible, setCartVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: CartStateInterface[] = useAppSelector((state) => state.cart);

  const toggleCartVisibility: () => void = () => {
    setCartVisible(!isCartVisible);
  };

  useEffect(() => {
    console.log("cartArray", cartArray);
  }, [cartArray]);

  const addToCartHandler = (product: ProductInterface) => {
    const itemIndex = cartArray.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedCart = cartArray.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      dispatch(updateCart(updatedCart));
    } else {
      const newCartItem = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        photo: product.photo,
        price: product.price,
        quantity: 1,
      };
      dispatch(updateCart([...cartArray, newCartItem]));
    }
  };

  console.log(isCartVisible);
  return (
    <>
      <Header toggleCart={toggleCartVisibility} />
      {isCartVisible && (
        <Cart toggleCart={toggleCartVisibility} />
      )}
      <Products addToCart={addToCartHandler} />
      <Footer />
    </>
  );
}
