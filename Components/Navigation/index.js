import React from 'react';
import LoginPage from '../Screens/LoginPage';
import OtpScreen from '../Screens/OtpScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import BrandScreen from '../Screens/BrandScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfilePage from '../Screens/ProfilePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="otp" component={OtpScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Brand" component={BrandScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfilePage}/>
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <MainStack />;
};

export default StackNavigation;
