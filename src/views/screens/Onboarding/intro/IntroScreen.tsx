import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../../components/CustomButton";

const IntroScreen = () => {
  return (
    <View style={styles.containerTop}>
      <View style={styles.onboardingContainer}>
        <Image
          source={require("../../../../../assets/images/onb1.png")}
          style={styles.onboardingImage}
        />

        <View style={styles.container}>
          <Text style={styles.title}>Find your Comfort Food here</Text>
          <Text style={styles.text}>
            Here You Can finna chef or dish for every taste and color. Enjoy
          </Text>
        </View>
      </View>

      <CustomButton />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },

  onboardingContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  onboardingImage: {
    width: "100%",
    aspectRatio: 1,
  },

  container: {
    alignItems: "center",
    // textAlign: "center",
    marginHorizontal: "12%",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },

  text: {
    textAlign: "center",
    fontSize: 19,
  },
});
