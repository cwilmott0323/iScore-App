import {ScrollView, Text, View, Image, TouchableWithoutFeedback, TouchableHighlight, StyleSheet} from "react-native";
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

export function Activity({route, navigation}) {
    const {cityName, countryName, activity, activity_id} = route.params;
    const [setActivityData] = useState({});
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
            setActivityData(r.data)
            setData(true)
        }
        isCompleted(countryName, cityName, activity_id)
        fetchActivity(countryName, cityName, activity)
    }, [uploadSuccess])

    return (
        <ScrollView>
        <View className="flex flex-1 flex-col">
            {data &&
            <Slider images={images} userImages={imagesUser} half={true}/>
            }
            <View>
                <Button title="Choose Photo From Library" onPress={pickImage} />
                <Button title="Take a Picture" onPress={openCamera} />
                {photo &&
                    <View>
                    <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
                    <Button title="Remove Photo" onPress={() => {setPhoto(null)
                        setUpload(false)}} />
                        <Button disabled={!upload} title="Upload" onPress={() => handleSubmitUpload(photo)} />

                    </View>
                }

            </View>
        </View>
        </ScrollView>
   );
}