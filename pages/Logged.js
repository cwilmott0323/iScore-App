import {View, Text, TouchableWithoutFeedback, FlatList, Dimensions} from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import {Button} from "@rneui/themed";
import tw from 'twrnc';
import {Icon} from "@rneui/base";
import {Image, StyleSheet} from 'react-native' ;
import {AuthContext} from "../Context";
import {useHeaderHeight} from "@react-navigation/elements";
import { SelectList } from 'react-native-dropdown-select-list'
import {GetCountries} from "../api/GetCountries";
import { REACT_APP_MEDIA_BASE_URL } from "@env"




const Logged = ({ navigation }) => {
    let {width, height} = Dimensions.get("screen")
    const headerHeight = useHeaderHeight();
    height = height / 2.3
    height = height - headerHeight

    width = width / 2.2

    const { getToken } = useContext(AuthContext);
    const [isLoadingCountries, setLoadingCountries] = useState(true);
    const [countries, setCountries] = useState([]);

    const { signOut } = useContext(AuthContext);

    function ClearToken() {
        signOut()
    }

    useEffect(() => {
        async function fetchToken () {
            return await getToken()
        }
        async function fetchCountries() {
            const token = await fetchToken()
            const r = await GetCountries(setCountries, setLoadingCountries)
        }
        fetchCountries()
    }, [setCountries])

    const [selected, setSelected] = React.useState("");

    const data = [
        {key:'b', value:'England'},
        {key:'c', value:'Wales'},
        {key:'d', value:'Northern Ireland'},
        {key:'e', value:'Scotland'},
    ]

    return (
        <View className="h-full bg-red-300">
            <View className="flex flex-1 flex-col bg-stone-900">
                <View className="justify-center bg-blue-300 w-full rounded-md">
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    boxStyles={tw`mr-5 ml-5 mb-5 mt-5`}
                    dropdownStyles={tw`mr-5 ml-5 mb-5`}
                />
                     <Button onPress={() => navigation.navigate('Country', {
                         country: selected
                     })} buttonStyle={tw`bg-stone-900 h-12 rounded-md ml-5 mr-5 mb-5`}>
                         <Icon name="search" color="white" />
                     </Button>
                </View>
            <View className="bg-stone-900 flex-1">
                {!isLoadingCountries &&
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                    scrollEnabled={true}
                    data={countries}
                    renderItem={({item}) =>
                        <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Country', {
                            country: item.country_name
                        })}>
                        <Image source={{
                        uri: `${REACT_APP_MEDIA_BASE_URL}${item.image_location}`,
                    }} key="Gere"
                                                   style={{
                                                       width,
                                                       height,
                                                       resizeMode:'stretch',
                                                       borderWidth: 2,
                                                       borderColor: "#19171C",
                                                       // margin: 5,
                                                       marginTop: 5,
                                                       // marginLeft: 5,
                                                       // marginBottom: 5,
                                                       borderRadius: 10,
                                                   }}
                    />
                        </TouchableWithoutFeedback>
                            <Text style={styles.textWithShadow} className="text-white absolute bottom-3 left-3 font-bold text-2xl items-start justify-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                {item.country_name}
                            </Text>
                        </View>
                            }
                    keyExtractor={item => item.country_id}
                    numColumns={2}
                />

                    }
            </View>
            </View>

            </View>
            );
}

const styles = StyleSheet.create({
    textWithShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.99)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    }
});
export default Logged