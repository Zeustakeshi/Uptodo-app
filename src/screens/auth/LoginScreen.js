import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import { appleIcon, googleIcon } from "../../../assets";
import LayoutAuth from "../../components/Layout/LayoutAuth";

const LoginScreen = () => {
    // state
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // navigation
    const navigation = useNavigation();

    //dispatch
    const dispatch = useDispatch();

    //handler
    const handleLogin = () => {
        navigation.navigate("OTP", { phoneNumber, type: "Login" });
    };

    return (
        <LayoutAuth>
            <View>
                <Text className="text-[32px] font-bold text-primary">
                    Login
                </Text>
            </View>
            {/* form */}
            <View className="mt-20">
                <View className="">
                    <Text className="font-medium text-base text-text-color mb-5">
                        Phone Number
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%] flex-row justify-start">
                        <View className="p-3 justify-center items-center">
                            <Text className="text-primary font-bold">+84</Text>
                        </View>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
                            keyboardType="numeric"
                            placeholder="Enter your phone"
                            className=" font-medium text-sm text-text-color p-3 pl-0 flex-1"
                            selectionColor="#6651f0"
                            maxLength={11}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    disabled={loading}
                    onPress={handleLogin}
                    className=" relative flex-row mt-10 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
                >
                    {loading && (
                        <ActivityIndicator
                            className="absolute"
                            size="large"
                            color="#fff"
                        />
                    )}
                    <Text
                        className="font-normal text-base text-white"
                        style={{ opacity: loading ? 0.5 : 1 }}
                    >
                        Send Code
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-4 items-center">
                <View className="flex-1 h-[1px] bg-gray-300"></View>
                <Text className="p-2 text-gray-300">or</Text>
                <View className="flex-1 h-[1px] bg-gray-300"></View>
            </View>
            {/* or auth */}
            {/* auth with google */}
            <View className="gap-y-5">
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={googleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Login with Google
                    </Text>
                </TouchableOpacity>
                {/* auth with apple */}
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={appleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Login with Apple
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Don’t have an account? Register */}
            <View className="flex-row flex-wrap mt-16 justify-center items-center gap-x-1">
                <Text className="text-sm font-normal text-gray-500">
                    Don’t have an account?{" "}
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text className="text-sm font-bold text-primary">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default LoginScreen;
