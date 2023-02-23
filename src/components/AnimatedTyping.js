import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";

const AnimatedTyping = ({
    text,
    animatedTime = 100,
    quote,

    ...props
}) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (typeof text !== "string") return;
        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, index));
            index++;
            if (index > text.length) {
                clearInterval(timer);
            }
        }, animatedTime);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <Text {...props}>
            {quote && <Text className="font-bold text-primary">" </Text>}
            {displayedText}
            {quote && <Text className="font-bold text-primary"> "{"\n"}</Text>}
        </Text>
    );
};

export default AnimatedTyping;
