import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero dealer-hero">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <p>
            Have a question about our products? We're here to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section container">

        <div className="section-heading">
          <div>
            <p className="eyebrow">CONTACT PARKASH PAINTS</p>
            <h2>We're Here to Help</h2>
            <p>
              Get in touch with us for product information, enquiries
              and business opportunities.
            </p>
          </div>
        </div>

        <div className="contact-layout">

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <a
              href="tel:9034022103"
              className="contact-card"
            >
              <div className="contact-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>Call Us</span>
                <h3>9034022103</h3>
                <p>Speak with us directly</p>
              </div>
            </a>

            <a
              href="mailto:ssdnravimadan@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>Email Us</span>
                <h3>ssdnravimadan@gmail.com</h3>
                <p>Send us your enquiry</p>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>Location</span>
                <h3>Parkash Paints</h3>
                <p>Serving customers since 1985</p>
              </div>
            </div>

          </div>

          {/* ENQUIRY */}
          <div className="contact-enquiry">

            <p className="eyebrow">SEND AN ENQUIRY</p>

            <h2>How can we help?</h2>

            <p>
              Contact us for product details, pricing, availability,
              dealership enquiries or any other information.
            </p>

            <div className="contact-actions">

              <a
                href="tel:9034022103"
                className="dark-btn"
              >
                Call Now
                <Phone size={17} />
              </a>

              <a
                href="mailto:ssdnravimadan@gmail.com"
                className="light-btn"
              >
                Email Us
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}