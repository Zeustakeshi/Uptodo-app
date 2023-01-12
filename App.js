import { StatusBar } from "expo-status-bar";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {
    MainWelcome,
    WelcomeScreen1,
    WelcomeScreen2,
    WelcomeScreen3,
} from "./screens/welcome";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";

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
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
