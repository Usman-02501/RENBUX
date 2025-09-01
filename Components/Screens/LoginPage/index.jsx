import React, { useState, useEffect } from 'react';
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
import * as Yup from 'yup';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';
import { useIsFocused } from '@react-navigation/native';

const LoginPage = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [isFocused, setIsFocused] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const insets = useSafeAreaInsets();
  const isButton = useIsFocused();

  let userSchema = Yup.object({
    number: Yup.string()
      .required('Please enter your number')
      .matches(/^\d{10}$/, 'Enter valid number'),
  });

  const showToast = message => {
    Toast.show({
      type: 'error',
      text1: message,
      position: 'top',
      visibilityTime: 2000,
    });
  };

  useEffect(() => {
    if (isButton) {
      setButtonText('');
    }
  }, [isButton]);

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
        <Formik
          initialValues={{ number: '' }}
          onSubmit={({ number }) => {
            const fullPhone = `${countryCode}${number}`;
            console.log('Submitting:', fullPhone);
            navigation.navigate('otp', { phone: fullPhone, otpSent: true });
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
                <View
                  style={[
                    styles.inputContainer,
                    isFocused && { borderColor: colors.green },
                    errors.number &&
                      touched.number && { borderColor: colors.red },
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
                      onBackdropPress={() => setShow(false)}
                    />
                  </View>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="Enter mobile number"
                    placeholderTextColor={colors.silver}
                    value={values.number}
                    onChangeText={text => {
                      handleChange('number')(text);
                    }}
                    keyboardType="phone-pad"
                    maxLength={10}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                      setFieldTouched('number', true);
                    }}
                  />
                </View>
                {errors.number && values.number === '' && (
                  <Text style={styles.errorMessage}>{errors.number}</Text>
                )}
                <AppButton
                  onPress={async () => {
                    setFieldTouched('number', true);
                    const formErrors = await validateForm();
                    if (formErrors.number) {
                      if (values.number === '') {
                        setShouldValidate(false);
                      } else {
                        showToast(formErrors.number);
                      }
                    } else {
                      setButtonText('Sending...');
                      setTimeout(() => {
                        handleSubmit();
                      }, 500);
                    }
                  }}
                  title={buttonText ? 'Sending...' : 'SEND OTP'}
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

export default LoginPage;
