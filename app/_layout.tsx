import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
          animation: "slide_from_right",
          header: () => null,
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="screens/onboarding"
          options={{
            headerShown: false,
            headerBackTitle: "",
            title: "",
          }}
        />
         <Stack.Screen
          name="login/login"
          options={{
            headerShown: false,
            headerBackTitle: "",
            title: "",
          }}
        />
         <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerBackTitle: "",
            title: "",
          }}
        />
      </Stack>
    </>
  );
}