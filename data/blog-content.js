import React from "react";
import Link from "next/link";

/* ============================================================
   Blog post content — server-only module (never imported by a
   client component). Each post's slug maps to its full JSX.
   The /blogs/[slug] page renders blogContent[slug].
   ============================================================ */

export const blogContent = {
  "engineering-excellence-for-power-steel-and-cement": (
    <main className="bmw-root">
      {/* Global styles for this page only */}
      <style>{`
        /* All blog styles are scoped under .bmw-root so they
           never leak globally (e.g. into the site header) */
        .bmw-root {
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

          font-family: var(--bmw-font); color: var(--bmw-text); background: var(--bmw-bg);
        }

        /* Layout helpers */
        .bmw-root .section { padding: 2.5rem 1.25rem; }
        @media (min-width: 768px) {
          .bmw-root .section { padding: 5rem 2rem; }
        }
        .bmw-root .container { max-width: 1140px; margin: 0 auto; }
        .bmw-root .stack-2 > * + * { margin-top: var(--bmw-space-2); }
        .bmw-root .stack-3 > * + * { margin-top: var(--bmw-space-3); }
        .bmw-root .stack-4 > * + * { margin-top: var(--bmw-space-4); }

        /* Typography */
        .bmw-root h1, .bmw-root h2, .bmw-root h3, .bmw-root p, .bmw-root ul { margin: 0; }
        .bmw-root h1 { font-size: var(--bmw-h1); font-weight: var(--bmw-weight-bold); line-height: 1.2; margin-bottom: 1.5rem; }
        .bmw-root h2 { font-size: var(--bmw-h2); font-weight: var(--bmw-weight-bold); line-height: 1.25; margin-bottom: 1rem; }
        .bmw-root h3 { font-size: var(--bmw-h3); font-weight: var(--bmw-weight-light); line-height: 1.6; color: var(--bmw-text); margin-bottom: 1rem; }
        .bmw-root p { font-size: var(--bmw-body); line-height: 1.7; color: var(--bmw-muted); margin-bottom: 1rem; }
        .bmw-root li { font-size: var(--bmw-body); line-height: 1.7; color: var(--bmw-muted); }
        .bmw-root .lead { font-size: var(--bmw-lead); }

        /* Media */
        .bmw-root .hero-img, .bmw-root .full-img { width: 100%; height: auto; border-radius: var(--bmw-radius); display: block; margin-bottom: 2rem; }

        /* Lists */
        .bmw-root ul, .bmw-root ol { margin: 1rem 0 1.5rem; padding-left: 1.5rem; }
        .bmw-root li { margin-bottom: .5rem; }
        .bmw-root .checklist { list-style: disc; padding-left: 1.5rem; }
        .bmw-root .checklist li { display: list-item; }

        /* Buttons */
        .bmw-root .btn-row { display: flex; flex-wrap: wrap; gap: var(--bmw-space-2); }
        .bmw-root .btn { display: inline-block; padding: .6rem 1.25rem; border-radius: 999px; border: 1px solid #1d1d1d; text-decoration: none; font-weight: 500; }
        .bmw-root .btn-dark { background: #1d1d1d; color: #fff; }
        .bmw-root .btn-outline { background: transparent; color: #1d1d1d; }
      `}</style>

      {/* Hero */}
      <section className="section">
        <div className="container stack-4">
          <img
            className="hero-img"
            src="/images/Blogs/Blog_Image_22oct-01.jpg"
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
              <p>
                <strong>Ash Conveying Systems</strong> – Designed for reliability and minimal downtime, ensuring
                smooth and consistent conveying of coal and ash in thermal power plants.
              </p>
            </li>
            <li>
              <p>
                <strong>Coal Conveying Pipes</strong> – Built to withstand extreme wear, abrasion, and temperature
                fluctuations.
              </p>
            </li>
            <li>
              <p>
                <strong>Wear-Resistant Solutions</strong> – From coatings to advanced materials, extending equipment
                life, reducing maintenance costs, and optimizing performance.
              </p>
            </li>
            <li>
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
          <img className="full-img" src="/images/Blogs/Image-01.jpg" alt="Industrial wear-resistant solutions" />
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="section">
        <div className="container stack-3">
          <h2>Product Portfolio</h2>
          <ul className="stack-2">
            <li>
              <strong>Cast Basalt</strong> – A natural, eco-friendly, and durable wear-resistant lining for conveying
              applications. Resists abrasion, impact, and chemical corrosion—ideal for bulk material handling.
            </li>
            <li>
              <strong>Fused Alumina</strong> – Engineered for extreme resistance, designed to withstand the toughest
              operating conditions for longevity and reduced downtime.
            </li>
            <li>
              <strong>Alumina Ceramic Tiles</strong> – Precision-engineered tiles offering superior hardness and wear
              resistance, widely used for lining equipment exposed to abrasive materials.
            </li>
            <li>
              <strong>Chemically Bonded Compounds</strong> – Excellent bonding, sealing, and protection against wear
              and corrosion to extend equipment lifespan.
            </li>
            <li>
              <strong>Wear Seal Diamond Putty</strong> – A premium solution for surface rebuilding and protection,
              restoring worn components with exceptional wear resistance.
            </li>
            <li>
              <strong>BMW Basaltic Mineral Fertilizer</strong> – Bringing innovation to agriculture with mineral-rich
              basalt. Packed with silica, calcium, magnesium, and iron to enhance soil fertility, improve cation
              exchange capacity, and support sustainable farming.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="container stack-3">
          <img className="full-img" src="/images/Blogs/Image-02.jpg" alt="Precision manufacturing at BMW Steels" />

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
            <Link href="/contactus" className="btn btn-dark">Contact Us</Link>
            <Link href="/" className="btn btn-outline">Explore Products</Link>
          </div>
        </div>
      </section>
    </main>
  ),

  "92-alumina-ceramic-for-coal-pipeline-wear-protection": (
    <main className="alumina-root">
      <style>{`
        /* All blog styles are scoped under .alumina-root so they
           never leak globally (e.g. into the site header) */
        .alumina-root {
          --font-family: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          --text: #202020;
          --muted: #505050;
          --bg: #ffffff;
          --radius: 1.25rem;

          /* Spacing scale */
          --s-1: .5rem;
          --s-2: 1rem;
          --s-3: 1.5rem;
          --s-4: 2rem;
          --s-5: 3rem;
          --s-6: 4rem;

          /* Type scale */
          --h1: clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem);
          --h2: clamp(1.375rem, 1rem + 1.5vw, 2rem);
          --h3: clamp(1.125rem, .95rem + .8vw, 1.25rem);
          --lead: 1.125rem;
          --body: 1rem;

          font-family: var(--font-family); color: var(--text); background: var(--bg);
        }

        /* Layout */
        .alumina-root .section { padding: 2.5rem 1.25rem; }
        @media (min-width: 768px) { .alumina-root .section { padding: 5rem 2rem; } }
        .alumina-root .container { max-width: 1140px; margin: 0 auto; }
        .alumina-root .stack-2 > * + * { margin-top: var(--s-2); }
        .alumina-root .stack-3 > * + * { margin-top: var(--s-3); }
        .alumina-root .stack-4 > * + * { margin-top: var(--s-4); }

        /* Typography */
        .alumina-root h1, .alumina-root h2, .alumina-root h3, .alumina-root p, .alumina-root ul, .alumina-root ol { margin: 0; }
        .alumina-root h1 { font-size: var(--h1); font-weight: 800; line-height: 1.2; margin-bottom: 1.5rem; }
        .alumina-root h2 { font-size: var(--h2); font-weight: 700; line-height: 1.25; margin-bottom: 1rem; }
        .alumina-root h3 { font-size: var(--h3); font-weight: 300; line-height: 1.7; color: var(--text); margin-bottom: 1rem; }
        .alumina-root p { font-size: var(--body); line-height: 1.75; color: var(--muted); margin-bottom: 1rem; }
        .alumina-root li { font-size: var(--body); line-height: 1.75; color: var(--muted); }
        .alumina-root .lead { font-size: var(--lead); }

        /* Media */
        .alumina-root .hero-img, .alumina-root .full-img { width: 100%; height: auto; border-radius: var(--radius); display: block; margin-bottom: 2rem; }

        /* Lists */
        .alumina-root ul, .alumina-root ol { margin: 1rem 0 1.5rem; padding-left: 1.5rem; }
        .alumina-root li { margin-bottom: .5rem; }
        .alumina-root .list { padding-left: 1.5rem; }

        /* Buttons */
        .alumina-root .btn-row { display: flex; flex-wrap: wrap; gap: var(--s-2); }
        .alumina-root .btn { display: inline-block; padding: .6rem 1.25rem; border-radius: 999px; border: 1px solid #1d1d1d; text-decoration: none; font-weight: 500; }
        .alumina-root .btn-dark { background: #1d1d1d; color: #fff; }
        .alumina-root .btn-outline { background: transparent; color: #1d1d1d; }
      `}</style>

      {/* Hero / Intro */}
      <section className="section">
        <div className="container stack-4">
          <img
            className="hero-img"
            src="/images/Blogs/Blog_Image_24oct-01.jpg"
            alt="92% alumina ceramic lined products by BMW Steels"
          />
          <header className="stack-2">
            <h1>Why 92% Alumina Ceramic is a Game‑Changer for Coal Pipeline Wear Protection</h1>
          </header>

          <div className="stack-2">
            <h3 className="lead">
              Since 1961, BMW Steels Ltd. has been at the forefront of wear protection technology — manufacturing:
            </h3>
            <ul className="list">
              <li>Alumina Ceramic Lined Products</li>
              <li>Cast Basalt Linings</li>
              <li>Chemically Bonded Ceramic Liners</li>
            </ul>
            <h3>
              Among these, BMW’s <strong>92% Alumina Ceramic Lined Products</strong> are redefining reliability in coal pipelines
              and mining operations.
            </h3>
          </div>
        </div>
      </section>

      {/* What Makes 92% Alumina Exceptional */}
      <section className="section">
        <div className="container stack-3">
          <h2>What Makes 92% Alumina Ceramic Exceptional</h2>
          <h3>
            Made from finely ground alumina powder and kiln‑fired at <strong>1550°C</strong>, 92% alumina ceramic achieves:
          </h3>
          <ul className="list">
            <li>High density</li>
            <li>Superior hardness</li>
            <li>Exceptional erosion resistance</li>
          </ul>
          <h3>
            Every batch at BMW Steels undergoes strict erosion and abrasion testing, ensuring it stands up to the harshest
            coal flow and ash handling conditions.
          </h3>
        </div>
      </section>

      {/* Why It’s a Game‑Changer */}
      <section className="section">
        <div className="container stack-3">
          <h2>Why It’s a Game‑Changer</h2>
          <ul className="list">
            <li><strong>Longer pipe & bend life</strong> — minimizes wear and tear.</li>
            <li><strong>Reduced downtime</strong> — outstanding resistance to abrasion.</li>
            <li><strong>Lower maintenance costs</strong> — fewer replacements.</li>
            <li><strong>Better operational efficiency</strong> — consistent flow performance.</li>
            <li><strong>Protection from liner erosion</strong> — even under high velocity.</li>
          </ul>
          <h3>
            Ideal for load‑break connections, spools, elbows, and pipe approaches — engineered to perform where others fail.
          </h3>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="section">
        <div className="container stack-3">
          <h2>BMW Steels’ Manufacturing Excellence</h2>
          <h3>We maintain unmatched quality through a precision‑driven process:</h3>
          <ol className="list">
            <li>Sourcing high‑purity alumina</li>
            <li>Ball milling for fine uniformity</li>
            <li>Hydraulic pressing into custom geometries</li>
            <li>Kiln‑firing at 1550°C for hardness and density</li>
            <li>Rigorous testing for erosion resistance and tensile strength</li>
          </ol>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container stack-3">
          <h2>Applications Across Mining & Power</h2>
          <h3>Our Alumina Ceramic Linings protect critical equipment like:</h3>
          <ul className="list">
            <li>Coal pipeline bends & elbows</li>
            <li>Chutes, cyclones & hoppers</li>
            <li>Ash handling systems</li>
            <li>Mill internals & liners</li>
            <li>Dense medium cyclones in mineral processing</li>
          </ul>
          <h3>
            Custom‑engineered ceramic‑lined bends and spools provide durable protection against continuous particle impact —
            dramatically extending service life.
          </h3>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container stack-3">
          <div className="btn-row">
            <Link href="/contactus" className="btn btn-dark">Contact Us</Link>
            <Link href="/" className="btn btn-outline">Explore Products</Link>
          </div>
        </div>
      </section>
    </main>
  ),
};
