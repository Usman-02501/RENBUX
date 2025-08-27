import React from 'react';
import {  Text, View } from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';


const CallScreen = () => {
  return (
   <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={styles.container}
    >

    </LinearGradient>
  )
}

export default CallScreen;
