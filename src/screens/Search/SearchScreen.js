import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import TaskItem from "../../components/Task/TaskItem";
import { colors, convertViToEn } from "../../const";
import useDebounce from "../../hooks/useDebounce";
import * as Animatable from "react-native-animatable";
import { searchIcon } from "../../../assets";
import HabitItem from "../../components/Habits/HabitItem";

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState({ habits: [], tasks: [] });
    const debounce = useDebounce(searchValue, 500);

    const navigation = useNavigation();

    // get tasks from store
    const { tasks, habits } = useSelector((state) => state);
    const { tasks: tasksList, categories } = tasks;
    const habitsList = habits.habitsList;

    // handle search
    //get categories
    const getcategories = () => {
        return categories.filter((category, index) => {
            return category.name
                .toLowerCase()
                .includes(searchValue.trim().toLowerCase());
        });
    };

    useEffect(() => {
        if (searchValue.trim() === "") {
            setResults([]);
            return;
        }
        const matchCategrory = getcategories();
        const results = {
            tasks: [
                ...tasksList.filter((task) => {
                    return (
                        convertViToEn(task.name)
                            .toLowerCase()
                            .trim()

                            .includes(
                                convertViToEn(
                                    searchValue.toLocaleLowerCase().trim()
                                )
                            ) ||
                        convertViToEn(task.desc)
                            .toLowerCase()
                            .trim()
                            .includes(
                                convertViToEn(
                                    searchValue.toLocaleLowerCase().trim()
                                )
                            ) ||
                        matchCategrory.some(
                            (matchValue) => matchValue.id === task.categrory
                        )
                    );
                }),
            ],
            habits: [
                ...habitsList.filter((habit) => {
                    return convertViToEn(habit.title)
                        .toLowerCase()
                        .trim()

                        .includes(
                            convertViToEn(
                                searchValue.toLocaleLowerCase().trim()
                            )
                        );
                }),
            ],
        };

        setResults(results);
    }, [debounce]);

    // handle press task item
    const handlePress = (task) => {
        navigation.navigate("Task", { pram: task });
    };

    return (
        <LayoutAuth title={"Search"}>
            <Animatable.View animation="rubberBand" className="mt-5">
                <View className="flex-row relative h-[48px]">
                    <View className="absolute top-3 left-3 justify-center items-center">
                        <Feather
                            name="search"
                            size={24}
                            color={colors.primary}
                        />
                    </View>
                    <TextInput
                        selectionColor={colors.primary}
                        className="pl-[48px] flex-1 border border-primary rounded-2xl"
                        placeholder="Search for your tasks or habits..."
                        autoFocus
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                    />
                </View>
            </Animatable.View>
            {results?.habits?.length > 0 || results?.tasks?.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="mt-4 flex-1 "
                >
                    {results.tasks?.map((task) => {
                        return (
                            <TaskItem
                                key={task.id}
                                data={task}
                                allowPress={true}
                                onPress={() => handlePress(task)}
                            />
                        );
                    })}
                    {results.habits?.map((habit, index) => {
                        return <HabitItem key={index} habitData={habit} />;
                    })}
                </ScrollView>
            ) : (
                <View className="flex-1 justify-center items-center">
                    <Animatable.Image
                        animation="rubberBand"
                        source={searchIcon}
                        resizeMode="contain"
                        className="w-[50%] h-[50%]"
                    />
                </View>
            )}
        </LayoutAuth>
    );
};

export default SearchScreen;
