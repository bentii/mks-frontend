import "./_Product.styles.scss";
import { ProductInterface } from "../../types/interfaces";
import Icon from "../../assets/shoppingBag.svg";
import Image from "next/image";

const Product: React.FC<{ addToCart: (product: ProductInterface)=> any } & ProductInterface> = (props) => {
  const { addToCart, ...product } = props;
  return (
    <div className="Product">
      <img className="ImageProduct" alt={props.name} src={props.photo} />
      <div className="AllTextContainerProduct">
        <div className="TitleAndPriceContainerProduct">
          <h2 className="H2Product">
            {props.brand} {props.name}
          </h2>
          <div className="PriceContainerProduct">
            <p className="PriceProduct">{props.price}</p>
          </div>
        </div>
        <p className="DescriptionProduct">{props.description}</p>
      </div>
      <button className="ButtonProduct" onClick={() => addToCart(product)}>
        <Image className="IconProduct" src={Icon} alt="Shooping Bag" />
        COMPRAR
      </button>
    </div>
  );
};

export default Product;
