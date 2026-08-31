export type LanguageCode =
  | "de"
  | "en"
  | "fr"
  | "es"
  | "ar"
  | "fa"
  | "ja"
  | "zh"
  | "it"
  | "pt"
  | "ru"
  | "tr";

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  localName: string;
  flag: string;
  isRtl?: boolean;
}

export interface AppItemTranslation {
  name: string;
  tag: string;
  description: string;
  availability?: string;
}

export interface TranslationSchema {
  nav: {
    apps: string;
    studio: string;
    contact: string;
    discoverCta: string;
    skipLink: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    exploreApps: string;
    contactUs: string;
    badge1: string;
    badge2: string;
    badge3: string;
    scroll: string;
    backAppAlt: string;
    mainAppAlt: string;
  };
  work: {
    eyebrow: string;
    titlePrefix: string;
    titleEmphasis: string;
    subtitle: string;
    filterAll: string;
    filterPhone: string;
    filterWear: string;
    playStoreButton: string;
    screenshotAltPrefix: string;
    openPlayStoreAria: string;
  };
  apps: {
    daymigo: AppItemTranslation;
    lemivo: AppItemTranslation;
    riftivo: AppItemTranslation;
    riftivo3d: AppItemTranslation;
    mylovecalculator: AppItemTranslation;
    buymorrow: AppItemTranslation;
    storivio: AppItemTranslation;
    everago: AppItemTranslation;
    callblockerplus: AppItemTranslation;
    indexgenie: AppItemTranslation;
    luxcue: AppItemTranslation;
    chiliwise: AppItemTranslation;
    kavorenza: AppItemTranslation;
    paginotetrial: AppItemTranslation;
    stimmivo: AppItemTranslation;
    shiftano: AppItemTranslation;
    dialvori: AppItemTranslation;
    dialvexa: AppItemTranslation;
  };
  statement: {
    eyebrow: string;
    quotePrefix: string;
    quoteEmphasis: string;
    quoteSuffix: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
  };
  contact: {
    eyebrow: string;
    titlePrefix: string;
    titleEmphasis: string;
    lead: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      topicLabel: string;
      topicGeneral: string;
      topicSupport: string;
      topicFeature: string;
      topicCollab: string;
      clientLabel: string;
      clientDefault: string;
      clientGmail: string;
      clientOutlook: string;
      clientYahoo: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      copyButton: string;
      copiedSuccess: string;
      directContact: string;
      clientNote: string;
      emailGreeting: string;
      emailSender: string;
      emailContact: string;
      emailTopic: string;
      notSpecified: string;
      emailSubjectPrefix: string;
    };
  };
  footer: {
    tagline: string;
    backToTop: string;
    copyright: string;
  };
}
