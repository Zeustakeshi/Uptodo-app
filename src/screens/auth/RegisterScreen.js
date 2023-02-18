import { useNavigation } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { PhoneAuthProvider, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import { appleIcon, googleIcon } from "../../../assets";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { fakeImg, formatPhone, isValidPhone } from "../../const";
import { auth, db, firebaseConfig } from "../../firebase/firebase-config";
import { updateUserInfo } from "../../redux/slice/user/userSlice";

const RegisterScreen = () => {
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const recaptchaVerifier = useRef(null);
    //navigation
    const navigation = useNavigation();
    // dispatch
    const dispatch = useDispatch();
    // handler
    const handleVerifiSuccess = async (userCredential) => {
        try {
            // update usename to account user
            await updateProfile(auth.currentUser, {
                displayName: userName,
            });

            // create user to firestore
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                id: auth.currentUser.uid,
                userName: userName,
                email: "",
                phone: formatPhone(phoneNumber),
                password: "",
                avatar: "",
                todoCoin: 10,
                task: {
                    taskLeft: 0,
                    taskDone: 0,
                },
                tasks: [],
            });
            //update user info to store and Storage
            dispatch(
                updateUserInfo({
                    id: auth.currentUser.uid,
                    userName: userName,
                    email: "",
                    phone: formatPhone(phoneNumber),
                    password: "",
                    avatar: fakeImg,
                    todoCoin: 10,
                    task: {
                        taskLeft: 0,
                        taskDone: 0,
                    },
                    isLogin: true,
                })
            );
            navigation.reset({
                index: 1,
                routes: [{ name: "Home" }],
            });
        } catch (error) {
            alert(error);
        }
    };

    const handleRegister = async () => {
        if (!isValidPhone(formatPhone(phoneNumber))) {
            alert("invalid phone number, please check again!!!");
        } else {
            const phoneProvider = new PhoneAuthProvider(auth);
            try {
                setLoading(true);
                const verificationId = await phoneProvider.verifyPhoneNumber(
                    formatPhone(phoneNumber),
                    recaptchaVerifier.current
                );
                if (verificationId) {
                    navigation.navigate("OTP", {
                        phoneNumber: formatPhone(phoneNumber),
                        verificationId,
                        type: "Register",
                        handleVerifiSuccess,
                    });
                }
            } catch (error) {
                alert(error);
            }
            setLoading(false);
        }
    };

    return (
        <LayoutAuth>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            ></FirebaseRecaptchaVerifierModal>
            <View>
                <Text className="text-[32px] font-bold text-primary">
                    Register
                </Text>
            </View>
            {/* form */}
            <View className="mt-10">
                <View className="">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Username
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%]">
                        <TextInput
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                            placeholder="Enter your Username"
                            className="font-medium text-sm text-text-color p-3"
                            selectionColor="#6651f0"
                        />
                    </View>
                </View>
                <View className="mt-3">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Phone Number
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%] flex-row">
                        <View className="p-3 justify-center items-center">
                            <Text className="text-primary font-bold">+84</Text>
                        </View>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Enter your phone"
                            className=" font-medium text-sm text-text-color p-3 pl-0"
                            selectionColor="#6651f0"
                            maxLength={11}
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    disabled={loading}
                    onPress={handleRegister}
                    className="flex-row realtive  mt-8 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
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
                        Send Code
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-3 items-center">
                <View className="flex-1 h-[1px] bg-gray-300"></View>
                <Text className="p-2 text-gray-300">or</Text>
                <View className="flex-1 h-[1px] bg-gray-300"></View>
            </View>
            {/* or auth */}
            <View className="gap-y-5">
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={googleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Register with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={appleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Register with Apple
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Don’t have an account? Register */}
            <View className="flex-row flex-wrap mt-10 justify-center items-center gap-x-1">
                <Text className="text-sm font-normal text-gray-500">
                    Don’t have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text className="text-sm font-bold text-primary">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default RegisterScreen;
