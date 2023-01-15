import React from "react";
import {
    Entypo,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
const CategoryIcon = ({ name, size = 24, color = "black" }) => {
    switch (name) {
        case "grocery":
            return (
                <MaterialCommunityIcons
                    name="bread-slice-outline"
                    size={size}
                    color={color}
                />
            );
        case "home":
            return <FontAwesome5 name="home" size={size} color={color} />;
        case "work":
            return <MaterialIcons name="work" size={size} color={color} />;
        case "sport":
            return (
                <MaterialIcons
                    name="sports-basketball"
                    size={size}
                    color={color}
                />
            );
        case "code":
            return <Entypo name="code" size={size} color={color} />;
        case "health":
            return <FontAwesome name="heartbeat" size={size} color={color} />;
        case "music":
            return <Feather name="music" size={size} color={color} />;
        case "sleep":
            return (
                <MaterialCommunityIcons
                    name="sleep"
                    size={size}
                    color={color}
                />
            );
        case "feedDog":
            return <FontAwesome5 name="dog" size={size} color={color} />;
        case "video":
            return <AntDesign name="videocamera" size={size} color={color} />;
        case "game":
            return (
                <Ionicons
                    name="game-controller-outline"
                    size={size}
                    color={color}
                />
            );
        case "cook":
            return (
                <MaterialCommunityIcons
                    name="chef-hat"
                    size={size}
                    color={color}
                />
            );
        default:
            return (
                <MaterialCommunityIcons
                    name="sleep"
                    size={size}
                    color={color}
                />
            );
    }
};

export default CategoryIcon;
