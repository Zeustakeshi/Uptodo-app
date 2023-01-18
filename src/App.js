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
import { Text, TouchableHighlight, View } from "react-native";
const Stack = createNativeStackNavigator();

const notifycations = [
    {
        id: 1,
        title: "What do you want today",
        datails: "unknow",
    },
    {
        id: 2,
        title: "What do you want today",
        datails: "unknow",
    },
    {
        id: 3,
        title: "What do you want today",
        datails: "unknow",
    },
    {
        id: 4,
        title: "What do you want today",
        datails: "unknow",
    },
    {
        id: 5,
        title: "What do you want today",
        datails: "unknow",
    },
];

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

    return (
        <View className="w-full pt-20 flex-1 justify-center items-center">
            <Text>hello</Text>
        </View>
        // <Provider store={store}>
        //     {/* <Test></Test> */}
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
