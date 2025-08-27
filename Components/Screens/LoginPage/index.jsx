import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Bike from '../../../Components/assets/svg/Bike.svg';
import Google from '../../../Components/assets/svg/Google.svg';
import Facebook from '../../../Components/assets/svg/Facebook.svg';
import Instagram from '../../../Components/assets/svg/Instagram.svg';
import { CountryPicker } from 'react-native-country-codes-picker';
import { colors } from '../../../Components/constant/index';
import AppButton from '../../../Components/CustomComp/AppButton';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [isFocused, setIsFocused] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.RaisinBlack}
      />
      <View style={styles.bikeContainer}>
        <Bike />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Continue with mobile</Text>
        <Text style={styles.subtitle}>
          We will send one time password in this{'\n'}phone number.
        </Text>
        <View
          style={[
            styles.inputContainer,
            isFocused && { borderColor: colors.green },
          ]}
        >
          <View style={styles.countryCode}>
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text style={styles.countryCodeText}>{countryCode}</Text>
            </TouchableOpacity>
            <CountryPicker
              show={show}
              pickerButtonOnPress={item => {
                setCountryCode(item.dial_code);
                setShow(false);
              }}
            />
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter mobile number"
            placeholderTextColor="#666666"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={10}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <AppButton
          onPress={() => {
            navigation.navigate('otp');
          }}
          title="SEND OTP"
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.socialContainer}>
        <Google />
        <Facebook />
        <Instagram />
      </View>
    </View>
  );
};

export default LoginPage;
