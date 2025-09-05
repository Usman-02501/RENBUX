import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  ImageBackground,
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
import { colors, hp, wp } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import Share from '../../../Components/assets/svg/Share.svg';
import Success from '../../../Components/assets/svg/Success.svg';

const WalletScreen = ({ navigation, route }) => {
  const [number, setNumber] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const { amount } = route.params;

  const handleSelectCard = index => {
    setSelectedCard(index);
    navigation.navigate('WalletSuccess');
  };

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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            });
          }}
        >
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
          <Text style={styles.settingsText}>${amount}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.payView}>
          <Text style={styles.payUsingText}>Pay using</Text>
          <Line1 style={styles.line} />
          <Text style={styles.cardsText}>Cards</Text>
          <TouchableOpacity
            style={[
              styles.cardView,
              selectedCard === 1 && { backgroundColor: colors.veryDarkPink },
            ]}
            onPress={() => handleSelectCard(1)}
          >
            <View style={styles.cardTextView}>
              <View>
                <CreditCard height={52} width={52} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.hdfBankText}>HDFC Bank credit card</Text>
                <Text style={styles.codeText}>xxxxx xxxx 3564</Text>
              </View>
            </View>
            {selectedCard === 1 && <Check style={styles.checkImage} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cardView,
              selectedCard === 2 && { backgroundColor: colors.veryDarkPink },
            ]}
            onPress={() => handleSelectCard(2)}
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
            {selectedCard === 2 && <Check style={styles.checkImage} />}
          </TouchableOpacity>
          <Text style={[styles.cardsText, { paddingTop: hp(1) }]}>UPI</Text>
          <TouchableOpacity
            style={[
              styles.cardView,
              selectedCard === 3 && { backgroundColor: colors.veryDarkPink },
              { paddingTop: hp(2) },
            ]}
            onPress={() => handleSelectCard(3)}
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
            {selectedCard === 3 && <Check style={styles.checkImage} />}
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.payButtonText}>Pay ${amount}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <LinearGradient
          colors={[colors.nearBlack, colors.chineseblack]}
          style={styles.modalContainer}
        >
          <TouchableOpacity style={styles.shareButton} onPress={() => {}}>
            <Share height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
          <View style={styles.SuccessImageView}>
            <Success height={190} width={190} />
          </View>
          <Text style={styles.paymentText}>Payment sucessfull</Text>
          <Text style={styles.walletText1}>
            Thank you ! You payment was successfully added in your wallet
          </Text>
          <View style={styles.imageBackGroundView}>
            <ImageBackground
              style={styles.imageBackGround}
              source={require('../../../Components/assets/images/Subtract.png')}
              resizeMode="cover"
            >
              <View style={styles.priceTextView}>
                <Text style={styles.amountPaidText}>Amount paid</Text>
                <Text style={styles.priceText}>$2000</Text>
              </View>
              <View style={styles.transactionView}>
                <Text style={styles.transactionText}>Transaction</Text>
                <Text style={styles.transactionNumberText}>4857295237383</Text>
              </View>
            </ImageBackground>
          </View>
        </LinearGradient>
      </Modal>
    </View>
  );
};

export default WalletScreen;
