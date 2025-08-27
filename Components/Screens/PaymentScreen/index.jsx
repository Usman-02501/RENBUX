import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import Share from '../../../Components/assets/svg/Share.svg';
import Success from '../../../Components/assets/svg/Success.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PaymentScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <TouchableOpacity
        style={styles.shareButton}
        onPress={() => {
          navigation.navigate('Order');
        }}
      >
        <Share />
      </TouchableOpacity>
      <View style={styles.SuccessImageView}>
        <Success height={190} width={190} />
      </View>
      <Text style={styles.paymentText}>Payment sucessfull</Text>
      <Text style={styles.walletText}>
        Thank you ! You payment was successfully added in your wallet
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
    </LinearGradient>
  );
};

export default PaymentScreen;
