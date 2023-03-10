import {Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import {GetCountryData} from "../api/GetCountryData";
import {AuthContext} from "../Context";

const Country = ({ route, navigation }) => {

    const { country } = route.params;
    const [countryData, setCountryData] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        GetCountryData(setCountryData, country, setLoading, setLoadingCountries)
    }, [])

    return (
        <ScrollView className="bg-stone-900">
            {!isLoading && countryData[0].map(({ city_id, city_name, image_location, country_id, country_name }) => (
                <View key={city_id} className="flex flex-1 justify-center items-center mb-3 mt-1">
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('City', {
                        countryName: country_name,
                        cityName: city_name,
                    })}>
                        <Image className="h-60 w-11/12 rounded-xl"
                               source={{
                                   uri: `https://iscore-media.s3.us-east-2.amazonaws.com/${image_location}`,
                               }}
                        />

                    </TouchableWithoutFeedback>

                    <Text style={styles.textWithShadow} className="text-white absolute bottom-3 left-8 font-bold text-2xl items-start justify-center">
                        {city_name}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textWithShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.99)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    }
});

export default Country