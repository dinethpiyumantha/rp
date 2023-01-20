import { SourceCodePro_800ExtraBold } from '@expo-google-fonts/dev';
import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../../themes/colors';

export default function Notification({description, time}) {
  return (
    <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.light,
        borderRadius: 20,
        marginVertical: 10
    },
    description: {
        fontFamily: SourceCodePro_800ExtraBold,
        fontWeight: 300,
        fontSize: 16,
        color: Colors.black,
        marginBottom: 20
    },
    time: {
        fontFamily: SourceCodePro_800ExtraBold,
        fontWeight: 300,
        fontSize: 12,
        color: Colors.black,
        textAlign: "right"
    }
});