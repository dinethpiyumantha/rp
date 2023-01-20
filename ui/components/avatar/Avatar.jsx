import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import Colors from "../../../themes/colors";
import { LinearGradient } from "expo-linear-gradient";

export default function Avatar({ image, isColored, width }) {
  return (
    <View style={[styles.container, { height: width, width: width }]}>
      <LinearGradient
        style={styles.border}
        colors={isColored ? ["#08A02A", "#5DCA07"] : ["#151515", "#606060"]}
      >
        <img style={styles.image} src={image} alt="avatar" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: Colors.white,
    borderRadius: "100%",
  },
  border: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    padding: 3
  },
  image: {
    position: "relative",
    borderRadius: "100%",
    borderColor: Colors.white,
    borderWidth: 3,
    borderStyle: 'solid'
  },
});
