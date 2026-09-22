import styles from "./landing.module.css";
import { useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────
// Palette: warm walnut base, brass accent, cream panels
// Espresso #241C14 — hero bg, footer
// Walnut   #3B2E22 — cards, sections
// Brass    #C08A3E — CTA, highlights
// Caramel  #A9744A — icons, hover
// Cream    #EFE6D8 — subtle bg panels
// White    #FBF7F0 — text on dark, page bg
// Taupe    #B8A78E — muted text

const COLORS = {
  navy: "#241C14",
  steel: "#3B2E22",
  accent: "#C08A3E",
  mid: "#A9744A",
  light: "#EFE6D8",
  white: "#FBF7F0",
  gray: "#B8A78E",
  cardBg: "#2E2418",
};

const services = [
  { icon: "📐", title: "Custom Cabinetry Design", desc: "One-on-one design consultations, 3D renderings, and material selection tailored to your kitchen's layout, style, and budget." },
  { icon: "📏", title: "Space Planning", desc: "Full kitchen layout planning — work triangles, storage optimization, and traffic flow for cooks of every kind." },
  { icon: "🏭", title: "In-House Manufacturing", desc: "Cabinets built at our own facility with CNC precision, solid wood construction, and quality control at every step." },
  { icon: "🪵", title: "Countertops & Surfaces", desc: "Quartz, granite, butcher block, and porcelain fabrication and installation, matched to your cabinetry and finishes." },
  { icon: "🔩", title: "Hardware & Finishes", desc: "Soft-close hinges and slides, pulls and knobs, and a full range of paints, stains, and veneers from trusted suppliers." },
  { icon: "🛠️", title: "Installation & Fitting", desc: "Licensed installation crews handle delivery, precision fitting, and final walkthrough so everything closes and aligns perfectly." },
  { icon: "🧊", title: "Islands & Custom Storage", desc: "Kitchen islands, pantry systems, pull-out organizers, and built-ins designed around how you actually cook and store." },
  { icon: "📋", title: "Renovation Project Management", desc: "Coordination with contractors, electricians, and plumbers so your kitchen remodel stays on schedule and on budget." },
];

const materialHighlights = [
  { label: "Wood Species", items: ["White Oak", "Hard Maple", "Walnut", "Cherry"] },
  { label: "Surfaces", items: ["Quartz", "Granite", "Butcher Block", "Porcelain"] },
  { label: "Hardware", items: ["Blum", "Hettich", "Grass", "Top Knobs"] },
  { label: "Styles", items: ["Shaker", "Modern Slab", "Farmhouse", "Transitional"] },
];

export default function AlderwoodKitchensLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
  <>
  <div className={styles["kitchen-page"]}>
    {/* NAV */}
    <nav className={styles["kitchen-nav"]}>
      <div className={styles["kitchen-logo"]}>
        Alder<span>wood</span>
      </div>

      <ul className={styles["kitchen-nav-links"]}>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#expertise"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("expertise");
            }}
          >
            Materials
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        className={styles["kitchen-nav-cta"]}
        onClick={() => scrollTo("contact")}
      >
        Get a Quote
      </button>

      <button
        className={`${styles["kitchen-menu-toggle"]} ${menuOpen ? styles["open"] : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    {/* MOBILE MENU */}
    {menuOpen && (
      <div className={styles["kitchen-mobile-menu"]}>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("services");
          }}
        >
          Services
        </a>
        <a
          href="#expertise"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("expertise");
          }}
        >
          Materials
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Contact
        </a>
      </div>
    )}

    {/* HERO */}
    <section className={styles["kitchen-hero"]}>
      <div>
        <div className={styles["kitchen-hero-badge"]}>
          Custom Kitchen Design & Manufacturing
        </div>

        <h1>
          Kitchens <em>built</em> around
          <br />
          how you actually live.
        </h1>

        <p>
          Alderwood designs and manufactures custom cabinetry from our own
          workshop — from first sketch to final install, every kitchen is
          built to fit your space, not the other way around.
        </p>

        <div className={styles["kitchen-hero-btns"]}>
          <button
            className={styles["btn-primary"]}
            onClick={() => scrollTo("contact")}
          >
            Book a Design Consult
          </button>

          <button
            className={styles["btn-ghost"]}
            onClick={() => scrollTo("services")}
          >
            View Services
          </button>
        </div>
      </div>
    </section>

    {/* STATS */}
    <div className={styles["kitchen-stats"]}>
      <div className={styles["kitchen-stat"]}>
        <div className={styles["kitchen-stat-num"]}>500+</div>
        <div className={styles["kitchen-stat-label"]}>Kitchens Delivered</div>
      </div>

      <div className={styles["kitchen-stat"]}>
        <div className={styles["kitchen-stat-num"]}>8+</div>
        <div className={styles["kitchen-stat-label"]}>Service Categories</div>
      </div>

      <div className={styles["kitchen-stat"]}>
        <div className={styles["kitchen-stat-num"]}>100%</div>
        <div className={styles["kitchen-stat-label"]}>In-House Built</div>
      </div>

      <div className={styles["kitchen-stat"]}>
        <div className={styles["kitchen-stat-num"]}>6-8wk</div>
        <div className={styles["kitchen-stat-label"]}>Typical Lead Time</div>
      </div>
    </div>

    {/* SERVICES */}
    <section className={styles["kitchen-section"]} id="services">
      <div className={styles["kitchen-eyebrow"]}>What We Do</div>
      <div className={styles["kitchen-section-title"]}>
        From first sketch to final install
      </div>
      <p className={styles["kitchen-section-sub"]}>
        We design, build, and install every kitchen in-house — so the piece
        you approve in the showroom is exactly what ends up in your home.
      </p>

      <div className={styles["kitchen-grid"]}>
        {services.map((s, i) => (
          <div key={i} className={styles["kitchen-card"]}>
            <div className={styles["kitchen-card-icon"]}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* EXPERTISE / MATERIALS */}
    <div className={styles["kitchen-section-dark"]} id="expertise">
      <div className={styles["kitchen-section-inner"]}>
        <div className={styles["kitchen-eyebrow"]}>Materials & Finishes</div>
        <div className={styles["kitchen-section-title"]}>
          Quality materials, honest construction
        </div>
        <p className={styles["kitchen-section-sub"]}>
          No particleboard shortcuts — Alderwood builds with solid wood,
          real surfaces, and hardware rated for decades of daily use.
        </p>

        <div className={styles["kitchen-grid"]}>
          {materialHighlights.map((c, i) => (
            <div
              key={i}
              className={`${styles["kitchen-card"]} ${styles["kitchen-card-dark"]}`}
            >
              <div
                className={styles["kitchen-eyebrow"]}
                style={{ marginBottom: "0.5rem" }}
              >
                {c.label}
              </div>

              {c.items.map((item, j) => (
                <p
                  key={j}
                  style={{
                    color: "#B8A78E",
                    fontSize: "0.9rem",
                    lineHeight: "2",
                  }}
                >
                  <span style={{ color: "#C08A3E", marginRight: "0.5rem" }}>
                    ▸
                  </span>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CONTACT */}
    <section className={styles["kitchen-section"]} id="contact">
      <div className={styles["kitchen-eyebrow"]}>Get In Touch</div>
      <div className={styles["kitchen-section-title"]}>
        Ready to start designing?
      </div>
      <p className={styles["kitchen-section-sub"]}>
        Book a free design consultation at our showroom or request a visit
        to your home — we'll help you plan a kitchen that fits your space.
      </p>

      <div className={styles["kitchen-contact-row"]}>
        <div
          className={styles["kitchen-contact-info"]}
          style={{
            background: COLORS.navy,
            borderRadius: 12,
            padding: "2rem",
          }}
        >
          <div className={styles["kitchen-contact-item"]}>
            <div className={styles["kitchen-contact-icon"]}>📍</div>
            <div>
              <strong>123 Main Street, Your City, ST 00000</strong>
              <br />
              Showroom open by appointment
            </div>
          </div>

          <div className={styles["kitchen-contact-item"]}>
            <div className={styles["kitchen-contact-icon"]}>📞</div>
            <div>
              <strong>(555) 123-4567</strong>
              <br />
              Call or text directly
            </div>
          </div>

          <div className={styles["kitchen-contact-item"]}>
            <div className={styles["kitchen-contact-icon"]}>✉️</div>
            <div>
              <strong>info@example.com</strong>
              <br />
              For quotes & project inquiries
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <a href="tel:5551234567">
              <button
                className={styles["btn-primary"]}
                style={{ width: "100%" }}
              >
                Call Now
              </button>
            </a>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 260,
            background: COLORS.light,
            borderRadius: 12,
            padding: "2rem",
          }}
        >
          <p
            style={{
              color: COLORS.steel,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            <strong>Typical engagements include:</strong>
          </p>

          {[
            "Free in-home or showroom design consult",
            "3D layout & material selection",
            "Custom cabinet manufacturing",
            "Countertop fabrication & install",
            "Full kitchen installation & fitting",
            "Renovation project coordination",
          ].map((item, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.9rem",
                color: COLORS.steel,
                lineHeight: 2,
              }}
            >
              <span style={{ color: COLORS.accent, marginRight: "0.5rem" }}>
                ✓
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className={styles["kitchen-footer"]}>
      <div className={styles["kitchen-footer-logo"]}>
        Alder<span>wood</span>
      </div>
      <p>© 2026 Alderwood Kitchens · Your City, ST · Design & Manufacturing</p>
      <p className={styles["kitchen-footer-phone"]}>(555) 123-4567</p>
    </footer>
  </div>
  </>
);
}
