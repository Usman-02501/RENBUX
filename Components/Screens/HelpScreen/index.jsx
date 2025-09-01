import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './stlyes';
import { colors } from '../../constant';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import ArrowDown from '../../../Components/assets/svg/ArrowDown.svg';
import ArrowUp from '../../../Components/assets/svg/ArrowUp.svg';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HelpScreen = ({ navigation }) => {
  const [openMessage, setOpenMessage] = useState(null);
  const insets = useSafeAreaInsets();

  const helpData = [
    {
      question: 'How can I cancel my booking?',
      answer: 'You can cancel your booking from the app under "My Bookings".',
    },
    {
      question: 'Can I change the pickup time or date?',
      answer:
        'You can edit your booking before the trip begins.\nGo to your booking and tap ‘Edit Booking’.\nChanges depend on bike availability.\nMake sure to make changes at least 1 hour before pickup.',
    },
    {
      question: 'Will I get a refund if I cancel?',
      answer:
        'Refund policies depend on your booking type and time of cancelation.',
    },
    {
      question: 'What if there’s an issue with the bike?',
      answer:
        'Please contact support immediately or call our helpline for assistance.',
    },
  ];

  const Messages = index => {
    setOpenMessage(openMessage === index ? null : index);
  };

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
        {helpData.map((item, index) => (
          <View
            key={index}
            style={
              openMessage === index
                ? styles.changeTimeView
                : styles.textImageView
            }
          >
            <TouchableOpacity
              style={styles.pickTimeView}
              onPress={() => Messages(index)}
            >
              <Text style={styles.text}>{item.question}</Text>
              {openMessage === index ? <ArrowUp /> : <ArrowDown />}
            </TouchableOpacity>

            {openMessage === index && (
              <Text style={styles.editText}>{item.answer}</Text>
            )}
          </View>
        ))}
      </View>
      <View style={styles.callContainer}>
        <Text style={styles.needHelpText}>Need help? Call:</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}
        >
          <Text style={styles.numberText}> +1 555-123-4567</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HelpScreen;
