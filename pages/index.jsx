import styles from "./birchcroft.module.css";
import { useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────
// Palette: ink base, moss green panels, ochre accent, linen panels
// Ink    #1D211F — hero bg, footer
// Moss   #293A30 — cards, sections
// Ochre  #C99A3E — CTA, highlights
// Gold   #D9B45E — icons, hover
// Linen  #EFE9DB — subtle bg panels
// White  #FAF7F1 — text on dark, page bg
// Stone  #A9A79C — muted text

const COLORS = {
  ink: "#1D211F",
  moss: "#293A30",
  ochre: "#C99A3E",
  gold: "#D9B45E",
  linen: "#EFE9DB",
  white: "#FAF7F1",
  stone: "#A9A79C",
  cardBg: "#293A30",
};

const services = [
  { icon: "✏️", title: "Custom Cabinetry Design", desc: "One-on-one design consultations, 3D renderings, and material selection tailored to your kitchen's layout, style, and budget." },
  { icon: "📐", title: "Kitchen Layout & Space Planning", desc: "Full kitchen layout planning — work zones, storage optimization, and traffic flow for cooks of every kind." },
  { icon: "🏭", title: "In-House Manufacturing", desc: "Cabinets built at our own workshop with CNC precision, solid wood construction, and quality control at every step." },
  { icon: "⬛", title: "Countertop Fabrication", desc: "Quartz, granite, butcher block, and porcelain fabrication and installation, matched to your cabinetry and finishes." },
  { icon: "🔩", title: "Hardware & Finish Selection", desc: "Soft-close hinges and slides, pulls and knobs, and a full range of paints, stains, and veneers from trusted suppliers." },
  { icon: "🛠️", title: "Professional Installation", desc: "Licensed installation crews handle delivery, precision fitting, and final walkthrough so everything closes and aligns perfectly." },
  { icon: "🧺", title: "Pantry & Island Storage", desc: "Kitchen islands, pantry systems, pull-out organizers, and built-ins designed around how you actually cook and store." },
  { icon: "📋", title: "Renovation Project Management", desc: "Coordination with contractors, electricians, and plumbers so your kitchen remodel stays on schedule and on budget." },
];

const materialHighlights = [
  { label: "Wood Species", items: ["White Oak", "Walnut", "Hard Maple", "Rift Oak"] },
  { label: "Surfaces", items: ["Quartz", "Granite", "Butcher Block", "Porcelain"] },
  { label: "Hardware", items: ["Blum", "Hettich", "Grass", "Emtek"] },
  { label: "Styles", items: ["Shaker", "Modern Slab", "Modern Farmhouse", "Transitional"] },
];

export default function BirchcroftStudioLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
  <>
  <div className={styles["birch-page"]}>
    {/* NAV */}
    <nav className={styles["birch-nav"]}>
      <div className={styles["birch-logo"]}>
        Birch<span>croft</span>
      </div>

      <ul className={styles["birch-nav-links"]}>
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
            href="#materials"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("materials");
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
        className={styles["birch-nav-cta"]}
        onClick={() => scrollTo("contact")}
      >
        Get a Quote
      </button>

      <button
        className={`${styles["birch-menu-toggle"]} ${menuOpen ? styles["open"] : ""}`}
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
      <div className={styles["birch-mobile-menu"]}>
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
          href="#materials"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("materials");
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
    <section className={styles["birch-hero"]}>
      <div>
        <div className={styles["birch-hero-badge"]}>
          Custom Kitchen Design &amp; Manufacturing
        </div>

        <h1>
          Kitchens <em>shaped</em> around
          <br />
          how you actually cook.
        </h1>

        <p>
          Birchcroft designs and manufactures custom cabinetry from our own
          workshop — from first sketch to final install, every kitchen is
          built to fit your space, not the other way around.
        </p>

        <div className={styles["birch-hero-btns"]}>
          <button
            className={styles["birch-btn-primary"]}
            onClick={() => scrollTo("contact")}
          >
            Book a Design Consult
          </button>

          <button
            className={styles["birch-btn-ghost"]}
            onClick={() => scrollTo("services")}
          >
            View Services
          </button>
        </div>
      </div>
    </section>

    {/* STATS */}
    <div className={styles["birch-stats"]}>
      <div className={styles["birch-stat"]}>
        <div className={styles["birch-stat-num"]}>600+</div>
        <div className={styles["birch-stat-label"]}>Kitchens Delivered</div>
      </div>

      <div className={styles["birch-stat"]}>
        <div className={styles["birch-stat-num"]}>8+</div>
        <div className={styles["birch-stat-label"]}>Service Categories</div>
      </div>

      <div className={styles["birch-stat"]}>
        <div className={styles["birch-stat-num"]}>100%</div>
        <div className={styles["birch-stat-label"]}>In-House Built</div>
      </div>

      <div className={styles["birch-stat"]}>
        <div className={styles["birch-stat-num"]}>6-8wk</div>
        <div className={styles["birch-stat-label"]}>Typical Lead Time</div>
      </div>
    </div>

    {/* SERVICES */}
    <section className={styles["birch-section"]} id="services">
      <div className={styles["birch-eyebrow"]}>What We Do</div>
      <div className={styles["birch-section-title"]}>
        From first sketch to final install
      </div>
      <p className={styles["birch-section-sub"]}>
        We design, build, and install every kitchen in-house — so the
        piece you approve in the showroom is exactly what ends up in
        your home.
      </p>

      <div className={styles["birch-grid"]}>
        {services.map((s, i) => (
          <div key={i} className={styles["birch-card"]}>
            <div className={styles["birch-card-icon"]}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* MATERIALS */}
    <div className={styles["birch-section-dark"]} id="materials">
      <div className={styles["birch-section-inner"]}>
        <div className={styles["birch-eyebrow"]}>Materials &amp; Finishes</div>
        <div className={styles["birch-section-title"]}>
          Quality materials, honest construction
        </div>
        <p className={styles["birch-section-sub"]}>
          No particleboard shortcuts — Birchcroft builds with solid wood,
          real surfaces, and hardware rated for decades of daily use.
        </p>

        <div className={styles["birch-grid"]}>
          {materialHighlights.map((c, i) => (
            <div
              key={i}
              className={`${styles["birch-card"]} ${styles["birch-card-dark"]}`}
            >
              <div
                className={styles["birch-eyebrow"]}
                style={{ marginBottom: "0.5rem" }}
              >
                {c.label}
              </div>

              {c.items.map((item, j) => (
                <p
                  key={j}
                  style={{
                    color: "#A9A79C",
                    fontSize: "0.9rem",
                    lineHeight: "2",
                  }}
                >
                  <span style={{ color: "#C99A3E", marginRight: "0.5rem" }}>
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
    <section className={styles["birch-section"]} id="contact">
      <div className={styles["birch-eyebrow"]}>Get In Touch</div>
      <div className={styles["birch-section-title"]}>
        Ready to start designing?
      </div>
      <p className={styles["birch-section-sub"]}>
        Book a free design consultation at our showroom or request a visit
        to your home — we'll help you plan a kitchen that fits your space.
      </p>

      <div className={styles["birch-contact-row"]}>
        <div
          className={styles["birch-contact-info"]}
          style={{
            background: COLORS.ink,
            borderRadius: 10,
            padding: "2rem",
          }}
        >
          <div className={styles["birch-contact-item"]}>
            <div className={styles["birch-contact-icon"]}>📍</div>
            <div>
              <strong>789 Workshop Lane, Your City, ST 00000</strong>
              <br />
              Showroom open by appointment
            </div>
          </div>

          <div className={styles["birch-contact-item"]}>
            <div className={styles["birch-contact-icon"]}>📞</div>
            <div>
              <strong>(555) 246-8100</strong>
              <br />
              Call or text directly
            </div>
          </div>

          <div className={styles["birch-contact-item"]}>
            <div className={styles["birch-contact-icon"]}>✉️</div>
            <div>
              <strong>hello@example.com</strong>
              <br />
              For quotes &amp; project inquiries
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <a href="tel:5552468100">
              <button
                className={styles["birch-btn-primary"]}
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
            background: COLORS.linen,
            borderRadius: 10,
            padding: "2rem",
          }}
        >
          <p
            style={{
              color: COLORS.ink,
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
                color: COLORS.ink,
                lineHeight: 2,
              }}
            >
              <span style={{ color: COLORS.ochre, marginRight: "0.5rem" }}>
                ✓
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className={styles["birch-footer"]}>
      <div className={styles["birch-footer-logo"]}>
        Birch<span>croft</span>
      </div>
      <p>© 2026 Birchcroft Studio · Your City, ST · Design &amp; Manufacturing</p>
      <p className={styles["birch-footer-phone"]}>(555) 246-8100</p>
    </footer>
  </div>
  </>
);
}
