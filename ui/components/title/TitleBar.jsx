import { StyleSheet, Text, View } from 'react-native'
import BackIcon from "../../../assets/icons/material-symbols_arrow-back.png"
import { useFonts, SourceSansPro_900Black } from "@expo-google-fonts/dev";

export default function TitleBar({title}) {
  return (
    <View style={styles.container}>
        <View style={styles.button}>
            <img style={styles.icon} src={BackIcon} alt="back" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.button}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 30
    },
    button: {
        width: 30,
        height: 30
    },
    title: {
        fontFamily: SourceSansPro_900Black,
        fontSize: 20,
        fontWeight: 400
    },
    icon: {
        position: "relative",
        width: "100%",
        height: "100%"
    }
});