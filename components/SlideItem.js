import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView, ActivityIndicator
} from "react-native";

let {width, height} = Dimensions.get("screen")
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import {after} from "underscore";
import React, {useState} from "react";

export default function SlideItem(item) {
    const navigation = useNavigation();
    const headerHeight = useHeaderHeight();
    const s = height / 2
    const y = height - headerHeight

    const onComplete = after(1, () => {
        item.setPageLoading(false);
        console.log("loaded Last");
    });
    if (item.half) {
        return(
            <>
            <View style={[styles.container, { height: s }]}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('FullImage', {
                        image: item.item
                })}>
                <Image
                    source={{
                        uri: `${item.item}`,
                    }}
                    resizeMode="stretch"
                    style={styles.image}
                    onLoad={onComplete}
                    onError={onComplete}
                >
                </Image>
                </TouchableWithoutFeedback>
            </View>
                </>
                );
    }
    return(
        <ScrollView>
        <View style={[styles.container, { height: y }]}>
            <Image
                source={{
                    uri: `${item.item}`,
                }}
                resizeMode="contain"
                style={styles.image}
            >
            </Image>
        </View>
        </ScrollView>);


}

const styles = StyleSheet.create({
    container: {
        height,
        width,
        backgroundColor: "black",
        display: "flex",
        flex: 1,
    },
    image : {
        flex: 1,
    }
})