import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { View } from "react-native-animatable";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import SettingItem from "../../components/SettingItem/SettingItem";

const FocusSettingScreen = () => {
    return (
        <LayoutAuth title="Focus Setting">
            <View className="mt-5">
                <SettingItem
                    // onPress={}
                    title="Time focuse"
                    icon={
                        <MaterialIcons
                            name="access-alarms"
                            size={24}
                            color="black"
                        />
                    }
                />
                <SettingItem
                    // onPress={}
                    title="Notifications"
                    icon={
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="black"
                        />
                    }
                />
                <SettingItem
                    // onPress={}
                    title="Music"
                    icon={
                        <MaterialCommunityIcons
                            name="music-circle-outline"
                            size={24}
                            color="black"
                        />
                    }
                />
            </View>
        </LayoutAuth>
    );
};

export default FocusSettingScreen;
