import {
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { timeFomat } from "../../const";
import { addTasks } from "../../redux/slice/tasks/tasksSlice";
import CategoryModal from "./CategoryModal";
import ModalPoup1 from "./ModalPoup1";
import PriorityModal from "./PriorityModal";
import TimeModal from "./TimeModal";
import * as Animatable from "react-native-animatable";

const AddTaskModal = ({ buttonShow = () => {} }) => {
    const [inputTaskName, setInputTaskName] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [chooseDate, setChooseDate] = useState(timeFomat(new Date()));
    const [chooseCategory, setChooseCategory] = useState(1);
    const [choosePriority, setChoosePriority] = useState(5);

    //dispatch
    const dispatch = useDispatch();

    const handleAddTask = (setModalVisible) => {
        if (!inputTaskName.trim()) return;
        const task = {
            id: uuid.v4(),
            name: inputTaskName,
            desc: inputDesc,
            time: {
                start: timeFomat(new Date()),
                end: chooseDate,
            },
            categrory: chooseCategory,
            isCompleted: false,
            priority: choosePriority,
        };

        dispatch(addTasks({ ...task, isCompleted: false }));
        setInputTaskName("");
        setInputDesc("");
        setModalVisible(false);
    };

    return (
        <ModalPoup1 buttonShow={buttonShow} height={80}>
            {(setModalVisible) => (
                <Animatable.View
                    animation="bounceInUp"
                    iterationCount={1}
                    className="p-6"
                >
                    <Text className="text-xl font-bold text-text-color">
                        Add Task
                    </Text>
                    <View className="m-4">
                        <TextInput
                            autoFocus
                            selectionColor="#6651f0"
                            className="px-5 py-2 border border-gray-200 rounded-md focus:border-primary"
                            placeholder="Enter your task"
                            value={inputTaskName}
                            onChangeText={(text) => setInputTaskName(text)}
                        />
                        <TextInput
                            selectionColor="#6651f0"
                            className="mt-4 px-5 py-2 border border-gray-200 rounded-md focus:border-primary"
                            placeholder="Description"
                            value={inputDesc}
                            onChangeText={(text) => setInputDesc(text)}
                        />
                    </View>
                    <View className="flex-row w-full justify-between">
                        <View className="flex-row">
                            {/* timer */}
                            <TimeModal
                                setChooseDate={setChooseDate}
                                modes={["date", "time"]}
                                buttonShow={(setModalVisible) => (
                                    <TouchableOpacity
                                        onPress={() => setModalVisible(true)}
                                        className="p-3"
                                    >
                                        <MaterialIcons
                                            name="timer"
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                )}
                            />

                            {/* Category */}
                            <CategoryModal
                                setChooseCategory={setChooseCategory}
                                buttonShow={(setModalVisible) => (
                                    <TouchableOpacity
                                        className="p-3"
                                        onPress={() => setModalVisible(true)}
                                    >
                                        <MaterialCommunityIcons
                                            name="tag-heart-outline"
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                            {/* Priority */}
                            <PriorityModal
                                currChoose={choosePriority}
                                setChoose={setChoosePriority}
                                buttonShow={(setModalVisible) => (
                                    <TouchableOpacity
                                        onPress={() => setModalVisible(true)}
                                        className="p-3"
                                    >
                                        <Feather
                                            name="flag"
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        {/* send */}
                        <TouchableOpacity
                            onPress={() => handleAddTask(setModalVisible)}
                            className="p-3"
                        >
                            <Ionicons
                                name="send-outline"
                                size={24}
                                color="#6651f0"
                            />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            )}
        </ModalPoup1>
    );
};

export default memo(AddTaskModal);
