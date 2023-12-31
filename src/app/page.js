import Banner from "./components/Banner/Banner";
import BannerBottom from "./components/Banner/BannerBottom";
import BestSellers from "./components/home/BestSellers/BestSellers";
import NewArrivals from "./components/home/NewArrivals/NewArrivals";
import Sale from "./components/home/Sale/Sale";
import SpecialOffers from "./components/home/SpecialOffers/SpecialOffers";
import YearProduct from "./components/home/YearProduct/YearProduct";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div>
        <div className="max-w-container mx-auto px-4">
          <Sale />
          <NewArrivals />
          <BestSellers />
          <YearProduct />
          <SpecialOffers />
        </div>
      </div>
    </div>
  )
}
