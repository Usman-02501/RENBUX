import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './stlyes';
import { colors } from '../../constant';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import ArrowDown from '../../../Components/assets/svg/ArrowDown.svg';
import ArrowUp from '../../../Components/assets/svg/ArrowUp.svg';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HelpScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={styles.headerSpacer} />
      </View>
      <View style={styles.helpContainer}>
        <View style={styles.textImageView}>
          <Text style={styles.text}>How can I cancel my booking?</Text>
          <ArrowDown />
        </View>
        <View style={styles.changeTimeView}>
          <View style={styles.pickTimeView}>
            <Text style={styles.text}>
              Can I change the pickup time or date?
            </Text>
            <ArrowUp />
          </View>
          <Text style={styles.editText}>
            You can edit your booking before the trip begins.{'\n'}Go to your
            booking and tap ‘Edit Booking’.{'\n'}Changes depend on bike
            availability.{'\n'}Make sure to make changes at least 1 hour before
            pickup.
          </Text>
        </View>
        <View style={styles.textImageView}>
          <Text style={styles.text}>Will I get a refund if I cancel?</Text>
          <ArrowDown />
        </View>
        <View style={styles.textImageView}>
          <Text style={styles.text}>
            What if there’s an issue with the bike?
          </Text>
          <ArrowDown />
        </View>
      </View>
      <View style={styles.callContainer}>
        <Text style={styles.needHelpText}>Need help? Call:</Text>
        <TouchableOpacity>
          <Text style={styles.numberText}> +1 555-123-4567</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HelpScreen;
