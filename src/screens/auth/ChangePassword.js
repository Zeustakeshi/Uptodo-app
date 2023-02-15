import "firebase/auth";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import OTPModal from "../../components/Modals/OTPModal";
import VerifyModal from "../../components/Modals/VerifyEmailModal";
import { validatePassword } from "../../const";
import { auth } from "../../firebase/firebase-config";
import "firebase/auth";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSendEmailVerify, setIsSendEmailVerify] = useState(false);

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleChangePassword = async (setModalVisible) => {
        if (!validatePassword(newPassword) || !validatePassword(oldPassword)) {
            alert("Please enter valid password and try again!");
            return;
        }

        if (newPassword === oldPassword) {
            alert("New password can not be same your current password!");
            return;
        }

        if (confirmPassword !== newPassword) {
            alert("Password confim does not match!");
            return;
        }

        const authUser = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            authUser.email,
            oldPassword
        );

        await authUser.sendEmailVerification();

        authUser.onAuthStateChanged((user) => {
            if (user && user.emailVerified) {
                // Nếu email đã được xác thực, thay đổi mật khẩu
                // user.updatePassword(newPassword);
                alert("ok ban da verify thanh cong");
            }
        });
        // setModalVisible(true);
        // try {
        //     setLoading(true);
        //     const result = await reauthenticateWithCredential(
        //         authUser,
        //         credential
        //     );
        //     if (result) {
        //         // setModalVisible(true);
        //     }
        // } catch (error) {
        //     alert(error);
        // }

        // dispatch(
        //     setUserPassword({
        //         oldPassword: oldPassword,
        //         newPassword: newPassword,
        //     })
        // );
        setLoading(false);
        // alert("ok");
    };

    return (
        <LayoutAuth title={"Change Password"} className="gap-y-4">
            {/* input old password */}
            <View className="">
                <Text className="font-medium text-base text-text-color mb-2">
                    Old Password
                </Text>
                <View className="bg-gray-100 rounded w-[100%]">
                    <TextInput
                        value={oldPassword}
                        onChangeText={(text) => {
                            setOldPassword(text);
                        }}
                        autoFocus
                        secureTextEntry={true}
                        placeholder="Enter old password"
                        className="font-medium text-sm text-text-color p-3"
                        selectionColor="#6651f0"
                    />
                </View>
            </View>
            {/* input new password */}
            <View className="">
                <Text className="font-medium text-base text-text-color mb-2">
                    New Password
                </Text>
                <View className="bg-gray-100 rounded w-[100%]">
                    <TextInput
                        value={newPassword}
                        onChangeText={(text) => {
                            setNewPassword(text);
                        }}
                        secureTextEntry={true}
                        placeholder="Enter new password"
                        className="font-medium text-sm text-text-color p-3"
                        selectionColor="#6651f0"
                    />
                </View>
            </View>
            {/* input confirm new password */}
            <View className="">
                <Text className="font-medium text-base text-text-color mb-2">
                    Confirm New Password
                </Text>
                <View className="bg-gray-100 rounded w-[100%]">
                    <TextInput
                        value={confirmPassword}
                        onChangeText={(text) => {
                            setConfirmPassword(text);
                        }}
                        secureTextEntry={true}
                        placeholder="Enter confirm password"
                        className="font-medium text-sm text-text-color p-3"
                        selectionColor="#6651f0"
                    />
                </View>
            </View>
            <View>
                <VerifyModal
                    buttonShow={(setModalVisible) => (
                        <TouchableOpacity
                            // disabled={loading}
                            onPress={() =>
                                handleChangePassword(setModalVisible)
                            }
                            className=" relative flex-row mt-5 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
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
                                Change Password
                            </Text>
                        </TouchableOpacity>
                    )}
                ></VerifyModal>
                <View>
                    <Text>{user.password}</Text>
                </View>
            </View>
        </LayoutAuth>
    );
};

export default ChangePassword;
