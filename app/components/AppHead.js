import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../configs/colors'
import tailwind from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

function AppHead({ title, icon = null }) {
    const navigation = useNavigation()

    return (
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.topBar_icon} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={26} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.topBar_center} color={colors.white}>
                {icon && <Ionicons style={styles.icon} name={icon} size={27} color={colors.white} />}
                <Text style={[tailwind`font-bold`,styles.text]}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'relative',
        backgroundColor: colors.primary,
        borderColor: colors.medium,
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    topBar_icon: {
        top:  0,
        left: 20,
        marginTop: 10,
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    topBar_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 17,
    },
    icon: {
        marginRight: 10
    }
})

export default AppHead