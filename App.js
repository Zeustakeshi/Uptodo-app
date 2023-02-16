import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import StackNavigator from "./src/components/Navigator/StackNavigator";
import { store } from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator></StackNavigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}
