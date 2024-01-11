import "server-only";
import { IDict } from ":@/dictionaries";
import { Locale } from ":@/language";

const dictionaries: IDict = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  th: () => import("./dictionaries/th.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
