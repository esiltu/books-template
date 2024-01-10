import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import { auth } from "../../firebase";

const SignIn = () => {
  const navigation = useNavigation();
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

  // Navigate to sign up page
  function goToSignUpPage() {
    try {
      navigation.navigate("SignUp");
    } catch (error) {
      console.log(error);
    }
  }

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    setIsFormDirty(false);
    // Simulating API call or other asynchronous operation
    try {
      const userCredential = auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log("Successfully logged in as:" + values.email);
      Toast.show({
        type: "success",
        text1: `Welcome ${values.email}`,
        text1Style: { textAlign: "left" },
      });
    } catch (error) {
      console.log(error + "ddsffd");
    }
  };

  // Func to navigate back to the onboarding page
  function goBackToOnboarding() {
    try {
      navigation.goBack();
      console.log("You wanna go back for sure?");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View>
        <TouchableOpacity
          style={{ width: "10%", left: "5%", top: "100%" }}
          activeOpacity={0.6}
          onPress={goBackToOnboarding}
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
          Welcome back 👋
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
          Sign in to your account
        </Text>
      </View>
      {/* Content for textinputs */}
      <KeyboardAvoidingView
        style={{ top: "15%", left: "7.5%", justifyContent: "space-between" }}
      >
        {/* Use Formik to manage form state and validation */}
        <Formik
          initialValues={{ email: "", password: "" }}
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
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Email</Text>
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
                  height: "13%",
                  bottom: "4%",
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderColor:
                    (touched.email || isFormDirty) && errors.email
                      ? "red"
                      : "#54408C",
                  // borderWidth: 0.5,
                }}
              />

              <Text style={{ fontSize: 17, fontWeight: "500", bottom: "7%" }}>
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
                  height: "13%",
                  bottom: "12%",
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
                style={{ bottom: "28%", alignSelf: "flex-end", right: "22.5%" }}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={passwordVisible ? "eye" : "eye-off"}
                  size={28}
                  color="#636e72"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  bottom: "28%",
                  width: "30%",
                  left: "0%",
                }}
                onPress={goToForgotPassword}
                activeOpacity={0.6}
              >
                <Text
                  style={{
                    color: "#54408C",
                    fontSize: 16,
                    width: "150%",
                    fontWeight: "500",
                  }}
                >
                  Forgot Password?
                </Text>
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
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 19,
                    fontWeight: "600",
                    textAlign: "center",
                    top: "25%",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      {/* Other methods for Sign In */}
      <View>
        <TouchableOpacity
          style={{ backgroundColor: "white", alignSelf: "center" }}
          activeOpacity={0.6}
          onPress={goToSignUpPage}
        >
          <Text style={{ fontSize: 17, color: "#A6A6A6", fontWeight: "600" }}>
            Don't have an account?{" "}
            <Text style={{ color: "#54408C" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require("../../assets/styling/Group.png")}
          style={{
            width: "100%",
            height: "20%",
            alignSelf: "center",
            top: "15%",
          }}
        />
      </View>
      {/* Other methods Social Loginss */}
      <View>
        <TouchableOpacity
          style={{ backgroundColor: "white", height: "30%", bottom: "18%" }}
          onPress={() => console.log("pressed on google")}
        >
          <Image
            source={require("../../assets/styling/logininwithgoogle.png")}
            style={{ height: "35%", alignSelf: "center", width: "85%" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "white", height: "30%", bottom: "35%" }}
          onPress={() => console.log("pressed on apple")}
        >
          <Image
            source={require("../../assets/styling/logininwithapple.png")}
            style={{ height: "35%", alignSelf: "center", width: "85%" }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  submitButton: {
    width: "85%",
    alignSelf: "center",
    height: "13%",
    borderRadius: 30,
    marginTop: 20,
    bottom: "33%",
    right: "7.9%",
  },
});
