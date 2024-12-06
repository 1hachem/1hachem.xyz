export const languages = {
  en: "English",
  fr: "Français",
  ja: "日本語",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.about_me": "/about_me",
    "nav.blogs": "/blogs",
    footer: "Opinions are mine, all rights (and few wrongs) reserved.",
  },
  fr: {
    "nav.about_me": "/à_propos",
    "nav.blogs": "/blogs",
    footer:
      "Les opinions sont les miennes, tous droits (et quelques gauches) réservés.",
  },
  ja: {
    "nav.about_me": "/私について",
    "nav.blogs": "/ブログ",
    footer:
      "意見は私自身のものであり、すべての権利（そしていくつかの間違い）を留保します。",
  },
} as const;
