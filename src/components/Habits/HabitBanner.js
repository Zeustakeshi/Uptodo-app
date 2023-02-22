import React from "react";
import { Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { useHabitDetail } from "../../context/habitdetailsContext";

const HabitBanner = ({ habitData, color, animation = "bounceIn" }) => {
    const { color: habitColor } = useHabitDetail();
    return (
        <Animatable.View
            animation={animation}
            easing="ease-in-out"
            iterationCount={1}
            style={{ backgroundColor: color || habitColor || habitData.color }}
            className={`w-full h-[150px] rounded-xl p-3 relative`}
        >
            <Image
                className="w-full h-full"
                resizeMode="contain"
                source={habitData.imgUrl}
            />
        </Animatable.View>
    );
};
export default HabitBanner;
