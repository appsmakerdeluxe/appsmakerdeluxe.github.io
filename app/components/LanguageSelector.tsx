"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.tsx";
import { SUPPORTED_LANGUAGES } from "../i18n/translations.ts";
import type { LanguageCode } from "../i18n/types.ts";

export default function LanguageSelector() {
  const { language, setLanguage, currentLangInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-selector-container" ref={containerRef}>
      <button
        type="button"
        className={`lang-selector-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Sprache wählen / Select language (aktuell: ${currentLangInfo.localName})`}
      >
        <span className="lang-flag" aria-hidden="true">
          {currentLangInfo.flag}
        </span>
        <span className="lang-code">{currentLangInfo.localName}</span>
        <span className="lang-chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {isOpen && (
        <ul
          className="lang-dropdown"
          role="listbox"
          aria-label="Verfügbare Sprachen"
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <li
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                className={`lang-option ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="lang-flag" aria-hidden="true">
                  {lang.flag}
                </span>
                <div className="lang-names">
                  <span className="lang-local">{lang.localName}</span>
                  {lang.localName !== lang.name && (
                    <span className="lang-native">{lang.name}</span>
                  )}
                </div>
                {isSelected && (
                  <span className="lang-check" aria-hidden="true">
                    ✓
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
