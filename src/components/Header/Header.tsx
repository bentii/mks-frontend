import "./_Header.styles.scss";
import Icon from "../../assets/vector.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { CartStateInterface } from "@/types/interfaces";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const Header = ({ toggleCart }: { toggleCart: () => void }) => {
  const [cartitems, setCartitems] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: CartStateInterface[] = useAppSelector((state) => state.cart);

  useEffect(() => {
    setCartitems(cartArray.length);
  }, [cartArray]);

  return (
    <header className="Header">
      <div className="LogoContainerHeader">
        <h1 className="H1Header">MKS</h1>
        <h2 className="H2Header">Sistemas</h2>
      </div>
      <button className="CartButtonHeader" onClick={toggleCart}>
        <Image className="IconHeader" src={Icon} alt="Cart" />
        <p className="PHeader">{cartArray.length}</p>
      </button>
    </header>
  );
};

export default Header;
