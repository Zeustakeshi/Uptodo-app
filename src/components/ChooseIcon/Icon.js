import {
    AntDesign,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

const Icon = ({ name, color = "black", size = 24 }) => {
    switch (name) {
        case "partly-sunny-outline":
            return (
                <Ionicons
                    name="partly-sunny-outline"
                    size={size}
                    color={color}
                />
            );
        case "bed":
            return <FontAwesome name="bed" size={size} color={color} />;
        case "food-drumstick-off-outline":
            return (
                <MaterialCommunityIcons
                    name="food-drumstick-off-outline"
                    size={size}
                    color={color}
                />
            );
        case "local-drink":
            return (
                <MaterialIcons name="local-drink" size={size} color={color} />
            );
        case "book":
            return <Feather name="book" size={size} color={color} />;
        case "sports-tennis":
            return (
                <MaterialIcons name="sports-tennis" size={size} color={color} />
            );
        case "sleep":
            return (
                <MaterialCommunityIcons
                    name="sleep"
                    size={size}
                    color={color}
                />
            );
        case "star":
            return <AntDesign name="staro" size={size} color={color} />;
        case "md-ice-cream-outline":
            return (
                <Ionicons
                    name="md-ice-cream-outline"
                    size={size}
                    color={color}
                />
            );
        case "baguette":
            return (
                <MaterialCommunityIcons
                    name="baguette"
                    size={size}
                    color={color}
                />
            );
        case "sports-handball":
            return (
                <MaterialIcons
                    name="sports-handball"
                    size={size}
                    color={color}
                />
            );
        case "football":
            return <Ionicons name="football" size={size} color={color} />;
        case "like1":
            return <AntDesign name="like1" size={size} color={color} />;
        case "dislike1":
            return <AntDesign name="dislike1" size={size} color={color} />;
        case "arrow-circle-up":
            return (
                <FontAwesome name="arrow-circle-up" size={size} color={color} />
            );
        case "arrow-circle-down":
            return (
                <FontAwesome
                    name="arrow-circle-down"
                    size={size}
                    color={color}
                />
            );
        case "arrow-circle-left":
            return (
                <FontAwesome
                    name="arrow-circle-left"
                    size={size}
                    color={color}
                />
            );
        case "arrow-circle-right":
            return (
                <FontAwesome
                    name="arrow-circle-right"
                    size={size}
                    color={color}
                />
            );
        case "flower":
            return (
                <MaterialCommunityIcons
                    name="flower"
                    size={size}
                    color={color}
                />
            );
        case "leaf":
            return <FontAwesome name="leaf" size={size} color={color} />;
        case "rocket":
            return <Ionicons name="rocket" size={size} color={color} />;
        case "fire":
            return <FontAwesome5 name="fire" size={size} color={color} />;
        case "water":
            return <Ionicons name="water" size={size} color={color} />;
        case "restaurant":
            return (
                <MaterialIcons name="restaurant" size={size} color={color} />
            );
        case "food-apple":
            return (
                <MaterialCommunityIcons
                    name="food-apple"
                    size={size}
                    color={color}
                />
            );
        case "gift":
            return <FontAwesome name="gift" size={size} color={color} />;
        case "power-sleep":
            return (
                <MaterialCommunityIcons
                    name="power-sleep"
                    size={size}
                    color={color}
                />
            );
        default:
            return <></>;
    }
};

export const icons = [
    "partly-sunny-outline",
    "bed",
    "food-drumstick-off-outline",
    "local-drink",
    "book",
    "sports-tennis",
    "sleep",
    "star",
    "md-ice-cream-outline",
    "baguette",
    "sports-handball",
    "football",
    "like1",
    "dislike1",
    "arrow-circle-up",
    "arrow-circle-down",
    "arrow-circle-left",
    "arrow-circle-right",
    "flower",
    "rocket",
    "water",
    "restaurant",
    "food-apple",
    "gift",
    "power-sleep",
];

export default Icon;
