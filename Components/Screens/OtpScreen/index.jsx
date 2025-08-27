import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Bike from '../../../Components/assets/svg/Bike.svg';
import Google from '../../../Components/assets/svg/Google.svg';
import Facebook from '../../../Components/assets/svg/Facebook.svg';
import Instagram from '../../../Components/assets/svg/Instagram.svg';
import { colors } from '../../../Components/constant/index';
import { OtpInput } from 'react-native-otp-entry';
import { styles } from './styles';
import AppButton from '../../CustomComp/AppButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OtpScreen = ({ navigation }) => {
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
        <Text style={styles.title}>Verify otp</Text>
        <Text style={styles.subtitle}>
          We will send one time password in this{'\n'}phone number.
        </Text>
        <View style={styles.otpInputView}>
          <OtpInput
            numberOfDigits={6}
            focusColor={colors.green}
            autoFocus={false}
            hideStick={true}
            placeholder=""
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            theme={{
              pinCodeContainerStyle: styles.pinCodeContainerStyle,
              containerStyle: styles.containerStyle,
              pinCodeTextStyle: styles.pinCodeTextStyle,
            }}
          />
        </View>
        <AppButton
          onPress={() => {
            navigation.navigate('Onboarding');
          }}
          title="Verify otp"
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Google />
        </TouchableOpacity>
        <TouchableOpacity>
          <Facebook />
        </TouchableOpacity>
        <TouchableOpacity>
          <Instagram />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;
