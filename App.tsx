import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import IntroScreen from "./src/views/screens/Onboarding/intro";

export default function App() {
  return (
    <View>
      <IntroScreen />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
