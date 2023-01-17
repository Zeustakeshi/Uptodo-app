import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    addTasks,
    removeTask,
    setIsCompleteTask,
} from "../../redux/slice/tasks/tasksSlice";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    const dispacth = useDispatch();
    const navigation = useNavigation();

    const handlePressTaskItem = (task) => {
        dispacth(setIsCompleteTask(task.id));
        // if (task.isCompleted) {
        //     dispacth(addTasks({ ...task, isCompleted: false }));
        // } else {
        //     dispacth(addTasks({ ...task, isCompleted: true }));
        // }
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
