import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import IronBike from '../../../Components/assets/svg/IronBike.svg';
import Help from '../../../Components/assets/svg/Help.svg';
import Line1 from '../../../Components/assets/svg/Line1.svg';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { colors } from '../../constant';

const DATA = [
  {
    id: '1',
    bike: <IronBike height={75} width={75} />,
    model: 'Royal Enfield Classic 350',
    store: 'Store: QuickRide Hub',
    quantity: 'Helmet x 1 , Jacket x1',
    line: <Line1 />,
    date: '7th June to 8th June',
    status: 'Pending',
  },
  {
    id: '2',
    bike: <IronBike height={75} width={75} />,
    model: 'Royal Enfield Classic 350',
    store: 'Store: QuickRide Hub',
    quantity: 'Helmet x 1 , Jacket x1',
    line: <Line1 />,
    date: '7th June to 8th June',
    status: 'Confirmed',
  },
  {
    id: '3',
    bike: <IronBike height={75} width={75} />,
    model: 'Royal Enfield Classic 350',
    store: 'Store: QuickRide Hub',
    quantity: 'Helmet x 1 , Jacket x1',
    line: <Line1 height={2} width={300}/>,
    date: '7th June to 8th June',
    status: 'Confirmed',
  },
];

const Item = ({ bike, model, store, quantity, line, date, status }) => (
  <View style={styles.flatlistItemContainer}>
    <View style={styles.toplistView}>
      <View style={styles.bikeView}>{bike}</View>
      <View>
        <Text style={styles.modelText}>{model}</Text>
        <Text style={styles.storeText}>{store}</Text>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    </View>
    <View style={styles.lineView}>{line}</View>
    <View style={styles.bottomlistView}>
      <Text style={styles.dateText}>{date}</Text>
      <Text
        style={[
          styles.statusText,
          { color: status === 'Pending' ? colors.brown : colors.darkGreen },
        ]}
      >
        {status}
      </Text>
    </View>
  </View>
);

const OrderStatusScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={styles.container}
    >
      <View style={styles.topView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <View style={styles.segmentcontrolview}>
          <TouchableOpacity
            style={[
              styles.upcomingButton,
              {
                backgroundColor: selectedTab == 0 ? colors.pink : colors.black,
              },
            ]}
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Text style={styles.upcomingText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.upcomingButton,
              {
                backgroundColor: selectedTab == 1 ? colors.pink : colors.black,
              },
            ]}
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Text style={styles.upcomingText}>Finished</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Help />
        </TouchableOpacity>
      </View>

      {selectedTab == 0 ? (
        <View style={{ marginTop: 30 }}>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={DATA}
            renderItem={({ item }) => (
              <Item
                bike={item.bike}
                model={item.model}
                store={item.store}
                quantity={item.quantity}
                line={item.line}
                date={item.date}
                status={item.status}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: 'white' }}>Finished</Text>
        </View>
      )}
    </LinearGradient>
  );
};

export default OrderStatusScreen;
