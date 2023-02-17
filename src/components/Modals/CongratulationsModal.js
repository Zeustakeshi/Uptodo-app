import React, { useState } from "react";
import { Modal, Text } from "react-native";

const CongratulationsModal = () => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Text>CongratulationsModal</Text>
        </Modal>
    );
};

export default CongratulationsModal;
