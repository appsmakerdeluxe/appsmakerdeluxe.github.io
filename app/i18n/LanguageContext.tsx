"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { LanguageCode, LanguageInfo, TranslationSchema } from "./types.ts";
import { SUPPORTED_LANGUAGES, translations } from "./translations.ts";

const STORAGE_KEY = "appsmakerdeluxe_lang";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationSchema;
  isRtl: boolean;
  currentLangInfo: LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  t: translations.de,
  isRtl: false,
  currentLangInfo: SUPPORTED_LANGUAGES[0],
});

function detectBrowserLanguage(): LanguageCode {
  if (typeof window === "undefined" || !navigator) return "de";

  const browserLangs = navigator.languages || [navigator.language || "de"];

  for (const rawLang of browserLangs) {
    if (!rawLang) continue;
    const clean = rawLang.toLowerCase().split("-")[0];
    const match = SUPPORTED_LANGUAGES.find((item) => item.code === clean);
    if (match) {
      return match.code;
    }
  }

  return "de";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("de");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && SUPPORTED_LANGUAGES.some((item) => item.code === saved)) {
        setLanguageState(saved);
      } else {
        const detected = detectBrowserLanguage();
        setLanguageState(detected);
      }
    } catch {
      const detected = detectBrowserLanguage();
      setLanguageState(detected);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable
    }
  };

  const currentLangInfo =
    SUPPORTED_LANGUAGES.find((item) => item.code === language) ||
    SUPPORTED_LANGUAGES[0];
  const isRtl = Boolean(currentLangInfo.isRtl);
  const t = translations[language] || translations.de;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = isRtl ? "rtl" : "ltr";
    }
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isRtl,
        currentLangInfo,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
