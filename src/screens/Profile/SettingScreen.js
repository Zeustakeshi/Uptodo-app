import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import {
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
    Octicons,
} from "@expo/vector-icons";

const SettingScreen = () => {
    return (
        <LayoutAuth title={"Settings"}>
            <View className="mt-2">
                <View>
                    <Text className="text-sm text-gray-500 font-medium">
                        Settings
                    </Text>

                    <View>
                        <SettingItem
                            title="Change app color"
                            icon={
                                <MaterialCommunityIcons
                                    name="draw"
                                    size={24}
                                    color="black"
                                />
                            }
                        />
                        <SettingItem
                            title="Change app typography"
                            icon={
                                <Octicons
                                    name="typography"
                                    size={24}
                                    color="black"
                                />
                            }
                        />
                        <SettingItem
                            title="Change app language"
                            icon={
                                <Entypo
                                    name="language"
                                    size={24}
                                    color="black"
                                />
                            }
                        />
                    </View>
                </View>
                <View>
                    <Text className="mt-2 text-sm text-gray-500 font-semibold">
                        Import
                    </Text>
                    <View>
                        <SettingItem
                            title="Import from Google calendar"
                            icon={
                                <AntDesign
                                    name="download"
                                    size={24}
                                    color="black"
                                />
                            }
                        />
                    </View>
                </View>
            </View>
        </LayoutAuth>
    );
};

const SettingItem = ({ title, icon, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            className="flex-row gap-x-2  py-3 items-center"
        >
            {icon}
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

export default SettingScreen;
