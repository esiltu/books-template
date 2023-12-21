import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Toast from 'react-native-toast-message';

const VerifyEmail = ({ route }) => {
    const navigation = useNavigation();
    const email = route?.params?.email || navigation?.getParam('email');

    const [code, setCode] = useState('');

    // Navigate to login if have an account
    function goToSignUp() {
        try {
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    // Check if the entered code is '0000'
    function handleContinue() {
        if (code === '0000') {
            // Success message
            Toast.show({
                type: 'success',
                text1: 'Access Granted',
                text2: 'You may proceed!',
            });
            // Navigate to the next screen or perform other actions
            navigation.navigate("VerifyPhone")
        } else {
            // Error message
            Toast.show({
                type: 'error',
                text1: 'Access Denied',
                text2: 'Invalid verification code',
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View>
                <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={goToSignUp}>
                    <AntDesign name="arrowleft" size={35} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Verification Email</Text>
                <Text style={styles.subtitle}>Please enter the code we just sent to your email</Text>
                <Text style={styles.email}>{email}</Text>

                {/* Code Input */}
                <View style={styles.codeInputContainer}>
                    <CodeField
                        ref={useBlurOnFulfill({ value: code, cellCount: 4 })}
                        {...useClearByFocusCell({ value: code, setValue: setCode })}
                        value={code}
                        onChangeText={setCode}
                        cellCount={4}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="numeric"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View
                                key={index}
                                style={[
                                    styles.cell,
                                    { borderColor: isFocused ? '#54408C' : '#00000030' },
                                ]}
                            >
                                <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>

            <View style={{ alignSelf: 'center', top: '10%' }}>
                <TouchableOpacity style={{ backgroundColor: 'white' }} activeOpacity={0.6}>
                    <Text style={{ fontSize: 15, color: '#A6A6A6', fontWeight: '600' }}>If you didn't receive a code? <Text style={{ color: '#54408C' }}>Resend</Text></Text>
                </TouchableOpacity>
            </View>

            <View style={{ top: '15%' }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#54408C', width: '90%', height: '27%', alignSelf: 'center', borderRadius: 30, }}
                    activeOpacity={0.6}
                    onPress={handleContinue} // Handle Continue button press
                >
                    <Text style={{ fontSize: 22, color: 'white', textAlign: 'center', top: '25%', fontWeight: '500' }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    content: {
        top: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    email: {
        color: '#121212',
        fontSize: 18,
        top: '10%',
        textAlign: 'center',
    },
    codeInputContainer: {
        top: '20%',
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 50,
        height: 50,
        borderWidth: 1,
        textAlign: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
    },
    cellText: {
        color: '#121212',
        fontSize: 35,
        left: '30%',
        top: '7.5%',
    },
});

export default VerifyEmail;
