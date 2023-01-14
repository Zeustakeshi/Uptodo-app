import React, { useState } from "react";
import { Text, View } from "react-native";
import EmptyTask from "./EmptyTask";
import TaskWapper from "./TaskWapper";
import { FontAwesome5 } from "@expo/vector-icons";
const datas = {
    uncomplete: [
        {
            id: 1,
            name: "Learn Algorithm",
            desc: "Learn more and more c++",
            time: {
                start: new Date(),
                end: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            },
            categrory: {
                title: "University",
                icon: (size, color) => (
                    <FontAwesome5
                        name="home"
                        size={size || 12}
                        color={color || "#fff"}
                    />
                ),
                color: "#6651f0",
            },
            isCompleted: false,
            priority: 1,
        },
        {
            id: 2,
            name: "Learn React native ",
            desc: "Learn more and more React ",
            time: {
                start: new Date(),
                end: new Date(),
            },
            categrory: {
                title: "Work",
                icon: (size, color) => (
                    <FontAwesome5
                        name="home"
                        size={size || 12}
                        color={color || "#fff"}
                    />
                ),
                color: "#6651f0",
            },
            isCompleted: false,
            priority: 5,
        },
        {
            id: 3,
            name: "Learn HTML, CSS, Javascript",
            desc: "Learn more and more Web skill",
            time: {
                start: new Date(),
                end: new Date(),
            },
            categrory: {
                title: "Home",
                icon: (size, color) => (
                    <FontAwesome5
                        name="home"
                        size={size || 12}
                        color={color || "#fff"}
                    />
                ),
                color: "#6651f0",
            },
            isCompleted: true,
            priority: 5,
        },
    ],
    completed: [
        {
            id: 1,
            name: "Learn Algorithm",
            desc: "Learn more and more c++",
            time: {
                start: new Date(),
                end: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            },
            categrory: {
                title: "University",
                icon: (size, color) => (
                    <FontAwesome5
                        name="home"
                        size={size || 12}
                        color={color || "#fff"}
                    />
                ),
                color: "#6651f0",
            },
            isCompleted: false,
            priority: 1,
        },
        {
            id: 2,
            name: "Learn React native ",
            desc: "Learn more and more React ",
            time: {
                start: new Date(),
                end: new Date(),
            },
            categrory: {
                title: "Work",
                icon: (size, color) => (
                    <FontAwesome5
                        name="home"
                        size={size || 12}
                        color={color || "#fff"}
                    />
                ),
                color: "#6651f0",
            },
            isCompleted: false,
            priority: 5,
        },
        {
            id: 3,
            name: "Learn HTML, CSS, Javascript",
            desc: "Learn more and more Web skill",
            time: {
                start: new Date(),
                end: new Date(),
            },
            categrory: {
                title: "Home",
                icon: (size, color) => (
                    <FontAwesome5
                        name="home"
                        size={size || 12}
                        color={color || "#fff"}
                    />
                ),
                color: "#6651f0",
            },
            isCompleted: true,
            priority: 5,
        },
    ],
};

const Task = () => {
    const [tasks, setTasks] = useState(datas.uncomplete);
    return (
        <View className="flex-1">
            {tasks.length > 0 ? (
                <TaskWapper tasks={datas}></TaskWapper>
            ) : (
                <EmptyTask></EmptyTask>
            )}
        </View>
    );
};

export default Task;
