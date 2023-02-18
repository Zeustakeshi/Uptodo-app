// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";

// import { Provider } from "react-redux";
// import StackNavigator from "./src/components/Navigator/StackNavigator";
// import { store } from "./src/redux/store";

import { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import * as Notifications from "expo-notifications";
export default function App() {
    useEffect(() => {
        (async () => {
            // Yêu cầu quyền truy cập thông báo
            const { status } = await Notifications.getPermissionsAsync();
            console.log(status);
            if (status !== "granted") {
                alert("Bạn chưa cấp quyền truy cập thông báo cho ứng dụng!");
                return;
            }
        })();
    }, []);

    const handleShowNotify = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Thông báo mới",
                body: "Bạn có tin nhắn mới",
            },
            trigger: {
                seconds: 0,
            },
        });
        console.log("whow");
    };

    return (
        <View className="justify-center items-center flex-1 w-full">
            <TouchableOpacity onPress={handleShowNotify}>
                <Text>Click me!</Text>
            </TouchableOpacity>
        </View>
        // <Provider store={store}>
        //     <NavigationContainer>
        //         <StackNavigator></StackNavigator>
        //         <StatusBar style="auto" />
        //     </NavigationContainer>
        // </Provider>
    );
}
