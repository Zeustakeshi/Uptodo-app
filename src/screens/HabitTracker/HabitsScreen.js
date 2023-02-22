import React from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import * as Animatable from "react-native-animatable";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import HabitItem from "../../components/Habits/HabitItem";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";

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
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="w-full h-full py-4">
                    <Text className="font-semibold text-2xl ">Habits</Text>
                    {habitsList.length > 0 ? (
                        <View>
                            {habitsList.map((habit) => (
                                <HabitItem key={uuid.v4()} habitData={habit} />
                            ))}
                        </View>
                    ) : (
                        <View>
                            <Text>no habit</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </LayoutWrapper>
    );
};

export default HabitsScreen;
