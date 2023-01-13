import React from "react";
import {
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { fakeImg } from "../../const";
import {
    AntDesign,
    Feather,
    Ionicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
const ProfileScreen = () => {
    return (
        <LayoutWrapper showNavigate={true}>
            {/* Title */}
            <View className="py-4">
                <Text className=" text-xl font-semibold text-text-color">
                    Profile
                </Text>
            </View>
            {/* Avatar and Name*/}
            <View className="mt-2 justify-center items-center ">
                <Image
                    className=" w-[120px] h-[120px] rounded-full object-cover"
                    source={{ uri: fakeImg }}
                />
                <Text className="font-semibold text-2xl mt-3 ">Minh Hiếu</Text>
            </View>

            <View className="mt-4 flex-row justify-center items-center gap-x-5">
                <View className="px-6 py-3 bg-gray-100 rounded-lg">
                    <Text className="font-normal text-sm">10 Task left</Text>
                </View>
                <View className="px-6 py-3 bg-gray-100 rounded-lg">
                    <Text className="font-normal text-sm">5 Task done</Text>
                </View>
            </View>
            <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
                {/* setting */}
                <SettingWrapper title="Setting">
                    <SettingItem
                        title="App Settings"
                        icon={
                            <AntDesign name="setting" size={24} color="black" />
                        }
                    />
                </SettingWrapper>
                {/* Account */}
                <SettingWrapper title="Account">
                    <SettingItem
                        title="Change account name"
                        icon={<Feather name="user" size={24} color="black" />}
                    />
                    <SettingItem
                        title="Change account password"
                        icon={
                            <Ionicons
                                name="key-outline"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <SettingItem
                        title="Change account Image"
                        icon={
                            <Ionicons
                                name="camera-outline"
                                size={24}
                                color="black"
                            />
                        }
                    />
                </SettingWrapper>
                {/* About */}
                <SettingWrapper title="Uptodo">
                    <SettingItem
                        title="About US"
                        icon={
                            <AntDesign
                                name="infocirlceo"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <SettingItem
                        title="FAQ"
                        icon={
                            <AntDesign
                                name="questioncircleo"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <SettingItem
                        title="Help & Feedback"
                        icon={
                            <Ionicons
                                name="flash-outline"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <SettingItem
                        title="Support US"
                        icon={
                            <SimpleLineIcons
                                name="like"
                                size={24}
                                color="black"
                            />
                        }
                    />
                </SettingWrapper>

                {/* logout */}
                <SettingItem
                    title="Log out"
                    icon={<AntDesign name="logout" size={24} color="#FF4949" />}
                    textStyle={styles.logoutText}
                />
            </ScrollView>
        </LayoutWrapper>
    );
};

const styles = StyleSheet.create({
    logoutText: {
        color: "#FF4949",
        fontWeight: "500",
    },
});

const SettingWrapper = ({ title = "", children }) => {
    return (
        <View>
            <Text className="mb-1 font-medium text-sm text-gray-500">
                {title}
            </Text>
            {children}
        </View>
    );
};

const SettingItem = ({ icon = "", title = "", textStyle, ...props }) => {
    return (
        <TouchableOpacity
            className="flex-row py-3 gap-x-3 justify-start items-center "
            {...props}
        >
            {icon}
            <Text
                className="text-base font-normal text-text-color"
                style={textStyle}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default ProfileScreen;