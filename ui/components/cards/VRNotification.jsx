import { SourceCodePro_800ExtraBold } from "@expo-google-fonts/dev";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../themes/colors";
import VRIcon from "../../../assets/icons/bi_badge-vr-fill.png"

export default function VRNotification() {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <img style={styles.vricon} src={VRIcon} alt="vr" />
            <Text style={styles.title}>Design is ready</Text>
        </View>
        <Text style={styles.description}>Now you can experience your dress via virtual reality</Text>
        <View style={styles.button}>
            <Text style={styles.buttonText}>OPEN IN VR MODE</Text>
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.senderName}>Sandani Yasaswee </Text>
            <Text style={styles.time}>10 Minutes Ago</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 20,
      backgroundColor: Colors.black,
      marginVertical: 10
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row"
    },
    vricon: {
        width: 30,
        height: 30
    },
    title: {
        color: Colors.white,
        marginLeft: 10,
        fontFamily: SourceCodePro_800ExtraBold,
        fontWeight: 400,
        fontSize: 20
    },
    description: {
        marginTop: 10,
        marginBottom: 20,
        color: Colors.white,
        fontFamily: SourceCodePro_800ExtraBold,
        fontWeight: 400,
        fontSize: 16
    },
    button: {
        backgroundColor: Colors.green,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "fit-content",
        alignSelf: "center"
    },
    buttonText: {
        textTransform: "uppercase",
        color: Colors.black,
        fontSize: 16,
        fontFamily: SourceCodePro_800ExtraBold,
        fontWeight: 600
    },
    bottomContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    senderName: {
        fontFamily: SourceCodePro_800ExtraBold,
        fontSize: 12,
        fontWeight: 300,
        color: Colors.white,
        textTransform: "uppercase"
    },
    time: {
        fontFamily: SourceCodePro_800ExtraBold,
        fontSize: 12,
        fontWeight: 300,
        color: Colors.white,
    }
  });