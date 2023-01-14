import React from "react";
import { View, FlatList, Text } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    return (
        <View>
            {tasks.length > 0 &&
                tasks?.map((item) => <TaskItem key={item.id} data={item} />)}
        </View>
    );
};

export default TaskList;
