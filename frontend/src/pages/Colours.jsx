import React, { useState } from "react";
import { Search, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { colours } from "../data";

export default function Colours() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = colours.filter((colour) =>
    colour.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedColours = search
    ? filtered
    : showAll
    ? filtered
    : filtered.slice(0, 12);

  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero colours-hero">
        <div>
          <p className="eyebrow">COLOUR YOUR SPACE</p>

          <h1>Find Your Perfect Colour</h1>

          <p>
            Explore our wide range of colours and find the perfect shade
            for your space.
          </p>

          <div className="colour-search">
            <Search size={18} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search colour name..."
            />
          </div>
        </div>
      </section>

      {/* COLOURS */}
      <section className="section container">

        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLOUR RANGE</p>

            <h2>Explore Our Colours</h2>

            <p>
              Discover shades for every room, mood and style.
            </p>
          </div>
        </div>

        <div className="colour-grid">

          {displayedColours.map((colour) => (
            <article className="colour-card" key={colour.name}>

              <div
                className="colour-large-swatch"
                style={{
                  backgroundColor: colour.hex
                }}
              />

              <div className="colour-card-content">

                <div>
                  <h3>{colour.name}</h3>

                  <span className="colour-family">
                    {colour.family}
                  </span>
                </div>

                <p>{colour.hex}</p>

              </div>

            </article>
          ))}

        </div>

        {/* VIEW MORE */}
        {!search && colours.length > 12 && (
          <div className="more-colours">

            <button
              className="dark-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More Colours"}

              {showAll ? (
                <ChevronUp size={17} />
              ) : (
                <ChevronDown size={17} />
              )}
            </button>

          </div>
        )}

        {/* SEARCH EMPTY */}
        {search && filtered.length === 0 && (
          <div className="no-colours">
            <h3>No colours found</h3>

            <p>
              Try searching for another colour name.
            </p>
          </div>
        )}

      </section>

      {/* VISUALIZER */}
      <section className="visualizer container">

        <div>
          <p className="eyebrow">
            VISUALIZE BEFORE YOU PAINT
          </p>

          <h2>
            See how your walls will look with our colour range.
          </h2>

          <button className="light-btn">
            Try Colour Visualizer
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="visualizer-room"></div>

      </section>

    </div>
  );
}