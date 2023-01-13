import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

const ModalPoup1 = ({ buttonShow = () => {}, children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            {buttonShow(setModalVisible)}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View className="flex-1 justify-end">
                    <Pressable
                        className="flex-1"
                        onPress={() => setModalVisible(false)}
                    ></Pressable>
                    <View
                        className="h-[65%] bg-white opacity-100 rounded-tr-3xl rounded-tl-3xl"
                        style={styles.shadow}
                    >
                        {children}
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
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
});
export default ModalPoup1;