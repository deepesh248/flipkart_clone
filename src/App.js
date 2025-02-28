import Navbar from "./components/Navbar";
import Category from "./components/Category";
import SlidingImage from "./components/SlidingImage";
import ProductContainer from "./components/ProductsContainer";
import ProductContainerTwo from "./components/ProductContainerTwo";
import ProductContainerFour from "./components/ProductContainerFour";
import ProductContainerFive from "./components/ProductContainerFive";
import TopStories from "./components/TopStories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <SlidingImage />
      <ProductContainer />
      <ProductContainerTwo />
      <ProductContainerFour />
      <ProductContainerFive />
      <TopStories />
      <Footer/>
    </div>
  );
}

export default App;
