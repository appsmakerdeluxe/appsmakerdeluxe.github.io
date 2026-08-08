/* Pre-compressed local WebP assets are used directly for predictable vinext output. */
/* eslint-disable @next/next/no-img-element */
const apps = [
  {
    name: "DayMigo",
    tag: "Achtsame Routinen",
    description: "Kleine tägliche Missionen, die Fortschritt sichtbar machen und eine persönliche Welt wachsen lassen.",
    image: "/apps/daymigo.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.daymigo",
    tone: "mint",
  },
  {
    name: "Riftivo",
    tag: "Arcade Adventure",
    description: "Ein farbenreiches Mobile-Game zwischen Wasser-Rifts, präzisem Timing und tropischen Welten.",
    image: "/apps/riftivo-store-2026-08.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.riftivo",
    tone: "blue wide",
  },
  {
    name: "BuyMorrow",
    tag: "Bewusster einkaufen",
    description: "Fundstücke sammeln, Bedenkzeit gewinnen und Kaufentscheidungen mit Abstand treffen.",
    image: "/apps/buymorrow.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.buymorrow",
    tone: "amber",
  },
  {
    name: "EverAgo",
    tag: "Momente im Blick",
    description: "Persönliche Ereignisse und Zeitabstände in einer klaren, ruhigen Oberfläche festhalten.",
    image: "/apps/everago.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.everago",
    tone: "violet",
  },
  {
    name: "Call Blocker Plus",
    tag: "Fokus & Schutz",
    description: "Unerwünschte Anrufe blockieren und die Kontrolle über die eigene Erreichbarkeit behalten.",
    image: "/apps/call-blocker-plus.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.callblockerplus",
    tone: "coral",
  },
  {
    name: "IndexGenie",
    tag: "Sammlungen ordnen",
    description: "Ein flexibles Werkzeug, um persönliche Sammlungen strukturiert zu erfassen und zu pflegen.",
    image: "/apps/indexgenie.webp",
    url: "https://play.google.com/store/apps/details?id=com.draven.indexgenie",
    tone: "cyan",
  },
  {
    name: "LuxCue",
    tag: "Licht & Sicherheit",
    description: "Ein lokales Android-Toolkit für Licht, Signale, Morse und hilfreiche Gerätefunktionen.",
    image: "/apps/luxcue.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.luxcue",
    tone: "gold",
  },
  {
    name: "ChiliWise",
    tag: "Chili-Enzyklopädie",
    description: "Ein farbenfrohes Offline-Lexikon für Sorten, Schärfe und Wissen rund um Anbau und Küche.",
    image: "/apps/chiliwise.webp",
    tone: "red wide",
    availability: "In Vorbereitung",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <header className="site-header" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="AppsMakerDeluxe Studios – Startseite">
          <span className="brand-mark" aria-hidden="true">A<span>M</span></span>
          <span>AppsMakerDeluxe <em>Studios</em></span>
        </a>
        <nav className="desktop-nav" aria-label="Seitennavigation">
          <a href="#arbeiten">Apps</a>
          <a href="#studio">Studio</a>
        </nav>
        <a className="header-cta" href="#arbeiten">Apps entdecken <span aria-hidden="true">↓</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />
        <div className="eyebrow"><span /> Unabhängiges Android Studio · Deutschland</div>
        <div className="hero-grid" id="main-content">
          <div className="hero-copy">
            <h1>Apps, die sich<br /><span>richtig anfühlen.</span></h1>
            <p className="hero-lead">AppsMakerDeluxe Studios zeigt eine wachsende Sammlung eigenständiger Android-Produkte – klar gestaltet, sorgfältig entwickelt und bei Google Play verfügbar.</p>
            <div className="hero-actions">
              <a className="button primary" href="#arbeiten">Apps entdecken <span aria-hidden="true">↓</span></a>
              <a className="button ghost" href="#studio">Zum Studio <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof" aria-label="Qualitätsmerkmale">
              <span><i /> Native Android</span>
              <span><i /> Eigenständige Produkte</span>
              <span><i /> Bei Google Play</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Auswahl realer App-Oberflächen">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="phone phone-back"><img src="/apps/everago.webp" alt="EverAgo App-Oberfläche" /></div>
            <div className="phone phone-main"><img src="/apps/daymigo.webp" alt="DayMigo App-Oberfläche mit täglicher Mission" /></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section className="section work" id="arbeiten">
        <div className="section-head reveal">
          <div><div className="eyebrow"><span /> Ausgewählte Arbeiten</div><h2>Veröffentlicht.<br /><em>Und im Einsatz.</em></h2></div>
          <p>Sieben veröffentlichte Apps und ein kommender Titel – verbunden durch klare Bedienung und sorgfältige Umsetzung.</p>
        </div>
        <div className="app-grid">
          {apps.map((app, index) => (
            <article className={`app-card ${index < 3 ? "featured" : "compact"} ${app.tone}`} key={app.name}>
              <div className="app-image-wrap">
                <img src={app.image} alt={`Originaler Google-Play-Screenshot von ${app.name}`} loading={index > 1 ? "lazy" : "eager"} />
                <span className="app-index">0{index + 1}</span>
              </div>
              <div className="app-info">
                <div className="app-tag">{app.tag}</div>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                {app.url ? (
                  <a href={app.url} target="_blank" rel="noreferrer" aria-label={`${app.name} bei Google Play öffnen`}>
                    Bei Google Play <span aria-hidden="true">↗</span>
                  </a>
                ) : <span className="app-availability">{app.availability}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" id="studio">
        <div className="statement-grid">
          <div className="eyebrow"><span /> AppsMakerDeluxe Studios</div>
          <blockquote>„Produkte, die <em>gerne benutzt werden</em> – mit einem klaren Fokus auf ihre jeweilige Idee.“</blockquote>
          <div className="values">
            <div><strong>Eigenständig.</strong><span>Jede App verfolgt ein eigenes, klar umrissenes Ziel.</span></div>
            <div><strong>Durchdacht.</strong><span>Funktionen bleiben verständlich und auf das Wesentliche konzentriert.</span></div>
            <div><strong>Weiter in Bewegung.</strong><span>Die Sammlung wächst mit neuen Ideen und Produktupdates.</span></div>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">A<span>M</span></span><span>AppsMakerDeluxe <em>Studios</em></span></a>
        <p>Android-Produkte mit Charakter.</p>
        <div><a href="#arbeiten">Apps</a><a href="#studio">Studio</a><a href="#top">Nach oben ↑</a></div>
        <small>© {new Date().getFullYear()} AppsMakerDeluxe Studios</small>
      </footer>
    </main>
  );
}
