import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen } from '../routers/AppMainRouter';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};