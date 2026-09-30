import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <span>
          {product.category}
        </span>

      </div>

      <div className="product-body">

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <button className="product-button">
          View Product
          <ArrowUpRight size={18} />
        </button>

      </div>

    </article>
  );
}