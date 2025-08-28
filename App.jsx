import React from 'react';
import StackNavigation from './Components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} />
      <StackNavigation />
      <Toast /> 
    </NavigationContainer>
  );
};

export default App;
