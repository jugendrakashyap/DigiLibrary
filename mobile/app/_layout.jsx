import { Redirect, Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />
    <Redirect href="/(tabs)/home" />
  </Stack>;
}
