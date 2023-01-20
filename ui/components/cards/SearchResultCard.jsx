import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../avatar/Avatar";
import { useFonts, SourceSansPro_900Black } from "@expo-google-fonts/dev";

import AvatarImg from "../../../assets/avatar.png";
import CircleRight from "../../../assets/icons/material-symbols_arrow-circle-right-rounded.png";
import Colors from "../../../themes/colors";

export default function SearchResultCard() {
  return (
    <View style={styles.container}>
      <Avatar image={AvatarImg} isColored={false} width={70} />
      <View style={styles.rightContainer}>
        <View style={styles.designlabel}>
          <Text style={styles.designCount}>{77} Designs</Text>
        </View>
        <View style={styles.bottomRightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>SHAN PRASAD</Text>
            <Text style={styles.username}>@shanprasad97</Text>
          </View>
          <View style={styles.buttonContainer}>
            <img style={styles.buttonIcon} src={CircleRight} alt="btn icon" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden"
  },
  rightContainer: {
    position: "relative",
    width: "68%",
  },
  bottomRightContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5
  },
  designlabel: {
    position: "relative",
    backgroundColor: "#C0C0C0",
    width: "100%",
    height: "fit-content",
  },
  designCount: {
    color: "#C0C0C0",
    fontFamily: SourceSansPro_900Black,
    fontSize: 28,
    fontWeight: 600,
    paddingRight: 10,
    width: "fit-content",
    backgroundColor: "#D9D9D9",
  },
  nameContainer: {
    marginRight: 10,
    marginBottom: 10
  },
  name: {
    fontFamily: SourceSansPro_900Black,
    fontSize: 16,
    fontWeight: 500,
    color: Colors.dark,
  },
  username: {
    fontFamily: SourceSansPro_900Black,
    fontSize: 12,
    fontWeight: 300,
    color: Colors.dark,
  },
  buttonContainer: {
    backgroundColor: Colors.dark,
    width: 80,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    width: 40,
    height: 40
  },
});
