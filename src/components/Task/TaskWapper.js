import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TaskWapper = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <View className="flex-1 mt-5">
            {/* Search */}
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <SearchTask />
                {tasks.uncomplete.length > 0 && (
                    <View className="flex-1">
                        <Text className="text-gray-600 font-medium mb-2">
                            Uncomplete
                        </Text>
                        <TaskList tasks={tasks.uncomplete}></TaskList>
                    </View>
                )}
                {tasks.completed.length > 0 && (
                    <View className="flex-1">
                        <Text className="text-gray-600 font-medium mb-2">
                            Completed
                        </Text>
                        <TaskList tasks={tasks.completed}></TaskList>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default TaskWapper;
