import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Cancel from '../../../Components/assets/svg/Cancel.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CancelBookingScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackArrow height={13} width={13} />
      </TouchableOpacity>
      <View style={styles.cancelImageView}>
        <Cancel height={160} width={160} style={styles.cancelImage} />
        <Text style={styles.cancelText}>Booking Canceled</Text>
        <Text style={styles.SuccessText}>
          Your booking has been successfully{'\n'} cancelled.{' '}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.walletText}>
          The amount has been added to your wallet and {'\n'}can be used for
          your next booking.
        </Text>
        <TouchableOpacity style={styles.walletButton}>
          <Text style={styles.walletButtonText}>Check Wallet</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CancelBookingScreen;
