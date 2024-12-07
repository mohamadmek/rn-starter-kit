import React, { useState } from "react";
import { setupI18n } from "@lingui/core";
import { I18nProvider as DefaultI18nProvider } from "@lingui/react";

import { useLocaleLanguage } from "./i18n";
import { messages as EnMessages } from "./locales/en/messages";
import { messages as DeMessages } from "./locales/de/messages";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [i18n] = useState(() =>
    setupI18n({
      locale: "en",
      locales: ["de", "en"], // 'en' is a fallback for `Intl.*` or `messages.en` if specified
      messages: {
        ["en"]: EnMessages,
        ["de"]: DeMessages,
      },
    })
  );
  useLocaleLanguage();
  return <DefaultI18nProvider i18n={i18n}>{children}</DefaultI18nProvider>;
}
