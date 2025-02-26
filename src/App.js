import Navbar from "./components/Navbar";
import Category from "./components/Category";
import SlidingImage from "./components/SlidingImage";
import ProductContainer from "./components/ProductsContainer";
import ProductContainerTwo from "./components/ProductContainerTwo";
import ProductContainerFour from "./components/ProductContainerFour";
import ProductContainerFive from "./components/ProductContainerFive";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <SlidingImage />
      <ProductContainer />
      <ProductContainerTwo />
      <ProductContainerFour />
      <ProductContainerFive/>
    </div>
  );
}

export default App;
