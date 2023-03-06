import {View, Text} from 'react-native';
import {Input} from "@rneui/base";
import tw from "tailwind-react-native-classnames";
import {useContext, useEffect, useState} from "react";
import {Button} from "@rneui/themed";
import {RegisterUser} from "../api/RegisterUser";
import {AuthContext} from "../Context";

const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

const validName = new RegExp(
    '^[A-Za-z ,.\'-]+$'
)
const Register = ({navigation}) => {
    const [email, setUserEmail] = useState("")
    const [password, setUserPassword] = useState("")
    const [name, setUserName] = useState("")
    const [emailError, setEmailError] = useState("")
    const [userNameError, setUserNameError] = useState("")
    const [disabled, setDisabled] = useState("true")

    const { signUp } = useContext(AuthContext);

    const handleSubmitSignUp = async e => {
        console.log("Regitser Pressed: ", email, password, name)
        signUp({ email, password, name })
    }

    const validateEmail = () => {
        if (email === "") {
            return
        }
        if (!validEmail.test(email)) {
            setEmailError("Invalid Email")
            setDisabled("true")
        } else {
            setEmailError("")
            setDisabled(null)
        }
    }

    useEffect(() => {
        validateEmail()
    }, [email])

    const validateName = () => {
        if (name === "") {
            return
        }
        if (!validName.test(name)) {
            setUserNameError("Invalid Name")
            setDisabled("true")
        } else {
            setEmailError("")
            setDisabled(null)
        }
    }

    useEffect(() => {
        validateName()
    }, [name])

    return (
        <View className="flex-1 justify-center items-center">
            <Input
                placeholder='Email'
                errorMessage={emailError}
                textContentType="emailAddress"
                onBlur={e => {
                    setUserEmail(e.nativeEvent.text)
                }}
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
            <Input
                placeholder='Confirm Email'
                errorMessage={emailError}
                textContentType="emailAddress"
                onBlur={e => {
                    setUserEmail(e.nativeEvent.text)
                }}
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
            <Input
                placeholder='First Name'
                textContentType="emailAddress"
                errorMessage={userNameError}
                onBlur={e => {
                    setUserName(e.nativeEvent.text)
                }}
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
                   onBlur={e => {
                       setUserPassword(e.nativeEvent.text)
                   }}
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
            <Input placeholder="Confirm Password" secureTextEntry={true}
                   errorMessage='Invalid Password'
                   textContentType="password"
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
                onPress={() => handleSubmitSignUp()}
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

    </View>);

}

export default Register