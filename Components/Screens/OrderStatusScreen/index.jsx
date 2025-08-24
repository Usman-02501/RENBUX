import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import { styles } from './styles';

const OrderStatusScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <BackArrow />
    </TouchableOpacity>
  );
};

export default OrderStatusScreen;
