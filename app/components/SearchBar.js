import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons';
import colors from '../configs/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = ({ setCity, city }) => {

    return (
        <View style={tailwind`flex-row mt-3 px-4  border-b border-gray-100 border-b-2`}>
            <GooglePlacesAutocomplete
                placeholder={city || "Search"}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                onPress={data => setCity(data.structured_formatting.main_text)}
                minLength={2}
                fetchDetails={true}
                returnKeyType={"search"}
                onFail={error => Alert.alert('Worning', error)}
                query={{
                    key: "AIzaSyCbkV9FFXMySB7oOO1CfqoD-503Xw_YlhM",
                    language: 'id',
                }}
                styles={{
                    container: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F3F4F6',
                    },
                    textInput: {
                        fontSize: 15,
                        fontWeight: '700',
                        backgroundColor: '#FFFFFF',
                        marginTop: 5
                    },
                    textInputContainer: {
                        backgroundColor: '#FFFFFF',
                        borderRadius: 40,
                        justifyContent: 'center',
                    }
                }}
                enablePoweredByContainer={false}
                renderLeftButton={() => (
                    <View style={tailwind`self-center ml-3`}>
                        <Ionicons name="ios-location-sharp" size={24} color={colors.primary} />
                    </View>
                )}
                renderRightButton={() => (
                    <TouchableOpacity style={tailwind`self-center ml-3 flex-row items-center bg-white py-2 px-3 rounded-full mr-3`}>
                        <MaterialCommunityIcons name="clock-time-four" size={13} color="black" />
                        <Text style={tailwind`ml-1`}>Search</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBar;
