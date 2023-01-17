import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home/HomeScreen";
import {
    MainWelcome,
    WelcomeScreen1,
    WelcomeScreen2,
    WelcomeScreen3,
} from "./screens/welcome";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import SearchScreen from "./screens/Search/SearchScreen";
import TaskScreen from "./screens/Task/TaskScreen";
import SettingScreen from "./screens/Profile/SettingScreen";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { setMess } from "./redux/slice/test/helloSlice";
import Test from "./components/Test";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            {/* <Test></Test> */}
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Welcome1" component={WelcomeScreen1} />
                    <Stack.Screen name="Welcome2" component={WelcomeScreen2} />
                    <Stack.Screen name="Welcome3" component={WelcomeScreen3} />
                    <Stack.Screen name="MainWelcome" component={MainWelcome} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                    <Stack.Screen name="Task" component={TaskScreen} />
                    <Stack.Screen name="Setting" component={SettingScreen} />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}
