import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen'
import tailwind from 'tailwind-react-native-classnames';
import AppHead from '../components/AppHead';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import { auth } from '../configs/firebase'

const AccountScreen = () => {
    const user = useSelector(selectUser)

    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            <AppHead title={`Profile`}/>
            <View style={tailwind`justify-center items-center`}>
                <View style={tailwind`rounded-full overflow-hidden w-48 h-48 mt-4`}>
                    <Image source={require('../assets/images/avatar.png')} style={tailwind`w-48 h-48`} />
                </View>
            </View>
            <View style={tailwind`mx-4 border-t border-t-2 mt-14 border-gray-100 mb-20 font-medium`}>
                <SavedPlaces
                    title="Nama Lengkap"
                    text={user?.name}
                    Icon={() => <AntDesign name="home" size={24} color="black" />}
                />
                <SavedPlaces
                    title="E-Mail"
                    text={user?.email}
                    Icon={() => <Ionicons name="md-briefcase-outline" size={24} color="black" />}
                />
            </View>
            <View style={tailwind`mx-4 border-gray-100 justify-center items-center`}>
                <AppButton title="Logout" onPress={() => auth.signOut()}/>
            </View>
        </Screen>
    );
}

export default AccountScreen;

const SavedPlaces = ({ title, text, Icon }) => (
    <TouchableOpacity style={tailwind`flex-row items-center my-3`}>
        <Icon />
        <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-gray-800`}>{title}</Text>
            <Text style={tailwind`text-gray-600 text-xs mt-1`}>{text}</Text>
        </View>
    </TouchableOpacity>
)
