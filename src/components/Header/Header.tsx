import "./_Header.styles.scss";
import Icon from "../../assets/vector.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="Header">
      <div className="LogoContainerHeader">
        <h1 className="H1Header">MKS</h1>
        <h2 className="H2Header">Sistemas</h2>
      </div>
      <button className="CartButtonHeader">
        <Image className="IconHeader" src={Icon} alt="Cart" />
        <p className="PHeader">0</p>
      </button>
    </header>
  );
};

export default Header;
