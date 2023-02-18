import {
    AntDesign,
    Feather,
    Ionicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { signOut } from "firebase/auth";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import ChangeUserNameModal from "../../components/Modals/ChangeUserNameModal";
import SettingItem from "../../components/SettingItem/SettingItem";
import TodoCoin from "../../components/TodoCoin/TodoCoin";
import { auth } from "../../firebase/firebase-config";
import { resetTasks } from "../../redux/slice/tasks/tasksSlice";
import { resetUserInfo, setUserAvatar } from "../../redux/slice/user/userSlice";

const ProfileScreen = () => {
    const {
        userName,
        task: userTask,
        todoCoin,
    } = useSelector((state) => state.user);
    const navigation = useNavigation();
    //dispatch
    const dispatch = useDispatch();

    // handler
    const handleChooseAvatar = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            // Image was selected from photo library
            const selectedAsset = result.assets[0];

            if (selectedAsset) {
                dispatch(setUserAvatar(selectedAsset.uri));
            }
        } else {
            let cameraResult = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!cameraResult.canceled) {
                // Image was taken with camera
                try {
                    const selectedAsset = cameraResult.assets[0];
                    if (selectedAsset) {
                        dispatch(setUserAvatar(selectedAsset.uri));
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    const handleLogout = () => {
        signOut(auth);
        dispatch(resetUserInfo());
        dispatch(resetTasks());
        navigation.reset({
            index: 1,
            routes: [{ name: "Login" }],
        });
    };

    return (
        <LayoutAuth title={"Profile"}>
            {/* Avatar and Name*/}
            <ScrollView
                className="mt-2 mb-5 pb-2"
                showsVerticalScrollIndicator={false}
            >
                <View className=" justify-center items-center ">
                    <Avatar
                        width={120}
                        height={120}
                        onPress={handleChooseAvatar}
                    ></Avatar>
                    <Text className="font-semibold text-2xl mt-3 ">
                        {userName}
                    </Text>
                </View>

                <View className="mt-4 justify-center items-center ">
                    <View className="bg-gray-100 rounded-t-3xl mb-5 flex-row justify-center items-center px-5 py-4">
                        <Text className="text-lg px-2 font-bold text-primary">
                            {todoCoin}
                        </Text>
                        <TodoCoin></TodoCoin>
                    </View>
                    <View className="flex-row justify-center items-center gap-x-5">
                        <View className="px-6 py-3 bg-gray-100 rounded-lg">
                            <Text className="font-normal text-sm">
                                <Text className="font-bold text-primary ">
                                    {userTask.taskLeft}{" "}
                                </Text>
                                Task left
                            </Text>
                        </View>
                        <View className="px-6 py-3 bg-gray-100 rounded-lg">
                            <Text className="font-normal text-sm">
                                <Text className="font-bold text-primary ">
                                    {userTask.taskDone}{" "}
                                </Text>
                                Task done
                            </Text>
                        </View>
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
                        <ChangeUserNameModal
                            buttonShow={(setModalVisible) => (
                                <SettingItem
                                    onPress={() => setModalVisible(true)}
                                    title="Change account name"
                                    icon={
                                        <Feather
                                            name="user"
                                            size={24}
                                            color="black"
                                        />
                                    }
                                />
                            )}
                        />
                        <SettingItem
                            onPress={handleChooseAvatar}
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
                            to="https://sites.google.com/view/phamminhhieu/trang-ch%E1%BB%A7?authuser=1"
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
                        onPress={handleLogout}
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

export default ProfileScreen;
