import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import uuid from "react-native-uuid";
import { useSelector } from "react-redux";
import { smokingPipe } from "../../../assets";
import AnimatedTyping from "../../components/AnimatedTyping";
import HabitItem from "../../components/Habits/HabitItem";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { colors } from "../../const";

const HabitsScreen = () => {
    const navigation = useNavigation();
    const { habitsList } = useSelector((state) => state.habits);
    return (
        <LayoutWrapper
            showNavigate
            navMiddleButton={
                <Animatable.View animation="rotate" iterationCount={1}>
                    <SimpleLineIcons name="energy" size={32} color="#ffff" />
                </Animatable.View>
            }
            navOnPressMidleButton={() => navigation.navigate("CreateHabit")}
        >
            <ScrollView className="" showsVerticalScrollIndicator={false}>
                <View className=" w-full h-full py-4">
                    <Text className="font-semibold text-2xl ">Habits</Text>
                    {habitsList.length > 0 ? (
                        <View>
                            {habitsList.map((habit) => (
                                <HabitItem key={uuid.v4()} habitData={habit} />
                            ))}
                        </View>
                    ) : (
                        <HabitEmpty></HabitEmpty>
                    )}
                </View>
            </ScrollView>
        </LayoutWrapper>
    );
};

const HabitEmpty = () => {
    return (
        <View className="flex-1 w-full justify-center items-center">
            <View className="w-[227px] h-[227px]">
                <Animatable.Image
                    animation="rubberBand"
                    easing="ease-in-out"
                    iterationCount={1}
                    className="w-full h-full object-cover "
                    source={smokingPipe}
                />
            </View>

            <View className="justify-center items-center mt-3 gap-y-2">
                <View className="mb-10">
                    <AnimatedTyping
                        quote
                        className="text-lg font-normal text-text-color text-center"
                        text={`You do not rise to the level of your goals. You fall to the level of your systems.`}
                        animatedTime={50}
                    />
                    <Text className="font-bold text-primary text-base text-center">
                        - James Clear -
                    </Text>
                </View>

                <View className="flex-row gap-x-2 items-center">
                    <Text className="text-base text-gray-800">Tap</Text>
                    <Animatable.View
                        animation="jello"
                        easing="ease-in-out"
                        iterationCount="infinite"
                        className="bg-primary rounded-full p-2 "
                    >
                        <View className="w-[28px] h-[28px] bg-white rounded-full justify-center items-center">
                            <SimpleLineIcons
                                name="energy"
                                size={20}
                                color={colors.primary}
                            />
                        </View>
                    </Animatable.View>
                    <Text className="text-base text-gray-800">
                        to create new
                        <Text className="font-bold text-primary"> habit</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default HabitsScreen;
