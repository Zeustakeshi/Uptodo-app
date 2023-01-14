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

const Stack = createNativeStackNavigator();

export default function App() {
    return (
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
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
