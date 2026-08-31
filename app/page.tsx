/* Pre-compressed local WebP assets are used directly for predictable vinext output. */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import ContactForm from "./ContactForm";
import LanguageSelector from "./components/LanguageSelector";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";

const APPS_META = [
  {
    key: "daymigo" as const,
    image: "/apps/daymigo.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.daymigo",
    tone: "mint",
    category: "phone" as const,
  },
  {
    key: "lemivo" as const,
    image: "/apps/lemivo.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.lemivo",
    tone: "emerald",
    category: "phone" as const,
  },
  {
    key: "dialvori" as const,
    image: "/apps/dialvori.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.dialvori",
    tone: "cyber",
    category: "wearos" as const,
  },
  {
    key: "dialvexa" as const,
    image: "/apps/dialvexa-store.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.dialvexa",
    tone: "titanium",
    category: "wearos" as const,
  },
  {
    key: "riftivo" as const,
    image: "/apps/riftivo-store-2026-08.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.riftivo",
    tone: "blue wide",
    category: "phone" as const,
  },
  {
    key: "riftivo3d" as const,
    image: "/apps/riftivo3d.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.riftivo3d",
    tone: "lime",
    category: "phone" as const,
  },
  {
    key: "mylovecalculator" as const,
    image: "/apps/mylovecalculator.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.mylovecalculator",
    tone: "rose",
    category: "phone" as const,
  },
  {
    key: "buymorrow" as const,
    image: "/apps/buymorrow.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.buymorrow",
    tone: "amber",
    category: "phone" as const,
  },
  {
    key: "storivio" as const,
    image: "/apps/storivio.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.storivio",
    tone: "green",
    category: "phone" as const,
  },
  {
    key: "everago" as const,
    image: "/apps/everago.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.everago",
    tone: "violet",
    category: "phone" as const,
  },
  {
    key: "callblockerplus" as const,
    image: "/apps/call-blocker-plus.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.callblockerplus",
    tone: "coral",
    category: "phone" as const,
  },
  {
    key: "indexgenie" as const,
    image: "/apps/indexgenie.webp",
    url: "https://play.google.com/store/apps/details?id=com.draven.indexgenie",
    tone: "cyan",
    category: "phone" as const,
  },
  {
    key: "luxcue" as const,
    image: "/apps/luxcue.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.luxcue",
    tone: "gold",
    category: "phone" as const,
  },
  {
    key: "chiliwise" as const,
    image: "/apps/chiliwise.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.chiliwise",
    tone: "red",
    category: "phone" as const,
  },
  {
    key: "kavorenza" as const,
    image: "/apps/kavorenza.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.Kavorenza",
    tone: "indigo",
    category: "phone" as const,
  },
  {
    key: "paginotetrial" as const,
    image: "/apps/paginotetrial.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.paginotetrial",
    tone: "slate",
    category: "phone" as const,
  },
  {
    key: "stimmivo" as const,
    image: "/apps/stimmivo.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.stimmivo",
    tone: "purple",
    category: "phone" as const,
  },
  {
    key: "shiftano" as const,
    image: "/apps/shiftano.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.shiftano",
    tone: "blue",
    category: "phone" as const,
  },
];

