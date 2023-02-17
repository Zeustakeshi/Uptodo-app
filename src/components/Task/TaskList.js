import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { setIsCompleteTask } from "../../redux/slice/tasks/tasksSlice";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    const dispacth = useDispatch();
    const navigation = useNavigation();

    const handlePressTaskItem = (task) => {
        if (task.isCompleted) {
            dispacth(setIsCompleteTask({ id: task.id, value: false }));
        } else {
            dispacth(setIsCompleteTask({ id: task.id, value: true }));
        }
    };

    const handleLongPressTaskItem = (task) => {
        navigation.navigate("Task", { pram: task });
    };

    return (
        <View className="mb-10 flex-1">
            {tasks.length > 0 &&
                tasks?.map((task) => (
                    <TaskItem
                        onPress={() => handlePressTaskItem(task)}
                        onLongPress={() => handleLongPressTaskItem(task)}
                        key={task.id}
                        data={task}
                        // allowLongPress={false}
                    />
                ))}
        </View>
    );
};

export default TaskList;
