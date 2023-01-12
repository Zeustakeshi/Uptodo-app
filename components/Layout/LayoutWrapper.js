import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LayoutWrapper = ({ style, children }) => {
    return (
        <SafeAreaView className={`flex-1 px-2 bg-white pt-2`} style={style}>
            {children}
        </SafeAreaView>
    );
};

export default LayoutWrapper;
