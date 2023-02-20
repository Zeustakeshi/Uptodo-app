import React from "react";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const colorData = [
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#fdba74",
    "#fb923c",
    "#f97316",
    "#ea580c",
    "#fcd34d",
    "#fbbf24",
    "#f59e0b",
    "#d97706",
    "#84cc16",
    "#65a30d",
    "#22c55e",
    "#16a34a",
    "#15803d",
    "#14b8a6",
    "#0d9488",
    "#0ea5e9",
    "#1d4ed8",
    "#6366f1",
    "#4f46e5",
    "#4338ca",
    "#8b5cf6",
    "#9333ea",
    "#6b21a8",
    "#c026d3",
    "#a21caf",
    "#db2777",
    "#be185d",
    "#e11d48",
];

const ChooseColor = ({
    defautColor = colorData[8],
    onChooseColor = () => {},
}) => {
    const [showColorBoard, setShowColorBoard] = useState(false);
    const [currentColor, setCurrentColor] = useState(defautColor);
    const handleChooseColor = (index) => {
        onChooseColor(colorData[index]);
        setShowColorBoard(false);
        setCurrentColor(colorData[index]);
    };

    if (showColorBoard) {
        return (
            <ScrollView nestedScrollEnabled={true} horizontal>
                {colorData.map((color, index) => {
                    return (
                        <ChooseColorItem
                            onPress={() => handleChooseColor(index)}
                            color={color}
                            key={index}
                        ></ChooseColorItem>
                    );
                })}
            </ScrollView>
        );
    } else {
        return (
            <ChooseColorItem
                onPress={() => setShowColorBoard(true)}
                color={currentColor}
            />
        );
    }
};

const ChooseColorItem = ({ color, onPress = () => {} }) => {
    return (
        <View className="w-[50px] h-[50px] m-1 rounded-full overflow-hidden p-1 bg-gray-100 ">
            <TouchableOpacity
                onPress={onPress}
                className="w-full h-full rounded-full"
                style={{ backgroundColor: color }}
            ></TouchableOpacity>
        </View>
    );
};

export default ChooseColor;
