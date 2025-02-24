import Navbar from "./components/Navbar";
import Category from "./components/Category";
import SlidingImage from "./components/SlidingImage";
import ProductContainer from "./components/ProductsContainer";
import ProductTwo from "./components/ProductTwo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <SlidingImage />
      <ProductContainer />
      <ProductTwo/>
    </div>
  );
}

export default App;
