import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput, Flex, FlatList, Box, Animated } from 'react-native';
import Screen from '../components/Screen';
import { meals } from '../data/mealsData'
import tailwind from 'tailwind-react-native-classnames';
import colors from '../configs/colors';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice'
import { Ionicons } from '@expo/vector-icons';
import NewsScreen from './NewsScreen';
import HomeScreen from './HomeScreen';
import PaymentScreen from './PaymentScreen';


    const BrowseScreen = ({ navigation }) => {
    const user = useSelector(selectUser)

    const width = useState(new Animated.Value(0))[0];
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/Yudha-ard/uas-data/main/articles.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return (
        
        <Screen style={tailwind`flex-1 bg-white`}>
            <ScrollView>
            <View style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
                <View style={[tailwind`flex justify-start`, styles.top]}>
                    <View style={tailwind`flex flex-row-reverse justify-end`}>
                        <View style={tailwind`flex flex-col`}>
                            <Text style={tailwind`text-sm ml-3 text-white font-medium`}>Selamat Datang{'\n'}
                                <Text style={tailwind`text-sm ml-3`}>{user?.name} </Text>
                            </Text>
                        </View>
                        <Image source={require('../assets/images/avatar.png')} style={tailwind`w-10 h-10`} />
                    </View>
                </View>
                <View style={[tailwind`flex flex-row-reverse justify-end ml-5 mr-5 mt-2`, styles.box]}>
                    <View style={tailwind`flex flex-col`}>
                        <View style={tailwind`flex flex-row justify-start m-5`}>
                            <Image source={require('../assets/images/coin.png')} style={[tailwind`rounded-lg mr-5`, styles.coin]}/>
                            <Text style={tailwind`text-xl font-bold text-white`}>Daur Point</Text>
                        </View>
                        <View style={tailwind`flex flex-row justify-start ml-5`}>
                            <Text style={tailwind`text-base text-white`}>Point Aktif</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
                                <Image source={require('../assets/images/tukar.png')} style={[tailwind`rounded-lg text-base text-white ml-40`, styles.tukar]}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={tailwind`text-base font-bold text-white ml-5`}>25000</Text>
                        <View style={tailwind`flex justify-center flex-col border-t border-gray-100 mt-5`}>
                            <Image source={require('../assets/images/poin.png')} style={tailwind`rounded-lg m-10`}/>
                        </View>
                    </View>
                </View>
                <View style={[tailwind`justify-center m-5 flex flex-row`, styles.box2]}>
                <TouchableOpacity style={tailwind`flex flex-col items-center m-4`} onPress={() => alert("Cooming Soon !")}>
                    <Image source={require('../assets/images/logo-1.png')} style={[tailwind`rounded-lg`, styles.img]}/>
                    <Text style={tailwind`text-center mt-1 text-xs`}>Katalog</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={tailwind`flex flex-col items-center m-4`} onPress={() => alert("Cooming Soon !")}>
                    <Image source={require('../assets/images/logo-2.png')} style={[tailwind`rounded-lg`, styles.img]}/>
                    <Text style={tailwind`text-center mt-1 text-xs`}>Belanja</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`flex flex-col items-center m-4`} onPress={() => alert("Cooming Soon !")}>
                    <Image source={require('../assets/images/logo-3.png')} style={[tailwind`rounded-lg`, styles.img]}/>
                    <Text style={tailwind`text-center mt-1 text-xs`}>Drop Point</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={tailwind`flex flex-col items-center m-4`} onPress={() => alert("Cooming Soon !")}>
                    <Image source={require('../assets/images/logo-4.png')} style={[tailwind`rounded-lg`, styles.img]}/>
                    <Text style={tailwind`text-center mt-1 text-xs`}>Pick Up</Text>
                </TouchableOpacity>   
                </View>
                <TouchableOpacity style={[tailwind`justify-center p-5 ml-5 mr-5`, styles.box3]} onPress={() => alert("Cooming Soon !")}>
                    <View style={tailwind`flex flex-row justify-center`}>
                        <View style={tailwind`flex flex-col justify-center ml-2 mr-5`}>
                            <Image source={require('../assets/images/star.png')} style={tailwind`rounded-lg`} />
                        </View>
                        <View style={tailwind`flex flex-col justify-center`}>
                            <Text style={tailwind`mb-3 text-xs`}>80XP Lagi Menjadi Penyelamat Negara!</Text>
                            <Image source={require('../assets/images/bar.png')} style={tailwind`w-full h-1`} />
                        </View>
                        <View style={tailwind`flex flex-col justify-center mr-2 ml-5`}>
                            <Ionicons name="chevron-forward-outline" size={30} color={colors.gray} />
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={tailwind`text-lg m-3 font-bold`}>Artikel Terbaru</Text>
                <View style={tailwind`flex-col justify-between`}>
                <FlatList scrollEnabled={false}
                    data={data.articles}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('NewsScreen', { item })} style={tailwind`w-full my-2 px-2 `}>
                            <View style={tailwind`justify-center ml-5 mr-5 mt-2`}>
                            <Image source={{ uri: item.image }} style={tailwind`w-full h-40 rounded-lg`} />
                            <View style={tailwind`flex-row items-center mt-1`}>
                                <View style={tailwind`flex-grow`}>
                                    <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>{item.title}</Text>
                                    <View style={tailwind`flex-row items-center`}>
                                        <Text style={tailwind`text-xs text-gray-700`}>{item.date}</Text>
                                    </View>
                                </View>
                            </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={({ id }, index) => id}
                    />
                </View>
            </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
    },
    top: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 200,
        padding: 50,
        paddingLeft: 20,
        position: 'relative',
        top:0,
        left:0
    },
    box: {
        backgroundColor: '#1DB954',
        top:-100,
        borderWidth: 0.9,
        borderColor: colors.white,
        borderRadius: 10
    },
    box2: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: -80,
        padding: 2
    },
    box3: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        padding: 10,
        marginBottom:10
    },
    img: {
        height: 50,
        width: 50
    },
    coin: {
        height: 40,
        width: 40
    },
    tukar: {
        width: 90,
        height: 30
    }
})

export default BrowseScreen;
