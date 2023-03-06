import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView
} from "react-native";

let {width, height} = Dimensions.get("screen")
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';

export default function SlideItem(item) {
    const navigation = useNavigation();
    const headerHeight = useHeaderHeight();
    const s = height / 2
    const y = height - headerHeight
    if (item.half) {

        return(
            <View style={[styles.container, { height: s }]}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('FullImage', {
                        images: item.x,
                        userImages: item.y
                })}>
                <Image
                    source={{
                        uri: `${item.item}`,
                    }}
                    resizeMode="stretch"
                    style={styles.image}
                >
                </Image>
                </TouchableWithoutFeedback>
            </View>);
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