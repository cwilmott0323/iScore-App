import Slider from "../components/Slider";
import {View,Text} from "react-native";

export function FullImage({route}) {
        const {images, userImages} = route.params;
    return (<View className="flex flex-1 flex-col">
            <Slider images={images} userImages={userImages} half={false}/>
        </View>
    );
}
