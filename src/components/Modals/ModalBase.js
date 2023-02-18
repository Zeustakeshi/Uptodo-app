import React from "react";
import { memo } from "react";
import { Modal, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable";

const ModalBase = ({ modalVisible, setModalVisible, style, children }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View className="relative flex-1 justify-center items-center ">
                <Pressable
                    onPress={() => setModalVisible(false)}
                    className="w-full h-full bg-gray-200 opacity-5"
                ></Pressable>
                <View
                    className="absolute -translate-x-[50%] -translate-y-[50%]  bg-white opacity-100 "
                    style={{ ...styles.shadow, ...style }}
                >
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
});

export default memo(ModalBase);
