import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import * as Animatable from "react-native-animatable";
const TodoCoin = ({ color, size }) => {
    return (
        <Animatable.View
            animation="tada"
            easing="ease-in-out-cubic"
            iterationCount="infinite"
        >
            <SimpleLineIcons
                name="energy"
                size={size || 32}
                color={color || "#6651f0"}
            />
        </Animatable.View>
    );
};

export default TodoCoin;
