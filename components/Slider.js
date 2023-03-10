import {View, Text, FlatList, TouchableHighlight} from "react-native";
import SlideItem from "./SlideItem";

export default function Slider ({images, userImages, half}) {
    const imagesAppend = images[0]
    const array3 = [imagesAppend, ...userImages];
    return(
        <View>
            <FlatList data={array3}
            renderItem={({item}) => <SlideItem item={item} half={half} x={images} y={userImages}/>}
                      horizontal
                      pagingEnabled
                      snapToAlignment="center"
                      numColumns={1}
                      removeClippedSubviews={true}
                      maxToRenderPerBatch={3}
                      initialNumToRender={3}
                      windowSize={3}
            />
        </View>
    );
}