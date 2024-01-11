import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingScreen,
  SignIn,
  SignUp,
  ForgotPassword,
  VerifyEmail,
  VerifyPhone,
  VerifyPhoneVerification,
  SuccesVerification,
  SuccesSuccessForgotPage,
  ForgotPasswordPhoneVerify,
  ForgotPasswordPhone,
  ForgotPasswordEmail,
  ForgotPasswordEmailVerify,
} from "../routers/AppMainRouter";
// Import Auth screens
import { Home, Cart, Category, Profile } from "../routers/BottomTabRouter";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabRouter from "./TabRouter";

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  // Onboarding first launch check
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  // LoggedIn check
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []); // Add an empty dependency array to useEffect

  // Check for the LoggedIn
  useEffect(() => {
    AsyncStorage.getItem("isLoggedIn").then((value) => {
      if (value === null) {
        // Assuming you want to set it to "true" if it's null
        AsyncStorage.setItem("isLoggedIn", "true");
      } else {
        setIsLoggedIn(true); // Update to true if the value is present
      }
    });
  }, []); // Add an empty dependency array to useEffect

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && !isLoggedIn ? (
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="TabRouter"
              component={TabRouter}
              options={{ headerShown: true }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="VerifyEmail"
              component={VerifyEmail}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="VerifyPhone"
              component={VerifyPhone}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="SuccesVerification"
              component={SuccesVerification}
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
              name="VerifyPhoneVerification"
              component={VerifyPhoneVerification}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="SuccesSuccessForgotPage"
              component={SuccesSuccessForgotPage}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="ForgotPasswordPhoneVerify"
              component={ForgotPasswordPhoneVerify}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="ForgotPasswordPhone"
              component={ForgotPasswordPhone}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="ForgotPasswordEmail"
              component={ForgotPasswordEmail}
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="ForgotPasswordEmailVerify"
              component={ForgotPasswordEmailVerify}
              options={{ headerShown: false, gestureEnabled: true }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
