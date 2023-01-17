import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TaskWapper = () => {
    const { tasks } = useSelector((state) => state.tasks);
    const uncompleteTasks = tasks.filter((task) => !task.isComplete);
    const completeTasks = tasks.filter((task) => task.isComplete);

    return (
        <View className="flex-1 mt-5">
            {/* Search */}
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <SearchTask />
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
                        <Text className="text-gray-600 font-medium mb-2">
                            Completed
                        </Text>
                        <TaskList tasks={completeTasks}></TaskList>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default TaskWapper;
