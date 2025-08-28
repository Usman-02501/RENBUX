import React, { useEffect, useState } from 'react';
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
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { Formik } from 'formik';

const OtpScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { otpSent } = route.params;
  const [shouldValidate, setShouldValidate] = useState(false);
  const [buttonText, setButtonText] = useState('');

  let userSchema = Yup.object({
    otp: Yup.string()
      .required('Please Enter OTP')
      .length(6, 'OTP must be 6 digits'),
  });

  useEffect(() => {
    if (otpSent) {
      Toast.show({
        type: 'success',
        text1: 'OTP sent successfully!',
        position: 'top',
        visibilityTime: 2000,
      });
    }
  }, []);

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
        <Formik
          initialValues={{ otp: '' }}
          onSubmit={({ number }) => {
            const fullPhone = `${countryCode}${number}`;
            console.log('Submitting:', fullPhone);
            navigation.navigate('otp', { phone: fullPhone });
          }}
          validationSchema={userSchema}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            validateForm,
          }) => {
            useEffect(() => {
              if (shouldValidate && errors.number && touched.number) {
                setShouldValidate(false);
              }
            }, [errors, touched, shouldValidate]);

            return (
              <View>
                <View style={styles.otpInputView}>
                  <OtpInput
                    numberOfDigits={6}
                    focusColor={
                      errors.otp && touched.otp ? colors.red : colors.green
                    }
                    autoFocus={false}
                    hideStick={true}
                    placeholder=""
                    blurOnFilled={true}
                    disabled={false}
                    type="numeric"
                    secureTextEntry={false}
                    focusStickBlinkingDuration={500}
                    theme={{
                      pinCodeContainerStyle: [
                        styles.pinCodeContainerStyle,
                        errors.otp &&
                          touched.otp && { borderColor: colors.red },
                      ],
                      containerStyle: styles.containerStyle,
                      pinCodeTextStyle: styles.pinCodeTextStyle,
                    }}
                    onTextChange={text => handleChange('otp')(text)}
                  />
                </View>
                {errors.otp && touched.otp && (
                  <Text style={styles.errorMessage}>{errors.otp}</Text>
                )}
                <AppButton
                  onPress={async () => {
                    setFieldTouched('otp', true);
                    const formErrors = await validateForm();

                    if (formErrors.otp) {
                      if (values.otp && values.otp.length < 6) {
                        Toast.show({
                          type: 'error',
                          text1: 'Enter valid otp',
                          position: 'top',
                          visibilityTime: 2000,
                        });
                      }
                    } else {
                      setButtonText('Verifying...');
                      setTimeout(() => {
                        handleSubmit();
                        navigation.navigate('Onboarding');
                      }, 1000);
                    }
                  }}
                  title={buttonText ? 'Verifying...' : 'Verify OTP'}
                />
              </View>
            );
          }}
        </Formik>
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
