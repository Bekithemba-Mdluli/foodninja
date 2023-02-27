// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
import IntroScreen from "./src/views/screens/Onboarding/intro";

import LoginScreen from "./src/views/screens/Onboarding/Login/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupForm from "./src/views/screens/Onboarding/SignupForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signup" component={SignupForm} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
