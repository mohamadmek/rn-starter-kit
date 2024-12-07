import { Button, Text, View } from "react-native";
import { useLanguageStore } from "@/src/state/persisted/preferences/languages";
import { useLingui } from "@lingui/react/macro";
import { deviceStorage } from "@/src/lib/storage";
import { AppLanguage } from "@/src/locale/languages";

export default function HomeScreen() {
  const { appLanguage, setAppLanguage } = useLanguageStore();
  const { t } = useLingui();

  return (
    <View style={{ paddingTop: 100 }}>
      <Text>{t`HELLO EVERYONE`}</Text>
      <Button
        title="press me"
        onPress={() => {
          setAppLanguage(appLanguage === "en" ? "de" : "en");
          deviceStorage.set(
            ["appLanguage"],
            appLanguage === "en" ? AppLanguage.de : AppLanguage.en
          );
        }}
      />
    </View>
  );
}
