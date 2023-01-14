import React from "react";
import { Text, View, ScrollView } from "react-native";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TaskWapper = ({ tasks }) => {
    return (
        <View className="flex-1 mt-5">
            <SearchTask></SearchTask>
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
                <Text className="text-gray-600 font-medium">Uncomplete</Text>
                <TaskList tasks={tasks.uncomplete}></TaskList>
                <Text className="text-gray-600 font-medium">Completed</Text>
                <TaskList tasks={tasks.completed}></TaskList>
            </ScrollView>
        </View>
    );
};

export default TaskWapper;
