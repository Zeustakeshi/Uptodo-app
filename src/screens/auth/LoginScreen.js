import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
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
import { validateEmail, validatePassword } from "../../const";
import { auth, db } from "../../firebase/firebase-config";
import { setTasks } from "../../redux/slice/tasks/tasksSlice";
import { resetUserInfo, setUserInfo } from "../../redux/slice/user/userSlice";

const LoginScreen = () => {
    // state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // navigation
    const navigation = useNavigation();

    //dispatch
    const dispatch = useDispatch();

    //effect
    // useEffect(() => {
    //     const checkUserLogin = async () => {
    //         const user = await AsyncStorage.getItem("user");
    //         if (user !== null) {
    //             const userInfo = JSON.parse(user);
    //             if (userInfo.isLogin) {
    //                 dispatch(setUserInfo(userInfo));
    //                 navigation.reset({
    //                     index: 1,
    //                     routes: [{ name: "Home" }],
    //                 });
    //             }
    //         }
    //     };
    //     checkUserLogin();
    // }, []);

    //handler
    const handleLogin = async () => {
        if (!validateEmail(email)) {
            alert("Please enter valid email and try again!");
            return;
        } else if (!validatePassword(password)) {
            alert("Plese enter valid password and try again!");
            return;
        }

        try {
            setLoading(true);
            const data = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // get user id from method sign
            //then call firestore to get user data stored from firestore

            const docRef = doc(db, "users", data.user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                const userInfo = {
                    id: userData.id,
                    email: userData.email,
                    userName: userData.userName,
                    password: userData.password,
                    avatar: userData.avatar,
                    task: {
                        taskLeft: userData?.task.taskLeft,
                        taskDone: userData?.task.taskDone,
                    },
                };
                const tasks = userData?.tasks;
                // dispatch set current user data to store
                dispatch(setUserInfo({ ...userInfo, isLogin: true }));
                // dispatch set current user tasks to store
                dispatch(setTasks(tasks));
            }

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
                    Login
                </Text>
            </View>
            {/* form */}
            <View className="mt-12">
                <View className="">
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
                <View className="mt-5">
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
                    onPress={handleLogin}
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
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-4 items-center">
                <View className="flex-1 h-[1px] bg-gray-300"></View>
                <Text className="p-2 text-gray-300">or</Text>
                <View className="flex-1 h-[1px] bg-gray-300"></View>
            </View>
            {/* or auth */}
            {/* auth with google */}
            <View className="gap-y-5">
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={googleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Login with Google
                    </Text>
                </TouchableOpacity>
                {/* auth with apple */}
                <TouchableOpacity className="h-[48px] flex-row border border-primary rounded justify-center items-center gap-x-3">
                    <Image className="w-[24px] h-[24px]" source={appleIcon} />
                    <Text className="text-text-color text-base font-normal">
                        Login with Apple
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Don’t have an account? Register */}
            <View className="flex-row flex-wrap mt-16 justify-center items-center gap-x-1">
                <Text className="text-sm font-normal text-gray-500">
                    Don’t have an account?{" "}
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text className="text-sm font-normal text-primary">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

export default LoginScreen;
