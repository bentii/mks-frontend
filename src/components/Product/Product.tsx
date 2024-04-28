import "./_Product.styles.scss";
import Icon from "../../assets/shoppingBag.svg";
import Image from "next/image";

const Product = () => {
  return (
    <div className="Product">
      <img
        className="ImageProduct"
        alt="Apple Watch"
        src="/images/apple-watch.png"
      />
      <div className="AllTextContainerProduct">
        <div className="TitleAndPriceContainerProduct">
          <h2 className="H2Product">Apple Watch Series 4 GPS</h2>
          <div className="PriceContainerProduct">
            <p className="PriceProduct">R$399</p>
          </div>
        </div>
        <p className="DescriptionProduct">
          Redesigned from scratch and completely revised.
        </p>
      </div>
      <button className="ButtonProduct">
        <Image className="IconProduct" src={Icon} alt="Shooping Bag" />
        COMPRAR
      </button>
    </div>
  );
};

export default Product;
