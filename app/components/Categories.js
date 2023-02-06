import React from 'react';
import { StyleSheet, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import colors from '../configs/colors';
import { categoriesData } from '../data/categoriesData'

const Categories = () => {
    return (
        <View style={tailwind`mx-3 mt-3`}>
            <Text style={tailwind`font-bold text-base`}>Jenis Sampah{'\n'}
                <Text style={tailwind`font-light text-sm`}>Pilih sampahmu dan setorkan !</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoriesData.map(({ image, text }, index) => (
                    <TouchableOpacity key={index} style={[tailwind`mx-1 my-3 items-center bg-gray-50 px-3 py-2 rounded-lg`, styles.box]}>
                        <Text style={tailwind`text-center text-xs text-white font-medium`}>{text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.primary,
        borderWidth: 0.9,
        borderColor: colors.primary,
        borderRadius: 10,
    }
})

export default Categories;
