import Address from "./components/Address";
import Advantage from "./components/Advantage";
import Bread from "./components/Bread";
import Geolocation from "./components/Geolocation";
import Products from "./components/Products";

export default function Page() {
  return (
    <div className="min-h-full flex flex-col">
      <Bread />
      <Geolocation />
      <Address />
      <Products />
      <Advantage />
    </div>
  );
}
