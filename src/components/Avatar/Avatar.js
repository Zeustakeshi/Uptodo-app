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
            style={{ width, height, ...styles.avatar }}
            className="rounded-full"
        >
            <Image
                className="w-full h-full rounded-full object-cover"
                source={{ uri: avatar || fakeImg }}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    avatar: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
});

export default Avatar;
