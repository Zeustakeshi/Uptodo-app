import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ModalPoup2 = ({ buttonShow = () => {}, title, style, children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={style}>
            {buttonShow(setModalVisible)}
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
                        className=" absolute -translate-x-[50%] -translate-y-[50%]  w-[90%] bg-white opacity-100 rounded-md "
                        style={styles.shadow}
                    >
                        {title && <View>{title}</View>}
                        {title && (
                            <View className="w-[90%] mx-auto h-[1px] bg-gray-200"></View>
                        )}
                        {children(setModalVisible)}
                    </View>
                </View>
            </Modal>
        </View>
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
export default ModalPoup2;
