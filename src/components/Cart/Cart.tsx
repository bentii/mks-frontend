import "./_Cart.styles.scss";
import Icon from "../../assets/close-white.svg";
import Image from "next/image";
import ProductCart from "../ProductCart/ProductCart";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="HeaderContainerCart">
        <div className="HeaderTitleContainerCart">
          <h1 className="H1Cart">
            Carrinho <br /> de compras
          </h1>
        </div>
        <div className="HeaderButtonContainerCart">
          <button className="ButtonCart">
            <Image className="IconCloseCart" src={Icon} alt="Close Button" />
          </button>
        </div>
      </div>
      <div className="ProductContainerCart">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div className="TotalContainerCart">
        <p>Total</p>
        <p className="TotalPriceCart">R$ 100,00</p>
      </div>
      <button className="BuyButtonCart">Finalizar Compra</button>
    </div>
  );
};

export default Cart;
