import { defaultLanguage, languages } from "../constants/nftnest";

export class Translations {
  static getDefaultLanguage = () => {
    const languageFromBrowser = navigator.language?.slice(0, 2);
    return (
      languages.find((lng) => languageFromBrowser.includes(lng)) ||
      defaultLanguage
    );
  };

  static getNewlanguage = (language?: string) => {
    const userLanguage = languages.find((lng) => language?.includes(lng));
    return userLanguage || defaultLanguage;
  };
}
