import React, { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import Person from '../../../Components/assets/svg/Person.svg';
import Drawer from '../../../Components/assets/svg/Drawer.svg';
import LinearGradient from 'react-native-linear-gradient';
import { colors, hp, wp } from '../../constant';
import Star from '../../../Components/assets/svg/Star.svg';
import HeavyBike from '../../../Components/assets/svg/HeavyBike.svg';
import ArrowLeft from '../../../Components/assets/svg/ArrowLeft.svg';
import SportsBike from '../../../Components/assets/svg/SportsBike.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedId, setSelectedId] = useState('1');
  const insets = useSafeAreaInsets();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const DATA = [
    {
      id: '1',
      star: <Star />,
      rating: '4.6',
      name: 'Harley-Davidson',
      model: 'Iron 883',
      price: '$ 567.00',
      rent: '1 Day rental',
      bike: <HeavyBike height={hp(13)} width={wp(70)} />,
      arrow: <ArrowLeft />,
      brand: 'Harley-Davidson',
    },
    {
      id: '2',
      star: <Star />,
      rating: '4.6',
      name: 'Harley-Davidson',
      model: 'Iron 883',
      price: '$ 567.00',
      rent: '1 Day rental',
      bike: <SportsBike height={hp(13)} width={wp(71.8)} />,
      arrow: <ArrowLeft />,
      brand: 'Harley-Davidson',
    },
    {
      id: '3',
      star: <Star />,
      rating: '4.6',
      name: 'Harley-Davidson',
      model: 'Iron 883',
      price: '$ 567.00',
      rent: '1 Day rental',
      bike: <SportsBike height={hp(13)} width={wp(71.8)} />,
      arrow: <ArrowLeft />,
      brand: 'Harley-Davidson',
    },
    {
      id: '4',
      star: <Star />,
      rating: '4.8',
      name: 'BMW',
      model: 'Iron 883',
      price: '$ 699.00',
      rent: '1 Day rental',
      bike: <HeavyBike height={hp(13)} width={wp(70)} />,
      arrow: <ArrowLeft />,
      brand: 'BMW',
    },
    {
      id: '5',
      star: <Star />,
      rating: '4.7',
      name: 'BMW',
      model: 'Iron 883',
      price: '$ 799.00',
      rent: '1 Day rental',
      bike: <SportsBike height={hp(13)} width={wp(71.8)} />,
      arrow: <ArrowLeft />,
      brand: 'BMW',
    },
    {
      id: '6',
      star: <Star />,
      rating: '4.9',
      name: 'Ducati',
      model: 'Iron 883',
      price: '$ 899.00',
      rent: '1 Day rental',
      bike: <SportsBike height={hp(13)} width={wp(71.8)} />,
      arrow: <ArrowLeft />,
      brand: 'Ducati',
    },
    {
      id: '7',
      star: <Star />,
      rating: '4.5',
      name: 'Ducati',
      model: 'Iron 883',
      price: '$ 649.00',
      rent: '1 Day rental',
      bike: <HeavyBike height={hp(13)} width={wp(70)} />,
      arrow: <ArrowLeft />,
      brand: 'Ducati',
    },
  ];

  const cars = [
    { id: '1', text: 'All' },
    { id: '2', text: 'Harley-Davidson' },
    { id: '3', text: 'BMW' },
    { id: '4', text: 'Ducati' },
  ];

  const filteredData = useMemo(() => {
    let filtered = DATA;

    if (selectedId !== '1') {
      const selectedBrand = cars.find(car => car.id === selectedId)?.text;
      if (selectedBrand) {
        filtered = filtered.filter(bike => bike.brand === selectedBrand);
      }
    }

    if (searchText.trim()) {
      const lowerSearch = searchText.toLowerCase();
      filtered = filtered.filter(
        bike =>
          (bike.name && bike.name.toLowerCase().includes(lowerSearch)) ||
          (bike.model && bike.model.toLowerCase().includes(lowerSearch)),
      );
    }

    return filtered;
  }, [selectedId, searchText]);

  useEffect(() => {
    if (searchText.trim()) {
      const matchedBrand = cars.find(
        car => car.text.toLowerCase() === searchText.toLowerCase(),
      );
      if (matchedBrand) {
        setSelectedId(matchedBrand.id);
      } else {
        setSelectedId('1');
      }
    }
  }, [searchText]);

  const handlePress = id => {
    setSelectedId(id);
  };

  const Item = ({ star, rating, name, model, price, rent, bike, arrow }) => (
    <View>
      <ImageBackground
        style={styles.imageBackGround}
        source={require('../../../Components/assets/images/backGround.png')}
        resizeMode="contain"
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
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.RaisinBlack}
      />
      <View style={styles.imagesView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <Person height={36} width={36} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerView}>
         <Drawer height={height * 0.05} width={width * 0.05} />
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
          value={searchText}
          onChangeText={setSearchText}
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
        showsVerticalScrollIndicator={false}
        data={filteredData}
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
