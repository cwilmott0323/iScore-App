import {View, Text, TouchableWithoutFeedback, Image, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {GetCityData} from '../api/GetCityData'
import {after} from "underscore";

function onPressPlace(setShowOne, setShowTwo, showOne, showTwo) {
    if (showOne || showTwo === true) {
        setShowOne(false)
        setShowTwo(false)
    } else {
        setShowOne(true)
        setShowTwo(true)
    }
}

function City ({ route, navigation }) {
    const { countryName, cityName } = route.params;
    const [Data, setData] = useState(false);

    let [cityDataPlaces, setCityDataPlaces] = useState({});
    let [cityDataFood, setCityDataFood] = useState({});
    let [cityDataEvents, setCityDataEvents] = useState({});

    const [showPlace, setShowPlace] = useState(true);
    const [showFood, setShowFood] = useState(true);
    const [showEvent, setShowEvent] = useState(true);

    const [pageLoading, setPageLoading] = useState(true);

    const places = [];
    const food = [];
    const events = [];

    useEffect(() => {
        async function fetchMyAPI(countryName,cityName) {
            const r = await GetCityData(countryName, cityName)
            r.data[0].forEach((item, i) => {
                for(let key in item) {
                    if (item[key] === "Place") {
                        places.push(item)
                    }
                    if (item[key] === "Food") {
                        food.push(item)
                    }
                    if (item[key] === "Event") {
                        events.push(item)
                    }
                    setCityDataPlaces(places)
                    setCityDataFood(food)
                    setCityDataEvents(events)
                }
            });
            setData(true)
        }
        fetchMyAPI(countryName, cityName)
        navigation.setOptions({ title: cityName })
    }, [])

    useEffect(() => {}, [showPlace])

    const onComplete = after(cityDataPlaces.length + cityDataFood.length + cityDataEvents.length, () => {
        setPageLoading(false);
        console.log("loaded");
    });

    return (
        <>
            {pageLoading &&
                <View className="h-full justify-center items-center bg-stone-900">
                    <ActivityIndicator size="large" color="#00ff00"  />
                </View>
            }
        <View className="bg-stone-900 h-full">
            <View className="flex flex-row justify-around items-end bg-stone-900 mt-2 mb-2" >
                        <MaterialCommunityIcons onPress={() => onPressPlace(setShowFood, setShowEvent, showFood, showEvent)} name="castle" size={48} color="white" />
                        <MaterialCommunityIcons onPress={() => onPressPlace(setShowPlace, setShowEvent, showPlace, showEvent)} name="food" size={48} color="white" />
                        <MaterialIcons onPress={() => onPressPlace(setShowFood, setShowPlace, showFood, showPlace)} name="event-seat" size={48} color="white" />
            </View>
            <ScrollView>
                {Data && showPlace && cityDataPlaces.map(({activity_id, activity_name, activity_type, image_location, points, sponsored}) => (
                    <View key={activity_id} className="flex flex-1 justify-center items-center mb-3 mt-1">
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Activity', {
                            imageLocation: image_location,
                            cityName: cityName,
                            countryName: countryName,
                            activity: activity_name,
                            activity_id: activity_id,
                        })}>
                            <Image className="h-60 w-11/12 rounded-xl"
                                   source={{
                                       uri: `https://iscore-media.s3.us-east-2.amazonaws.com/${image_location}`,
                                   }}
                                   onLoad={onComplete}
                                   onError={onComplete}
                            />
                        </TouchableWithoutFeedback>
                        <Text style={styles.textWithShadow} className="text-white absolute bottom-3 left-8 font-bold text-2xl items-start justify-center">
                            {activity_name}
                        </Text>
                        <View className="bg-blue-800 rounded-2xl pr-1 pl-1 absolute bottom-3 right-8">
                            <Text className="text-white font-bold text-xs">
                                {activity_type + " " + points}
                            </Text>
                        </View>
                    </View>
                ))}
                {Data && showFood && cityDataFood.map(({activity_id, activity_name, activity_type, image_location, points, sponsored}) => (
                    <View key={activity_id} className="flex flex-1 justify-center items-center mb-3 mt-1">
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('City')}>
                            <Image className="h-60 w-11/12 rounded-xl"
                                   source={{
                                       uri: `https://iscore-media.s3.us-east-2.amazonaws.com/${image_location}`,
                                   }}
                                   onLoad={onComplete}
                                   onError={onComplete}
                            />
                        </TouchableWithoutFeedback>
                        <Text style={styles.textWithShadow} className="text-white absolute bottom-3 left-8 font-bold text-2xl items-start justify-center">
                            {activity_name}
                        </Text>
                        <View className="bg-yellow-800 rounded-2xl pr-1 pl-1 absolute bottom-3 right-8">
                            <Text className="text-white font-bold text-xs">
                                {activity_type + " " + points}
                            </Text>
                        </View>
                    </View>
                ))}
                {Data && showEvent && cityDataEvents.map(({activity_id, activity_name, activity_type, image_location, points, sponsored}) => (
                    <View key={activity_id} className="flex flex-1 justify-center items-center mb-3 mt-1">
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('City')}>
                            <Image className="h-60 w-11/12 rounded-xl"
                                   source={{
                                       uri: `https://iscore-media.s3.us-east-2.amazonaws.com/${image_location}`,
                                   }}
                                   onLoad={onComplete}
                                   onError={onComplete}
                            />
                        </TouchableWithoutFeedback>
                        <Text style={styles.textWithShadow} className="text-white absolute bottom-3 left-8 font-bold text-2xl items-start justify-center">
                            {activity_name}
                        </Text>
                        <View className="bg-red-800 rounded-2xl pr-1 pl-1 absolute bottom-3 right-8">
                            <Text className="text-white font-bold text-xs">
                                {activity_type + " " + points}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
            </>
    );
}

const styles = StyleSheet.create({
    textWithShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.99)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    }
});

export default City