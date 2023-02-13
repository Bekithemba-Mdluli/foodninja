import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../theme/colors";

interface ISocialButton {
  image: string;
  text: string;
}

const SocialButton = ({ image, text }: ISocialButton) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 57,
    width: 152,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },

  image: {
    width: 25,
    height: 25,
  },

  text: {
    fontWeight: "700",
    marginLeft: 15,
  },
});

export default SocialButton;
