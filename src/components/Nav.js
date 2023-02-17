import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import AddTaskModal from "./Modals/AddTaskModal";
import { useNavigation, useRoute } from "@react-navigation/native";

const Nav = ({ middleButton }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const activeScreen = route.name;
    return (
        <View
            className=" bg-gray-50 p-4 h-[85px] flex-row justify-between items-center rounded-tl-3xl rounded-tr-3xl "
            style={styles.shadow}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className=" justify-center items-center gap-y-2"
            >
                <AntDesign
                    name="home"
                    size={24}
                    color={activeScreen === "Home" ? "#6651f0" : "#000"}
                />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center items-center gap-y-2">
                <Ionicons
                    name="ios-calendar-sharp"
                    size={24}
                    color={activeScreen === "Calendar" ? "#6651f0" : "#000"}
                />
                <Text>Calendar</Text>
            </TouchableOpacity>

            {middleButton}

            <TouchableOpacity
                onPress={() => navigation.navigate("Focus")}
                className="justify-center items-center gap-y-2"
            >
                <Feather
                    name="clock"
                    size={24}
                    color={activeScreen === "Focus" ? "#6651f0" : "#000"}
                />
                <Text>Focuse</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                className="justify-center items-center gap-y-2"
            >
                <AntDesign
                    name="user"
                    size={24}
                    color={activeScreen === "Profile" ? "#6651f0" : "#000"}
                />
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
