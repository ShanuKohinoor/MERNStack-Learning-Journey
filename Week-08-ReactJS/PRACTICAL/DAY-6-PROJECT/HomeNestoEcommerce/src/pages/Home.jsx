import ProductCard from "../component/ProductCard";
import './Home.css';
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export function Home({ products }) {
  const { search } = useContext(SearchContext);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="homePage">

      {/* HERO SECTION */}
      <div className="homeHero">
        <h1>Discover Premium Products</h1>
        <p>Elegant shopping experience with excellent collections</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="productContainer">

        {filteredProducts.length === 0 ? (
          <p className="noProducts">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </div>

    </div>
  );
}