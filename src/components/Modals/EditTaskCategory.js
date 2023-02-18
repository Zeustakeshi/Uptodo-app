import React, { memo } from "react";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTaskCategory } from "../../redux/slice/tasks/tasksSlice";
import CategoryIcon from "../CategoryIcon";
import ModalPoup2 from "./ModalPoup2";

const EditTaskCategory = ({ oldData, buttonShow = () => {} }) => {
    const { categories } = useSelector((state) => state.tasks);
    const [currCategrory, setCurrCategrory] = useState(oldData.categrory);

    const dispatch = useDispatch();
    const handleChooseItem = (setModalVisible, index) => {
        setCurrCategrory(index + 1);
    };
    const handleSave = (setModalVisible) => {
        dispatch(setTaskCategory({ ...oldData, currCategrory: currCategrory }));
        setModalVisible(false);
    };

    const handleCancel = (setModalVisible) => {
        setModalVisible(false);
    };

    return (
        <ModalPoup2
            buttonShow={(setModalVisible) =>
                buttonShow(setModalVisible, currCategrory)
            }
            title={
                <Text className="p-3 text-center text-base font-normal">
                    Choose Category
                </Text>
            }
        >
            {(setModalVisible) => (
                <View className="flex-1 py-4 px-4">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        className="flex-1  "
                    >
                        <View className=" flex-row justify-start  flex-wrap gap-x-12 gap-y-6">
                            {categories.map((categrory, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() =>
                                            handleChooseItem(
                                                setModalVisible,
                                                index
                                            )
                                        }
                                        key={index}
                                        className="justify-center items-center"
                                    >
                                        <View
                                            className="w-[64px] h-[64px] justify-center items-center rounded-md"
                                            style={
                                                index + 1 === currCategrory
                                                    ? {
                                                          backgroundColor:
                                                              categrory.color,
                                                      }
                                                    : {
                                                          borderWidth: 1,
                                                          borderColor:
                                                              categrory.color,
                                                      }
                                            }
                                        >
                                            <CategoryIcon
                                                name={categrory.icon}
                                                color={
                                                    index + 1 === currCategrory
                                                        ? "#fff"
                                                        : categrory.color
                                                }
                                            />
                                        </View>
                                        <Text className="mt-2 text-sm font-normal text-text-color">
                                            {categrory.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View className="mt-10 flex-row gap-x-20 justify-between items-center">
                            <TouchableOpacity
                                onPress={() => handleCancel(setModalVisible)}
                                className="flex-1 h-[48px] rounded justify-center items-center "
                            >
                                <Text className="p-3 text-primary text-base font-normal">
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSave(setModalVisible)}
                                className="flex-1 h-[48px] rounded justify-center items-center bg-primary2 "
                            >
                                <Text className="p-2 text-white text-base font-normal">
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )}
        </ModalPoup2>
    );
};

export default memo(EditTaskCategory);
