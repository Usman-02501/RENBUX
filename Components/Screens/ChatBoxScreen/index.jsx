import React from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constant';
import { styles } from './styles';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Person from '../../../Components/assets/svg/Person.svg';
import Call1 from '../../../Components/assets/svg/Call1.svg';
import More from '../../../Components/assets/svg/More.svg';
import DoubleTick from '../../../Components/assets/svg/DoubleTick.svg';
import Mic from '../../../Components/assets/svg/Mic.svg';
import Play from '../../../Components/assets/svg/Play.svg';

const ChatBoxScreen = ({ navigation }) => {
  const messages = [
    {
      id: 1,
      text: 'Hi! Just booked the Royal Enfield for tomorrow. Is everything good to go?',
      time: '1:00 pm',
      sent: true,
      delivered: true,
    },
    {
      id: 2,
      text: 'Hi! Yes, your booking is confirmed. The bike will be ready for pickup at 9 AM.',
      time: '1:10 pm',
      sent: false,
    },
    {
      id: 3,
      text: 'Great, could you share the exact pickup location?',
      time: '1:05 pm',
      sent: true,
      delivered: true,
    },
    {
      id: 4,
      text: "It's at #24, MG Road, near City Mall parking gate.",
      time: '1:10 pm',
      sent: false,
    },
    {
      id: 5,
      text: 'Perfect. Is the fuel tank full?',
      time: '1:10 pm',
      sent: true,
      delivered: true,
    },
    {
      id: 6,
      text: "Yes, it's full. Please return it with the same level. Helmet is included too.",
      time: '1:10 pm',
      sent: false,
    },
    {
      id: 7,
      text: 'Thanks a lot!',
      time: '1:15 pm',
      sent: true,
      delivered: true,
    },
  ];

  const allMessage = message => {
    if (message.sent) {
      return (
        <View key={message.id} style={styles.sentMessageContainer}>
          <View style={styles.sentMessageBubble}>
            <Text style={styles.sentMessageText}>{message.text}</Text>
          </View>
          <View style={styles.messageFooter}>
            <Text style={styles.sentMessageTime}>{message.time}</Text>
            <DoubleTick />
          </View>
        </View>
      );
    } else {
      return (
        <View key={message.id} style={styles.receivedMessageContainer}>
          <Text style={styles.receivedMessageText}>{message.text}</Text>
          <Text style={styles.receivedMessageTime}>{message.time}</Text>
        </View>
      );
    }
  };

  return (
    <LinearGradient
      colors={[colors.nearBlack, colors.chineseblack]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.nearBlack} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow height={10} width={10} />
        </TouchableOpacity>
        <View style={styles.profileSection}>
          <Person />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Bradley Lawlor</Text>
            <Text style={styles.profileStatus}>Available in mobile</Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Call1 height={22} width={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <More />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.chatArea} showsVerticalScrollIndicator={false}>
        <View style={styles.dateSeparatorContainer}>
          <Text style={styles.dateText}>15 July 2023</Text>
        </View>
        <View style={styles.messagesContainer}>{messages.map(allMessage)}</View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="I truly appreciate your ti"
            placeholderTextColor={colors.quickSilver}
          />
          <TouchableOpacity style={styles.micButton}>
            <Mic />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Play />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ChatBoxScreen;
