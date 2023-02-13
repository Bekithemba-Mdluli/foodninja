import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import colors from "../../../theme/colors";

interface ITextFieldInput {
  onChangeText: Dispatch<SetStateAction<string>>;
  text: string;
  placeholder: string;
  keyboard: KeyboardTypeOptions;
}

const TextField = ({
  onChangeText,
  text,
  placeholder,
  keyboard,
}: ITextFieldInput) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      // keyboardType="email-address"
      keyboardType={keyboard}
      // accessibilityHint="Email"
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.border,
    width: "100%",
    height: 57,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    marginVertical: 10,
  },
});

export default TextField;
