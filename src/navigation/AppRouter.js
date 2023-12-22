import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen, SignIn, SignUp, ForgotPassword, VerifyEmail, VerifyPhone, VerifyPhoneVerification, SuccesVerification } from '../routers/AppMainRouter';
import React, { useRef } from "react";
import Toast from 'react-native-toast-message'

const Stack = createNativeStackNavigator();

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
                {/* Auth Group, Services, Verify your account pages... */}
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, gestureEnabled: true, }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, gestureEnabled: true, }} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false, gestureEnabled: true, }} />
                    <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ headerShown: false, gestureEnabled: true, }} />
                    <Stack.Screen name="VerifyPhone" component={VerifyPhone} options={{ headerShown: false, gestureEnabled: true, }} />
                    <Stack.Screen name="SuccesVerification" component={SuccesVerification} options={{ headerShown: false, gestureEnabled: false, }} />
                    <Stack.Screen name="VerifyPhoneVerification" component={VerifyPhoneVerification} options={{ headerShown: false, gestureEnabled: true, }} />
                </Stack.Group>
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    )
};