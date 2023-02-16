import React, { useRef } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { protectionIcon } from "../../../assets";
import { useState } from "react";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const OTPVerifyScreen = ({ route }) => {
    const {
        phoneNumber,
        type,
        verificationId,
        handleVerifiSuccess = () => {},
    } = route?.params;
    const [verificationCode, setVerificationCode] = useState([
        "*",
        "*",
        "*",
        "*",
        "*",
    ]);
    const [loading, setLoading] = useState(false);

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);

    const handleKeyDown = (id, e, inputRef) => {
        if (e.nativeEvent.key === "Backspace") {
            inputRef.current.focus();
            setVerificationCode((prev) => {
                prev[id - 1] = "*";
                return prev;
            });
        }
    };

    const handleOnChangeText = (id, text, inputRef) => {
        if (text.length >= 1) {
            setVerificationCode((prev) => {
                prev[id - 1] = text;
                return prev;
            });
            inputRef.current.focus();
        }
    };

    const handleConfirmVerifiCode = async () => {
        const code = verificationCode.join("");
        const credential = PhoneAuthProvider.credential(verificationId, code);

        try {
            setLoading(true);
            const userCredential = await signInWithCredential(auth, credential);
            if (userCredential) {
                handleVerifiSuccess(userCredential);
            }
        } catch (error) {
            alert(error);
        }
        setLoading(false);
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
                    onKeyPress={(e) => handleKeyDown(1, e, input1Ref)}
                    onChangeText={(text) =>
                        handleOnChangeText(1, text, input2Ref)
                    }
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input2Ref}
                    onSubmitEditing={() => input3Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(2, e, input1Ref)}
                    onChangeText={(text) =>
                        handleOnChangeText(2, text, input3Ref)
                    }
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input3Ref}
                    onSubmitEditing={() => input4Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(3, e, input2Ref)}
                    onChangeText={(text) =>
                        handleOnChangeText(3, text, input4Ref)
                    }
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
                    onKeyPress={(e) => handleKeyDown(4, e, input3Ref)}
                    onChangeText={(text) =>
                        handleOnChangeText(4, text, input5Ref)
                    }
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input5Ref}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    onSubmitEditing={() => input6Ref.current.focus()}
                    onKeyPress={(e) => handleKeyDown(5, e, input4Ref)}
                    onChangeText={(text) =>
                        handleOnChangeText(5, text, input6Ref)
                    }
                    selectionColor="#6651f0"
                ></TextInput>
                <TextInput
                    ref={input6Ref}
                    className="text-center w-[45px] h-[45px]  bg-slate-200 rounded-md p-1 font-bold text-primary"
                    keyboardType="numeric"
                    maxLength={1}
                    onKeyPress={(e) => handleKeyDown(6, e, input5Ref)}
                    onChangeText={(text) =>
                        handleOnChangeText(6, text, input6Ref)
                    }
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
                onPress={handleConfirmVerifiCode}
                disabled={loading}
                className=" relative flex-row mt-10 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
            >
                {loading && (
                    <ActivityIndicator
                        className="absolute"
                        size="large"
                        color="#fff"
                    />
                )}
                <Text
                    className="font-normal text-base text-white"
                    style={{ opacity: loading ? 0.5 : 1 }}
                >
                    {type}
                </Text>
            </TouchableOpacity>
        </LayoutAuth>
    );
};

export default OTPVerifyScreen;
