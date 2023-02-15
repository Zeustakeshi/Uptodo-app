import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import OTPModal from "../../components/Modals/OTPModal";

const ChangePassword = () => {
    const handleChangePassword = (setModalVisible) => {
        setModalVisible(true);
    };

    return (
        <LayoutAuth title={"Change Password"} className="gap-y-4">
            <View className="">
                <Text className="font-medium text-base text-text-color mb-2">
                    Old Password
                </Text>
                <View className="bg-gray-100 rounded w-[100%]">
                    <TextInput
                        // value={email}
                        // onChangeText={(text) => {
                        //     setEmail(text);
                        // }}
                        autoFocus
                        secureTextEntry={true}
                        placeholder="Enter old password"
                        className="font-medium text-sm text-text-color p-3"
                        selectionColor="#6651f0"
                    />
                </View>
            </View>
            <View className="">
                <Text className="font-medium text-base text-text-color mb-2">
                    New Password
                </Text>
                <View className="bg-gray-100 rounded w-[100%]">
                    <TextInput
                        // value={email}
                        // onChangeText={(text) => {
                        //     setEmail(text);
                        // }}
                        secureTextEntry={true}
                        placeholder="Enter new password"
                        className="font-medium text-sm text-text-color p-3"
                        selectionColor="#6651f0"
                    />
                </View>
            </View>
            <View className="">
                <Text className="font-medium text-base text-text-color mb-2">
                    Confirm New Password
                </Text>
                <View className="bg-gray-100 rounded w-[100%]">
                    <TextInput
                        // value={email}
                        // onChangeText={(text) => {
                        //     setEmail(text);
                        // }}
                        secureTextEntry={true}
                        placeholder="Enter confirm password"
                        className="font-medium text-sm text-text-color p-3"
                        selectionColor="#6651f0"
                    />
                </View>
            </View>
            <View>
                <OTPModal
                    buttonShow={(setModalVisible) => (
                        <TouchableOpacity
                            // disabled={loading}
                            onPress={() =>
                                handleChangePassword(setModalVisible)
                            }
                            className=" relative flex-row mt-5 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
                        >
                            {/* {loading && (
                        <ActivityIndicator
                        className="absolute"
                        size="large"
                        color="#fff"
                        />
                    )} */}
                            <Text
                                className="font-normal text-base text-white"
                                // style={{ opacity: loading ? 0.5 : 1 }}
                            >
                                Change Password
                            </Text>
                        </TouchableOpacity>
                    )}
                ></OTPModal>
            </View>
        </LayoutAuth>
    );
};

export default ChangePassword;
