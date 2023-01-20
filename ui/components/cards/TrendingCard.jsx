import { SourceCodePro_800ExtraBold } from "@expo-google-fonts/dev";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BannerImage from "../../../assets/banners/pink_banner.png";
import TrendingIcon from "../../../assets/icons/trendingIcon.png";
import Colors from "../../../themes/colors";
import AvatarWithName from "../avatar/AvatarWithName";
import AvatarImage from "../../../assets/avatar.png"

export default function TrendingCard() {
  return (
    <View style={styles.container}>
      <AvatarWithName image={AvatarImage} fullname={"Sandani Yasaswee"} username={"@sandaniyasaswee"} />
      <View style={styles.bottomContainer}>
        <View style={styles.design}>
        <View style={styles.whiteLine}></View>
        <Text style={styles.designCount}>98 Designs</Text>
        </View>
        <img style={styles.trendingIcon} src={TrendingIcon} alt="trending icon" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    height: 176,
    borderRadius: 20,
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  },
  bottomContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  design: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 20
  },
  whiteLine: {
    backgroundColor: Colors.white,
    width: 30
  },
  designCount: {
    color: Colors.white,
    fontFamily: SourceCodePro_800ExtraBold,
    fontWeight: 800,
    paddingLeft: 5,
    fontSize: 32,
    lineHeight: 30,
  },
  trendingIcon: {
    width: 70,
    height: 20,
    marginRight: 20
  }
});
