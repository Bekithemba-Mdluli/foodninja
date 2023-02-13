import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import colors from "../../../../theme/colors";
import TextField from "../../../components/TextInput/TextField";
import SocialButton from "../../../components/SocialButton";
// import TextInput from "../../../components/TextInput";

const pattern = require("../../../../../assets/images/pattern.png");
const logo = require("../../../../../assets/images/logo.png");

const LoginScreen = () => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={pattern}
        resizeMethod="auto"
        style={styles.image}
      >
        <View style={styles.topContainer}>
          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>FoodNinja</Text>
          <Text style={styles.text}>Deliver Favourite Food</Text>
        </View>

        <Text style={styles.onbText}>Login To Your Account</Text>

        <View style={styles.inputs}>
          <TextField
            keyboard="email-address"
            onChangeText={onChangeText}
            text={text}
            placeholder="Email"
          />

          <TextField
            keyboard="default"
            onChangeText={onChangeText}
            text={text}
            placeholder="Password"
          />
        </View>

        <Text style={styles.bottomText}>Or Continue With</Text>

        <View style={styles.buttons}>
          <SocialButton
            image="https://res.cloudinary.com/dtwnppsc6/image/upload/v1676276625/images/facebook-icon_lvj4ot.png"
            text="Facebook"
          />
          <SocialButton
            image="https://res.cloudinary.com/dtwnppsc6/image/upload/v1676276625/images/google-icon_wuqhtg.png"
            text="Google"
          />
        </View>

        <Text style={styles.forgotText}>Forgot Password?</Text>

        <View style={styles.btnContainer}>
          <CustomButton />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logo: {
    aspectRatio: 1,
  },

  topContainer: {
    alignItems: "center",
  },

  title: {
    fontWeight: "700",
    fontSize: 49,
    color: colors.primary,
  },

  text: {
    fontSize: 13,
    fontWeight: "600",
  },
  onbText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "700",
  },
  inputs: {
    width: "100%",
    marginVertical: 20,
  },
  bottomText: {
    fontWeight: "700",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  forgotText: {
    color: colors.primary,
    textDecorationLine: "underline",
    marginVertical: 10,
    fontSize: 12,
  },
  btnContainer: {
    width: "40%",
    marginVertical: 30,
  },
});

export default LoginScreen;
