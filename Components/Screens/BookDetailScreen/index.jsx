import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Help from '../../../Components/assets/svg/Help.svg';
import SportsBike1 from '../../../Components/assets/svg/SportsBike1.svg';
import Helmet from '../../../Components/assets/svg/Helmet.svg';
import MenHelmet from '../../../Components/assets/svg/MenHelmet.svg';
import Jacket from '../../../Components/assets/svg/Jacket.svg';
import Person from '../../../Components/assets/svg/Person.svg';
import Chat from '../../../Components/assets/svg/Chat.svg';
import Call from '../../../Components/assets/svg/Call.svg';
import Line1 from '../../../Components/assets/svg/Line1.svg';
import Calendar from '../../../Components/assets/svg/Calendar.svg';
import Cross from '../../../Components/assets/svg/Cross.svg';
import Map from '../../../Components/assets/svg/Map.svg';
import TextImage from '../../../Components/assets/svg/TextImage.svg';
import LinearGradient from 'react-native-linear-gradient';
import { colors, hp } from '../../constant';

const BookDetailScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.topView}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackArrow height={13} width={13} />
          </TouchableOpacity>
          <Text style={styles.walletText}>Booked details</Text>
          <TouchableOpacity style={styles.backButton}>
            <Help height={18} width={18} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bikeView}>
            <SportsBike1 height={120} width={180} />
            <View style={styles.confirmTextView}>
              <Text style={styles.confirmText}>Confirmed</Text>
            </View>
          </View>
          <Text style={styles.modalText}>Royal Enfield Classic 350</Text>
          <Text style={styles.companyText}>QuickRide Hub rent ltd.</Text>
          <Text style={styles.dateText}>7th July - 14th July ( 5 days )</Text>
          <Image
            style={styles.qrImage}
            source={require('../../../Components/assets/images/qrScanner.png')}
          />
          <Text style={styles.scanText}>
            Scan your bike ride and start from bike{'\n'} rental shop and enjoy
            the ride
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.addText}>Add-ons Included</Text>
          <View style={styles.itemContainer}>
            <View>
              <Helmet height={45} width={45} />
              <Text style={styles.productNameText}>
                vega helmet{'\n'} - women
              </Text>
            </View>
            <View>
              <MenHelmet height={45} width={45} />
              <Text style={styles.productNameText}>
                vega helmet{'\n'} - Men
              </Text>
            </View>
            <View>
              <Jacket height={45} width={45} />
              <Text style={styles.productNameText}>
                StormRider{'\n'} Pro Jacket
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contactOwnerContainer}>
          <Text style={styles.contactOwnerText}>Contact Owner</Text>
          <View style={styles.personView}>
            <Person height={80} width={70} />
            <View>
              <Text style={styles.nameText}>Bradley Lawlor</Text>
              <Text style={styles.personText}>5 years shop owner</Text>
            </View>
          </View>
          <View style={styles.chatView}>
            <TouchableOpacity style={styles.chatTextView}>
              <Chat />
              <Text style={styles.chatText}>Chat with owner</Text>
            </TouchableOpacity>
            <Line1 height={10} width={270} style={styles.line} />
            <TouchableOpacity
              style={[styles.chatTextView, { paddingTop: hp(2) }]}
            >
              <Call />
              <Text style={styles.chatText}>Make a call</Text>
            </TouchableOpacity>
            <Line1 height={10} width={270} style={styles.line} />
          </View>
        </View>
        <View style={styles.bookingContainer}>
          <Text style={styles.contactOwnerText}>Manage my bookings</Text>
          <View style={styles.chatView}>
            <TouchableOpacity style={styles.chatTextView}>
              <Calendar />
              <Text style={styles.chatText}>Change Booking Dates</Text>
            </TouchableOpacity>
            <Line1 height={10} width={270} style={styles.line} />
            <TouchableOpacity
              style={[styles.chatTextView, { paddingTop: hp(2) }]}
              onPress={() => {
                navigation.navigate('Cancel');
              }}
            >
              <Cross />
              <Text style={styles.chatText}>Cancel Booking</Text>
            </TouchableOpacity>
            <Line1 height={10} width={270} style={styles.line} />
            <TouchableOpacity
              style={[styles.chatTextView, { paddingTop: hp(2) }]}
            >
              <Map />
              <Text style={styles.chatText}>Track Your Bike</Text>
            </TouchableOpacity>
            <Line1 height={10} width={270} style={styles.line} />
            <TouchableOpacity
              style={[styles.chatTextView, { paddingTop: hp(2) }]}
            >
              <TextImage />
              <Text style={styles.chatText}>Send receipts to mail</Text>
            </TouchableOpacity>
            <Line1 height={10} width={270} style={styles.line} />
          </View>
        </View>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadBottonText}>Download receipt</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default BookDetailScreen;
