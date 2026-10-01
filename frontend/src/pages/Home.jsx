import React from "react";
import { ArrowRight, MapPin, ShieldCheck, Palette, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

const categories = [
  {
    title: "Interior Walls",
    text: "Primers, plastic paints and distempers for beautiful interior walls.",
    products: [
      "Interior Water-Based Primer",
      "Plastic Paint – Super Quality",
      "Interior Plastic Paint",
      "Oil Bond Distemper"
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85"
  },

  {
    title: "Exterior Walls",
    text: "Reliable primers and paints designed to protect exterior walls.",
    products: [
      "Exterior Water-Based Primer",
      "Exterior Plastic Paint"
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85"
  },

  {
    title: "Wood & Metal",
    text: "Protective primers and finishes for wood and metal surfaces.",
    products: [
      "Enamel Solvent Primer",
      "Red Oxide Metal Primer"
    ],
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=85"
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">BRIGHTER SPACES. BETTER LIVES.</p>
          <h1>Colours that<br/><em>Build a Better</em><br/>Tomorrow</h1>
          <p className="hero-text">Quality paints for homes, businesses and professionals. Durable. Beautiful. Trusted.</p>
          <div className="hero-actions">
            <Link to="/products" className="dark-btn">Explore Products <ArrowRight size={17}/></Link>

          </div>
          <div className="hero-trust">
            <span><ShieldCheck/> Long Lasting<br/>Protection</span>
            <span><Palette/> Wide Colour<br/>Range</span>
            <span><Users/> Trusted by<br/>Professionals</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-room"></div>
        
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><p className="eyebrow">OUR PRODUCTS</p><h2>Explore Our Products</h2><p>Quality paints and protective solutions for every surface.</p></div>
          <Link to="/products" className="text-link">View All Products <ArrowRight size={16}/></Link>
        </div>
        <div className="category-grid">
          {categories.map(c => (
            <Link className="category-card" to="/products" key={c.title}>
              <img src={c.image} alt="" />
              <div><h3>{c.title}</h3><p>{c.text}</p><span><ArrowRight size={16}/></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="colour-banner">
        <div className="container colour-banner-inner">
          <div><p className="eyebrow">COLOUR YOUR WORLD</p><h2>Bring Your Ideas to Life<br/>with Our Colour Range</h2><p>Explore hundreds of shades and find the perfect colour for your space.</p><Link to="/colours" className="light-btn">Explore Colours <ArrowRight size={17}/></Link></div>
          <div className="swatches">
            <i style={{background:"#e74625"}}></i><i style={{background:"#f38b23"}}></i><i style={{background:"#ffd42e"}}></i><i style={{background:"#75b7a0"}}></i><i style={{background:"#1689ae"}}></i>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><p className="eyebrow">WHY PARKASH</p><h2>Made for the way you live</h2></div>
        </div>
        <div className="benefits">
          <div><ShieldCheck/><h3>Quality You Can Trust</h3><p>Consistent performance across every application.</p></div>
          <div><Users/><h3>Expert Support</h3><p>Guidance from selection to application.</p></div>
          <div><MapPin/><h3>Available Near You</h3><p>Growing dealer network across Haryana.</p></div>
          <div><Sparkles/><h3>For Professionals</h3><p>Special solutions for demanding projects.</p></div>
        </div>
      </section>

    
    </>
  );
}