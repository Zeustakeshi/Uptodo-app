import React from "react";
import { Text, View } from "react-native";
import { useHabitDetail } from "../../context/habitdetailsContext";
import ChooseColor from "../ChooseColor/ChooseColor";

const ChooseHabitColor = ({ habitData }) => {
    const { setColor } = useHabitDetail();

    const handleChooseHabitColor = (color) => {
        setColor(color);
    };
    return (
        <View className="my-2 mt-0">
            <Text className="text-lg font-medium my-3">
                Choose your favorite color
            </Text>
            <ChooseColor
                onChooseColor={(color) => handleChooseHabitColor(color)}
                defautColor={habitData.color}
            />
        </View>
    );
};

export default ChooseHabitColor;
