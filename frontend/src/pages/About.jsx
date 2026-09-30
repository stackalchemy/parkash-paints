import React from "react";
import { ShieldCheck, Users, MapPin, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="page">
      <section className="page-hero about-hero">
        <div><p className="eyebrow">WHO WE ARE</p><h1>About Parkash Paints</h1><p>Building colourful spaces for a brighter tomorrow.</p></div>
      </section>
      <section className="section container story">
        <div><div className="story-art"></div></div>
        <div><p className="eyebrow">OUR STORY</p><h2>Colour, quality and trust.</h2><p>Parkash Paints is built around a simple idea: great spaces start with dependable products. We combine thoughtful colour, practical performance and service that helps customers make confident choices.</p><p>From homes and shops to professional projects, our aim is to make quality paint more accessible while growing with the communities we serve.</p></div>
      </section>
      <section className="section container">
        <div className="about-values">
          <div><ShieldCheck/><h3>Quality Products</h3><p>Consistent performance you can depend on.</p></div>
          <div><MapPin/><h3>Wide Availability</h3><p>Growing access through trusted retailers.</p></div>
          <div><Users/><h3>Customer Focus</h3><p>Support for homeowners and professionals.</p></div>
          <div><HeartHandshake/><h3>Growing Together</h3><p>Building lasting relationships with our community.</p></div>
        </div>
      </section>
      <section className="dark-cta container"><div><p className="eyebrow">LET'S BUILD TOGETHER</p><h2>Let's Build a More Colourful World</h2><p>Join hands with Parkash Paints for quality, trust and lasting relationships.</p></div><button className="light-btn">Contact Us</button></section>
    </div>
  );
}