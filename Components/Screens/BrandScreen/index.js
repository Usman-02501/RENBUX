import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Honda from '../../../Components/assets/svg/Honda.svg';
import Bmw from '../../../Components/assets/svg/Bmw.svg';
import Zero from '../../../Components/assets/svg/Zero.svg';
import Ducati from '../../../Components/assets/svg/Ducati.svg';
import IndianBike from '../../../Components/assets/svg/IndianBike.svg';
import Suzuki from '../../../Components/assets/svg/Suzuki.svg';
import Aprilia from '../../../Components/assets/svg/Aprilia.svg';
import Yamaha from '../../../Components/assets/svg/Yamaha.svg';
import { styles } from './styles';
import AppButton from '../../CustomComp/AppButton';
import { colors } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BrandScreen = ({ navigation }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const insets = useSafeAreaInsets();

  const brands = [
    { id: 1, name: 'Honda', logo: <Honda height={25} width={25} /> },
    { id: 2, name: 'BMW', logo: <Bmw height={25} width={25} /> },
    { id: 3, name: 'Zero', logo: <Zero height={25} width={25} /> },
    { id: 4, name: 'Ducati', logo: <Ducati height={25} width={25} /> },
    {
      id: 5,
      name: 'HEARLLY-DAVIDSON',
      logo: <Ducati height={25} width={25} />,
    },
    {
      id: 6,
      name: 'Indian motocycle',
      logo: <IndianBike height={25} width={25} />,
    },
    { id: 7, name: 'KTM', logo: <IndianBike height={25} width={25} /> },
    { id: 8, name: 'Suzuki', logo: <Suzuki height={25} width={25} /> },
    { id: 9, name: 'Aprilia', logo: <Aprilia height={25} width={25} /> },
    { id: 10, name: 'Yamaha', logo: <Yamaha height={25} width={25} /> },
    { id: 11, name: 'Honda', logo: <Honda height={25} width={25} /> },
    { id: 12, name: 'BMW', logo: <Bmw height={25} width={25} /> },
    { id: 13, name: 'Zero', logo: <Zero height={25} width={25} /> },
    { id: 14, name: 'Ducati', logo: <Ducati height={25} width={25} /> },
    {
      id: 15,
      name: 'HEARLLY-DAVIDSON',
      logo: <Ducati height={25} width={25} />,
    },
    {
      id: 16,
      name: 'Indian motocycle',
      logo: <IndianBike height={25} width={25} />,
    },
    { id: 17, name: 'KTM', logo: <IndianBike height={25} width={25} /> },
    { id: 18, name: 'Suzuki', logo: <Suzuki height={25} width={25} /> },
    { id: 19, name: 'Aprilia', logo: <Aprilia height={25} width={25} /> },
    { id: 20, name: 'Yamaha', logo: <Yamaha height={25} width={25} /> },
  ];

  const toggleSelect = id => {
    setSelectedBrands(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const Item = ({ id, name, logo }) => {
    const isSelected = selectedBrands.includes(id);
    return (
      <TouchableOpacity
        style={[
          styles.brandItem,
          {
            backgroundColor: isSelected
              ? colors.selectbrandlogo
              : colors.brandlogo,
          },
        ]}
        onPress={() => toggleSelect(id)}
      >
        <View style={styles.brandLogo}>{logo}</View>
        <Text numberOfLines={1} style={styles.brandName}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Choose your <Text style={styles.boldText}>bike brand</Text> you want
          to{'\n'}
          <Text style={styles.title}>ride it</Text>
        </Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={brands}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => (
            <Item id={item.id} name={item.name} logo={item.logo} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <AppButton title="Next" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BrandScreen;
