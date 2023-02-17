import React from "react";
import { Linking, SafeAreaView, View } from "react-native";
import WebView from "react-native-webview";

const WebviewScreen = ({ route }) => {
    const uri = route?.params?.pram;

    return (
        <SafeAreaView className={`flex-1  bg-white`}>
            <View className="flex-1 pt-10">
                <WebView
                    source={{
                        uri: uri,
                    }}
                    style={{ flex: 1 }}
                    originWhitelist={["*"]}
                />
            </View>
        </SafeAreaView>
    );
};

export default WebviewScreen;
