import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);

  const navigation = useNavigation();

  const handleContinuePress = async () => {
    try {
      if (selectedSegmentIndex === 0) {
        // Log email pressed
        console.log("Email pressed");
        // Navigate to dummy page for email
        await navigation.navigate("ForgotPasswordEmail");
      } else if (selectedSegmentIndex === 1) {
        // Log phone pressed
        console.log("Phone pressed");
        // Navigate to dummy page for phone
        await navigation.navigate("ForgotPasswordPhone");
      }
    } catch (error) {
      console.error("Error navigating:", error.message);
      // Handle errors here if needed
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={35} />
        </TouchableOpacity>
      </View>
      <View style={{ top: "2.5%" }}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Select which contact details should we use to reset your password
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.option,
              selectedSegmentIndex === 0 ? styles.activeOption : null,
            ]}
            onPress={() => setSelectedSegmentIndex(0)}
          >
            <View style={styles.square}>
              <Ionicons
                name="mail-outline"
                size={30}
                color="#54408C"
                style={{ left: "23%" }}
              />
            </View>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                right: "30%",
                top: "5%",
                fontWeight: "600",
              }}
            >
              Email
            </Text>
            <Text style={styles.optionText}>Send to your email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              selectedSegmentIndex === 1 ? styles.activeOption : null,
            ]}
            onPress={() => setSelectedSegmentIndex(1)}
          >
            <View style={styles.square}>
              <Ionicons
                name="call-outline"
                size={30}
                color="#54408C"
                style={{ left: "23%" }}
              />
            </View>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                right: "30%",
                top: "5%",
                fontWeight: "600",
              }}
            >
              Phone
            </Text>
            <Text style={styles.optionText}>Send to your phone</Text>
          </TouchableOpacity>
        </View>

        {selectedSegmentIndex === 0 || selectedSegmentIndex === 1 ? (
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinuePress}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: "left",
    marginVertical: 20,
  },
  content: {
    bottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "40%", // Adjust as needed
  },
  option: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "45%", // Adjust for space between
    borderRadius: 20,
    height: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 10,
    margin: "2%",
  },
  activeOption: {
    borderWidth: 1,
    borderColor: "#54408C",
    // backgroundColor: '#F0F0F0',
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "left",
    marginBottom: 10,
    right: "25%",
  },
  optionText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#A6A6A6",
    right: "2%",
  },
  continueButton: {
    top: "10%",
    backgroundColor: "#54408C",
    width: "90%",
    alignSelf: "center",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontWeight: "500",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    left: "6.5%",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
  },
  subtitle: {
    right: "1.5%",
    fontSize: 16,
    color: "#A6A6A6",
    marginTop: 10,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
  },
});

export default ForgotPassword;
