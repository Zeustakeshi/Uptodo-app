import React, { useRef, useState } from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";
import dataSliders from "./dataSliders";
import WelcomeItem from "./WelcomeItem";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Welcome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef();

    const navigation = useNavigation();

    const updateCurrIndex = ({ nativeEvent }) => {
        const contentOffsetX = nativeEvent.contentOffset.x;
        setCurrentIndex(Math.floor(contentOffsetX / windowWidth));
    };

    const handleNextSlide = () => {
        const nextSlideIndex = currentIndex + 1;
        const offset = nextSlideIndex * windowWidth;
        sliderRef?.current?.scrollToOffset({ offset });
        setCurrentIndex(nextSlideIndex);
    };

    const handleSkipSlide = () => {
        setCurrentIndex(dataSliders.length - 1);
        const offset = (dataSliders.length - 1) * windowWidth;
        sliderRef?.current?.scrollToOffset({ offset });
    };

    return (
        <View className="flex-1">
            <FlatList
                className="flex-1 mb-0"
                data={dataSliders}
                ref={sliderRef}
                renderItem={({ item }) => (
                    <WelcomeItem
                        imgSrc={item.img}
                        desc={item.desc}
                        total={dataSliders.length}
                        title={item.title}
                        order={currentIndex}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrIndex}
            />

            <View className="flex-3 w-full bg-white flex-row justify-between px-6 pb-14">
                {/* Skip */}
                {currentIndex + 1 < dataSliders.length && (
                    <TouchableOpacity
                        className="px-6 py-3 rounded"
                        onPress={handleSkipSlide}
                    >
                        <Text className="uppercase text-base font-medium text-text-color">
                            Skip
                        </Text>
                    </TouchableOpacity>
                )}

                {/* Next */}
                {currentIndex + 1 < dataSliders.length ? (
                    <TouchableOpacity
                        className="px-6 py-3 rounded bg-primary2 "
                        onPress={handleNextSlide}
                    >
                        <Text className="uppercase text-base font-medium text-white">
                            Next
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MainWelcome")}
                        className="px-6 py-3 w-full rounded bg-primary2 "
                    >
                        <Text className="uppercase text-base font-medium text-white text-center">
                            Get Started
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Welcome;
