import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import {
    AntDesign,
    Entypo,
    Feather,
    MaterialCommunityIcons,
    Octicons,
} from "@expo/vector-icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { useSelector } from "react-redux";

const SettingScreen = () => {
    const { id: userId } = useSelector((state) => state.user);
    const { tasks } = useSelector((state) => state.tasks);

    const [asycServerLoading, setAsyncServerLoading] = useState(false);
    const handleAsyncServer = async () => {
        try {
            setAsyncServerLoading(true);
            const userRef = doc(db, "users", userId);
            await updateDoc(userRef, { tasks: tasks });
        } catch (error) {
            alert(error);
            console.log(error);
        }
        setAsyncServerLoading(false);
    };

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
                    <SettingItem
                        isLoading={asycServerLoading}
                        onPress={handleAsyncServer}
                        title="Async to server"
                        icon={
                            <Feather
                                name="upload-cloud"
                                size={24}
                                color="black"
                            />
                        }
                    />
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

const SettingItem = ({ title, icon, isLoading = false, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            className="flex-row gap-x-2  py-3 items-center"
        >
            <View className="flex-row justify-start items-center">
                {isLoading ? (
                    <ActivityIndicator size="small" color={"#6651f0"} />
                ) : (
                    icon
                )}
                <Text className="ml-4">{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SettingScreen;
