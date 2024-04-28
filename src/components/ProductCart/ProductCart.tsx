import "./_ProductCart.styles.scss";
import Counter from "../Counter/Counter";
import IconWhite from "../../assets/close-white.svg";
import IconBlack from "../../assets/close-black.svg";
import Image from "next/image";
import { CartStateInterface, ProductInterface } from "@/types/interfaces";
import { updateCart } from "@/redux/features/cart-slice";
import Cart from "../Cart";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const ProductCart = ({ product }: { product: CartStateInterface }) => {
  const [cartItems, setCartItems] = useState<CartStateInterface[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: CartStateInterface[] = useAppSelector((state) => state.cart);

  useEffect(() => {
    setCartItems(cartArray);
  }, [cartArray]);

  const incrementCartItem = (productId: number) => {
    let tempCartItems = cartArray.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(updateCart(tempCartItems));
  };

  const decrementCartItem = (productId: number) => {
    let tempCartItems = cartArray.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispatch(updateCart(tempCartItems));
  };

  const removeCartItem = (productId: number) => {
    let tempCartItems = cartArray.filter((item) => item.id !== productId);
    dispatch(updateCart(tempCartItems));
  };

  return (
    <div className="ProductCart">
      <img className="ImageProductCart" alt="Apple Watch" src={product.photo} />
      <div className="TitleProductCart">
        <h2>
          {product.brand} {product.name}
        </h2>
      </div>
      <div className="QuantityContrainerProductCart">
        <span className="QuantityProductCart">Qtd:</span>
        <Counter
          addOne={() => incrementCartItem(product.id)}
          removeOne={() => decrementCartItem(product.id)}
          quantity={product.quantity}
        />
      </div>
      <h2 className="PriceProductCart">R${product.price}</h2>
      <button
        className="RemoveProductCart"
        onClick={() => removeCartItem(product.id)}
      >
        <Image
          className="IconRemoveProductCart smd:hidden"
          src={IconBlack}
          alt="Remove Pruduct Button"
        />
        <Image
          className="IconRemoveProductCart lg:block"
          src={IconWhite}
          alt="Remove Pruduct Button"
        />
      </button>
    </div>
  );
};

export default ProductCart;
