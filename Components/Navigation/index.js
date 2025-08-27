import React from 'react';
import LoginPage from '../Screens/LoginPage';
import OtpScreen from '../Screens/OtpScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import BrandScreen from '../Screens/BrandScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfilePage from '../Screens/ProfilePage';
import SummaryScreen from '../Screens/SummaryScreen';
import BikeRentBookingScreen from '../Screens/BikeRentBookingScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import OrderBookedScreen from '../Screens/OrderBookedScreen';
import OrderStatusScreen from '../Screens/OrderStatusScreen';
import WalletScreen from '../Screens/WalletScreen';
import WalletSuccessScreen from '../Screens/WalletSuccessScreen';
import HelpScreen from '../Screens/HelpScreen';
import BookDetailScreen from '../Screens/BookDetailScreen';
import CancelBookingScreen from '../Screens/CancelBookingScreen';
import ChatBoxScreen from '../Screens/ChatBoxScreen';
import CallScreen from '../Screens/CallScreen';
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
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Rent" component={BikeRentBookingScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Order" component={OrderBookedScreen} />
      <Stack.Screen name="Status" component={OrderStatusScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="WalletSuccess" component={WalletSuccessScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Book" component={BookDetailScreen} />
      <Stack.Screen name="Cancel" component={CancelBookingScreen}/>
      <Stack.Screen name="Chat" component={ChatBoxScreen}/>
      <Stack.Screen name="Call" component={CallScreen}/>
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <MainStack />;
};

export default StackNavigation;
