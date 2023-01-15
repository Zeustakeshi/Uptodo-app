import React from "react";
import {
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { fakeImg } from "../../const";
import {
    AntDesign,
    Feather,
    Ionicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
    const { avatar, userName } = useSelector((state) => state.user);
    const navigation = useNavigation();

    return (
        <LayoutAuth title={"Profile"}>
            {/* Avatar and Name*/}
            <ScrollView
                className="mt-2 mb-5 pb-2"
                showsVerticalScrollIndicator={false}
            >
                <View className=" justify-center items-center ">
                    <Image
                        className=" w-[120px] h-[120px] rounded-full object-cover"
                        source={{ uri: avatar || fakeImg }}
                    />
                    <Text className="font-semibold text-2xl mt-3 ">
                        {userName}
                    </Text>
                </View>

                <View className="mt-4 flex-row justify-center items-center gap-x-5">
                    <View className="px-6 py-3 bg-gray-100 rounded-lg">
                        <Text className="font-normal text-sm">
                            10 Task left
                        </Text>
                    </View>
                    <View className="px-6 py-3 bg-gray-100 rounded-lg">
                        <Text className="font-normal text-sm">5 Task done</Text>
                    </View>
                </View>
                <View className="mt-5">
                    {/* setting */}
                    <SettingWrapper title="Setting">
                        <SettingItem
                            onPress={() => navigation.navigate("Setting")}
                            title="App Settings"
                            icon={
                                <AntDesign
                                    name="setting"
                                    size={24}
                                    color="black"
                                />
                            }
                        />
                    </SettingWrapper>
                    {/* Account */}
                    <SettingWrapper title="Account">
                        <SettingItem
                            title="Change account name"
                            icon={
                                <Feather name="user" size={24} color="black" />
                            }
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
                        icon={
                            <AntDesign
                                name="logout"
                                size={24}
                                color="#FF4949"
                            />
                        }
                        textStyle={styles.logoutText}
                        buttonStyle={styles.logoutButton}
                    />
                </View>
            </ScrollView>
        </LayoutAuth>
    );
};

const styles = StyleSheet.create({
    logoutButton: {
        marginBottom: 20,
    },
    logoutText: {
        color: "#FF4949",
        fontWeight: "500",
    },
});

const SettingWrapper = ({ title = "", children }) => {
    return (
        <View>
            <Text className="mb-2 mt-2 font-medium text-sm text-gray-500">
                {title}
            </Text>
            {children}
        </View>
    );
};

const SettingItem = ({
    icon = "",
    title = "",
    textStyle,
    buttonStyle,
    ...props
}) => {
    return (
        <TouchableOpacity
            className="flex-row py-3 gap-x-3 justify-start items-center "
            style={buttonStyle}
            {...props}
        >
            {icon}
            <Text className=" font-normal text-text-color" style={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default ProfileScreen;
