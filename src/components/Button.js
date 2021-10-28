import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Button({text, backgroundColor, onPress, iconName, height}) {
    return (
        <TouchableOpacity
        onPress={onPress}
        >
            <View style={[styles.btnStyle, {backgroundColor, height}]}>
               {iconName&& <Icon name={iconName} size={30} color='white' />}
               <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        width: 80,
        marginVertical: 10,
       paddingVertical: 12
    },
    text:{
        color: 'white',
        fontWeight: 'bold'
    }
})