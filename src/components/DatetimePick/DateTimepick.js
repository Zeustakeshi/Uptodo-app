import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View } from "react-native";

const DateTimepick = (...props) => {
    return (
        <View>
            <RNDateTimePicker {...props} />
        </View>
    );
};

export default DateTimepick;
