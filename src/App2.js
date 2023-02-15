import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home/HomeScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import SearchScreen from "./screens/Search/SearchScreen";
import TaskScreen from "./screens/Task/TaskScreen";
import SettingScreen from "./screens/Profile/SettingScreen";
// import Test from "./components/Test";
import Welcome from "./screens/welcome/Welcome";
import MainWelcome from "./screens/welcome";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./screens/auth/LoginScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRef } from "react";
import { Octicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

export default function App() {
    // const [isFirstLauched, setIsFirstLauched] = useState(null);
    // useEffect(() => {
    //     const checkFirstLauched = async () => {
    //         const appData = await AsyncStorage.getItem("isFirstLauched");
    //         if (appData === null) {
    //             setIsFirstLauched(true);
    //             await AsyncStorage.setItem("isFirstLauched", "false");
    //         } else {
    //             setIsFirstLauched(false);
    //         }
    //     };
    //     checkFirstLauched();
    // }, []);

    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [image, setImage] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.on);
    const cameraRef = useRef(null);

    const handleGetPermission = async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === "granted");
        // setHasCameraPermission(cameraStatus.granted === true);
    };

    const handleSwitchCamera = () => {
        setCameraType((prevType) =>
            prevType === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front
        );
    };

    const handleTakePicture = async () => {
        if (cameraRef.current) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                if (data.uri) {
                    setImage(data.uri);
                    setHasCameraPermission(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleTurnOffCamera = () => {
        setHasCameraPermission(false);
    };

    const handleSaveImage = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <SafeAreaView>
            <View className="justify-center items-center min-h-full">
                <View className="py-10 flex-row gap-3 justify-center items-center">
                    <Text className="text-lg font-bold ">
                        camera permisstion:
                    </Text>
                    <Text className="">
                        {hasCameraPermission ? "OK" : "dont has permission"}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={handleGetPermission}
                    className="px-5 py-3 bg-primary rounded-xl"
                >
                    <Text className="text-white font-bold">open camera</Text>
                </TouchableOpacity>
                {image && (
                    <View>
                        <Image
                            className="w-[300px] h-[300px]"
                            source={{
                                uri: image,
                            }}
                        ></Image>
                        <TouchableOpacity onPress={handleSaveImage}>
                            <Text>Save to library</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {hasCameraPermission && (
                    <View className="absolute w-full h-full bg-black">
                        <Camera
                            className="w-full h-full"
                            type={cameraType}
                            flashMode={flash}
                            ref={cameraRef}
                        ></Camera>

                        <View className="absolute bottom-[100px] flex-row gap-x-2 items-center justify-center w-full">
                            <TouchableOpacity
                                onPress={handleSwitchCamera}
                                className="min-w-[30px] min-h-[20px]  bg-primary px-5 py-3 rounded-lg"
                            >
                                <Octicons
                                    name="arrow-switch"
                                    size={24}
                                    color="white"
                                />
                                {/* <Text className="text-white font-bold"></Text> */}
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleTurnOffCamera}
                                className=" min-w-[30px] min-h-[20px]  bg-primary px-5 py-3 rounded-lg"
                            >
                                <Text className="text-white font-bold">
                                    off
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleTakePicture}
                                className=" min-w-[30px] min-h-[20px]  bg-primary px-5 py-3 rounded-lg"
                            >
                                <Text className="text-white font-bold">
                                    take a picture
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
        // <Provider store={store}>
        //     {isFirstLauched !== null && (
        //         <NavigationContainer>
        //             <Stack.Navigator
        //                 screenOptions={{
        //                     headerShown: false,
        //                 }}
        //             >
        //                 {isFirstLauched && (
        //                     <Stack.Screen name="Welcome" component={Welcome} />
        //                 )}
        //                 {isFirstLauched && (
        //                     <Stack.Screen
        //                         name="MainWelcome"
        //                         component={MainWelcome}
        //                     />
        //                 )}
        //                 <Stack.Screen name="Login" component={LoginScreen} />
        //                 <Stack.Screen name="Home" component={HomeScreen} />
        //                 <Stack.Screen
        //                     name="Register"
        //                     component={RegisterScreen}
        //                 />
        //                 <Stack.Screen
        //                     name="Profile"
        //                     component={ProfileScreen}
        //                 />
        //                 <Stack.Screen name="Search" component={SearchScreen} />
        //                 <Stack.Screen name="Task" component={TaskScreen} />
        //                 <Stack.Screen
        //                     name="Setting"
        //                     component={SettingScreen}
        //                 />
        //             </Stack.Navigator>
        //             <StatusBar style="auto" />
        //         </NavigationContainer>
        //     )}
        // </Provider>
    );
}
