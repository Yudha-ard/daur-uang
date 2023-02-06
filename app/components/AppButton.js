import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../configs/colors'

export default function({title, onPress, backgroundColor = "primary", disabled = false}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[backgroundColor]}]} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        marginTop: 15,
        borderRadius: 40
    },
    text: {
        color: colors.white,
        fontSize: 18,
        // textTransform: 'uppercase',
        fontWeight: '700'
    }
})
