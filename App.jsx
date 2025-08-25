import React from 'react';
import StackNavigation from './Components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      /> */}
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
