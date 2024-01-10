import React, { useEffect } from "react";
import AppRouter from "./src/navigation/AppRouter";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  useEffect(() => {
    // Function to fetch the username from AsyncStorage and log it
    const fetchAndLogUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUsername !== null) {
          console.log("Retrieved username:", storedUsername);
        }
      } catch (error) {
        console.error("Error fetching username from AsyncStorage:", error);
      }
    };

    fetchAndLogUsername();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <AppRouter />;
}
