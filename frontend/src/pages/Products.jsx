import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Interior",
    "Exterior",
    "Wood & Metal",
    "Industrial",
    "Construction & Tile"
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="products-page">

      {/* Header */}
      <div className="products-header">
        <div>
          <h1>Our Products</h1>
          <p>
            Explore our range of paints, primers, coatings and construction
            products.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="products-controls">

        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-icon">
          <SlidersHorizontal size={20} />
        </div>

      </div>

      {/* Categories */}
      <div className="category-filters">

        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Product count */}
      <div className="product-count">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </div>

      {/* Products */}
      <div className="products-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>
              Try searching for another product or selecting a different
              category.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}