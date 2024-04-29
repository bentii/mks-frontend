import "./_Cart.styles.scss";
import Icon from "../../assets/close-white.svg";
import Image from "next/image";
import ProductCart from "../ProductCart/ProductCart";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { CartStateInterface } from "@/types/interfaces";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Cart = ({ toggleCart }: { toggleCart: () => void }) => {
  const [cartItems, setCartItems] = useState<CartStateInterface[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: CartStateInterface[] = useAppSelector((state) => state.cart);
  const total = Math.floor(cartArray.reduce((sum, product) => sum + product.price * product.quantity, 0));

  useEffect(() => {
    setCartItems(cartArray)
  }, [cartArray]);
  
  return (
    <div className="Cart">
      <div className="HeaderContainerCart">
        <div className="HeaderTitleContainerCart">
          <h1 className="H1Cart">
            Carrinho <br /> de compras
          </h1>
        </div>
        <div className="HeaderButtonContainerCart">
          <button className="ButtonCart" onClick={toggleCart} >
            <Image className="IconCloseCart" src={Icon} alt="Close Button"/>
          </button>
        </div>
      </div>
      <div className="ProductContainerCart">
        {cartItems.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      <div className="TotalContainerCart">
        <p>Total</p>
        <p className="TotalPriceCart">R$ {total}</p>
      </div>
      <button className="BuyButtonCart" onClick={() => alert("Por favor me contrate, obrigado")}>Finalizar Compra</button>
    </div>
  );
};

export default Cart;