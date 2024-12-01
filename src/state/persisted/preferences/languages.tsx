import React from "react";
import { AppLanguage } from "#/locale/languages";
import {
  PreferenceDefaults,
  TPreferenceSchema,
} from "@/src/state/persisted/preferences/schema";

type TStateContext = TPreferenceSchema["languagePrefs"];
type ApiContext = {
  setAppLanguage: (code2: AppLanguage) => void;
};

const stateContext = React.createContext<TStateContext>(
  PreferenceDefaults.languagePrefs
);
const apiContext = React.createContext<ApiContext>({
  setAppLanguage: (_: AppLanguage) => {},
});

export function Provider({ children }: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<TStateContext>({
    appLanguage: "en",
  });

  const api = React.useMemo(
    () => ({
      setAppLanguage(code2: AppLanguage) {
        setState({ ...state, appLanguage: code2 });
      },
    }),
    [state]
  );

  return (
    <stateContext.Provider value={state}>
      <apiContext.Provider value={api}>{children}</apiContext.Provider>
    </stateContext.Provider>
  );
}

export function useLanguagePrefs() {
  return React.useContext(stateContext);
}

export function useLanguagePrefsApi() {
  return React.useContext(apiContext);
}
