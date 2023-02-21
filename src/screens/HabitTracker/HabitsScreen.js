import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import HabitItem from "../../components/Habits/HabitItem";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import * as Progress from "react-native-progress";
const HabitsScreen = () => {
    const naviagtion = useNavigation();
    return (
        <LayoutWrapper
            showNavigate
            navMiddleButton={
                <Animatable.View animation="rotate" iterationCount={1}>
                    <SimpleLineIcons name="energy" size={32} color="#ffff" />
                </Animatable.View>
            }
            navOnPressMidleButton={() => naviagtion.navigate("CreateHabit")}
        >
            <View className="w-full ">
                <HabitItem></HabitItem>
            </View>
        </LayoutWrapper>
    );
};

export default HabitsScreen;
