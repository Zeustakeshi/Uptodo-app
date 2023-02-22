import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LineChart } from "react-native-chart-kit";
import { useDispatch } from "react-redux";
import HabitBanner from "../../components/Habits/HabitBanner";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { dayNamesShort, hexToRgba } from "../../const";
import { HabitDetalisProvider } from "../../context/habitdetailsContext";
import { setCompletionCounter } from "../../redux/slice/habits/habitsSlice";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const HabitsDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const habitData = route?.params?.habitData;

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
            <HabitView habitData={habitData} />
        </LayoutWrapper>
    );
};

const HabitView = ({ habitData }) => {
    const dispatch = useDispatch();

    const data = {
        labels:
            habitData.timeHabit.type === "weekly"
                ? habitData.timeHabit.days.map(
                      (time) => dayNamesShort[time.day]
                  )
                : habitData.timeHabit.days.map((time) => time.day + 1),
        datasets: [
            {
                data:
                    habitData.timeHabit.type === "weekly"
                        ? habitData.timeHabit.days.map(
                              (time) => time.completionCounter
                          )
                        : habitData.timeHabit.days.map(
                              (time) => time.completionCounter
                          ),
                color: (opacity = 1) => hexToRgba(habitData.color, opacity), // optional
                strokeWidth: 2, // optional
            },
        ],
        legend: [`Habit of ${habitData.timeHabit.type}`], // optional
    };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: (opacity = 1) => hexToRgba(habitData.color, opacity),
    };

    const handleUpdate = () => {
        dispatch(
            setCompletionCounter({
                id: habitData.id,
                dayIndex: Math.floor(
                    Math.random() * habitData.timeHabit.days.length
                ),
                completionCounter:
                    habitData.timeHabit.days[
                        Math.floor(
                            Math.random() * habitData.timeHabit.days.length
                        )
                    ].completionCounter + 1,
            })
        );
    };

    return (
        <View style={sytles.habitView} className="w-full flex-1 mx-auto">
            <HabitDetalisProvider habitData={habitData}>
                {/* baner */}
                <HabitBanner
                    color={habitData.color}
                    habitData={habitData}
                    animation="rubberBand"
                />
                <Text className="p-4 font-bold text-lg text-center ">
                    {habitData.title}
                </Text>
                <ScrollView className="w-full" horizontal>
                    <LineChart
                        data={data}
                        width={windowWidth + 200}
                        height={300}
                        chartConfig={chartConfig}
                    />
                </ScrollView>
            </HabitDetalisProvider>
            {/* <Text className="font-bold text-primary text-lg mb-10">
                {JSON.stringify(habitData)}
            </Text> */}
            <TouchableOpacity onPress={handleUpdate}>
                <Text className="font-bold text-lg text-primary">
                    Update counter{" "}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const sytles = StyleSheet.create({
    habitView: {
        height: windowHeight - 72,
        width: windowWidth - 48,
        flex: 1,
    },
});

export default HabitsDetailScreen;
