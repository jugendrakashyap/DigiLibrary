import { Redirect } from "expo-router";

export default function Index() {
  // Redirect root "/" to your home tab
  return <Redirect href="/(tabs)/home" />;
}
