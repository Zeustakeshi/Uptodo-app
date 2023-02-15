import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import LoadingScreen from "./screens/Loading/LoadingScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import SettingScreen from "./screens/Profile/SettingScreen";
import SearchScreen from "./screens/Search/SearchScreen";
import TaskScreen from "./screens/Task/TaskScreen";
import WebviewScreen from "./screens/Webview/WebviewScreen";
import MainWelcome from "./screens/welcome";
import Welcome from "./screens/welcome/Welcome";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Loading" component={LoadingScreen} />
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="MainWelcome" component={MainWelcome} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                    <Stack.Screen name="Task" component={TaskScreen} />
                    <Stack.Screen name="Setting" component={SettingScreen} />
                    <Stack.Screen name="Webview" component={WebviewScreen} />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}
