import {View} from 'react-native';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logged from "./pages/Logged";
import City from "./pages/City";
import {Activity} from "./pages/Activity";
import {useEffect, useMemo, useReducer} from "react";
import {CheckUserAuth} from "./components/CheckUserAuth";
import LoginUser from "./api/Login";
import Login from "./pages/Login";
import * as SecureStore from "expo-secure-store";
import {AuthContext} from "./Context";
import Register from "./pages/Register";
import {RegisterUser} from "./api/RegisterUser";
import {FullImage} from "./pages/FullImage";
import SlideItem from "./components/SlideItem";


function SplashScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    console.log("Signin Token", action.token)
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        },
    );

    const authContext = useMemo(
        () => ({
            signIn: async (data) => {
                const email = data.email
                const password = data.password
                    const {token, error} = await LoginUser({
                        email,
                        password
                    });
                    if (error) {
                        console.log("Error: ", error)
                    } else {
                        await SecureStore.setItemAsync("iScore", JSON.stringify(token.data[0]))
                        dispatch({ type: 'SIGN_IN', token: JSON.stringify(token.data[0])});
                    }
            },
            signOut: async () => {
                await SecureStore.deleteItemAsync("iScore")
                const x = await SecureStore.getItemAsync("iScore")
                console.log("Delete Token: ", x)
                dispatch({type: 'SIGN_OUT'})
            },
            signUp: async (data) => {
                console.log("DATA: ", data)
                const email = data.email
                const password = data.password
                const name = data.name
                const resp = await RegisterUser({
                    email,
                    password,
                    name
                });
                console.log("signup resp: ", resp.data)
                if (!resp.status) {
                   console.log("Error: Sign up failed")
                    return
                }

                const {token, error} = await LoginUser({
                        email,
                        password
                    })

                    if (error) {
                        console.log("Error: ", error)
                    } else {
                        await SecureStore.setItemAsync("iScore", JSON.stringify(token.data[0]))
                        dispatch({ type: 'SIGN_IN', token: JSON.stringify(token.data[0])});
                    }
            },
            getToken: async (data) => {
                await CheckUserAuth()
                return await SecureStore.getItemAsync("iScore");
            }
        }),
        []
    );

    // const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        async function tokenAuth() {
            let userToken
            try {
                userToken = await CheckUserAuth()
                if (!userToken) {
                    dispatch({ type: 'RESTORE_TOKEN', token: null });
                    throw new Error('Token is not valid')
                } else {
                    dispatch({ type: 'RESTORE_TOKEN', token: userToken });
                }

            } catch (e) {
console.log("Error: ", e)
            }
        }
        tokenAuth()
    }, []);

  return (
      <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                  headerStyle: {
                      backgroundColor: '#1C1917',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                      fontWeight: 'bold',
                  },
              }}>
              {state.isLoading ? (
                      <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                  <>
                  <Stack.Screen name="Login" component={Login} options={{title: "Login"}}/>
                  <Stack.Screen name="Register" component={Register} options={{title: "Register"}}/>
                  </>
              ) : (
                  <>
              <Stack.Screen name="Logged" component={Logged} options={{title: "Start your adventure!"}}/>
              <Stack.Screen name="City" component={City} options={{title: "Continue your adventure!"}}/>
              <Stack.Screen name="Activity" component={Activity} options={{title: "Continue your adventure!" ,
              headerShown: true}}/>
              <Stack.Screen name="FullImage" component={FullImage} options={{title: "Gallery",
                          headerShown: true}}/>
                  </>
              )}
          </Stack.Navigator>
      </NavigationContainer>
      </AuthContext.Provider>
  );
}