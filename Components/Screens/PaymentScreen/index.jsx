import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './styles';
import { colors, hp } from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import Share from '../../../Components/assets/svg/Share.svg';
import Success from '../../../Components/assets/svg/Success.svg';
import Cancel from '../../../Components/assets/svg/Cancel.svg';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Line1 from '../../../Components/assets/svg/Line1.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PaymentScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState('');
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={styles.topButtonsView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => {
            // navigation.navigate('Order');
          }}
        >
          <Share />
        </TouchableOpacity>
      </View>
      <View style={styles.SuccessImageView}>
        {/* <Success height={190} width={190} /> */}
        <Cancel height={190} width={190} />
      </View>
      <Text style={styles.paymentText}>Payment failed</Text>
      <Text style={styles.walletText}>
        Oops! Wallet balance is too low. Please fill your wallet to continue.
      </Text>
      <View style={styles.imageBackGroundView}>
        <ImageBackground
          style={styles.imageBackGround}
          source={require('../../../Components/assets/images/Subtract.png')}
          resizeMode="cover"
        >
          <View style={styles.priceTextView}>
            <Text style={styles.amountPaidText}>Amount paid</Text>
            <Text style={styles.priceText}>$2000</Text>
          </View>
          <View style={styles.transactionView}>
            <Text style={styles.transactionText}>Transaction</Text>
            <Text style={styles.transactionNumberText}>4857295237383</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.loadButton, { marginBottom: hp(2) }]}
          onPress={() => {
            navigation.navigate('Order');
          }}
        >
          <Text style={styles.loadButtonText}>View Order Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loadButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.loadButtonText}>Load Wallet</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalBottomView}>
              <Text style={styles.addMoneyText}>Add money</Text>
              <Line1 style={styles.line} />
              <TextInput
                style={styles.titleInput}
                value={number}
                onChangeText={setNumber}
                placeholder="Amount to be added"
                placeholderTextColor={colors.silver}
              />
              <View style={styles.moneyView}>
                {['1000', '2000', '5000', '8000'].map(amount => (
                  <TouchableOpacity
                    key={amount}
                    onPress={() => setNumber(amount)}
                  >
                    <Text style={styles.moneyText}>+{amount}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <TouchableOpacity
              style={[styles.loadButton, { marginBottom: hp(1) }]}
              onPress={() => {
                navigation.navigate('Wallet', { amount: number });
              }}
            >
              <Text style={styles.loadButtonText}>
                {number ? `Proceed to add ${number}` : 'Proceed'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </LinearGradient>
  );
};

export default PaymentScreen;
