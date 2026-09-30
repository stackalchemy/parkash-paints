import React from "react";
import { ArrowRight, ShieldCheck, Users, Award, Calendar } from "lucide-react";

export default function About() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero about-hero">
        <div>
          <p className="eyebrow">ABOUT PARKASH PAINTS</p>

          <h1>Building Trust Since 1985</h1>

          <p>
            More than four decades of experience in paints, coatings
            and surface solutions.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section container">
        <div className="story">

          <div className="story-art"></div>

          <div>
            <p className="eyebrow">OUR JOURNEY</p>

            <h2>More Than Four Decades of Experience</h2>

            <p>
              Operating since <strong>1985</strong>, Parkash Paints has
              built its journey around quality, consistency and long-term
              relationships.
            </p>

            <p>
              Over the years, we have continued to develop our range of
              paints, coatings and surface solutions to meet the changing
              needs of homes, businesses, professionals and construction
              projects.
            </p>

            <p>
              With experience spanning generations, our focus remains
              simple — delivering reliable products, beautiful finishes
              and quality that customers can trust.
            </p>

          </div>

        </div>
      </section>

      {/* 1985 HIGHLIGHT */}
      <section className="about-history container">

        <div className="history-content">
          <p className="eyebrow">OUR LEGACY</p>

          <h2>Since 1985</h2>

          <p>
            From our beginnings in 1985 to today, Parkash Paints has
            continued its journey with a commitment to quality and
            dependable surface solutions.
          </p>
        </div>

        <div className="history-year">
          <Calendar size={30} />
          <strong>1985</strong>
          <span>Established</span>
        </div>

      </section>

      {/* VALUES */}
      <section className="section container">

        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE STAND FOR</p>
            <h2>Built on Quality & Trust</h2>
          </div>
        </div>

        <div className="about-values">

          <div>
            <ShieldCheck />
            <h3>Quality</h3>
            <p>
              Consistent products designed to deliver reliable
              performance and lasting finishes.
            </p>
          </div>

          <div>
            <Users />
            <h3>Relationships</h3>
            <p>
              Building long-term relationships with customers,
              professionals and partners.
            </p>
          </div>

          <div>
            <Award />
            <h3>Experience</h3>
            <p>
              More than four decades of experience in the paints
              and coatings industry.
            </p>
          </div>

          <div>
            <ArrowRight />
            <h3>Moving Forward</h3>
            <p>
              Combining our experience with modern products and
              solutions for today's requirements.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}