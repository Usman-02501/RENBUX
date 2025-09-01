import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontSize } from '../../constant';
import Drawer from '../../../Components/assets/svg/Drawer.svg';
import Star2 from '../../../Components/assets/svg/Star2.svg';
import Star from '../../../Components/assets/svg/Star.svg';
import IronBike from '../../../Components/assets/svg/IronBike.svg';
import RoundShape from '../../../Components/assets/svg/RoundShape.svg';
import Compass from '../../../Components/assets/svg/Compass.svg';
import Setting from '../../../Components/assets/svg/Setting.svg';
import MixIcon from '../../../Components/assets/svg/MixIcon.svg';
import Line from '../../../Components/assets/svg/Line.svg';
import Line1 from '../../../Components/assets/svg/Line1.svg';
import CalendarImage from '../../../Components/assets/svg/CalendarImage.svg';
import Helmet from '../../../Components/assets/svg/Helmet.svg';
import Jacket from '../../../Components/assets/svg/Jacket.svg';
import Holder from '../../../Components/assets/svg/Holder.svg';
import Tools from '../../../Components/assets/svg/Tools.svg';
import Plus from '../../../Components/assets/svg/Plus.svg';
import Tick from '../../../Components/assets/svg/Tick.svg';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import ForwardArrow from '../../../Components/assets/svg/ForwardArrow.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CalendarPicker from 'react-native-calendar-picker';

const BikeRentBookingScreen = ({ navigation }) => {
  const [star, setStar] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('Custom');
  const insets = useSafeAreaInsets();
  const [selectedStartDate, setselectedStartDate] = useState('DD/MM/YYYY');
  const [selectedEndDate, setselectedEndDate] = useState('DD/MM/YYYY');
  const [selectedId, setSelectedId] = useState(null);

  const rentalItems = [
    {
      id: '1',
      name: 'Helmet',
      price: '$40',
      image: <Helmet height={50} width={50} />,
      icon: <Plus height={25} width={25} />,
    },
    {
      id: '2',
      name: 'Jacket',
      price: '$80',
      image: <Jacket height={50} width={50} />,
      icon: <Tick height={25} width={25} />,
    },
    {
      id: '3',
      name: 'Holder',
      price: '$50',
      image: <Holder height={50} width={50} />,
      icon: <Plus height={25} width={25} />,
    },
    {
      id: '4',
      name: 'Tools',
      price: '$80',
      image: <Tools height={50} width={50} />,
      icon: <Tick height={25} width={25} />,
    },
  ];

  const durationButtons = ['1 day', '2 day', '3 day', 'Custom'];

  const handleSelect = id => {
    setSelectedId(id);
  };

  const renderRentalItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.rentalItem,
        selectedId === item.id && { backgroundColor: colors.veryDarkPink },
      ]}
      onPress={() => handleSelect(item.id)}
    >
      <View style={styles.itemImageContainer}>{item.image}</View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>{item.icon}</TouchableOpacity>
    </TouchableOpacity>
  );

  const handlePress = () => {
    setStar(!star);
  };
  const minDate = new Date(); // Today
  const maxDate = new Date(2026, 6, 3);
  const onDateChange = (date, type) => {
    console.log(JSON.stringify(date));
    const newDate = JSON.stringify(date);
    const newDate1 = newDate.substring(1, newDate.length - 1);
    const dates = newDate1.split('T');
    const date1 = dates[0].split('-');
    const day = date1[2];
    const month = date1[1];
    const year = date1[0];
    console.log(day + '/' + month + '/' + year);

    if (type == 'END_DATE') {
      if (day == undefined) {
        setselectedEndDate('DD/MM/YYYY');
      } else {
        setselectedEndDate(day + '/' + month + '/' + year);
      }
    } else {
      setselectedStartDate(day + '/' + month + '/' + year);
      setselectedEndDate('DD/MM/YYYY');
    }
  };

  return (
    <LinearGradient
      colors={[colors.chineseblack, colors.nearBlack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
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
          <TouchableOpacity
            style={styles.calendarView}
            onPress={() => setModalVisible(true)}
          >
            <CalendarImage height={25} width={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              navigation.navigate('Summary');
            }}
          >
            <Text style={styles.sendButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.modalView}>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.topModalView}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Select duration</Text>
              <Line1 style={styles.line1} height={2} width={280} />
              <View style={styles.durationContainer}>
                {durationButtons.map(duration => (
                  <TouchableOpacity
                    key={duration}
                    style={[
                      styles.durationButton,
                      selectedDuration === duration &&
                        styles.selectedDurationButton,
                    ]}
                    onPress={() => setSelectedDuration(duration)}
                  >
                    <Text
                      style={[
                        styles.durationText,
                        selectedDuration === duration &&
                          styles.selectedDurationText,
                      ]}
                    >
                      {duration}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor={colors.deepPink}
                selectedDayColor={colors.veryDarkPink}
                selectedDayTextColor={colors.white}
                onDateChange={onDateChange}
                height={290}
                width={310}
                previousTitle={<BackArrow height={17} width={17} />}
                nextTitle={<ForwardArrow height={20} width={20} />}
                monthTitleStyle={{ color: colors.white }}
                yearTitleStyle={{ color: colors.white }}
                textStyle={{
                  color: colors.americanSilver,
                  fontWeight: '500',
                  fontSize: fontSize.regSmall,
                }}
              />
              <Line1 style={styles.line1} height={2} width={280} />
              <Text style={styles.periodText}>
                {'Start Date: ' + selectedStartDate}
              </Text>
              <Text style={styles.periodText}>
                {'End Date: ' + selectedEndDate}
              </Text>
            </View>
            <View style={styles.flatlistView}>
              <FlatList
                data={rentalItems}
                renderItem={renderRentalItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.rentalList}
              />
            </View>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => navigation.navigate('Summary')}
            >
              <Text style={styles.bookButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

export default BikeRentBookingScreen;
