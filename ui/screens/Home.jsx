import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, SourceSansPro_900Black } from "@expo-google-fonts/dev";

import BannerImage from "../../assets/banners/man_banner_reduced.jpg";
import Colors from "../../themes/colors";
import VRIcon from "../../assets/icons/bi_badge-vr-fill.png";
import FeatureButton from "../components/buttons/FeatureButton";

export default function Home() {

    let [fontsLoaded] = useFonts({
        SourceSansPro_900Black
      });


  return (
    fontsLoaded && <View>
      <View style={styles.banner}>
        <View></View>
        <View style={styles.titleBar}>
            <img style={styles.vricon} src={VRIcon} alt="vr icon"/>
            <Text style={[styles.titletext, { fontSize: 50, fontWeight: 600 }]}>DRESS</Text>
            <Text style={[styles.titletext, { fontSize: 100, fontWeight: 600, marginLeft: -5 }]}>ME</Text>
            <Text style={[styles.titletext, { fontSize: 12, fontWeight: 300 }]}>New entry to fashion designing world</Text>
        </View>
      </View>
      <View style={styles.cardBox}>
        <FeatureButton />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    height: "70vh",
    width: "100vw",
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomColor: Colors.green,
    borderBottomWidth: "7px",
  },
  titleBar: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "219px",
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  vricon: {
    height: 40,
    width: 40
  },
  titletext: {
    fontFamily: SourceSansPro_900Black,
    fontStyle: 'normal',
    color: Colors.white,
    lineHeight: 60,
  },
  cardBox: {
    display: 'flex',
    paddingHorizontal: 10
  }
});
