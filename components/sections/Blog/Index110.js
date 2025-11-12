import React from "react";

// A single, consistent layout + type scale using CSS variables
// Works great with Bootstrap but does not require it.
export default function Index31() {
  return (
    <main className="bmw-root">
      {/* Global styles for this page only */}
      <style>{`
        :root {
          --bmw-font: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          --bmw-text: #202020;
          --bmw-muted: #505050;
          --bmw-bg: #ffffff;
          --bmw-radius: 1.25rem; /* ~rounded-4 */

          /* Spacing scale */
          --bmw-space-1: .5rem;
          --bmw-space-2: 1rem;
          --bmw-space-3: 1.5rem;
          --bmw-space-4: 2rem;
          --bmw-space-5: 3rem;
          --bmw-space-6: 4rem;

          /* Type scale */
          --bmw-h1: clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem);
          --bmw-h2: clamp(1.375rem, 1rem + 1.5vw, 2rem);
          --bmw-h3: clamp(1.125rem, .95rem + .8vw, 1.375rem);
          --bmw-body: 1rem;
          --bmw-lead: 1.125rem;
          --bmw-weight-bold: 700;
          --bmw-weight-normal: 400;
          --bmw-weight-light: 300;
        }

        .bmw-root { font-family: var(--bmw-font); color: var(--bmw-text); background: var(--bmw-bg); }

        /* Layout helpers */
        .section { padding: var(--bmw-space-6) var(--bmw-space-2); }
        @media (min-width: 768px) {
          .section { padding: var(--bmw-space-6) var(--bmw-space-5); }
        }
        .container { max-width: 1140px; margin: 0 auto; }
        .stack-2 > * + * { margin-top: var(--bmw-space-2); }
        .stack-3 > * + * { margin-top: var(--bmw-space-3); }
        .stack-4 > * + * { margin-top: var(--bmw-space-4); }

        /* Typography */
        h1, h2, h3, p, ul { margin: 0; }
        h1 { font-size: var(--bmw-h1); font-weight: var(--bmw-weight-bold); line-height: 1.2; }
        h2 { font-size: var(--bmw-h2); font-weight: var(--bmw-weight-bold); line-height: 1.25; }
        h3 { font-size: var(--bmw-h3); font-weight: var(--bmw-weight-light); line-height: 1.6; color: var(--bmw-text); }
        p, li { font-size: var(--bmw-body); line-height: 1.7; color: var(--bmw-muted); }
        .lead { font-size: var(--bmw-lead); }

        /* Media */
        .hero-img, .full-img { width: 100%; height: auto; border-radius: var(--bmw-radius); display: block; }

        /* Lists */
        .checklist { list-style: none; padding: 0; }
        .checklist li { display: flex; align-items: start; gap: .5rem; }
        .check { flex: 0 0 auto; }

        /* Buttons */
        .btn-row { display: flex; flex-wrap: wrap; gap: var(--bmw-space-2); }
        .btn { display: inline-block; padding: .6rem 1.25rem; border-radius: 999px; border: 1px solid #1d1d1d; text-decoration: none; font-weight: 500; }
        .btn-dark { background: #1d1d1d; color: #fff; }
        .btn-outline { background: transparent; color: #1d1d1d; }
      `}</style>

      {/* Hero */}
      <section className="section">
        <div className="container stack-4">
          <img
            className="hero-img"
            src="images/Blogs/Blog_Image_22oct-01.jpg"
            alt="BMW Steels Ltd. – Engineering solutions for power, steel and cement"
          />

          <header className="stack-2">
            <h1>BMW Steels Ltd.: Engineering Excellence for Power, Steel & Cement Industries</h1>
            <h3 className="lead">
              For over 35 years, BMW Steels Ltd. has been a trusted partner for industries where efficiency,
              durability, and precision matter the most. Headquartered in Dehradun, Uttarakhand, with a
              state-of-the-art manufacturing unit in Roorkee (Bhagwanpur), BMW Steels has consistently delivered
              cutting-edge engineering solutions tailored for Coal Power Plants, Steel Plants, and Cement Plants.
            </h3>
            <h3>
              As industries evolve, the challenges of wear, tear, and efficiency loss continue to intensify. At BMW
              Steels, we address these challenges with AI-driven design, advanced manufacturing, and deep domain
              expertise, ensuring our clients achieve operational excellence.
            </h3>
          </header>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section">
        <div className="container stack-3">
          <h2>Our Areas of Expertise</h2>
          <h3>
            BMW Steels Ltd. specializes in providing solutions that keep highly wear-prone industries running
            efficiently:
          </h3>

          <ul className="checklist stack-2">
            <li>
              <span className="check">✅</span>
              <p>
                <strong>Ash Conveying Systems</strong> – Designed for reliability and minimal downtime, ensuring
                smooth and consistent conveying of coal and ash in thermal power plants.
              </p>
            </li>
            <li>
              <span className="check">✅</span>
              <p>
                <strong>Coal Conveying Pipes</strong> – Built to withstand extreme wear, abrasion, and temperature
                fluctuations.
              </p>
            </li>
            <li>
              <span className="check">✅</span>
              <p>
                <strong>Wear-Resistant Solutions</strong> – From coatings to advanced materials, extending equipment
                life, reducing maintenance costs, and optimizing performance.
              </p>
            </li>
            <li>
              <span className="check">✅</span>
              <p>
                <strong>Secondary Structural Fabrication</strong> – Precision fabrication services meeting the
                demanding needs of heavy industries with unmatched durability.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Image break */}
      <section className="section" aria-label="Industry imagery">
        <div className="container">
          <img className="full-img" src="images/Blogs/Image-01.jpg" alt="Industrial wear-resistant solutions" />
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="section">
        <div className="container stack-3">
          <h2>Product Portfolio</h2>
          <ul className="stack-2">
            <li>
              ✅ <strong>Cast Basalt</strong> – A natural, eco-friendly, and durable wear-resistant lining for conveying
              applications. Resists abrasion, impact, and chemical corrosion—ideal for bulk material handling.
            </li>
            <li>
              ✅ <strong>Fused Alumina</strong> – Engineered for extreme resistance, designed to withstand the toughest
              operating conditions for longevity and reduced downtime.
            </li>
            <li>
              ✅ <strong>Alumina Ceramic Tiles</strong> – Precision-engineered tiles offering superior hardness and wear
              resistance, widely used for lining equipment exposed to abrasive materials.
            </li>
            <li>
              ✅ <strong>Chemically Bonded Compounds</strong> – Excellent bonding, sealing, and protection against wear
              and corrosion to extend equipment lifespan.
            </li>
            <li>
              ✅ <strong>Wear Seal Diamond Putty</strong> – A premium solution for surface rebuilding and protection,
              restoring worn components with exceptional wear resistance.
            </li>
            <li>
              ✅ <strong>BMW Basaltic Mineral Fertilizer</strong> – Bringing innovation to agriculture with mineral-rich
              basalt. Packed with silica, calcium, magnesium, and iron to enhance soil fertility, improve cation
              exchange capacity, and support sustainable farming.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="container stack-3">
          <img className="full-img" src="images/Blogs/Image-02.jpg" alt="Precision manufacturing at BMW Steels" />

          <h2>Why Choose BMW Steels Ltd.?</h2>
          <ul className="stack-2">
            <li>
              <strong>Experience & Expertise:</strong> 35+ years of proven excellence and deep understanding of coal,
              steel, and cement industry challenges.
            </li>
            <li>
              <strong>AI-Driven Engineering:</strong> Traditional engineering combined with modern AI-powered design
              tools for smarter, future-ready solutions.
            </li>
            <li>
              <strong>Precision Manufacturing:</strong> Advanced Roorkee facility delivering products to the highest
              global quality standards.
            </li>
            <li>
              <strong>Sustainability at the Core:</strong> From long-life wear solutions to basaltic fertilizers that
              promote eco-friendly farming.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact / Value */}
      <section className="section">
        <div className="container stack-3">
          <h2>Driving Efficiency & Durability</h2>
          <h3>
            The industries we serve face constant pressure to reduce downtime, improve efficiency, and cut costs.
            Equipment wear is inevitable, but our mission is to minimize its impact with innovative materials and
            solutions. We help power plants burn coal more efficiently, steel plants move materials with less wear, and
            cement plants maintain continuous production without costly interruptions.
          </h3>
          <h3>
            Every product we deliver is backed by years of R&D, client feedback, and continuous innovation—resulting in
            benchmark-setting performance trusted across India and beyond.
          </h3>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section">
        <div className="container stack-3">
          <h2>Looking Ahead</h2>
          <ul className="stack-2">
            <li>Develop smart wear-resistant systems with digital monitoring.</li>
            <li>Create eco-friendly materials aligned with global green standards.</li>
            <li>
              Expand into new markets with products like BMW Basaltic Mineral Fertilizer, bridging industrial expertise
              with sustainable agriculture.
            </li>
          </ul>
          <h3>
            Our commitment remains the same: to provide engineering solutions that stand the test of time, delivering
            unmatched durability, reliability, and efficiency.
          </h3>
        </div>
      </section>

      {/* Final Thoughts + CTA */}
      <section className="section">
        <div className="container stack-3">
          <h2>Final Thoughts</h2>
          <h3>
            BMW Steels Ltd. isn’t just a manufacturing company—it is a trusted engineering partner with a legacy of
            innovation, precision, and reliability. From coal conveying systems to wear-resistant products and
            eco-friendly fertilizers, our solutions are designed to empower industries, protect the environment, and
            drive progress.
          </h3>

          <div className="btn-row">
            <a href="/contact" className="btn btn-dark">Contact Us</a>
            <a href="/products" className="btn btn-outline">Explore Products</a>
          </div>
        </div>
      </section>
    </main>
  );
}
