import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import AddTaskModal from "./Modals/AddTaskModal";
import { useNavigation } from "@react-navigation/native";

const Nav = () => {
    const navigation = useNavigation();
    return (
        <View
            className=" bg-gray-50 p-4 h-[85px] flex-row justify-between items-center rounded-tl-3xl rounded-tr-3xl "
            style={styles.shadow}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className=" justify-center items-center gap-y-2"
            >
                <AntDesign name="home" size={24} color="black" />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center items-center gap-y-2">
                <Ionicons name="ios-calendar-sharp" size={24} color="black" />
                <Text>Calendar</Text>
            </TouchableOpacity>
            <AddTaskModal
                buttonShow={(setModalVisible) => (
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        className="justify-center items-center gap-y-2 pb-2  -translate-y-6 bg-primary w-[64px] h-[64px] rounded-full "
                    >
                        <Feather name="plus" size={32} color="white" />
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity className="justify-center items-center gap-y-2">
                <Feather name="clock" size={24} color="black" />
                <Text>Focuse</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                className="justify-center items-center gap-y-2"
            >
                <AntDesign name="user" size={24} color="black" />
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
});

export default Nav;
