import React from "react";

// Consistent spacing + typography via CSS variables (scoped to this component)
export default function Index31() {
  return (
    <main className="alumina-root">
      <style>{`
        :root {
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
        }

        .alumina-root { font-family: var(--font-family); color: var(--text); background: var(--bg); }

        /* Layout */
        .section { padding: var(--s-6) var(--s-2); }
        @media (min-width: 768px) { .section { padding: var(--s-6) var(--s-5); } }
        .container { max-width: 1140px; margin: 0 auto; }
        .stack-2 > * + * { margin-top: var(--s-2); }
        .stack-3 > * + * { margin-top: var(--s-3); }
        .stack-4 > * + * { margin-top: var(--s-4); }

        /* Typography */
        h1, h2, h3, p, ul, ol { margin: 0; }
        h1 { font-size: var(--h1); font-weight: 800; line-height: 1.2; }
        h2 { font-size: var(--h2); font-weight: 700; line-height: 1.25; }
        h3 { font-size: var(--h3); font-weight: 300; line-height: 1.7; color: var(--text); }
        p, li { font-size: var(--body); line-height: 1.75; color: var(--muted); }
        .lead { font-size: var(--lead); }

        /* Media */
        .hero-img, .full-img { width: 100%; height: auto; border-radius: var(--radius); display: block; }

        /* Lists */
        .list { padding-left: 1.1rem; }
        .checklist { list-style: none; padding: 0; }
        .checklist li { display: flex; align-items: start; gap: .5rem; }

        /* Buttons */
        .btn-row { display: flex; flex-wrap: wrap; gap: var(--s-2); }
        .btn { display: inline-block; padding: .6rem 1.25rem; border-radius: 999px; border: 1px solid #1d1d1d; text-decoration: none; font-weight: 500; }
        .btn-dark { background: #1d1d1d; color: #fff; }
        .btn-outline { background: transparent; color: #1d1d1d; }
      `}</style>

      {/* Hero / Intro */}
      <section className="section">
        <div className="container stack-4">
                <img
            className="hero-img"
            src="images/Blogs/Blog_Image_24oct-01.jpg"
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
            <a href="/contact" className="btn btn-dark">Contact Us</a>
            <a href="/products" className="btn btn-outline">Explore Products</a>
          </div>
        </div>
      </section>
    </main>
  );
}
