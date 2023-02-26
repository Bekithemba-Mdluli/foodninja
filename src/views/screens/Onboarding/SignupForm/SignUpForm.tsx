import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import TextField from "../../../components/TextInput";
import CustomButton from "../../../components/CustomButton";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const SignUpForm = () => {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Fill in your bio to get started</Text>
        <Text style={styles.text}>
          This data will be displayed in your account profile for security
        </Text>
      </View>
      <TextField
        keyboard="default"
        onChangeText={onChangeText}
        text={text}
        placeholder="First Name"
      />

      <TextField
        keyboard="default"
        onChangeText={onChangeText}
        text={text}
        placeholder="Last Name"
      />

      <TextField
        keyboard="default"
        onChangeText={onChangeText}
        text={text}
        placeholder="Mobile Number"
      />

      <View style={styles.btnContainer}>
        <CustomButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
  },
  textContainer: {
    paddingRight: 120,
    // backgroundColor: "green",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    // backgroundColor: "red",
  },

  text: {
    fontSize: 12,
    marginVertical: 20,
    // backgroundColor: "blue",
  },

  btnContainer: {
    // position: "absolute",
    marginTop: "auto",
    bottom: 0,
    // width: "40%",
    marginVertical: 30,
    marginHorizontal: "25%",
    // width: windowWidth,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "blue",
  },
});

export default SignUpForm;
