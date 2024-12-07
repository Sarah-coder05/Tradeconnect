
import Banner from "./Banner";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
// import LandingPageLayout from "./LandingPageLayout";
import Product from "./Product";

// import Footer from "../components/footer/footer";
function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Product/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default Home;