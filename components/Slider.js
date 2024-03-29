import {View, Text, FlatList, TouchableHighlight} from "react-native";
import SlideItem from "./SlideItem";

export default function Slider ({images, userImages, half, setPageLoading}) {
    const imagesAppend = images[0]
    const array3 = [imagesAppend, ...userImages];
    console.log("All images: ", array3)
    return(
        <View>
            <FlatList data={array3}
            renderItem={({item}) => <SlideItem item={item} half={half} x={images} y={userImages} setPageLoading={setPageLoading}/>}
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