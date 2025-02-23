import Navbar from "./components/Navbar";
import Category from "./components/Category";
import SlidingImage from "./components/SlidingImage";
import ProductContainer from "./components/ProductsContainer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <SlidingImage />
      <ProductContainer/>
    </div>
  );
}

export default App;
