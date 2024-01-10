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
import React, { useRef } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  const navigation = useNavigation();

  // Check if a username is stored in AsyncStorage
  useEffect(() => {
    async function checkUsername() {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUsername) {
          // Username found, navigate to Home screen
          navigation.navigate("Home");
        }
      } catch (error) {
        console.error("Error checking username:", error);
      }
    }

    checkUsername();
  }, []); // Empty dependency array ensures this runs only once on component mount
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        {/* Auth Group, Services, Verify your account pages... */}
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
        {/* Tab pages */}
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true, headerTitle: "Home" }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{ headerShown: true, headerTitle: "Home" }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: true, headerTitle: "Home" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true, headerTitle: "Home" }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
