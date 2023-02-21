import React from "react";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Icon, { icons } from "./Icon";
const ChooseIcon = ({ defaultColor, defaultIcon, onChooseIcon = () => {} }) => {
    const [showIconBoard, setShowIconBoard] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(defaultIcon);
    const hanldeChooseIcon = (index) => {
        setCurrentIcon(index);
        onChooseIcon(index);
        setShowIconBoard(false);
    };
    return (
        <View>
            {showIconBoard ? (
                <ScrollView className="max-h-[200px]" horizontal>
                    {icons.map((icon, index) => {
                        return (
                            <IconItem
                                key={index}
                                name={icon}
                                color={defaultColor}
                                onPress={() => hanldeChooseIcon(index)}
                            />
                        );
                    })}
                </ScrollView>
            ) : (
                <IconItem
                    isActive
                    onPress={() => setShowIconBoard(true)}
                    name={icons[currentIcon]}
                    color={defaultColor}
                />
            )}
        </View>
    );
};

const IconItem = ({ name, color, onPress = () => {}, isActive }) => {
    return (
        <View className="w-[50px] h-[50px] m-1 rounded-full overflow-hidden p-1 bg-gray-100 ">
            <TouchableOpacity
                style={{
                    backgroundColor: isActive && color,
                }}
                onPress={onPress}
                className="w-full h-full rounded-full justify-center items-center"
            >
                <Icon name={name} color={isActive ? "#ffff" : color}></Icon>
            </TouchableOpacity>
        </View>
    );
};

export default ChooseIcon;
