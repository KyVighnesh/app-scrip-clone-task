import Image from "next/image";
import TopBar from "./components/TopBar/page";
import HeaderNav from "./components/Header/page";
import Banner from "./components/Banner/page";
import Products from "./components/Products/pages";
import Footer from "./components/Footer/page";
import FooterSmall from "./components/FooterSmall/page";

export default function Home() {
  return (
    <main>
      <TopBar/>
      <HeaderNav/>
      <Banner/>
      <Products/>
      <Footer/>
      <FooterSmall/>
    </main>
  );
}
