import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import * as Animatable from "react-native-animatable";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import Calendars from "../../components/Calendars/Calendars";
import { useNavigation } from "@react-navigation/native";
const HabitsScreen = () => {
    const naviagtion = useNavigation();
    return (
        <LayoutWrapper
            showNavigate
            navMiddleButton={
                <Animatable.View animation="rotate" iterationCount={1}>
                    <SimpleLineIcons name="energy" size={32} color="#ffff" />
                </Animatable.View>
            }
            navOnPressMidleButton={() => naviagtion.navigate("CreateHabit")}
        >
            <View>
                <Text>{/* <Calendars></Calendars> */}</Text>
            </View>
        </LayoutWrapper>
    );
};

export default HabitsScreen;