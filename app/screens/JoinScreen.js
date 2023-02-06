import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import colors from '../configs/colors'
import AppButton from '../components/AppButton';

function JoinScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require("../assets/background-join.png")} >
                <Text style={styles.logo}>Daur Uang</Text>
                <View style={styles.content}>
                    <Text style={styles.title}>Selamat Datang</Text>
                    <Text style={styles.subTitle}>Mulai untuk menjadi penyelamat bumi!</Text>
                    <AppButton title="Login" onPress={() => navigation.navigate("UserLogin")} />
                    <AppButton title="Register" onPress={() => navigation.navigate("Signup")} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        borderRadius: 1000
    },
    logo: {
        height: 200,
        color: colors.white,
        resizeMode: "contain",
        alignSelf: "center",
        position: 'absolute',
        zIndex: 99999,
        top: 100,
        left: 300
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end',
        backgroundColor: colors.dark
    },
    content: {
        paddingHorizontal: 25,
        paddingBottom: 25,
        paddingTop: 35,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        color: colors.white
    },
    subTitle: {
        fontSize: 16,
        color: colors.white,
        marginBottom: 10
    },
    input: {
        borderColor: colors.medium,
        backgroundColor: colors.light,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15
    },
})

export default JoinScreen