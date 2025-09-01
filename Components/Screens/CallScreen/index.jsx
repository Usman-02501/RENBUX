import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import Person from '../../../Components/assets/svg/Person.svg';
import Volume from '../../../Components/assets/svg/Volume.svg';
import Call2 from '../../../Components/assets/svg/Call2.svg';
import Mic1 from '../../../Components/assets/svg/Mic1.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CallScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <Text style={styles.callText}>Call with owner</Text>
      <View style={styles.personImageView}>
        <Person height={120} width={120} style={styles.personImage} />
      </View>
      <Text style={styles.nameText}>Bradley Lawlor</Text>
      <Text style={styles.companyText}>Orange shop pvt ltd</Text>
      <Text style={styles.timeText}>13:54</Text>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.backButton}>
          <Volume height={18} width={18} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Call2 height={28} width={28} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <Mic1 height={18} width={18} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CallScreen;
