import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChangePassword from "../../screens/auth/ChangePassword";
import LoginScreen from "../../screens/auth/LoginScreen";
import OTPVerifyScreen from "../../screens/auth/OTPVerifyScreen";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import FocusMainScreen from "../../screens/FocusMode/FocusMainScreen";
import FocusScreen from "../../screens/FocusMode/FocusScreen";
import FocusSettingScreen from "../../screens/FocusMode/FocusSettingScreen";
import CreateHabitScreen from "../../screens/HabitTracker/CreateHabitScreen";
import HabitsScreen from "../../screens/HabitTracker/HabitsScreen";
import HomeScreen from "../../screens/Home/HomeScreen";
import LoadingScreen from "../../screens/Loading/LoadingScreen";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import SettingScreen from "../../screens/Profile/SettingScreen";
import SearchScreen from "../../screens/Search/SearchScreen";
import TaskScreen from "../../screens/Task/TaskScreen";
import WebviewScreen from "../../screens/Webview/WebviewScreen";
import MainWelcome from "../../screens/welcome";
import Welcome from "../../screens/welcome/Welcome";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="MainWelcome" component={MainWelcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="OTP" component={OTPVerifyScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Habits" component={HabitsScreen} />
            <Stack.Screen name="CreateHabit" component={CreateHabitScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Focus" component={FocusScreen} />
            <Stack.Screen name="MainFocus" component={FocusMainScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Task" component={TaskScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="FocusSetting" component={FocusSettingScreen} />
            <Stack.Screen name="Webview" component={WebviewScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
