import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, FlatList, Text } from "react-native";
import { useDispatch } from "react-redux";
import {
    addCompletedTask,
    addUnCompleteTask,
} from "../../redux/slice/tasks/tasksSlice";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    const dispacth = useDispatch();
    const navigation = useNavigation();

    const handlePressTaskItem = (task) => {
        if (task.isCompleted) {
            dispacth(addUnCompleteTask({ ...task, isCompleted: false }));
        } else {
            dispacth(addCompletedTask({ ...task, isCompleted: true }));
        }
    };

    const handleLongPressTaskItem = (task) => {
        navigation.navigate("Task", { pram: task });
    };

    return (
        <View>
            {tasks.length > 0 &&
                tasks?.map((task) => (
                    <TaskItem
                        onPress={() => handlePressTaskItem(task)}
                        onLongPress={() => handleLongPressTaskItem(task)}
                        key={task.id}
                        data={task}
                    />
                ))}
        </View>
    );
};

export default TaskList;
