import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import TimePickerModal from "../../components/Modals/TimePickerModal";
import SettingItem from "../../components/SettingItem/SettingItem";
import {
    setFocusTime,
    setFocusTimeRelax,
} from "../../redux/slice/App/appSlice";

const FocusSettingScreen = () => {
    const dispatch = useDispatch();
    const { timeFocus, timeRelax } = useSelector(
        (state) => state.app.focusSetting
    );

    const handleUpdateFocusTime = (currTime) => {
        dispatch(setFocusTime(currTime));
    };

    const handleUpdateRelaxTime = (currTime) => {
        dispatch(setFocusTimeRelax(currTime));
    };

    return (
        <LayoutAuth title="Focus Setting">
            <View className="mt-5">
                <SettingItem
                    onPress={(setModalVisible) => setModalVisible(true)}
                    modal={(modalVisible, setModalVisible) => (
                        <TimePickerModal
                            title="Focus Time Setting"
                            timeOption={timeFocus.option}
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            onSave={handleUpdateFocusTime}
                        />
                    )}
                    title="Time focuse"
                    icon={
                        <MaterialCommunityIcons
                            name="timer-cog-outline"
                            size={24}
                            color="black"
                        />
                    }
                />
                <SettingItem
                    title="Time Relaxed"
                    icon={
                        <Entypo name="back-in-time" size={24} color="black" />
                    }
                    onPress={(setModalVisible) => setModalVisible(true)}
                    modal={(modalVisible, setModalVisible) => (
                        <TimePickerModal
                            title="Relax Time Setting"
                            timeOption={timeRelax.option}
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            onSave={handleUpdateRelaxTime}
                        />
                    )}
                />
                <SettingItem
                    // onPress={}
                    title="Notifications"
                    icon={
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="black"
                        />
                    }
                />
                <SettingItem
                    // onPress={}
                    title="Music"
                    icon={
                        <MaterialCommunityIcons
                            name="music-circle-outline"
                            size={24}
                            color="black"
                        />
                    }
                />
            </View>
        </LayoutAuth>
    );
};

export default FocusSettingScreen;
