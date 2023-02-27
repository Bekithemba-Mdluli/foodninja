import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../theme/colors";

const CustomButton = ({ handlePress }: any) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text style={styles.btnText}>Next</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    // padding: 30,
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 10,
  },

  btnText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 18,
  },
});

export default CustomButton;
