import { Button, Text, View } from "react-native";
import { useLanguageStore } from "@/src/state/persisted/preferences/languages";
import { Trans, useLingui } from "@lingui/react/macro";

export default function HomeScreen() {
  const { appLanguage, setAppLanguage } = useLanguageStore();
  const { t } = useLingui();
  console.log("HomeScreen", appLanguage);

  return (
    <View style={{ paddingTop: 100 }}>
      {/* <Text>{t`HELLO EVERYONE`}</Text> */}
      {/* <Text></Text> */}
      <Button
        title="press me"
        onPress={() => {
          setAppLanguage(appLanguage === "en" ? "de" : "en");
        }}
      />
    </View>
  );
}
