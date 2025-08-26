import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import {styles} from './styles';

const ChatBoxScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={styles.container}
    >
        <StatusBar hidden={true}/>
    </LinearGradient>
  );
};

export default ChatBoxScreen;
