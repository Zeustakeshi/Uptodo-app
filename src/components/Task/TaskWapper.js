import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTask } from "../../redux/slice/tasks/tasksSlice";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TaskWapper = () => {
    const { tasks } = useSelector((state) => state.tasks);
    const uncompleteTasks = tasks.filter((task) => !task.isCompleted);
    const completeTasks = tasks.filter((task) => task.isCompleted);
    const dispacth = useDispatch();

    const handleClearCompleted = () => {
        dispacth(clearCompletedTask());
    };

    return (
        <View className="flex-1 mt-5">
            {/* Search */}
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <SearchTask />
                {/* Task content */}
                {uncompleteTasks.length > 0 && (
                    <View className="flex-1">
                        <Text className="text-gray-600 font-medium mb-2">
                            Uncomplete
                        </Text>
                        <TaskList tasks={uncompleteTasks}></TaskList>
                    </View>
                )}
                {completeTasks.length > 0 && (
                    <View className="flex-1">
                        {/* clear button */}
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-600 font-medium mb-2">
                                Completed
                            </Text>
                            <TouchableOpacity onPress={handleClearCompleted}>
                                <Text className="text-gray-600 font-medium mb-2">
                                    Clear all
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TaskList tasks={completeTasks}></TaskList>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default TaskWapper;
