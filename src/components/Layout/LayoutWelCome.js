import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LayoutWrapper from "./LayoutWrapper";
import uuid from "react-native-uuid";

const LayoutWelCome = ({ imgSrc, total = 1, order = 1, title, desc }) => {
    const navigation = useNavigation();

    //  check this first
    useEffect(() => {
        const checkAlreadyLaunched = async () => {
            const alreadyLaunched = await AsyncStorage.getItem(
                "alreadyLaunched"
            );
            if (alreadyLaunched == null) {
                await AsyncStorage.setItem("alreadyLaunched", "true");
            } else {
                navigation.reset({
                    index: 1,
                    routes: [{ name: "Login" }],
                });
            }
        };
        checkAlreadyLaunched();
    }, []);

    const handleNextScreen = () => {
        if (order >= total) {
            navigation.navigate(`MainWelcome`);
        } else {
            navigation.navigate(`Welcome${order + 1}`);
        }
    };

    return (
        <LayoutWrapper>
            {/* Skip */}
            <View className={`w-full ${order > 1 ? "p-2" : "p-4"} `}>
                {order > 1 && (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MainWelcome")}
                    >
                        <Text className="text-text-color uppercase text-base font-normal">
                            Skip
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Image */}
            <View className=" first-letter: mx-auto w-[271px] h-[300px]">
                <Image
                    source={imgSrc}
                    className="flex-1 w-full h-full object-cover "
                />
            </View>
            {/* Progress */}
            <View className="mt-12 flex-row justify-center items-center gap-x-2">
                {new Array(total).fill(0).map((item, index) => {
                    return (
                        <View
                            key={uuid.v4()}
                            className={`w-7 h-1 rounded-md ${
                                index + 1 === order
                                    ? "bg-primary"
                                    : "bg-gray-200"
                            }`}
                        ></View>
                    );
                })}
            </View>
            {/* content */}
            <View className="mt-12 justify-start items-center">
                <Text className="font-bold text-[32px] text-[#6651f0] mb-6">
                    {title}
                </Text>
                <Text className="text-base font-normal text-center text-gray-500">
                    {desc}
                </Text>
            </View>
            {/* navigator */}
            <View className=" mt-28 bg-white flex-row justify-between px-2">
                {order > 1 && (
                    <TouchableOpacity
                        className="px-6 py-3 rounded"
                        onPress={() => navigation.goBack()}
                    >
                        <Text className="uppercase text-base font-medium text-text-color">
                            Back
                        </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    className="px-6 py-3 rounded bg-primary2 "
                    onPress={handleNextScreen}
                >
                    <Text className="uppercase text-base font-medium text-white">
                        {order < total ? "Next" : "Get Started"}
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutWrapper>
    );
};

export default LayoutWelCome;
