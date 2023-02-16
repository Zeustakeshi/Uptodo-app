import React, { useRef } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { protectionIcon } from "../../../assets";

const OTPVerifyScreen = ({ route }) => {
    const { phoneNumber, type } = route?.params;

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);

    const handleKeyDown = (e, inputRef) => {
        if (e.nativeEvent.key === "Backspace") {
            inputRef.current.focus();
        }
    };

    const handleOnChangeText = (text, inputRef) => {
        if (text.length >= 1) {
            inputRef.current.focus();
        }
    };

    return (
        <LayoutAuth title="OTP">
            <View className="mt-10">
                <Text className="text-center text-xl text-primary font-medium">
                    Just a friendly reminder to verify your phone number.
                </Text>
                <Text className="text-center m-4 text-gray-500 text-sm">
                    For security reasons, please help us by verifying your phone
                    number
                </Text>
                <View className="w-full h-[80px] flex-row justify-center items-center my-3">
                    <Image
                        source={protectionIcon}
                        className="w-[64px] h-[64px] flex-1 justify-center items-center "
                        resizeMode="contain"
                    />
                </View>
                <Text className="text-center text-sm text-gray-500 py-3">
                    Code is sent to{" "}
                    <Text className="text-primary font-extrabold">
                        {phoneNumber}
                    </Text>
                </Text>
            </View>
            <View className="flex-row gap-2 py-5 px-5 justify-center items-center">
                <TextInput
                    autoFocus
                    ref={input1Ref}
                    onSubmitEditing={() => input2Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(e, input1Ref)}
                    onChangeText={(text) => handleOnChangeText(text, input2Ref)}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input2Ref}
                    onSubmitEditing={() => input3Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(e, input1Ref)}
                    onChangeText={(text) => handleOnChangeText(text, input3Ref)}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input3Ref}
                    onSubmitEditing={() => input4Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(e, input2Ref)}
                    onChangeText={(text) => handleOnChangeText(text, input4Ref)}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input4Ref}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    onSubmitEditing={() => input5Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(e, input3Ref)}
                    onChangeText={(text) => handleOnChangeText(text, input5Ref)}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input5Ref}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    onSubmitEditing={() => input6Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(e, input4Ref)}
                    onChangeText={(text) => handleOnChangeText(text, input6Ref)}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input6Ref}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    onKeyPress={(e) => handleKeyDown(e, input5Ref)}
                    onChangeText={(text) => handleOnChangeText(text, input6Ref)}
                    selectionColor="#6651f0"
                ></TextInput>
            </View>
            <View className="flex-row justify-center items-center mt-3">
                <Text className="mr-1 text-gray-500">Didn't recieve code?</Text>
                <TouchableOpacity>
                    <Text className="font-bold text-primary ">
                        Request again
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                // disabled={loading}
                className=" relative flex-row mt-10 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
            >
                {/* {loading && (
                        <ActivityIndicator
                        className="absolute"
                        size="large"
                        color="#fff"
                        />
                    )} */}
                <Text
                    className="font-normal text-base text-white"
                    // style={{ opacity: loading ? 0.5 : 1 }}
                >
                    {type}
                </Text>
            </TouchableOpacity>
        </LayoutAuth>
    );
};

export default OTPVerifyScreen;
