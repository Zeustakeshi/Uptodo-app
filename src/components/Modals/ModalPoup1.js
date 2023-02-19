import React, { useRef, useState } from "react";
import { memo } from "react";
import { Modal, PanResponder, Pressable, StyleSheet, View } from "react-native";

const ModalPoup1 = ({ buttonShow = () => {}, height = 65, children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return gestureState.dy > 0;
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy > 0) {
                    setModalVisible(false);
                }
            },
        })
    ).current;
    return (
        <View {...panResponder.panHandlers}>
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
                        style={{ ...styles.shadow, height: height + "%" }}
                        className={`bg-white opacity-100 rounded-tr-3xl rounded-tl-3xl`}
                    >
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
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
});
export default memo(ModalPoup1);
