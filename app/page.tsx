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
    image: "/apps/kavorenza-store.webp",
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
  {
    key: "batterynivo" as const,
    image: "/apps/batterynivo.webp",
    url: "https://play.google.com/store/apps/details?id=de.appsmakerdeluxe.batterynivo",
    tone: "emerald",
    category: "phone" as const,
  },
  {
    key: "pdfpouch" as const,
    image: "/apps/pdfpouch.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.pdfpouch",
    tone: "coral",
    category: "phone" as const,
  },
  {
    key: "solitowers" as const,
    image: "/apps/solitowers.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.solitowers",
    tone: "emerald",
    category: "phone" as const,
  },
  {
    key: "wallivex" as const,
    image: "/apps/wallivex.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.wallivex",
    tone: "emerald",
    category: "phone" as const,
  },
  {
    key: "reframiq" as const,
    image: "/apps/reframiq.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.reframiq",
    tone: "indigo",
    category: "phone" as const,
  },
  {
    key: "niwajoridemo" as const,
    image: "/apps/niwajoridemo.webp",
    url: "https://play.google.com/store/apps/details?id=com.appsmakerdeluxe.niwajori.demo",
    tone: "rose",
    category: "phone" as const,
  },
];

const initialBackApp = APPS_META.find((a) => a.key === "everago")!;
const initialMainApp = APPS_META.find((a) => a.key === "daymigo")!;
const otherHeroApps = APPS_META.filter(
  (a) =>
    a.category === "phone" &&
    !a.tone.includes("wide") &&
    a.key !== "everago" &&
    a.key !== "daymigo"
);

export const HERO_APPS = [initialBackApp, initialMainApp, ...otherHeroApps];

