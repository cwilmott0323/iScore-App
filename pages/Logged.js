import {View, Text, ScrollView, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import DropdownComponent from "../components/Dropdown";
import {Button} from "@rneui/themed";
import tw from 'twrnc';
import {Icon} from "@rneui/base";
import {GetCountryData} from '../api/GetCountryData'
import {Image, StyleSheet} from 'react-native' ;
import {AuthContext} from "../Context";
import * as SecureStore from "expo-secure-store";




const Logged = ({ navigation }) => {
    const [value, setValue] = useState();
    const [countryData, setCountryData] = useState({});
    const [isLoading, setLoading] = useState(true);

    const { signOut } = useContext(AuthContext);

    function ClearToken() {
        signOut()
    }

    return (
        <View className="bg-stone-900 h-full">
            <View className="flex flex-row justify-around items-center bg-stone-900" >
                <DropdownComponent setValue={setValue} value={value}>
                </DropdownComponent>
                <Button  onPress={() => GetCountryData(setCountryData, value, setLoading)} buttonStyle={tw`bg-stone-900 h-16 mb-2 rounded-md mr-5`}>
                    <Icon name="search" color="white" />
                </Button>
            </View>
            <Button onPress={() => ClearToken()}>
                Logout
            </Button>
            <ScrollView>
                {!isLoading && countryData[0].map(({ city_id, city_name, image_location, country_id, country_name }) => (
                    <View key={city_id} className="flex flex-1 justify-center items-center mb-3 mt-1">
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('City', {
                            countryName: country_name,
                            cityName: city_name,
                        })}>
                        <Image className="h-60 w-11/12 rounded-xl opacity-80"
                               source={{
                                   uri: `https://iscore-media.s3.us-east-2.amazonaws.com/${image_location}`,
                               }}
                        />

                        </TouchableWithoutFeedback>

                        <Text className="text-white absolute bottom-3 left-8 font-bold text-2xl items-start justify-center drop-shadow-[70px_70px_70px_rgba(55,55,55,0.0)]">
                            {city_name}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
            );
}
export default Logged