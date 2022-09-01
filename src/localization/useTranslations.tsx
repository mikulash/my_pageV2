import LocalizedStrings from "react-localization";
import Dictionary from "./dictionary";
import { useAppSelector } from "../components/store/store";

const translations = new LocalizedStrings(Dictionary);

const unknownTranslation = "Unknown translation for id: ";

export function useTranslations(...keys: string[]): object {
  const lang = useAppSelector((state) => state.language.value);
  translations.setLanguage(lang);
  return Object.fromEntries(
    keys.map((key) => {
      if (translations.getString(key) === null) {
        return [key, unknownTranslation + key];
      } else {
        return [key, translations.getString(key)];
      }
    })
  );
}
