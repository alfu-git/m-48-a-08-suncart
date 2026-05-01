import Banner from "@/components/homePage/banner/Banner";
import Footer from "@/components/homePage/footer/Footer";
import PopularProducts from "@/components/homePage/popularProducts/PopularProducts";
import SummerTips from "@/components/homePage/summerTips/SummerTips";
import TopBrands from "@/components/homePage/topBrands/TopBrands";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
      <Footer />
    </>
  );
}
