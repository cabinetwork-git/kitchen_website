import styles from "./landing.module.css";
import { useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────
// Palette: slate-navy base, steel-blue accent, cool grays
// Navy    #0D1B2A  — hero bg, footer
// Steel   #1B3A5C  — cards, sections
// Accent  #2E86C1  — CTA, highlights
// Mid     #4A90A4  — icons, hover
// Light   #D6E4F0  — subtle bg panels
// White   #F4F8FB  — text on dark, page bg
// Gray    #8EA8BB  — muted text

const COLORS = {
  navy: "#0D1B2A",
  steel: "#1B3A5C",
  accent: "#2E86C1",
  mid: "#4A90A4",
  light: "#D6E4F0",
  white: "#F4F8FB",
  gray: "#8EA8BB",
  cardBg: "#112236",
};

// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
const css = `
  body {
    background: ${COLORS.white};
    color: ${COLORS.navy};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  /* ── NAV ── */
  .vito-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(13,27,42,0.96);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(46,134,193,0.2);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 5vw; height: 64px;
  }
  .vito-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem; font-weight: 800;
    color: ${COLORS.white};
    letter-spacing: -0.02em;
  }
  .vito-logo span { color: ${COLORS.accent}; }
  .vito-nav-links { display: flex; gap: 2rem; list-style: none; }
  .vito-nav-links a {
    color: ${COLORS.gray}; text-decoration: none;
    font-size: 0.9rem; font-weight: 500;
    transition: color 0.2s;
  }
  .vito-nav-links a:hover { color: ${COLORS.white}; }
  .vito-nav-cta {
    background: ${COLORS.accent};
    color: ${COLORS.white}; border: none; cursor: pointer;
    padding: 0.5rem 1.2rem; border-radius: 6px;
    font-size: 0.875rem; font-weight: 600;
    transition: background 0.2s;
  }
  .vito-nav-cta:hover { background: ${COLORS.mid}; }

  /* ── HERO ── */
  .vito-hero {
    min-height: 100vh;
    background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.steel} 60%, #1a4a6e 100%);
    display: flex; align-items: center; justify-content: center;
    text-align: center; padding: 8rem 5vw 5rem;
    position: relative; overflow: hidden;
  }
  .vito-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 60% 40%, rgba(46,134,193,0.15) 0%, transparent 60%);
    pointer-events: none;
  }
  .vito-hero-badge {
    display: inline-block;
    background: rgba(46,134,193,0.15);
    border: 1px solid rgba(46,134,193,0.4);
    color: ${COLORS.mid};
    font-size: 0.8rem; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0.35rem 1rem; border-radius: 20px;
    margin-bottom: 1.5rem;
  }
  .vito-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 800; color: ${COLORS.white};
    line-height: 1.05; letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
  }
  .vito-hero h1 em {
    font-style: normal;
    background: linear-gradient(90deg, ${COLORS.accent}, ${COLORS.mid});
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .vito-hero p {
    color: ${COLORS.gray}; font-size: 1.1rem;
    max-width: 540px; margin: 0 auto 2.5rem;
  }
  .vito-hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    background: ${COLORS.accent}; color: ${COLORS.white};
    border: none; cursor: pointer;
    padding: 0.85rem 2rem; border-radius: 8px;
    font-size: 1rem; font-weight: 600;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-primary:hover { background: ${COLORS.mid}; transform: translateY(-2px); }
  .btn-ghost {
    background: transparent; color: ${COLORS.white};
    border: 1px solid rgba(255,255,255,0.25); cursor: pointer;
    padding: 0.85rem 2rem; border-radius: 8px;
    font-size: 1rem; font-weight: 500;
    transition: border-color 0.2s, background 0.2s;
  }
  .btn-ghost:hover { border-color: ${COLORS.accent}; background: rgba(46,134,193,0.1); }

  /* ── STATS STRIP ── */
  .vito-stats {
    background: ${COLORS.cardBg};
    border-top: 1px solid rgba(46,134,193,0.2);
    border-bottom: 1px solid rgba(46,134,193,0.2);
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 0; padding: 0;
  }
  .vito-stat {
    flex: 1; min-width: 180px;
    padding: 2rem 2.5rem; text-align: center;
    border-right: 1px solid rgba(46,134,193,0.15);
  }
  .vito-stat:last-child { border-right: none; }
  .vito-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2.2rem; font-weight: 800;
    color: ${COLORS.accent};
  }
  .vito-stat-label {
    font-size: 0.8rem; font-weight: 500;
    color: ${COLORS.gray}; text-transform: uppercase;
    letter-spacing: 0.08em; margin-top: 0.25rem;
  }

  /* ── SECTIONS ── */
  .vito-section {
    padding: 5rem 5vw;
    max-width: 1100px; margin: 0 auto;
  }
  .vito-section-dark {
    background: ${COLORS.navy};
    max-width: 100%; padding: 5rem 5vw;
  }
  .vito-section-dark .vito-section-inner {
    max-width: 1100px; margin: 0 auto;
  }
  .vito-eyebrow {
    font-size: 0.75rem; font-weight: 700;
    color: ${COLORS.accent}; text-transform: uppercase;
    letter-spacing: 0.12em; margin-bottom: 0.75rem;
  }
  .vito-section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800; color: ${COLORS.navy};
    letter-spacing: -0.025em; line-height: 1.1;
    margin-bottom: 1rem;
  }
  .vito-section-dark .vito-section-title { color: ${COLORS.white}; }
  .vito-section-sub {
    color: ${COLORS.gray}; font-size: 1rem;
    max-width: 520px; margin-bottom: 3rem;
  }

  /* ── SERVICE GRID ── */
  .vito-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .vito-card {
    background: ${COLORS.light};
    border: 1px solid rgba(46,134,193,0.15);
    border-radius: 12px; padding: 1.75rem;
    transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
  }
  .vito-card:hover {
    border-color: ${COLORS.accent};
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(46,134,193,0.12);
  }
  .vito-card-dark {
    background: ${COLORS.cardBg};
    border: 1px solid rgba(46,134,193,0.2);
  }
  .vito-card-dark:hover {
    border-color: ${COLORS.accent};
    box-shadow: 0 12px 32px rgba(46,134,193,0.15);
  }
  .vito-card-icon {
    width: 44px; height: 44px;
    background: rgba(46,134,193,0.12);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem; margin-bottom: 1rem;
    color: ${COLORS.accent};
  }
  .vito-card h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem; font-weight: 700;
    color: ${COLORS.navy}; margin-bottom: 0.5rem;
  }
  .vito-card-dark h3 { color: ${COLORS.white}; }
  .vito-card p { font-size: 0.9rem; color: #5a7a8a; line-height: 1.5; }
  .vito-card-dark p { color: ${COLORS.gray}; }

  /* ── CONTACT ── */
  .vito-contact-row {
    display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;
  }
  .vito-contact-info { flex: 1; min-width: 260px; }
  .vito-contact-item {
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 1.25rem;
    color: ${COLORS.gray}; font-size: 0.95rem;
  }
  .vito-contact-item strong { color: ${COLORS.white}; }
  .vito-contact-icon {
    width: 36px; height: 36px; flex-shrink: 0;
    background: rgba(46,134,193,0.15); border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; color: ${COLORS.accent};
  }

  /* ── FOOTER ── */
  .vito-footer {
    background: #080f18;
    border-top: 1px solid rgba(46,134,193,0.15);
    padding: 2rem 5vw;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 1rem;
  }
  .vito-footer-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem; font-weight: 800;
    color: ${COLORS.white};
  }
  .vito-footer-logo span { color: ${COLORS.accent}; }
  .vito-footer p { color: ${COLORS.gray}; font-size: 0.8rem; }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .vito-nav-links { display: none; }
    .vito-stat { min-width: 140px; padding: 1.5rem; }
    .vito-contact-row { flex-direction: column; }
  }
`;

const services = [
  { icon: "🌐", title: "Network Infrastructure", desc: "LAN/WAN design, switch deployment, structured cabling, IDF/MDF buildouts, and AP installations across enterprise and SMB sites." },
  { icon: "🔥", title: "Firewall & Security", desc: "FortiGate, SonicWall, and Meraki configuration. VPN setup, VLAN segmentation, and ongoing firewall policy management." },
  { icon: "🖥️", title: "Server & Hardware", desc: "Rack-and-stack, Dell PowerEdge maintenance, RAID controller replacement, UPS management, and hardware lifecycle support." },
  { icon: "📡", title: "VoIP & Telecom", desc: "SIP trunk configuration, VoIP handset deployment, paging system integration, and telecom circuit coordination." },
  { icon: "📷", title: "Cameras & Access Control", desc: "IP camera installation, NVR setup, badge reader deployment, and access control panel programming." },
  { icon: "🖥", title: "POS Systems", desc: "Point-of-sale hardware installation, network configuration, and multi-site rollouts for retail and hospitality clients." },
  { icon: "📺", title: "AV & Digital Signage", desc: "Commercial display mounting, media player setup, matrix switchers, and digital signage content system deployment." },
  { icon: "☁️", title: "Remote & On-Site Support", desc: "Field dispatch across New England. Emergency response, scheduled maintenance, and multi-vendor project coordination." },
];

const certHighlights = [
  { label: "Networking", items: ["Cisco", "Meraki", "Ubiquiti", "MikroTik"] },
  { label: "Security", items: ["Fortinet FortiGate", "SonicWall", "Palo Alto"] },
  { label: "Telecom", items: ["SIP / VoIP", "SD-WAN / VeloCloud", "Avaya"] },
  { label: "Infrastructure", items: ["Dell PowerEdge", "HP ProLiant", "Structured Cabling"] },
];

export default function VitoITLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
  <>
  <div className={styles["vito-page"]}>
    {/* NAV */}
    <nav className={styles["vito-nav"]}>
      <div className={styles["vito-logo"]}>
        Vito<span>IT</span>
      </div>

      <ul className={styles["vito-nav-links"]}>
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
            Expertise
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
        className={styles["vito-nav-cta"]}
        onClick={() => scrollTo("contact")}
      >
        Get a Quote
      </button>

      <button
        className={`${styles["vito-menu-toggle"]} ${menuOpen ? styles["open"] : ""}`}
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
      <div className={styles["vito-mobile-menu"]}>
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
          Expertise
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
    <section className={styles["vito-hero"]}>
      <div>
        <div className={styles["vito-hero-badge"]}>
          IT Field Services · New England & Nationwide
        </div>

        <h1>
          Infrastructure that <em>works</em>,
          <br />
          deployed by someone who knows it.
        </h1>

        <p>
          VitoIT provides hands-on field IT services — networking, servers,
          VoIP, AV, POS, and security systems — for businesses that can't
          afford downtime.
        </p>

        <div className={styles["vito-hero-btns"]}>
          <button
            className={styles["btn-primary"]}
            onClick={() => scrollTo("contact")}
          >
            Request a Service Call
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
    <div className={styles["vito-stats"]}>
      <div className={styles["vito-stat"]}>
        <div className={styles["vito-stat-num"]}>250+</div>
        <div className={styles["vito-stat-label"]}>Clients Served</div>
      </div>

      <div className={styles["vito-stat"]}>
        <div className={styles["vito-stat-num"]}>8+</div>
        <div className={styles["vito-stat-label"]}>Service Categories</div>
      </div>

      <div className={styles["vito-stat"]}>
        <div className={styles["vito-stat-num"]}>MA-NY</div>
        <div className={styles["vito-stat-label"]}>Primary Coverage</div>
      </div>

      <div className={styles["vito-stat"]}>
        <div className={styles["vito-stat-num"]}>24h</div>
        <div className={styles["vito-stat-label"]}>Response Time</div>
      </div>
    </div>

    {/* SERVICES */}
    <section className={styles["vito-section"]} id="services">
      <div className={styles["vito-eyebrow"]}>What We Do</div>
      <div className={styles["vito-section-title"]}>
        End-to-end field IT coverage
      </div>
      <p className={styles["vito-section-sub"]}>
        From initial cable run to final config — we handle the full stack of
        physical and logical infrastructure so your team can focus on the
        business.
      </p>

      <div className={styles["vito-grid"]}>
        {services.map((s, i) => (
          <div key={i} className={styles["vito-card"]}>
            <div className={styles["vito-card-icon"]}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* EXPERTISE */}
    <div className={styles["vito-section-dark"]} id="expertise">
      <div className={styles["vito-section-inner"]}>
        <div className={styles["vito-eyebrow"]}>Platforms & Vendors</div>
        <div className={styles["vito-section-title"]}>
          Multi-vendor expertise, one technician
        </div>
        <p className={styles["vito-section-sub"]}>
          No learning curve on your dime — VitoIT works across the platforms
          your environment already runs.
        </p>

        <div className={styles["vito-grid"]}>
          {certHighlights.map((c, i) => (
            <div
              key={i}
              className={`${styles["vito-card"]} ${styles["vito-card-dark"]}`}
            >
              <div
                className={styles["vito-eyebrow"]}
                style={{ marginBottom: "0.5rem" }}
              >
                {c.label}
              </div>

              {c.items.map((item, j) => (
                <p
                  key={j}
                  style={{
                    color: "#8EA8BB",
                    fontSize: "0.9rem",
                    lineHeight: "2",
                  }}
                >
                  <span style={{ color: "#2E86C1", marginRight: "0.5rem" }}>
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
    <section className={styles["vito-section"]} id="contact">
      <div className={styles["vito-eyebrow"]}>Get In Touch</div>
      <div className={styles["vito-section-title"]}>
        Ready to schedule a call?
      </div>
      <p className={styles["vito-section-sub"]}>
        Reach out directly — no ticket system, no waiting queue. You talk to
        the technician from day one.
      </p>

      <div className={styles["vito-contact-row"]}>
        <div
          className={styles["vito-contact-info"]}
          style={{
            background: COLORS.navy,
            borderRadius: 12,
            padding: "2rem",
          }}
        >
          <div className={styles["vito-contact-item"]}>
            <div className={styles["vito-contact-icon"]}>📍</div>
            <div>
              <strong>Sherborn, MA</strong>
              <br />
              Serving New England & beyond
            </div>
          </div>

          <div className={styles["vito-contact-item"]}>
            <div className={styles["vito-contact-icon"]}>📞</div>
            <div>
              <strong>(774) 244-3563</strong>
              <br />
              Call or text directly
            </div>
          </div>

          <div className={styles["vito-contact-item"]}>
            <div className={styles["vito-contact-icon"]}>✉️</div>
            <div>
              <strong>Vitoit@protonmail.com</strong>
              <br />
              For quotes & project inquiries
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <a href="tel:7742443563">
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
            "Network assessments & cable runs",
            "Firewall installation & config",
            "Server swap & hardware upgrades",
            "POS & AV system deployment",
            "Emergency on-site troubleshooting",
            "Multi-site project coordination",
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
    <footer className={styles["vito-footer"]}>
      <div className={styles["vito-footer-logo"]}>
        Vito<span>IT</span>
      </div>
      <p>© 2026 VitoIT · Sherborn, MA · IT Field Services</p>
      <p style={{ color: "#4A90A4", fontSize: "0.8rem" }}>(774) 244-3563</p>
    </footer>
  </div>
  </>
);
}
