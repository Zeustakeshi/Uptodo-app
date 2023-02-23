import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { fakeImg } from "../../const";

const Avatar = ({ width, height, onPress, ...props }) => {
    const { avatar } = useSelector((state) => state.user);

    return (
        <TouchableOpacity
            onPress={onPress}
            {...props}
            style={{ width, height }}
            className="rounded-full border-2 border-slate-100"
        >
            <Image
                className="w-full h-full rounded-full object-cover"
                source={{ uri: avatar || fakeImg }}
            />
        </TouchableOpacity>
    );
};

export default Avatar;
