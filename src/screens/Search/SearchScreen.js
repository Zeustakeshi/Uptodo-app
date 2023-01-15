import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import TaskItem from "../../components/Task/TaskItem";
import useDebounce from "../../hooks/useDebounce";

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const debounce = useDebounce(searchValue, 500);

    // get tasks from store
    const tasks = useSelector((state) => state.tasks);

    // handle search
    useEffect(() => {
        if (searchValue.trim() === "") {
            setResults([]);
            return;
        }

        const results = [
            ...tasks.completed.filter((task) => {
                return (
                    task.name
                        .toLowerCase()
                        .includes(searchValue.toLocaleLowerCase()) ||
                    task.desc
                        .toLowerCase()
                        .includes(searchValue.toLocaleLowerCase())
                );
            }),
            ...tasks.uncomplete.filter((task) => {
                return (
                    task.name
                        .toLowerCase()
                        .includes(searchValue.toLocaleLowerCase()) ||
                    task.desc
                        .toLowerCase()
                        .includes(searchValue.toLocaleLowerCase())
                );
            }),
        ];

        setResults(results);
    }, [debounce]);

    return (
        <LayoutAuth>
            <View className="">
                <Text className="text-xl font-semibold text-text-color">
                    Search
                </Text>
            </View>
            <View className="mt-5">
                <View className="flex-row relative h-[48px]">
                    <View className="absolute top-3 left-3 justify-center items-center">
                        <Feather name="search" size={24} color="#d1d5db" />
                    </View>
                    <TextInput
                        selectionColor="#6651f0"
                        className="pl-[48px] flex-1 border border-gray-200 rounded-md"
                        placeholder="Search for your task..."
                        autoFocus
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                    />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="mt-4 flex-1 "
            >
                {results.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            data={task}
                            allowPress={false}
                        />
                    );
                })}
            </ScrollView>
        </LayoutAuth>
    );
};

export default SearchScreen;
