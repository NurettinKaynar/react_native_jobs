import React, { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "Home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      return; // Exit early if fonts are not loaded
    }
    SplashScreen.preventAutoHideAsync(); // Call preventAutoHideAsync within a useEffect hook
  }, [fontsLoaded]); // Ensure useEffect runs whenever fontsLoaded changes

  if (!fontsLoaded) {
    return null; // Return null if fonts are not loaded yet
  }

  return (
    <Stack initialRouteName="Home">
      <Stack.Screen name="Home" />
    </Stack>
  );
};

export default Layout;
