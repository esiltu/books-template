import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SuccesVerification = () => {
  const navigation = useNavigation();

  // Finally made it to the get startd page... 🎉😾
  function getStartedPages() {
    try {
      console.log("Wait a sec please!");
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Image
          source={require("../../../assets/success/successimage.png")}
          style={{
            width: "55%",
            height: "40%",
            alignSelf: "center",
            top: "65%",
          }}
        />
      </View>
      <View style={{ top: "7.5%" }}>
        <Text style={{ textAlign: "center", fontSize: 27, fontWeight: "600" }}>
          Congratulation!
        </Text>
        <Text
          style={{
            color: "#A6A6A6",
            fontSize: 18,
            width: "89%",
            textAlign: "center",
            alignSelf: "center",
            top: "15%",
          }}
        >
          your account is complete, please enjoy the best menu from us.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#54408C",
          width: "90%",
          height: "7.5%",
          alignSelf: "center",
          borderRadius: 30,
          top: "15%",
        }}
        activeOpacity={0.6}
        onPress={getStartedPages} // Handle Continue button press
      >
        <Text
          style={{
            fontSize: 22,
            color: "white",
            textAlign: "center",
            top: "25%",
            fontWeight: "500",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccesVerification;

const styles = StyleSheet.create({});
