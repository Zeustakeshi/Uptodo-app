import React from "react";
import { View } from "react-native";
import EmptyTask from "./EmptyTask";
import TaskWapper from "./TaskWapper";
import { useSelector } from "react-redux";

const Task = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <View className="flex-1">
            {tasks.uncomplete.length > 0 || tasks.completed.length > 0 ? (
                <TaskWapper />
            ) : (
                <EmptyTask />
            )}
        </View>
    );
};

export default Task;
