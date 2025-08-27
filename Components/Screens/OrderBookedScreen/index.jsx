import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Share from '../../../Components/assets/svg/Share.svg';
import IronBike from '../../../Components/assets/svg/IronBike.svg';
import Helmet from '../../../Components/assets/svg/Helmet.svg';
import MenHelmet from '../../../Components/assets/svg/MenHelmet.svg';
import Jacket from '../../../Components/assets/svg/Jacket.svg';
import MaskedView from '@react-native-masked-view/masked-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OrderBookedScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={styles.shareButtonView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Share />
        </TouchableOpacity>
      </View>
      <View style={styles.bookingConfirmView}>
        <MaskedView
          maskElement={
            <Text style={styles.bookingConfirmText}>
              BOOKING{'\n'}CONFIRMED!
            </Text>
          }
        >
          <LinearGradient
            colors={[colors.white, colors.spanishGray]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.bookingConfirmText, { opacity: 0 }]}>
              BOOKING{'\n'}CONFIRMED!
            </Text>
          </LinearGradient>
        </MaskedView>
        <IronBike height={150} width={190} style={styles.ironBikeStyle} />
      </View>
      <View style={styles.orderDetailView}>
        <Text style={styles.orderDetailText}>Order Details</Text>
        <View style={styles.textView}>
          <View style={styles.BikeNameView}>
            <Text style={styles.bikeText}>Bike:</Text>
            <Text style={styles.bikeText}>Booking ID:</Text>
            <Text style={styles.bikeText}>Date:</Text>
            <Text style={styles.bikeText}>Duration:</Text>
            <Text style={styles.bikeText}>Amount Paid:</Text>
          </View>
          <View style={styles.BikeDetailView}>
            <Text style={styles.detailText}>Royal Enfield Classic 350</Text>
            <Text style={styles.detailText}>#BRNT12458</Text>
            <Text style={styles.detailText}>15/06/2025 – 20/06/2025</Text>
            <Text style={styles.detailText}>5 days</Text>
            <Text style={styles.detailText}>$ 687.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.addText}>Add-ons Included</Text>
        <View style={styles.itemContainer}>
          <View>
            <View style={styles.imageView}>
              <Helmet height={45} width={45} />
            </View>
            <Text style={styles.productNameText}>
              vega helmet{'\n'} - women
            </Text>
          </View>
          <View>
            <View style={styles.imageView}>
              <MenHelmet height={45} width={45} />
            </View>
            <Text style={styles.productNameText}>vega helmet{'\n'} - Men</Text>
          </View>
          <View>
            <View style={styles.imageView}>
              <Jacket height={45} width={45} />
            </View>
            <Text style={styles.productNameText}>
              StormRider{'\n'} Pro Jacket
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.ViewOrderButton}
        onPress={() => {
          navigation.navigate('Status');
        }}
      >
        <Text style={styles.ViewOrderText}>View Order Status</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default OrderBookedScreen;
