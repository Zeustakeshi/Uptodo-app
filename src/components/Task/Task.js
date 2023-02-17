import React from "react";
import { View } from "react-native";
import EmptyTask from "./EmptyTask";
import TaskWapper from "./TaskWapper";
import { useSelector } from "react-redux";

const Task = ({ showSearchTask = true, showEmptyTask = true }) => {
    const { tasks } = useSelector((state) => state.tasks);

    return (
        <View className="flex-1">
            {tasks.length > 0 ? (
                <TaskWapper showSearchTask={showSearchTask} />
            ) : showEmptyTask ? (
                <EmptyTask />
            ) : (
                <></>
            )}
        </View>
    );
};

export default Task;
