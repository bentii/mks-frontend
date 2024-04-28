import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Cart from "../components/Cart";
import "../styles/_globals.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </>
  );
}
