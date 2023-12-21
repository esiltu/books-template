import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen, SignIn, SignUp } from '../routers/AppMainRouter';
import React, { useRef } from "react";
import Toast from 'react-native-toast-message'

const Stack = createNativeStackNavigator();

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
                {/* Auth Group */}
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, gestureEnabled: false, }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, gestureEnabled: false, }} />
                </Stack.Group>
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    )
};