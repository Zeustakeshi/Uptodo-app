import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const AnimatedTyping = ({ text, animatedTime = 100, ...props }) => {
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

    return <Text {...props}>{displayedText}</Text>;
};

export default AnimatedTyping;
