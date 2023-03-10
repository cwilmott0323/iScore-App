import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import Slider from "../components/Slider"
import {GetActivity} from "../api/GetActivity";
import {GetUserImages} from "../api/GetUserImages";
import {AuthContext} from "../Context";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import {Button} from "@rneui/themed";
import {UploadImage} from "../api/UploadImage";
import * as Location from 'expo-location';
import {CheckLocData} from "../api/CheckLocData";
import {CheckIsComplete} from "../api/IsComplete";
import {after} from "underscore";
import tw from "twrnc";


export function Activity({route, navigation}) {
    const {cityName, countryName, activity, activity_id} = route.params;
    const [data, setData] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesUser, setImagesUser] = useState([]);
    const { getToken } = useContext(AuthContext);
    const [photo, setPhoto] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(null)
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [upload, setUpload] = useState(false);
    const [complete, setComplete] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);


    const handleSubmitUpload = async (photo) => {
        let fileName = photo.split('/').pop();
        const token = await getToken();
        if (!complete) {
            let x = await CheckLocData(lat, lon, activity_id, token);
            if (!x.data[0]) {
                alert("Photo not taken in location.")
                return
            }
        }
        let resp = await UploadImage(photo, token, countryName, cityName, fileName);
        if (resp.status === 200) {
            setPhoto(null)
            setUploadSuccess(true)
            setUploadSuccess(null)
        }

    }

    const pickImage = async () => {
        setUpload(false)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
            exif: true
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
            setLat(result.assets[0].exif["GPSLatitude"])
            setLon(result.assets[0].exif["GPSLongitude"])
            setUpload(true)
        }
    };

    const openCamera = async () => {
        setUpload(false)
        await ImagePicker.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        await Location.requestForegroundPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
            exif: true,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
            if (!complete) {
                let location = await Location.getCurrentPositionAsync({});
                setLat(location.coords.latitude)
                setLon(location.coords.longitude)
            }
            setUpload(true)

        }
    };

    useEffect(() => {
        async function isCompleted(countryName,cityName, activity_id) {
            const token = await fetchToken()
            const complete = await CheckIsComplete(token, countryName,cityName, activity_id)
            if (complete.data[0]) {
                setComplete(true)
            }

        }
        async function fetchToken () {
            return await getToken()
        }
        async function fetchActivity(countryName,cityName, activity) {
            const token = await fetchToken()
            const r = await GetActivity(countryName, cityName, activity, setImages)
            await GetUserImages(token, setImagesUser, countryName, cityName)
            setData(true)
        }
        isCompleted(countryName, cityName, activity_id)
        fetchActivity(countryName, cityName, activity)
        navigation.setOptions({ title: activity })
    }, [uploadSuccess])

    return (
        <>
        {pageLoading &&
    <View className="h-full justify-center items-center bg-stone-900">
        <ActivityIndicator size="large" color="#00ff00"  />
    </View>
}
        <ScrollView className="bg-stone-900">
        <View className="">
            {data &&
            <Slider images={images} userImages={imagesUser} half={true} setPageLoading={setPageLoading}/>
            }
            <View>
                    {photo &&
                        <>
                            <View className="flex-row justify-around">
                            <Button buttonStyle={tw`bg-red-300 h-24 w-32 rounded-md mt-5`} title="Remove Photo" onPress={() => {setPhoto(null)
                                setUpload(false)}} />
                            <Button buttonStyle={tw`bg-red-300 h-24 w-32 rounded-md mt-5`} disabled={!upload} title="Upload" onPress={() => handleSubmitUpload(photo)} />
                            </View>
                            <View className="justify-center items-center">
                                <Image className="h-48 w-48 mt-5" source={{ uri: photo }} />
                            </View>

                            </>
                    }
                    {!photo &&
                        <>
                            <View className="flex-row justify-around">
                        <Button  buttonStyle={tw`bg-gray-300 h-24 w-32 rounded-md mt-5 font-bold text-lg`}  title="Choose Photo From Library" onPress={pickImage} />
                        <Button buttonStyle={tw`bg-red-300 h-24 w-32 rounded-md mt-5`} title="Take a Picture" onPress={openCamera} />
                            </View>
                            </>

                    }

            </View>
        </View>
        </ScrollView>
        </>
   );
}