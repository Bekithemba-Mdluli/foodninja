import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

// import img from '../../../../assets/images/onb1.png';
interface IOnboardingContent {
  title: string;
  text: string;
  image: string;
}

const windowWidth = Dimensions.get("window").width;

const OnboardingContent = ({ title, text, image }: IOnboardingContent) => {
  return (
    <View style={styles.onboardingContainer}>
      <Image source={{ uri: image }} style={styles.onboardingImage} />

      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    width: windowWidth,
    flex: 1,
    justifyContent: "center",
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
    // marginHorizontal: "16%",
    marginVertical: 30,
  },

  text: {
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: "15%",
  },
});

export default OnboardingContent;
