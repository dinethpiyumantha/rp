import { SourceCodePro_800ExtraBold } from '@expo-google-fonts/dev';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../themes/colors';
import Avatar from './Avatar';

export default function AvatarWithName({image, fullname, username}) {
  return (
    <View style={styles.container}>
        <Avatar image={image} isColored={true} width={70} />
        <View style={styles.nameContainer}>
            <Text style={styles.fullname}>{fullname}</Text>
            <Text style={styles.username}>{username}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    nameContainer: {
        width: 150,
        marginLeft: 10
    },
    fullname: {
        fontFamily: SourceCodePro_800ExtraBold,
        fontSize: 17,
        fontWeight: 600,
        color: Colors.white,
        textTransform: "uppercase"
    },
    username: {
        fontFamily: SourceCodePro_800ExtraBold,
        fontSize: 12,
        color: Colors.white
    }
});