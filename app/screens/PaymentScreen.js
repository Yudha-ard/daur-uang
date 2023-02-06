import React from 'react';
import { NativeBaseProvider, ScrollView, View, Image, Text, Badge } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppHead from '../components/AppHead';
import Screen from '../components/Screen';

export default function PaymentScreen()  {

  return (
    <Screen style={tailwind`flex-1 bg-white`}>
    <AppHead title="Detail Berita"/>
      <ScrollView>
        <View style={tailwind`flex-col justify-between`}>
          <Text style={tailwind`text-xl m-3`}>asd</Text>
          <Image source={{ uri: item.image }} style={tailwind`w-full h-60`} />
          <View style={tailwind`flex-grow ml-5 mb-3`}>
            <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>asd</Text>
              <View style={tailwind`flex-row items-center`}>
                <MaterialCommunityIcons name="home-outline" size={13} color="#06C167" />
                <Text style={tailwind`text-sm text-gray-700 ml-2`}>asd</Text>
              </View>
          </View>
          <View style={tailwind`flex-grow ml-2 mb-3`}>
            <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>asd</Text>
              <View style={tailwind`flex-row items-center`}>
                <Text style={tailwind`text-sm text-gray-700 ml-2`}>asd</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
