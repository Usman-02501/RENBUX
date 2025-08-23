import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
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
import Line1 from '../../../Components/assets/svg/Line1.svg';
import CalendarImage from '../../../Components/assets/svg/CalendarImage.svg';
import { Calendar } from 'react-native-calendars';
import Helmet from '../../../Components/assets/svg/Helmet.svg';
import Jacket from '../../../Components/assets/svg/Jacket.svg';
import Holder from '../../../Components/assets/svg/Holder.svg';
import Tools from '../../../Components/assets/svg/Tools.svg';
import Plus from '../../../Components/assets/svg/Plus.svg';
import Tick from '../../../Components/assets/svg/Tick.svg';

const BikeRentBookingScreen = ({navigation}) => {
  const [star, setStar] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('Custom');
  const [selectedDates, setSelectedDates] = useState({
    '2024-01-07': {
      selected: true,
      selectedColor: '#E91E63',
      selectedTextColor: '#FFFFFF',
    },
    '2024-01-08': {
      selected: true,
      selectedColor: '#E91E63',
      selectedTextColor: '#FFFFFF',
    },
  });

  const onDayPress = day => {
    setSelectedDates({
      ...selectedDates,
      [day.dateString]: {
        selected: true,
        selectedColor: '#E91E63',
        selectedTextColor: '#FFFFFF',
      },
    });
  };

  const rentalItems = [
    {
      id: '1',
      name: 'Helmet',
      price: '$40',
      image: <Helmet />,
      icon: <Plus />,
    },
    {
      id: '2',
      name: 'Jacket',
      price: '$80',
      image: <Jacket />,
      icon: <Tick />,
    },
    {
      id: '3',
      name: 'Holder',
      price: '$50',
      image: <Holder />,
      icon: <Plus />,
    },
    { id: '4', name: 'Tools', price: '$80', image: <Tools />, icon: <Tick /> },
  ];

  const durationButtons = ['1 day', '2 day', '3 day', 'Custom'];

  const renderRentalItem = ({ item }) => (
    <View style={styles.rentalItem}>
      <View style={styles.itemImageContainer}>{item.image}</View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text>{item.icon}</Text>
      </TouchableOpacity>
    </View>
  );

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
          <TouchableOpacity
            style={styles.calendarView}
            onPress={() => setModalVisible(true)}
          >
            <CalendarImage height={25} width={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton} onPress={()=>{navigation.navigate('Summary')}}>
            <Text style={styles.sendButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.modalView}>
        <Modal
          visible={modalVisible}
          animationType="transparent"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Select duration</Text>
            <Line1 style={styles.line1} />

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
            <Calendar
              current={'2024-01-01'}
              onDayPress={onDayPress}
              markedDates={selectedDates}
              markingType={'period'}
              theme={{
                backgroundColor: '#FFFFFF',
                calendarBackground: '#FFFFFF',
                textSectionTitleColor: '#B6C1CD',
                selectedDayBackgroundColor: '#E91E63',
                selectedDayTextColor: '#FFFFFF',
                todayTextColor: '#E91E63',
                dayTextColor: '#2D4150',
                textDisabledColor: '#D9E1E8',
                dotColor: '#E91E63',
                selectedDotColor: '#FFFFFF',
                arrowColor: '#E91E63',
                disabledArrowColor: '#D9E1E8',
                monthTextColor: '#2D4150',
                indicatorColor: '#E91E63',
                textDayFontFamily: 'System',
                textMonthFontFamily: 'System',
                textDayHeaderFontFamily: 'System',
                textDayFontWeight: '400',
                textMonthFontWeight: '600',
                textDayHeaderFontWeight: '400',
                textDayFontSize: 16,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 14,
              }}
              style={styles.calendar}
              hideExtraDays={true}
              firstDay={0}
              showWeekNumbers={false}
              disableMonthChange={false}
              hideDayNames={false}
              hideArrows={false}
              renderArrow={direction => (
                <Text style={styles.arrow}>
                  {direction === 'left' ? '‹' : '›'}
                </Text>
              )}
            />

            <Line1 style={styles.line1} />
            <Text style={styles.periodText}>Choose your rental period</Text>
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
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Continue</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </LinearGradient>
  );
};

export default BikeRentBookingScreen;
