import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../themes/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, SourceSansPro_900Black } from "@expo-google-fonts/dev";

import IonMan from "../../../assets/icons/ion_man.png";

export default function FeatureButton() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#272829", "#000000"]}
    >
    <img style={styles.icon} src={IonMan} alt="man" />
      <Text style={[styles.title, {marginTop: 8}]}>Take Body Measurements</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25vh",
    width: "18vh",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 17,
    paddingVertical: 20,
    paddingHorizontal: 10,
    textAlign: "center"
  },
  title: {
    fontFamily: SourceSansPro_900Black,
    fontWeight: 300,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center'
  },
  icon: {
    height: "14vh",
    width: "14vh"
  }
});
