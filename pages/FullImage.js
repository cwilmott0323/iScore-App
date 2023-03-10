import Slider from "../components/Slider";
import {View, Text, Image, StyleSheet} from "react-native";
import React from "react";

export function FullImage({route}) {
        const {image} = route.params;

        console.log("Image single: ", image)
    return (
            <Image className="h-full bg-black"
                source={{
                    uri: image,
                }}
                resizeMode="contain"
                style={styles.image}
            >
            </Image>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: "black",
        display: "flex",
        flex: 1,
    },
    image : {
        flex: 1,
    }
})
