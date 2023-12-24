import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";

const OnboardingScreen = () => {
  // Function to navigate to -> SignIn page
  function goToLoginSkip() {
    navigation.navigate("SignIn");
  }

  // Function navigate to -> SignUp page
  function getStartedSignUp() {
    navigation.navigate("SignUp");
  }

  const navigation = useNavigation();

  const swiperRef = useRef(null);

  // ...

  function handleContinue() {
    // Add a delay of 1000 milliseconds (1 second)
    setTimeout(() => {
      // Move to the next slide
      swiperRef.current.scrollBy(1, true);
    }, 500);
  }

  // ...

  return (
    <Swiper
      ref={swiperRef}
      paginationStyle={{ bottom: "24%" }}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      dotColor="#D6D6D6" // Default dot color (inactive)
      activeDotColor="#54408C" // Active dot color
      activeDotStyle={styles.customDot}
      dotStyle={styles.customDot} // Style for dots
      onIndexChanged={(index) => console.log("Current Index: ", index)}
    >
      {/* Slide 1 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <TouchableOpacity
            style={{ left: "10%", top: "200%", width: "30%" }}
            onPress={goToLoginSkip}
            activeOpacity={0.6}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#54408C" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../../assets/onboarding/onboardingimageone.png")}
            style={{
              width: "80%",
              height: "65%",
              alignSelf: "center",
              top: "15%",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              width: "60%",
              textAlign: "center",
              left: "20%",
              bottom: "80%",
            }}
          >
            Now reading books will be easier
          </Text>
          <Text
            style={{
              color: "#A6A6A6",
              fontSize: 16,
              textAlign: "center",
              bottom: "60%",
              width: "90%",
              left: "5%",
            }}
          >
            Discover new worlds, join a vibrant reading community. Start your
            reading adventure effortlessly with us.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleContinue}
            style={{
              backgroundColor: "#54408C",
              width: "85%",
              alignSelf: "center",
              height: "20%",
              bottom: "6.5%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                top: "27.5%",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E5DEF8",
              width: "85%",
              alignSelf: "center",
              height: "20%",
              bottom: "3.5%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
            onPress={goToLoginSkip}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#54408C",
                fontSize: 20,
                fontWeight: "600",
                top: "25%",
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Slide 2 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <TouchableOpacity
            style={{ left: "10%", top: "200%", width: "30%" }}
            onPress={goToLoginSkip}
            activeOpacity={0.6}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#54408C" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../../assets/onboarding/onboadingimagetwo.png")}
            style={{
              width: "80%",
              height: "65%",
              alignSelf: "center",
              top: "15%",
            }}
            activeOpacity={0.6}
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              width: "60%",
              textAlign: "center",
              left: "20%",
              bottom: "80%",
            }}
          >
            Your Bookish Soulmate Awaits
          </Text>
          <Text
            style={{
              color: "#A6A6A6",
              fontSize: 16,
              textAlign: "center",
              bottom: "60%",
              width: "90%",
              left: "5%",
            }}
          >
            Let us be your guide to the perfect read. Discover books tailored to
            your tastes for a truly rewarding experience.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleContinue}
            style={{
              backgroundColor: "#54408C",
              width: "85%",
              alignSelf: "center",
              height: "20%",
              bottom: "6.5%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                top: "27.5%",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E5DEF8",
              width: "85%",
              alignSelf: "center",
              height: "20%",
              bottom: "3.5%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
            onPress={goToLoginSkip}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#54408C",
                fontSize: 20,
                fontWeight: "600",
                top: "25%",
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Slide 3 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <TouchableOpacity
            style={{ left: "10%", top: "200%", width: "30%" }}
            onPress={goToLoginSkip}
            activeOpacity={0.6}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#54408C" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../../assets/onboarding/onboardingimagethree.png")}
            style={{
              width: "80%",
              height: "65%",
              alignSelf: "center",
              top: "15%",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              width: "80%",
              textAlign: "center",
              left: "10%",
              bottom: "80%",
            }}
          >
            Start Your Adventure
          </Text>
          <Text
            style={{
              color: "#A6A6A6",
              fontSize: 17,
              textAlign: "center",
              bottom: "60%",
              width: "65%",
              left: "20%",
            }}
          >
            Ready to embark on a quest for inspiration and knowledge? Your
            adventure begins now. Let's go!
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={getStartedSignUp}
            style={{
              backgroundColor: "#54408C",
              width: "85%",
              alignSelf: "center",
              height: "20%",
              top: "2%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                top: "27.5%",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E5DEF8",
              width: "85%",
              alignSelf: "center",
              height: "20%",
              top: "5%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
            onPress={goToLoginSkip}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#54408C",
                fontSize: 20,
                fontWeight: "600",
                top: "25%",
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Swiper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  customDot: {
    height: "150%", // Set the desired height for the dots
    width: "2.5%", // Set the desired width for the dots
    borderRadius: 15, // Set border radius for rounded dots
    marginHorizontal: 8, // Set the horizontal margin between dots
  },
});
