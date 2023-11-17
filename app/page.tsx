import Address from "./components/Address";
import Advantage from "./components/Advantage";
import Bread from "./components/Bread";
import Footer from "./components/Footer";
import Geolocation from "./components/Geolocation";
import Header from "./components/Header";
import Products from "./components/Products";

export default function Page() {
  return (
    <div>
      <div className="max-w-[1440px] m-auto">
        <Header />
        <Bread />
        <Geolocation />
        <Address />
        <Products />
        <Advantage />
        <Footer />
      </div>
    </div>
  );
}
