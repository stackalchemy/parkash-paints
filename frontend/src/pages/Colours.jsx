import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { colours } from "../data";

export default function Colours() {
  const [search, setSearch] = useState("");
  const filtered = colours.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="page">
      <section className="page-hero colours-hero">
        <div><p className="eyebrow">COLOUR YOUR SPACE</p><h1>Find Your Perfect Colour</h1><p>Explore a wide range of shades and get inspired.</p><div className="colour-search"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search colour name or code"/></div></div>
      </section>
      <section className="section container">
        <div className="section-heading"><div><p className="eyebrow">GET INSPIRED</p><h2>Popular Colour Collections</h2></div></div>
        <div className="colour-grid">
          {filtered.map(c=>(
            <article className="colour-card" key={c.name}>
              <div className="swatch-row">{c.colors.map(x=><i style={{background:x}} key={x}></i>)}</div>
              <h3>{c.name}</h3><p>{c.subtitle}</p><button className="text-link">Explore <ArrowRight size={15}/></button>
            </article>
          ))}
        </div>
      </section>
      <section className="visualizer container">
        <div><p className="eyebrow">VISUALIZE BEFORE YOU PAINT</p><h2>See how your walls will look with our colour visualizer.</h2><button className="light-btn">Try Colour Visualizer <ArrowRight size={16}/></button></div>
        <div className="visualizer-room"></div>
      </section>
    </div>
  );
}