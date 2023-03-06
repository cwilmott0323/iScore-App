import {View, Text, FlatList, TouchableHighlight} from "react-native";
import SlideItem from "./SlideItem";

export default function Slider ({images, userImages, half, navigation}) {
    const imagesAppend = "https://iscore-media.s3.us-east-2.amazonaws.com/" + images[0]
    const array3 = [imagesAppend, ...userImages];
    return(
        <View>
            <FlatList data={array3}
            renderItem={({item}) => <SlideItem item={item} half={half} x={images} y={userImages}/>}
            horizontal
                      pagingEnabled
                      snapToAlignment="center"
                      removeClippedSubviews={true}
                      maxToRenderPerBatch={3}
                      initialNumToRender={3}
                      windowSize={3}
            />
        </View>
    );
}