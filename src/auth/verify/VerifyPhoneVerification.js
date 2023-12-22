import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Toast from 'react-native-toast-message';

const VerifyPhoneVerification = ({ route }) => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const phoneNumber = route?.params?.phoneNumber || navigation?.getParam({ phoneNumber });

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
            navigation.navigate("SuccesVerification")
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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={35} />
                </TouchableOpacity>
            </View>
            <View style={{ top: '2.5%' }}>
                <Text style={styles.title}>Verification Phone</Text>
                <Text style={styles.subtitle}>Please enter the code we just send to the phone number <Text style={{ color: 'black' }}>({phoneNumber})</Text></Text>
            </View>
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

            <View style={{ alignSelf: 'center', top: '5%' }}>
                <TouchableOpacity style={{ backgroundColor: 'white' }} activeOpacity={0.6}>
                    <Text style={{ fontSize: 15, color: '#A6A6A6', fontWeight: '600' }}>If you didn't receive a code? <Text style={{ color: '#54408C' }}>Resend</Text></Text>
                </TouchableOpacity>
            </View>

            <View style={{ top: '12.5%' }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#54408C', width: '90%', height: '27%', alignSelf: 'center', borderRadius: 30, }}
                    activeOpacity={0.6}
                    onPress={handleContinue} // Handle Continue button press
                >
                    <Text style={{ fontSize: 22, color: 'white', textAlign: 'center', top: '25%', fontWeight: '500' }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default VerifyPhoneVerification

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
    codeInputContainer: {
        top: '3%',
        marginTop: 20,
        alignItems: 'center', // Center the code input
        justifyContent: 'space-between',
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 50,
        height: 50,
        borderWidth: 1,
        textAlign: 'center',
        borderRadius: 10,
        margin: '3%',
    },
    cellText: {
        textAlign: 'center',
        right: '5%',
        color: '#121212',
        fontSize: 35, // Adjust the font size
        top: '5%',
    },
});
