import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import colors from '../configs/colors';
import HomeScreen from '../screens/HomeScreen'
import TabCartButton from '../components/TabCartButton'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import BrowseScreen from '../screens/BrowseScreen';
import CartScreen from '../screens/CartScreen';
import GroceryScreen from '../screens/GroceryScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.activeTintColor,
                tabBarInactiveTintColor: colors.inActiveTintColor,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 60,
                },
            }}
        >
            

            <Tab.Screen name="Home" component={BrowseScreen}
                options={{
                    headerShown: false, tabBarLabel:() => {return null}, tabBarIcon: ({ focused, size }) => (
                    focused?
                    <Image source={ require('../assets/images/Beranda-active.png') } style={{ width: 40, height: 40, padding: 10 }} size={40}/>
                    :<Image source={ require('../assets/images/Beranda.png') } style={{ width: 40, height: 40 }}/>
                )}} style={{ alignItems: 'right' }}
            />
            <Tab.Screen name="Browse" component={HomeScreen}
                options={{
                    headerShown: false, tabBarLabel:() => {return null}, tabBarIcon: ({ focused, size }) => (
                    focused?
                    <Image source={ require('../assets/images/Transaksi-active.png') } style={{ width: 40, height: 40, padding: 10 }} size={40}/>
                    :<Image source={ require('../assets/images/Transaksi.png') } style={{ width: 40, height: 40 }}/>
                )}} style={{ alignItems: 'right' }}
            />
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    headerShown: false, tabBarLabel:() => {return null}, tabBarIcon: ({ focused, size }) => (
                    focused?
                    <Image source={ require('../assets/images/Tong-active.png') } style={{ width: 40, height: 40, padding: 10 }} size={40}/>
                    :<Image source={ require('../assets/images/Tong.png') } style={{ width: 40, height: 40 }}/>
                )}} style={{ alignItems: 'right' }}
            />
            <Tab.Screen name="Account" component={AccountScreen}
                options={{
                    headerShown: false, tabBarLabel:() => {return null}, tabBarIcon: ({ focused, size }) => (
                    focused?
                    <Image source={ require('../assets/images/Akun-active.png') } style={{ width: 40, height: 40, padding: 10 }} size={40}/>
                    :<Image source={ require('../assets/images/Akun.png') } style={{ width: 40, height: 40 }}/>
                )}} style={{ alignItems: 'right' }}
            />
        </Tab.Navigator>
    );
}


export default MainTabNavigator;
