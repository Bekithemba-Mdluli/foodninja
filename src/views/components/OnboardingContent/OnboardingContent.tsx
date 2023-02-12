import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

// import img from '../../../../assets/images/onb1.png';
interface IOnboardingContent {
  title: string;
  text: string;
  image: string;
}

const OnboardingContent = ({ title, text, image }: IOnboardingContent) => {
  return (
    <View style={styles.onboardingContainer}>
      <Image source={{ uri: image }} style={styles.onboardingImage} />

      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginHorizontal: "16%",
  },

  text: {
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: "15%",
  },
});

export default OnboardingContent;
