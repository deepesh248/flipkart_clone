import Navbar from "./components/Navbar";
import Category from "./components/Category";
import SlidingImage from "./components/SlidingImage";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <SlidingImage />
      <Product/>
    </div>
  );
}

export default App;
