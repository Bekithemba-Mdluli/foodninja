import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from "react";
import CustomButton from "../../../components/CustomButton";
import OnboardingContent from "../../../components/OnboardingContent";

// import lol from '../../../../../'

const IntroScreen = ({ navigation }: any) => {
  const onboardingData = [
    {
      image:
        "https://res.cloudinary.com/dtwnppsc6/image/upload/v1676201741/images/onb1_jmzfwg.png",

      title: "Find your Comfort Food here",
      text: "Here You Can finna chef or dish for every taste and color. Enjoy",
    },
    {
      image:
        "https://res.cloudinary.com/dtwnppsc6/image/upload/v1676201742/images/onb2_thrha7.png",
      title: "Food Ninja is Where Your Comfort Food Lives",
      text: "Enjoy a fast and smooth food delivery at your door step",
    },
  ];
  return (
    <View style={styles.containerTop}>
      <FlatList
        data={onboardingData}
        horizontal
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <OnboardingContent
              image={item.image}
              title={item.title}
              text={item.text}
            />
          </View>
        )}
        pagingEnabled
      />

      <View style={{ width: "40%", position: "absolute", bottom: 50 }}>
        <CustomButton handlePress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
