import {View} from 'react-native';
import {Input} from "@rneui/base";
import tw from "tailwind-react-native-classnames";
import {Button} from "@rneui/themed";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Context";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { signIn } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        signIn({ email, password })
    }


    return (
        <View className="flex-1 items-center justify-center">
            <Input
                placeholder='Email'
                errorMessage='Invalid Email'
                textContentType="emailAddress"
                onBlur={e =>
                    setEmail(e.nativeEvent.text)
                }
                onSubmitEditing={(e) => setEmail(e.nativeEvent.text)}
                containerStyle={
                    tw`ml-10 mr-10`
                }
                inputContainerStyle={
                    tw`ml-10 mr-10`
                }
                errorStyle={
                    tw`ml-10 mr-10 text-red-500`
                }
            />
            <Input placeholder="Password" secureTextEntry={true}
                   errorMessage='Invalid Password'
                   textContentType="password"
                   onBlur={e =>
                       setPassword(e.nativeEvent.text)
                   }
                   onSubmitEditing={(e) => setPassword(e.nativeEvent.text)}
                   onChange={(e) => setPassword(e.nativeEvent.text)}
                   containerStyle={
                       tw`ml-10 mr-10`
                   }
                   inputContainerStyle={
                       tw`ml-10 mr-10`
                   }
                   errorStyle={
                       tw`ml-10 mr-10 text-red-500`
                   }
            />

            <Button
                onPress={handleSubmit}
                buttonStyle={
                    tw`bg-green-500 border-2 border-white rounded-xl`
                }
                containerStyle={
                    tw`w-60 mx-5 my-2`
                }
                titleStyle={
                    tw`font-bold`
                }
                title="LOG IN"/>

            {/*<ButtonSecondary ButtonText="REGISTER" NavTo={creds}></ButtonSecondary>*/}

            <Button
                onPress={() => navigation.navigate('Register')}
                buttonStyle={
                    tw`bg-green-500 border-2 border-white rounded-xl`
                }
                containerStyle={
                    tw`w-60 mx-5 my-2`
                }
                titleStyle={
                    tw`font-bold`
                }
                title="REGISTER"/>

            {/*<ButtonSecondary ButtonText="REGISTER" NavTo={creds}></ButtonSecondary>*/}

        </View>
    );
}

export default Login