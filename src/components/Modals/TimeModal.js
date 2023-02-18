import React, { useState } from "react";
import { View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { timeFomat } from "../../const";
import { memo } from "react";

const fomatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const TimeModal = ({
    setChooseDate,
    modes = ["date"],
    buttonShow = () => {},
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState(modes[0]);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        if (modes.length > 1 && event.type === "set") {
            setDate(currentDate);
            if (mode === modes[0]) {
                setMode(modes[1]);
            } else {
                setMode(modes[0]);
                setChooseDate(timeFomat(currentDate));
            }
        }
        setVisible(false);
    };

    return (
        <View>
            {buttonShow(setVisible, setMode)}
            {visible && (
                <RNDateTimePicker
                    value={date}
                    onChange={onChange}
                    minimumDate={new Date()}
                    is24Hour
                    mode={mode}
                    {...props}
                />
            )}
            <View>{/* <Text>{date}</Text> */}</View>
        </View>
    );
};

export default memo(TimeModal);