function PortfolioView() {
  const { t, isRtl } = useLanguage();
  const [filter, setFilter] = React.useState<"all" | "phone" | "wearos">("all");
  const [heroIndex, setHeroIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isVideoActive, setIsVideoActive] = React.useState(false);

  React.useEffect(() => {
    if (isPaused || HERO_APPS.length < 2) return;

    let fadeTimeout: NodeJS.Timeout | null = null;
    const interval = setInterval(() => {
      setIsFading(true);
      fadeTimeout = setTimeout(() => {
        setHeroIndex((prev) => (prev + 2) % HERO_APPS.length);
        setIsFading(false);
      }, 400);
    }, 10000);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [isPaused]);

  const backApp = HERO_APPS[heroIndex % HERO_APPS.length];
  const mainApp = HERO_APPS[(heroIndex + 1) % HERO_APPS.length];
  const backAppName = t.apps[backApp.key]?.name ?? backApp.key;
  const mainAppName = t.apps[mainApp.key]?.name ?? mainApp.key;

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
          <a href="#videos">{t.nav.videos}</a>
          <a href="#studio">{t.nav.studio}</a>
          <a href="#kontakt">{t.nav.contact}</a>
        </nav>
        <div className="header-right-group">
          <a
            href="https://www.youtube.com/channel/UCCks9uUVA_N2LTcV4fHtnSw"
            target="_blank"
            rel="noreferrer"
            className="header-youtube-btn"
            aria-label={t.youtube.headerAria}
            title={t.youtube.headerAria}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <a
              href={backApp.url}
              target="_blank"
              rel="noreferrer"
              className={`phone phone-back ${isFading ? "fading" : ""}`}
              aria-label={`${backAppName} ${t.work.openPlayStoreAria}`}
            >
              <img
                src={backApp.image}
                alt={
                  backApp.key === "everago"
                    ? t.hero.backAppAlt
                    : `${t.work.screenshotAltPrefix} ${backAppName}`
                }
              />
            </a>
            <a
              href={mainApp.url}
              target="_blank"
              rel="noreferrer"
              className={`phone phone-main ${isFading ? "fading" : ""}`}
              aria-label={`${mainAppName} ${t.work.openPlayStoreAria}`}
            >
              <img
                src={mainApp.image}
                alt={
                  mainApp.key === "daymigo"
                    ? t.hero.mainAppAlt
                    : `${t.work.screenshotAltPrefix} ${mainAppName}`
                }
              />
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

      <section className="section youtube-section" id="videos">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-red" /> {t.youtube.eyebrow}
            </div>
            <h2>
              {t.youtube.titlePrefix}
              <br />
              <em>{t.youtube.titleEmphasis}</em>
            </h2>
          </div>
          <div>
            <p>{t.youtube.lead}</p>
          </div>
        </div>

        <div className="youtube-showcase">
          <div className="trailer-card">
            {isVideoActive ? (
              <div className="trailer-embed-wrap">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/yG09FU7UE8k?autoplay=1&rel=0"
                  title={t.youtube.trailerTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="trailer-iframe"
                />
                <button
                  type="button"
                  className="trailer-close-btn"
                  onClick={() => setIsVideoActive(false)}
                  aria-label={t.youtube.closeTrailer}
                >
                  ✕ {t.youtube.closeTrailer}
                </button>
              </div>
            ) : (
              <div
                className="trailer-preview"
                role="button"
                tabIndex={0}
                onClick={() => setIsVideoActive(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsVideoActive(true);
                  }
                }}
                aria-label={t.youtube.playTrailerAria}
              >
                <img
                  src="/trailer-solitowers.webp"
                  alt={`${t.youtube.trailerTitle} – ${t.youtube.badgeTrailer}`}
                  className="trailer-thumb"
                  loading="lazy"
                  width="1280"
                  height="720"
                />
                <div className="trailer-overlay">
                  <div className="trailer-top-badges">
                    <span className="badge-yt-pill">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      {t.youtube.badgeTrailer}
                    </span>
                    <span className="badge-duration">0:33</span>
                  </div>

                  <div className="trailer-play-button" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <div className="trailer-info-bar">
                    <div className="trailer-info-text">
                      <span className="trailer-label">{t.youtube.badgeTrailer}</span>
                      <h3 className="trailer-headline">{t.youtube.trailerTitle}</h3>
                      <p className="trailer-subline">{t.youtube.trailerSubtitle}</p>
                    </div>
                    <span className="trailer-cta-hint">
                      {t.youtube.playTrailerAria} <span aria-hidden="true">{isRtl ? "↖" : "↗"}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="channel-card">
            <div className="channel-card-glow" aria-hidden="true" />
            <div className="channel-header">
              <div className="channel-avatar-wrap">
                <img
                  src="/youtube-avatar.webp"
                  alt="AppsMakerDeluxe Studios YouTube Avatar"
                  className="channel-avatar-img"
                  width="74"
                  height="74"
                />
                <div className="channel-avatar-badge" title="Official Studio Channel">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <div className="channel-meta">
                <span className="channel-tag">YouTube Creator</span>
                <h3 className="channel-name">{t.youtube.channelTitle}</h3>
                <span className="channel-handle">{t.youtube.channelHandle}</span>
              </div>
            </div>

            <p className="channel-description">{t.youtube.channelDesc}</p>

            <div className="channel-features">
              <div className="channel-feature-item">
                <span className="channel-feature-bullet">🎬</span>
                <span>{t.youtube.feature1}</span>
              </div>
              <div className="channel-feature-item">
                <span className="channel-feature-bullet">⚡</span>
                <span>{t.youtube.feature2}</span>
              </div>
              <div className="channel-feature-item">
                <span className="channel-feature-bullet">📱</span>
                <span>{t.youtube.feature3}</span>
              </div>
            </div>

            <div className="channel-actions">
              <a
                href="https://www.youtube.com/channel/UCCks9uUVA_N2LTcV4fHtnSw"
                target="_blank"
                rel="noreferrer"
                className="button youtube-primary-btn"
                aria-label={`${t.youtube.subscribeButton}: ${t.youtube.channelTitle}`}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>{t.youtube.subscribeButton}</span>
                <span aria-hidden="true">{isRtl ? "↖" : "↗"}</span>
              </a>
            </div>
          </div>
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
          <a href="#videos">{t.nav.videos}</a>
          <a href="#studio">{t.nav.studio}</a>
          <a href="#kontakt">{t.nav.contact}</a>
          <a
            href="https://www.youtube.com/channel/UCCks9uUVA_N2LTcV4fHtnSw"
            target="_blank"
            rel="noreferrer"
            className="footer-youtube-link"
            aria-label={t.youtube.headerAria}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>{t.footer.youtube}</span>
            <span aria-hidden="true">{isRtl ? "↖" : "↗"}</span>
          </a>
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
