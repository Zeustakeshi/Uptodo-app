import { async } from "@firebase/util";
import { useNavigation } from "@react-navigation/native";
import {
    getAuth,
    signInWithPhoneNumber,
    PhoneAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Button,
    Image,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import { appleIcon, googleIcon } from "../../../assets";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import {
    fakeImg,
    formatNumberPhone,
    validateEmail,
    validatePassword,
    validatePhoneNumber,
    validateUserName,
} from "../../const";
import { auth, db } from "../../firebase/firebase-config";
import { setUserInfo, updateUserInfo } from "../../redux/slice/user/userSlice";

const RegisterScreen = () => {
    const [userName, setUserName] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [verificationId, setVerificationId] = useState("");
    const [loading, setLoading] = useState(false);
    //navigation
    const navigation = useNavigation();

    //dispatch
    const dispatch = useDispatch();

    // handle register
    // const handleSendCode = async () => {
    //     if (!validatePhoneNumber(numberPhone)) {
    //         alert("invalid phone number");
    //         return;
    //     }
    //     if (!validateUserName(userName)) {
    //         alert("invalid username");
    //         return;
    //     }

    //     try {
    //         setLoading(true);

    //         const phoneProvider = new PhoneAuthProvider();
    //         try {
    //             const verifica = await phoneProvider.verifyPhoneNumber(
    //                 formatNumberPhone(numberPhone),
    //                 60 // thời gian sống của mã xác thực (giây)
    //             );
    //             console.log(verifica);
    //             setVerificationId(verifica);
    //         } catch (error) {
    //             console.log(error);
    //         }

    //         //     await updateProfile(auth.currentUser, {
    //         //         displayName: userName,
    //         //     });
    //         //     // create user to firestore
    //         //     await setDoc(doc(db, "users", auth.currentUser.uid), {
    //         //         id: auth.currentUser.uid,
    //         //         userName: userName,
    //         //         email: email,
    //         //         password: password,
    //         //         avatar: "",
    //         //         task: {
    //         //             taskLeft: 0,
    //         //             taskDone: 0,
    //         //         },
    //         //         tasks: [],
    //         //     });
    //         //     //update user info to store and Storage
    //         //     dispatch(
    //         //         updateUserInfo({
    //         //             id: auth.currentUser.uid,
    //         //             userName: userName,
    //         //             email: email,
    //         //             password: password,
    //         //             avatar: fakeImg,
    //         //             task: {
    //         //                 taskLeft: 0,
    //         //                 taskDone: 0,
    //         //             },
    //         //             isLogin: true,
    //         //         })
    //         //     );
    //         //     navigation.reset({
    //         //         index: 1,
    //         //         routes: [{ name: "Home" }],
    //         //     });
    //     } catch (error) {
    //         alert(error);
    //         console.log(error);
    //     }
    //     setLoading(false);
    // };

    const handleSendCode = async () => {
        try {
            // Lấy số điện thoại từ input của người dùng
            const phoneNumber = "+84916561440";

            // Khởi tạo PhoneAuthProvider
            const phoneProvider = new PhoneAuthProvider(auth);

            // Gửi mã xác minh đến số điện thoại
            const verificationId = await phoneProvider.verifyPhoneNumber(
                "+84916561440",
                window.recaptchaVerifier
            );

            console.log(
                "Mã xác minh đã được gửi đến số điện thoại",
                phoneNumber,
                verificationId
            );
        } catch (error) {
            console.error("Lỗi khi gửi mã xác minh", error);
        }
    };

    const handleVerifyCode = async () => {
        const credential = PhoneAuthProvider.credential(
            verificationId,
            verificationCode
        );
        try {
            const { user } = await signInWithCredential(credential);

            // Lưu thông tin người dùng vào Cloud Firestore
            // firebase.firestore().collection("users").doc(user.uid).set({
            //     name: name,
            //     phoneNumber: user.phoneNumber,
            // });
            console.log(user);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <LayoutAuth>
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
                            autoFocus
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
                        Number Phone
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%] flex-row">
                        <View className=" pl-3 flex-row h-full justify-center items-center ">
                            <Text className="text-center font-bold text-primary ">
                                +84
                            </Text>
                        </View>
                        <TextInput
                            value={numberPhone}
                            onChangeText={(text) => {
                                setNumberPhone(text);
                            }}
                            placeholder="Enter your number phone"
                            className="flex-1 font-medium text-sm text-text-color p-3 placeholder:text-text-color"
                            maxLength={11}
                            keyboardType="numeric"
                            selectionColor="#6651f0"
                        />
                    </View>
                </View>
                <TouchableOpacity
                    disabled={loading}
                    // onPress={handleRegister}
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
                        Register
                    </Text>
                </TouchableOpacity>
                <Button title="Gửi mã xác thực" onPress={handleSendCode} />
                <TextInput
                    placeholder="Mã xác thực"
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                />
                <Button title="Xác thực" onPress={handleVerifyCode} />
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
                    <Text className="text-sm font-normal text-primary">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default RegisterScreen;
