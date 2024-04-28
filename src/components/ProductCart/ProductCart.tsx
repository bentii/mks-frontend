import "./_ProductCart.styles.scss";
import Counter from "../Counter/Counter";
import IconWhite from "../../assets/close-white.svg";
import IconBlack from "../../assets/close-black.svg";
import Image from "next/image";

const ProductCart = () => {
  return (
    <div className="ProductCart">
      <img
        className="ImageProductCart"
        alt="Apple Watch"
        src="/images/apple-watch.png"
      />
      <div className="TitleProductCart">
        <h2>Apple Watch Series 4 GPS</h2>
      </div>
      <div className="QuantityContrainerProductCart">
        <span className="QuantityProductCart">Qtd:</span>
        <Counter />
      </div>
      <h2 className="PriceProductCart">R$300</h2>
      <button className="RemoveProductCart">
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
