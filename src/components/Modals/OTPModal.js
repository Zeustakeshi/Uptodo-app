import React from "react";
import { useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ModalPoup1 from "./ModalPoup1";

const OTPModal = ({ buttonShow = () => {} }) => {
    const user = useSelector((state) => state.user);

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

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
        <ModalPoup1 height={100} buttonShow={buttonShow}>
            {(setModalVisible) => (
                <LayoutWrapper title={"Verify Email"}>
                    <View className="mt-20">
                        <Text className="text-center text-sm text-gray-500">
                            Code is sent to {user.email}
                        </Text>
                    </View>
                    <View className="flex-row gap-5 py-10 px-5">
                        <TextInput
                            autoFocus
                            ref={input1Ref}
                            onSubmitEditing={() => input2Ref.current.focus()}
                            onKeyPress={(e) => handleKeyDown(e, input1Ref)}
                            onChangeText={(text) =>
                                handleOnChangeText(text, input2Ref)
                            }
                            className="text-center w-[50px] h-[50px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                            keyboardType="numeric"
                            maxLength={1}
                            selectionColor="#6651f0"
                        ></TextInput>
                        <TextInput
                            ref={input2Ref}
                            onSubmitEditing={() => input3Ref.current.focus()}
                            onKeyPress={(e) => handleKeyDown(e, input1Ref)}
                            onChangeText={(text) =>
                                handleOnChangeText(text, input3Ref)
                            }
                            className="text-center w-[50px] h-[50px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                            keyboardType="numeric"
                            maxLength={1}
                            selectionColor="#6651f0"
                        ></TextInput>
                        <TextInput
                            ref={input3Ref}
                            onSubmitEditing={() => input4Ref.current.focus()}
                            onKeyPress={(e) => handleKeyDown(e, input2Ref)}
                            onChangeText={(text) =>
                                handleOnChangeText(text, input4Ref)
                            }
                            className="text-center w-[50px] h-[50px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                            keyboardType="numeric"
                            maxLength={1}
                            selectionColor="#6651f0"
                        ></TextInput>
                        <TextInput
                            ref={input4Ref}
                            className="text-center w-[50px] h-[50px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                            keyboardType="numeric"
                            maxLength={1}
                            onKeyPress={(e) => handleKeyDown(e, input3Ref)}
                            selectionColor="#6651f0"
                        ></TextInput>
                    </View>
                    <View className="flex-row justify-center items-center mt-3">
                        <Text className="mr-1 text-gray-500">
                            Didn't recieve code?
                        </Text>
                        <TouchableOpacity>
                            <Text className="font-medium text-slate-800">
                                Request again
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        // disabled={loading}
                        className=" relative flex-row mt-5 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
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
                            Verify And Change Password
                        </Text>
                    </TouchableOpacity>
                </LayoutWrapper>
            )}
        </ModalPoup1>
    );
};

export default OTPModal;