function PortfolioView() {
  const { t, isRtl } = useLanguage();
  const [filter, setFilter] = React.useState<"all" | "phone" | "wearos">("all");

  const visibleApps = APPS_META.filter(
    (app) => filter === "all" || app.category === filter
  );

  return (
    <main>
      <a className="skip-link" href="#main-content">
        {t.nav.skipLink}
      </a>
      <header className="site-header" aria-label="Hauptnavigation">
        <a
          className="brand"
          href="#top"
          aria-label="AppsMakerDeluxe Studios – Startseite"
        >
          <img
            src="/logo.webp"
            alt="AppsMakerDeluxe Studios Logo"
            className="brand-logo"
            width="220"
            height="46"
          />
        </a>
        <nav className="desktop-nav" aria-label="Seitennavigation">
          <a href="#arbeiten">{t.nav.apps}</a>
          <a href="#studio">{t.nav.studio}</a>
          <a href="#kontakt">{t.nav.contact}</a>
        </nav>
        <div className="header-right-group">
          <LanguageSelector />
          <a className="header-cta" href="#arbeiten">
            {t.nav.discoverCta} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />
        <div className="eyebrow">
          <span /> {t.hero.eyebrow}
        </div>
        <div className="hero-grid" id="main-content">
          <div className="hero-copy">
            <h1>
              {t.hero.titleLine1}
              <br />
              <span>{t.hero.titleLine2}</span>
            </h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <a className="button primary" href="#arbeiten">
                {t.hero.exploreApps} <span aria-hidden="true">↓</span>
              </a>
              <a className="button ghost" href="#kontakt">
                {t.hero.contactUs} <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Qualitätsmerkmale">
              <span>
                <i /> {t.hero.badge1}
              </span>
              <span>
                <i /> {t.hero.badge2}
              </span>
              <span>
                <i /> {t.hero.badge3}
              </span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Auswahl realer App-Oberflächen"
          >
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <a
              href="https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.everago"
              target="_blank"
              rel="noreferrer"
              className="phone phone-back"
              aria-label={`EverAgo ${t.work.openPlayStoreAria}`}
            >
              <img src="/apps/everago.webp" alt={t.hero.backAppAlt} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.daymigo"
              target="_blank"
              rel="noreferrer"
              className="phone phone-main"
              aria-label={`DayMigo ${t.work.openPlayStoreAria}`}
            >
              <img src="/apps/daymigo.webp" alt={t.hero.mainAppAlt} />
            </a>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>{t.hero.scroll}</span>
          <i />
        </div>
      </section>

      <section className="section work" id="arbeiten">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">
              <span /> {t.work.eyebrow}
            </div>
            <h2>
              {t.work.titlePrefix}
              <br />
              <em>{t.work.titleEmphasis}</em>
            </h2>
          </div>
          <div>
            <p>{t.work.subtitle}</p>
            <div className="category-filters" role="tablist" aria-label="Kategorien">
              <button
                type="button"
                role="tab"
                aria-selected={filter === "all"}
                className={`filter-pill ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                {t.work.filterAll}
                <span className="pill-count">{APPS_META.length}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "phone"}
                className={`filter-pill ${filter === "phone" ? "active" : ""}`}
                onClick={() => setFilter("phone")}
              >
                {t.work.filterPhone}
                <span className="pill-count">
                  {APPS_META.filter((a) => a.category === "phone").length}
                </span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === "wearos"}
                className={`filter-pill ${filter === "wearos" ? "active" : ""}`}
                onClick={() => setFilter("wearos")}
              >
                {t.work.filterWear}
                <span className="pill-count">
                  {APPS_META.filter((a) => a.category === "wearos").length}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-grid">
          {visibleApps.map((meta, index) => {
            const app = t.apps[meta.key];
            return (
              <article
                className={`app-card ${meta.category === "wearos" ? "wear-card" : index < 3 ? "featured" : "compact"} ${
                  meta.tone
                }`}
                key={meta.key}
              >
                {meta.url ? (
                  <a
                    href={meta.url}
                    target="_blank"
                    rel="noreferrer"
                    className="app-image-wrap"
                    aria-label={`${app.name} ${t.work.openPlayStoreAria}`}
                  >
                    <img
                      src={meta.image}
                      alt={`${t.work.screenshotAltPrefix} ${app.name}`}
                      loading={index > 1 ? "lazy" : "eager"}
                    />
                    <span className="app-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {meta.category === "wearos" && (
                      <span className="platform-pill">Wear OS</span>
                    )}
                  </a>
                ) : (
                  <div className="app-image-wrap">
                    <img
                      src={meta.image}
                      alt={`${t.work.screenshotAltPrefix} ${app.name}`}
                      loading={index > 1 ? "lazy" : "eager"}
                    />
                    <span className="app-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {meta.category === "wearos" && (
                      <span className="platform-pill">Wear OS</span>
                    )}
                  </div>
                )}
                <div className="app-info">
                  <div className="app-tag">{app.tag}</div>
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  {meta.url ? (
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${app.name} ${t.work.openPlayStoreAria}`}
                    >
                      {t.work.playStoreButton}{" "}
                      <span aria-hidden="true">{isRtl ? "↖" : "↗"}</span>
                    </a>
                  ) : (
                    <span className="app-availability">{app.availability}</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="statement" id="studio">
        <div className="statement-grid">
          <div className="statement-brand-col">
            <div className="eyebrow">
              <span /> {t.statement.eyebrow}
            </div>
            <div className="statement-badge-wrap">
              <img
                src="/studio-badge.webp"
                alt="AppsMakerDeluxe Studios 3D Badge"
                className="statement-badge-img"
                width="260"
                height="246"
              />
              <div className="statement-badge-glow" aria-hidden="true" />
            </div>
          </div>
          <div className="statement-content-col">
            <blockquote>
              {t.statement.quotePrefix}
              <em>{t.statement.quoteEmphasis}</em>
              {t.statement.quoteSuffix}
            </blockquote>
            <div className="values">
              <div>
                <strong>{t.statement.value1Title}</strong>
                <span>{t.statement.value1Desc}</span>
              </div>
              <div>
                <strong>{t.statement.value2Title}</strong>
                <span>{t.statement.value2Desc}</span>
              </div>
              <div>
                <strong>{t.statement.value3Title}</strong>
                <span>{t.statement.value3Desc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div className="contact-intro">
          <div className="eyebrow">
            <span /> {t.contact.eyebrow}
          </div>
          <h2>
            {t.contact.titlePrefix}
            <br />
            <em>{t.contact.titleEmphasis}</em>
          </h2>
          <p>{t.contact.lead}</p>
          <a className="mail-link" href="mailto:appsmakerdeluxe@gmail.com">
            <span>appsmakerdeluxe@gmail.com</span>
            <span aria-hidden="true">{isRtl ? "↖" : "↗"}</span>
          </a>
        </div>
        <ContactForm />
      </section>

      <footer>
        <div className="footer-brand-col">
          <a
            className="brand footer-brand"
            href="#top"
            aria-label="AppsMakerDeluxe Studios – Startseite"
          >
            <img
              src="/logo.webp"
              alt="AppsMakerDeluxe Studios Logo"
              className="brand-logo footer-logo"
              width="260"
              height="56"
            />
          </a>
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-links">
          <a href="#arbeiten">{t.nav.apps}</a>
          <a href="#studio">{t.nav.studio}</a>
          <a href="#kontakt">{t.nav.contact}</a>
          <a href="#top">{t.footer.backToTop}</a>
        </div>
        <small>
          © {new Date().getFullYear()} {t.footer.copyright}
        </small>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioView />
    </LanguageProvider>
  );
}
