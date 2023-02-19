import React, { memo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../const";

const CalendarDay = ({
    label,
    onActive = () => {},
    onRemoveActive = () => {},
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleActive = () => {
        if (isActive) {
            onRemoveActive();
            setIsActive(false);
        } else {
            onActive();
            setIsActive(true);
        }
    };

    return (
        <TouchableOpacity
            onPress={handleToggleActive}
            style={isActive && { backgroundColor: colors.primary }}
            className="m-1 w-[35px] h-[35px] flex-row justify-center items-center bg-gray-100 rounded-full"
        >
            <Text
                style={isActive && { color: "#fff" }}
                className="text-xs font-bold"
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default memo(CalendarDay);
