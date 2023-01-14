import React from "react";
import { Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    monthNamesShort: [
        "Jan.",
        "Feb.",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct.",
        "Nov",
        "Dec",
    ],
    dayNames: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    dayNamesShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

const getCurrDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = yyyy + "-" + mm + "-" + dd;
    return formattedToday;
};
const Calendars = () => {
    const currentDate = getCurrDate();
    return (
        <Calendar
            initialDate={currentDate}
            minDate={currentDate}
            enableSwipeMonths={true}
            markingType={"period"}
            markedDates={{
                [currentDate]: { textColor: "#8875FF" },
                "2023-01-15": { startingDay: true, color: "#8875FF" },
                "2023-01-16": {
                    color: "#8875FF",
                },
                "2023-01-17": {
                    disabled: true,
                    color: "#8875FF",
                    endingDay: true,
                },
            }}
        />
    );
};

export default Calendars;
