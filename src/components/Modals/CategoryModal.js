import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ModalPoup2 from "./ModalPoup2";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import CategoryIcon from "../CategoryIcon";

const CategoryModal = ({ buttonShow = () => {} }) => {
    const { categrories } = useSelector((state) => state.tasks);
    return (
        <ModalPoup2
            buttonShow={buttonShow}
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
                            {categrories.map((categrory, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        className="justify-center items-center"
                                    >
                                        <View
                                            className="w-[64px] h-[64px] bg-[#FF9680] justify-center items-center rounded-md"
                                            style={{
                                                backgroundColor:
                                                    categrory.color,
                                            }}
                                        >
                                            <CategoryIcon
                                                name={categrory.icon}
                                                color={"#fff"}
                                            />
                                        </View>
                                        <Text className="mt-2 text-sm font-normal text-text-color">
                                            {categrory.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                            {/* <TouchableOpacity className="justify-center items-center">
                                <View className="w-[64px] h-[64px] bg-[#FF9680] justify-center items-center rounded-md">
                                    <Feather
                                        name="plus"
                                        size={40}
                                        color="#e65531"
                                    />
                                </View>
                                <Text className="mt-2 text-sm font-normal text-text-color">
                                    Create New
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        className="mt-10 h-[48px] rounded justify-center items-center bg-primary2 "
                    >
                        <Text className="p-3 text-white text-base font-normal">
                            Add Category
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </ModalPoup2>
    );
};

export default CategoryModal;
