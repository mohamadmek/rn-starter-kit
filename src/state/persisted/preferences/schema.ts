import { z } from "zod";

import { findSupportedAppLanguage } from "#/locale/helpers";
import { deviceLanguageCodes, deviceLocales } from "#/locale/deviceLocales";
import { deviceStorage } from "@/src/lib/storage";

const schema = z.object({
  colorMode: z.enum(["system", "light", "dark"]),
  darkTheme: z.enum(["dim", "dark"]).optional(),
  languagePrefs: z.object({
    /**
     * The language for UI translations in the app.
     *
     * BCP-47 2-letter language code with or without region,
     * to match with {@link AppLanguage}.
     */
    appLanguage: z.string(),
  }),
});
export type TPreferenceSchema = z.infer<typeof schema>;

export const PreferenceDefaults: TPreferenceSchema = {
  colorMode: "system",
  darkTheme: "dim",
  languagePrefs: {
    // try full language tag first, then fallback to language code
    appLanguage:
      deviceStorage.get(["appLanguage"]) ||
      findSupportedAppLanguage([
        deviceLocales.at(0)?.languageTag,
        deviceLanguageCodes[0],
      ]),
  },
};
