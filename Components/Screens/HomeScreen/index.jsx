import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import Person from '../../../Components/assets/svg/Person.svg';
import Drawer from '../../../Components/assets/svg/Drawer.svg';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import Star from '../../../Components/assets/svg/Star.svg';
import HeavyBike from '../../../Components/assets/svg/HeavyBike.svg';
import ArrowLeft from '../../../Components/assets/svg/ArrowLeft.svg';
import SportsBike from '../../../Components/assets/svg/SportsBike.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const [profileStatus, setProfileStatus] = useState('Pending profile setup');
  const [selectedId, setSelectedId] = useState('1');
  const insets = useSafeAreaInsets();

  const DATA = [
    {
      id: '1',
      star: <Star />,
      rating: '4.6',
      name: 'Harley-Davidson',
      model: 'Iron 883',
      price: '$ 567.00',
      rent: '1 Day rental',
      bike: <HeavyBike height={120} width={150} />,
      arrow: <ArrowLeft />,
    },
    {
      id: '2',
      star: <Star />,
      rating: '4.6',
      name: 'Harley-Davidson',
      model: 'Iron 883',
      price: '$ 567.00',
      rent: '1 Day rental',
      bike: <SportsBike height={120} width={150} />,
      arrow: <ArrowLeft />,
    },
  ];

  const cars = [
    { id: '1', text: 'All' },
    { id: '2', text: 'Harley-Davidson' },
    { id: '3', text: 'BMW' },
    { id: '4', text: 'Ducati' },
  ];

  const handlePress = id => {
    setSelectedId(id);
  };

  const Item = ({ star, rating, name, model, price, rent, bike, arrow }) => (
    <ImageBackground
      style={styles.imageBackGround}
      source={require('../../../Components/assets/images/backGround.png')}
      resizeMode="cover"
    >
      <View style={styles.listTopView}>
        <View style={styles.listTextContainer}>
          <View style={styles.starContainer}>
            <View>{star}</View>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.modelText}>{model}</Text>
        </View>
        <View>
          <View>{bike}</View>
        </View>
      </View>
      <View style={styles.listBottomView}>
        <View style={styles.rentContainer}>
          <Text style={styles.priceText}>{price}</Text>
          <Text style={styles.rentText}>{rent}</Text>
        </View>
        <TouchableOpacity
          style={styles.arrowView}
          onPress={() => {
            navigation.navigate('Rent');
          }}
        >
          {arrow}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.imagesView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <Person height={40} width={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerView}>
          <Drawer height={25} width={25} />
        </TouchableOpacity>
      </View>
      <Text style={styles.helloText}>
        Hello, <Text style={styles.junnText}>Junn</Text>
      </Text>
      <Text style={styles.favBikeText}>Choose your Fav bike</Text>
      <LinearGradient
        colors={[colors.darkCharcoal, colors.blackOlive]}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.titleInput}
          value={profileStatus}
          onChangeText={setProfileStatus}
          placeholder="Enter profile status"
          placeholderTextColor={colors.Gray}
        />
        <TouchableOpacity>
          <Text style={styles.settingsText}>Go to setting</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          horizontal
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
        >
          {cars.map(item => {
            const isSelected = selectedId === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.listItem,
                  isSelected ? styles.selectedItem : styles.unselectedItem,
                ]}
                onPress={() => handlePress(item.id)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    isSelected ? styles.selectedText : styles.unselectedText,
                  ]}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.textView}>
          <Text style={styles.popularText}>Popular</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            star={item.star}
            rating={item.rating}
            name={item.name}
            model={item.model}
            price={item.price}
            rent={item.rent}
            bike={item.bike}
            arrow={item.arrow}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
