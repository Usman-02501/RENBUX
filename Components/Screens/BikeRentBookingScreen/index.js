import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import Drawer from '../../../Components/assets/svg/Drawer.svg';
import Star2 from '../../../Components/assets/svg/Star2.svg';
import Star from '../../../Components/assets/svg/Star.svg';
import IronBike from '../../../Components/assets/svg/IronBike.svg';
import RoundShape from '../../../Components/assets/svg/RoundShape.svg';
import Compass from '../../../Components/assets/svg/Compass.svg';
import Setting from '../../../Components/assets/svg/Setting.svg';
import MixIcon from '../../../Components/assets/svg/MixIcon.svg';
import Line from '../../../Components/assets/svg/Line.svg';
import CalendarImage from '../../../Components/assets/svg/CalendarImage.svg';

const BikeRentBookingScreen = () => {
  const [star, setStar] = useState(false);

  const handlePress = () => {
    setStar(!star);
  };

  return (
    <LinearGradient
      colors={[colors.chineseblack, colors.nearBlack]}
      style={styles.container}
    >
      <View style={styles.starDrawerView}>
        <TouchableOpacity style={styles.drawerView}>
          <Drawer height={25} width={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerView} onPress={handlePress}>
          {star ? (
            <Star height={20} width={20} />
          ) : (
            <Star2 height={20} width={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.ironBikeView}>
        <IronBike height={200} width={275} style={styles.ironBike} />
        <RoundShape height={50} width={300} style={styles.roundShape} />
      </View>
      <View style={styles.harleyIronView}>
        <Text style={styles.harleyIronText}>Harley Iron 883</Text>
        <View style={styles.starView}>
          <Star height={15} width={15} />
          <Text style={styles.ratingText}>4.6</Text>
        </View>
      </View>
      <View style={styles.allButtonView}>
        <View style={styles.buttonsContainerView}>
          <TouchableOpacity>
            <LinearGradient
              colors={[colors.veryDarkGray, colors.smokyBlack]}
              style={styles.buttons}
            >
              <Compass height={35} width={35} />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.maxSpeedText}>Max speed</Text>
          <Text style={styles.kmText}>340Km/h</Text>
        </View>
        <Line />
        <View style={styles.buttonsContainerView}>
          <TouchableOpacity>
            <LinearGradient
              colors={[colors.veryDarkGray, colors.smokyBlack]}
              style={styles.buttons}
            >
              <Setting height={35} width={35} />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.maxSpeedText}>Engine</Text>
          <Text style={styles.kmText}>Er12 87</Text>
        </View>
        <Line />
        <View style={styles.buttonsContainerView}>
          <TouchableOpacity>
            <LinearGradient
              colors={[colors.veryDarkGray, colors.smokyBlack]}
              style={styles.buttons}
            >
              <MixIcon height={35} width={35} />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.maxSpeedText}>Maintenance</Text>
          <Text style={styles.kmText}>Every i mon</Text>
        </View>
      </View>
      <LinearGradient
        colors={[colors.transparent, colors.black]}
        style={styles.bookNowCard}
      >
        <View style={styles.cardtopView}>
          <Text style={styles.cardPriceText}>$ 567.00</Text>
          <Text style={styles.rentText}>1 Day rental</Text>
        </View>
        <View style={styles.cardbottomView}>
          <TouchableOpacity style={styles.calendarView}>
            <CalendarImage height={25} width={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default BikeRentBookingScreen;
