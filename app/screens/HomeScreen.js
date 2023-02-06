import React, { useEffect, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator, StyleSheet, Text } from 'react-native';
import AppHead from '../components/AppHead';
import HeaderTabs from '../components/HeaderTabs';
import Screen from '../components/Screen'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import RestaurantItem from '../components/RestaurantItem'
import tailwind from 'tailwind-react-native-classnames';
import { localRestaurants } from '../data/localRestaurants';
import colors from '../configs/colors'

const YELP_API_KEY = "syN678RumD0y2I0SpGTfgwWGyQl8-3ZURAVXhjyqffpbjyAMpxhD8opwv0gOgQJHyUT4CiUaSJcs9pQk32uzWQqGeA7wdEEe4AKd518o8RKGJ4CWlkmJxj0w_5bOY3Yx";

const HomeScreen = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("Surabaya")
    const [activeTab, setActiveTab] = useState("Delivery");
    const [loading, setLoading] = useState(false)

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        setLoading(true)
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                if (json.error) return Alert.alert('Sorry', json.error.description);
                setRestaurantData(
                    json?.businesses?.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        return 
        getRestaurantsFromYelp();
    }, [city, activeTab]);


    return (
        <Screen style={tailwind`flex-1`}>
            <AppHead title="Katalog Sampah"/>
            <SearchBar setCity={setCity} city={city} />
            <Categories />
            <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
                <DetailsScreen/>
            </ScrollView>
        </Screen>
    )
}


export default HomeScreen;
