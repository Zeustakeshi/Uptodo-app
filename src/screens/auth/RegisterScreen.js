import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
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
import {
    fakeImg,
    validateEmail,
    validatePassword,
    validateUserName,
} from "../../const";
import { auth, db } from "../../firebase/firebase-config";
import { setUserInfo, updateUserInfo } from "../../redux/slice/user/userSlice";

const RegisterScreen = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    //navigation
    const navigation = useNavigation();

    //dispatch
    const dispatch = useDispatch();

    // handle register
    const handleRegister = async () => {
        if (!validateEmail(email)) {
            alert("Please enter valid email and try again!");
            return;
        } else if (!validateUserName(userName)) {
            alert("Please enter valid userName and try again!");
            return;
        } else if (!validatePassword(password)) {
            alert("Plese enter valid password and try again!");
            return;
        }
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: userName,
            });
            // create user to firestore
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                id: auth.currentUser.uid,
                userName: userName,
                email: email,
                password: password,
                avatar: "",
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
                    email: email,
                    password: password,
                    avatar: fakeImg,
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
            console.log(error);
        }

        setLoading(false);
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
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                            placeholder="Enter your Username"
                            className="font-medium text-sm text-text-color p-3"
                        />
                    </View>
                </View>
                <View className="mt-3">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Email
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%]">
                        <TextInput
                            testID="LoginEmailAddress"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            placeholder="Enter your Email"
                            className="font-medium text-sm text-text-color p-3"
                        />
                    </View>
                </View>
                <View className="mt-3">
                    <Text className="font-medium text-base text-text-color mb-2">
                        Password
                    </Text>
                    <View className="bg-gray-100 rounded w-[100%]">
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            placeholder="Enter your Password"
                            className="font-medium text-sm text-text-color p-3"
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
                        Register
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
                    <Text className="text-sm font-normal text-primary">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default RegisterScreen;
