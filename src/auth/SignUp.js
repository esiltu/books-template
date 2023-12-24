import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

const SignUp = () => {
  const navigation = useNavigation();

  // Func to navigate back to the onboarding page
  function goBackToLogin() {
    try {
      navigation.goBack();
      console.log("You wanna go back for sure?");
    } catch (error) {
      console.log(error);
    }
  }

  const [isFormDirty, setIsFormDirty] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  function togglePasswordVisibility() {
    setPasswordVisible((prevVisible) => !prevVisible);
  }

  // Navigate to forgot pass page
  function goToForgotPassword() {
    try {
      navigation.navigate("ForgotPassword");
    } catch (error) {
      console.log(error);
    }
  }

  // Navigate to login if have an account
  function goToLoginPage() {
    try {
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
    }
  }

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    setIsFormDirty(false);
    // Simulating API call or other asynchronous operation
    setTimeout(() => {
      // Check if the email is "test@test.com" and password is "password"
      if (
        values.name === "test" &&
        values.email === "test@test.com" &&
        values.password === "password"
      ) {
        // Display success toast on successful sign-in
        Toast.show({
          type: "success",
          text1: "Signed up successfully",
          text2: `Welcome here! ${values.name}`,
        });
        // Navigate to the home screen or any other screen on success
        console.log(
          "Sign in successful! " + values.email,
          values.name,
          values.password
        );
        // Reset the form and remove error messages
        resetForm();
        navigation.navigate("VerifyEmail", {
          name: values.name,
          email: values.email,
          password: values.password,
        });
      } else {
        // Display error toast on invalid credentials
        Toast.show({
          type: "error",
          text1: "Sign In Failed",
          text2: "Invalid email or password",
        });
      }
    }, 1000); // Simulating delay for API call
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View>
        <TouchableOpacity
          style={{ width: "10%", left: "5%", top: "100%" }}
          activeOpacity={0.6}
          onPress={goBackToLogin}
        >
          <AntDesign
            name="arrowleft"
            size={35}
            style={{ left: "10%", top: "0%" }}
          />
        </TouchableOpacity>
      </View>
      {/* Part of the Header welcome texts etc.. */}
      <View style={{ top: "7.5%" }}>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            left: "7.5%",
          }}
        >
          Sign Up 😾
        </Text>
        <Text
          style={{
            color: "#A6A6A6",
            fontWeight: "500",
            fontSize: 17,
            left: "7.5%",
            top: "20%",
          }}
        >
          Create account and choose favorite menu
        </Text>
      </View>
      {/* Content for textinputs */}
      <KeyboardAvoidingView
        style={{ top: "15%", left: "7.5%", justifyContent: "space-between" }}
      >
        {/* Use Formik to manage form state and validation */}
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
          }) => (
            <>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Name</Text>
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="#B8B8B8"
                placeholder="Your name"
                onChangeText={handleChange("name")}
                onBlur={() => {
                  handleBlur("name");
                  setFieldTouched("name");
                  setIsFormDirty(true);
                }}
                value={values.name}
                style={{
                  backgroundColor: "#FAFAFA",
                  width: "83%",
                  height: "11%",
                  bottom: "2.5%",
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderColor:
                    (touched.name || isFormDirty) && errors.name
                      ? "red"
                      : "#54408C",
                  // borderWidth: 0.5,
                }}
              />

              <Text style={{ fontSize: 17, fontWeight: "500", bottom: "5%" }}>
                Email
              </Text>
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="#B8B8B8"
                placeholder="Your email"
                onChangeText={handleChange("email")}
                onBlur={() => {
                  handleBlur("email");
                  setFieldTouched("email");
                  setIsFormDirty(true);
                }}
                value={values.email}
                style={{
                  backgroundColor: "#FAFAFA",
                  width: "83%",
                  height: "11%",
                  bottom: "8%",
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderColor:
                    (touched.email || isFormDirty) && errors.email
                      ? "red"
                      : "#54408C",
                  // borderWidth: 0.5,
                }}
              />

              <Text style={{ fontSize: 17, fontWeight: "500", bottom: "11%" }}>
                Password
              </Text>
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="#B8B8B8"
                placeholder="Your password"
                secureTextEntry={!passwordVisible}
                onChangeText={handleChange("password")}
                onBlur={() => {
                  handleBlur("password");
                  setFieldTouched("password");
                  setIsFormDirty(true);
                }}
                value={values.password}
                style={{
                  backgroundColor: "#FAFAFA",
                  width: "83%",
                  height: "11%",
                  bottom: "14%",
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderColor:
                    (touched.password || isFormDirty) && errors.password
                      ? "red"
                      : "#54408C",
                  // borderWidth: 0.5,
                }}
              />

              <TouchableOpacity
                style={{ bottom: "27%", alignSelf: "flex-end", right: "22.5%" }}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={passwordVisible ? "eye" : "eye-off"}
                  size={28}
                  color="#636e72"
                />
              </TouchableOpacity>

              {/* Responsive button to submit the form */}
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  {
                    backgroundColor:
                      values.email && values.password ? "#54408C" : "#ccc",
                  },
                ]}
                onPress={handleSubmit}
                disabled={!values.email || !values.password}
                activeOpacity={0.6}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 19,
                    fontWeight: "600",
                    textAlign: "center",
                    top: "30%",
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <View style={{ top: "2.5%" }}>
        <TouchableOpacity
          style={{ backgroundColor: "white", alignSelf: "center" }}
          activeOpacity={0.6}
          onPress={goToLoginPage}
        >
          <Text style={{ fontSize: 17, color: "#A6A6A6", fontWeight: "500" }}>
            Have an account? <Text style={{ color: "#54408C" }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  submitButton: {
    width: "85%",
    alignSelf: "center",
    height: "13%",
    borderRadius: 30,
    marginTop: 20,
    bottom: "26%",
    right: "7.9%",
  },
});
