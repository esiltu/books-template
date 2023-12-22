import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const VerifyPhone = () => {
    const navigation = useNavigation();
    const phoneInputRef = useRef(null);

    const onPressContinue = async () => {
        try {
            // Get the formatted phone number
            const phoneNumber = phoneInputRef.current.getValue();

            // Check if the phone number is from the Netherlands
            // Dummy phone number test: +6782925149
            if (phoneNumber.startsWith('+31')) {
                // Success message for Netherlands
                Toast.show({
                    type: 'success',
                    text1: 'Success',
                    text2: 'Phone number is from the Netherlands!',
                });
                navigation.navigate("VerifyPhoneVerification", { phoneNumber })
            } else {
                // Error message for non-Netherlands phone number
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Please enter a phone number from the Netherlands',
                });
            }
            // Implement your logic for Continue button
            // For example, navigate to the next screen
        } catch (error) {
            // Handle any errors
            console.error('Error:', error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={35} />
                </TouchableOpacity>
            </View>
            <View style={{ top: '2.5%' }}>
                <Text style={styles.title}>Phone Number</Text>
                <Text style={styles.subtitle}>Please enter your phone number, so we can more easily deliver your order</Text>
            </View>
            <View style={styles.phoneInputContainer}>
                <PhoneInput
                    style={{ top: '10%', backgroundColor: '#FAFAFA', height: '25%', borderRadius: 10, width: '80%' }}
                    ref={phoneInputRef}
                    initialCountry="us"
                    flagStyle={{ left: '20%' }}
                    textStyle={styles.phoneInputText}
                    textProps={{
                        placeholder: 'Enter phone number...',
                        keyboardType: 'numeric',
                    }}
                />
            </View>
            <View style={{ top: '15%' }}>
                <Text style={{ fontSize: 15, bottom: '285%', left: '7.5%', }}>Phone Number</Text>
                <TouchableOpacity style={styles.continueButton} onPress={onPressContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default VerifyPhone;

const styles = StyleSheet.create({
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#A6A6A6',
        marginTop: 10,
        textAlign: 'center',
        width: '85%',
        alignSelf: 'center',
    },
    phoneInputContainer: {
        top: '2.5%',
        marginTop: 20,
        left: '7.5%',
    },
    phoneInputText: {
        fontSize: 16,
    },
    continueButton: {
        bottom: '200%',
        backgroundColor: '#54408C',
        width: '90%',
        alignSelf: 'center',
        height: 55,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    continueButtonText: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        top: '0%',
        fontWeight: '500'
    },
});
