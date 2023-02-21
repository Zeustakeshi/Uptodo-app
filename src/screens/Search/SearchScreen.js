import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import TaskItem from "../../components/Task/TaskItem";
import { colors } from "../../const";
import useDebounce from "../../hooks/useDebounce";
import * as Animatable from "react-native-animatable";
import { searchIcon } from "../../../assets";

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const debounce = useDebounce(searchValue, 500);

    const navigation = useNavigation();

    // get tasks from store
    const { tasks, categories } = useSelector((state) => state.tasks);

    // handle search
    //get categories
    const getcategories = () => {
        return categories.filter((category, index) => {
            return category.name
                .toLowerCase()
                .includes(searchValue.trim().toLowerCase());
        });
    };

    //convertViToEn
    const convertViToEn = (str, toUpperCase = false) => {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

        return toUpperCase ? str.toUpperCase() : str;
    };

    useEffect(() => {
        if (searchValue.trim() === "") {
            setResults([]);
            return;
        }
        const matchCategrory = getcategories();
        const results = [
            ...tasks.filter((task) => {
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
        ];

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
            {results.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="mt-4 flex-1 "
                >
                    {results.map((task) => {
                        return (
                            <TaskItem
                                key={task.id}
                                data={task}
                                allowPress={true}
                                onPress={() => handlePress(task)}
                            />
                        );
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
