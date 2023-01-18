import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import uuid from "react-native-uuid";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WelcomeItem = ({ imgSrc, total = 1, order = 1, title, desc }) => {
    const handleSkip = () => {};
    const handleBack = () => {};

    const handleNext = () => {};

    return (
        <LayoutWrapper style={styles.wrapper}>
            {/* Image */}
            <View className=" first-letter: mx-auto w-[271px] h-[300px]">
                <Image
                    source={imgSrc}
                    className="flex-1  justify-center items-center w-full h-full"
                    resizeMode="contain"
                />
            </View>
            {/* Progress */}
            <View className="mt-12 flex-row justify-center items-center gap-x-2">
                {new Array(total).fill(0).map((item, index) => {
                    return (
                        <View
                            key={uuid.v4()}
                            className={`w-7 h-1 rounded-md ${
                                index === order ? "bg-primary" : "bg-gray-200"
                            }`}
                        ></View>
                    );
                })}
            </View>
            {/* content */}
            <View className="mt-8  justify-start items-center">
                <Text className="font-bold text-[32px] text-[#6651f0] mb-6">
                    {title}
                </Text>
                <Text className="text-base font-normal text-center text-gray-500">
                    {desc}
                </Text>
            </View>
        </LayoutWrapper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 0,
        paddingTop: 0,
        width: windowWidth,
        height: windowHeight,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default WelcomeItem;
