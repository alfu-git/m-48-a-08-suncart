import Banner from "@/components/homePage/banner/Banner";
import PopularProducts from "@/components/homePage/popularProducts/PopularProducts";
import SummerTips from "@/components/homePage/summerTips/SummerTips";
import TopBrands from "@/components/homePage/topBrands/TopBrands";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Banner />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
    </div>
  );
}
