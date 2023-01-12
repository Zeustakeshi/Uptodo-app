import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";

const MainWelcome = () => {
    const navigation = useNavigation();
    return (
        <LayoutAuth>
            <View className="mt-14">
                <Text className="text-[32px] font-bold text-primary text-center mb-6">
                    Welcome to UpTodo
                </Text>
                <Text className="font-normal text-base text-gray-500 text-center">
                    Please login to your account or create new account to
                    continue
                </Text>
            </View>
            <View className="flex-1 justify-center px-4 py-10">
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    className="w-full py-3 bg-primary2 rounded justify-center items-center mb-5"
                >
                    <Text className="font-normal text-base text-white">
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                    className="w-full py-3 border-2 border-primary2 rounded justify-center items-center"
                >
                    <Text className="uppercase text-base font-normal text-primary">
                        Create account
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default MainWelcome;
