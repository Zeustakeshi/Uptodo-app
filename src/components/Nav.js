import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Nav = ({ middleButton }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const activeScreen = route.name;
    return (
        <View
            className=" bg-gray-50 px-4 py-2 h-[70px] flex-row justify-between items-center rounded-tl-3xl rounded-tr-3xl "
            style={styles.shadow}
        >
            <NavItem
                onPress={() => navigation.navigate("Home")}
                icon={
                    <AntDesign
                        name="home"
                        size={20}
                        color={activeScreen === "Home" ? "#fff" : "#000"}
                    />
                }
                label="Home"
                isActive={activeScreen === "Home"}
            />

            <NavItem
                // onPress={() => navigation.navigate("Ranking")}
                icon={
                    <SimpleLineIcons
                        name="energy"
                        size={20}
                        color={activeScreen === "Ranking" ? "#fff" : "#000"}
                    />
                }
                label="Ranking"
                isActive={activeScreen === "Ranking"}
            />

            {middleButton}
            <NavItem
                onPress={() => navigation.navigate("Focus")}
                icon={
                    <Feather
                        name="clock"
                        size={20}
                        color={activeScreen === "Focus" ? "#fff" : "#000"}
                    />
                }
                label="Focus"
                isActive={activeScreen === "Focus"}
            />
            <NavItem
                onPress={() => navigation.navigate("Profile")}
                icon={
                    <AntDesign
                        name="user"
                        size={20}
                        color={activeScreen === "Profile" ? "#fff" : "#000"}
                    />
                }
                label="Profile"
                isActive={activeScreen === "Profile"}
            />
        </View>
    );
};

const NavItem = ({ isActive, icon, label, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            className=" py-3 justify-between items-center  min-h-[50px]"
        >
            <View
                className={`${isActive ? "bg-primary" : ""} p-1 rounded-full`}
            >
                {icon}
            </View>

            <Text
                className={`${
                    isActive ? "font-bold text-primary " : ""
                } text-xs`}
            >
                {label}
            </Text>
        </TouchableOpacity>
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
