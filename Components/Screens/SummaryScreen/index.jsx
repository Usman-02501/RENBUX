import React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import IronBike from '../../../Components/assets/svg/IronBike.svg';
import Helmet from '../../../Components/assets/svg/Helmet.svg';
import Jacket from '../../../Components/assets/svg/Jacket.svg';
import Wallet from '../../../Components/assets/svg/Wallet.svg';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';

const SummaryScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={[styles.nearBlack, styles.chineseblack]}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Summary</Text>
        <View style={styles.headerSpacer} />
      </View>
      <View style={styles.content}>
        <View style={styles.motorcycleCard}>
          <View style={styles.motorcycleInfo}>
            <View style={styles.ironBikeView}>
              <IronBike height={110} width={90} />
            </View>
            <View style={styles.motorcycleDetails}>
              <Text style={styles.motorcycleName}>
                Royal Enfield Classic 350
              </Text>
              <Text style={styles.storeName}>Store: QuickRide Hub</Text>
              <Text style={styles.price}>$234</Text>
            </View>
          </View>
        </View>
        <View style={styles.rentalPeriodCard}>
          <View style={styles.rentalPeriodLeft}>
            <Text style={styles.rentalPeriodTitle}>Rental Period</Text>
            <Text style={styles.rentalDates}>Jun 15 – Jun 20, 2025</Text>
          </View>
          <Text style={styles.rentalDays}>5 days</Text>
        </View>
        <View style={styles.addOnsSection}>
          <Text style={styles.addOnsTitle}>Add-Ons</Text>
          <View style={styles.addOnItem}>
            <View style={styles.addOnLeft}>
              <View style={styles.helmetIcon}>
                <Helmet height={40} width={40} />
              </View>
              <View style={styles.addOnDetails}>
                <Text style={styles.addOnName}>vega helmet womens</Text>
                <Text style={styles.addOnQuantity}>$40 x 2</Text>
              </View>
            </View>
            <Text style={styles.addOnPrice}>$80</Text>
          </View>
          <View style={styles.addOnItem}>
            <View style={styles.addOnLeft}>
              <View style={styles.jacketIcon}>
                <Jacket height={40} width={40} />
              </View>
              <View style={styles.addOnDetails}>
                <Text style={styles.addOnName}>StormRider Pro Jacket</Text>
                <Text style={styles.addOnQuantity}>$45 x 1</Text>
              </View>
            </View>
            <Text style={styles.addOnPrice}>$90</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <View style={styles.walletView}>
            <Wallet height={20} width={20} />
            <Text style={styles.paymentText}>Pay with wallet</Text>
          </View>
          <Text style={styles.totalAmount}>$ 687.00</Text>
        </View>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            navigation.navigate('Payment');
          }}
        >
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SummaryScreen;
