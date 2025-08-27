import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Scanner from '../../../Components/assets/svg/Scanner.svg';
import CycleLogo from '../../../Components/assets/svg/CycleLogo.svg';
import Line1 from '../../../Components/assets/svg/Line1.svg';
import CreditCard from '../../../Components/assets/svg/CreditCard.svg';
import CreditCard1 from '../../../Components/assets/svg/CreditCard1.svg';
import Check from '../../../Components/assets/svg/Check.svg';
import DollarCircle from '../../../Components/assets/svg/DollarCircle.svg';
import { colors, hp } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WalletScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackArrow height={13} width={13} />
        </TouchableOpacity>
        <Text style={styles.walletText}>Wallet Load</Text>
        <TouchableOpacity style={styles.backButton}>
          <Scanner height={18} width={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.renbuxAccountView}>
        <CycleLogo height={45} width={45} />
        <Text style={styles.renbuxAccountText}>Renbux account</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          value={number}
          onChangeText={setNumber}
          placeholder="Emergency contact number"
          placeholderTextColor={colors.white}
        />
        <TouchableOpacity>
          <Text style={styles.settingsText}>$2000</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.payView}>
          <Text style={styles.payUsingText}>Pay using</Text>
          <Line1 style={styles.line} />
          <Text style={styles.cardsText}>Cards</Text>
          <TouchableOpacity style={styles.cardView}>
            <View style={styles.cardTextView}>
              <View>
                <CreditCard height={52} width={52} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.hdfBankText}>HDFC Bank credit card</Text>
                <Text style={styles.codeText}>xxxxx xxxx 3564</Text>
              </View>
            </View>
            <Check style={styles.checkImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardView, { backgroundColor: colors.eerieBlack }]}
          >
            <View style={styles.cardTextView}>
              <View>
                <CreditCard1 height={52} width={52} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.hdfBankText}>HDFC Bank credit card</Text>
                <Text style={styles.codeText}>xxxxx xxxx 3564</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={[styles.cardsText, { paddingTop: hp(1) }]}>UPI</Text>
          <TouchableOpacity
            style={[
              styles.cardView,
              { backgroundColor: colors.eerieBlack, paddingTop: hp(2) },
            ]}
          >
            <View style={styles.cardTextView}>
              <View>
                <DollarCircle height={52} width={52} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.hdfBankText}>HDFC Bank LTD upi</Text>
                <Text style={styles.codeText}>Ac no xxxxx 5674</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => {
              navigation.navigate('WalletSuccess');
            }}
          >
            <Text style={styles.payButtonText}>Pay $2000</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WalletScreen;
