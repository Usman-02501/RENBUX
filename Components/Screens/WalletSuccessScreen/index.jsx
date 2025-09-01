import React, { useState } from 'react';
import { styles } from './styles';
import { Modal, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Scanner from '../../../Components/assets/svg/Scanner.svg';
import BriefCase from '../../../Components/assets/svg/BriefCase.svg';
import Plus1 from '../../../Components/assets/svg/Plus1.svg';
import Scan from '../../../Components/assets/svg/Scan.svg';
import Card from '../../../Components/assets/svg/Card.svg';
import More from '../../../Components/assets/svg/More.svg';
import Wallet from '../../../Components/assets/svg/Wallet.svg';
import Share from '../../../Components/assets/svg/Share.svg';
import Line1 from '../../../Components/assets/svg/Line1.svg';
import LoadWallet from '../../../Components/assets/svg/LoadWallet.svg';
import YamahaBike from '../../../Components/assets/svg/YamahaBike.svg';
import { colors } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageCropPicker from 'react-native-image-crop-picker';

const WalletSuccessScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <Text style={styles.walletText}>Renbux wallet</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            ImageCropPicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            });
          }}
        >
          <Scanner height={18} width={18} />
        </TouchableOpacity>
      </View>
      <Text style={styles.currentBalanceText}>Current balance</Text>
      <Text style={styles.balanceText}>$23,456</Text>
      <View style={styles.accountView}>
        <BriefCase />
        <Text style={styles.accountText}>Primary account</Text>
      </View>
      <View style={styles.allButtonsView}>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate('Book');
            }}
          >
            <Plus1 height={18} width={18} />
          </TouchableOpacity>
          <Text style={styles.addText}>Add</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton}>
            <Scan height={18} width={18} />
          </TouchableOpacity>
          <Text style={styles.addText}>Scan</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton}>
            <Card height={18} width={18} />
          </TouchableOpacity>
          <Text style={styles.addText}>Card</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <More height={18} width={18} />
          </TouchableOpacity>
          <Text style={styles.addText}>More</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.transactionView}>
          <View style={styles.transactionTextView}>
            <Text style={styles.transactionText}>Transaction</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>
          <Line1 style={styles.line} />
          <View style={styles.walletContainer}>
            <View style={styles.imageTextView}>
              <View>
                <LoadWallet height={50} width={50} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.loadWalletText}>Load wallet</Text>
                <Text style={styles.dateText}>24, January I 04:34PM</Text>
              </View>
            </View>
            <Text style={styles.priceText}>+$2000</Text>
          </View>
          <View style={styles.walletContainer}>
            <View style={styles.imageTextView}>
              <View>
                <YamahaBike height={50} width={50} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.loadWalletText}>
                  Yamaha bike rent booked
                </Text>
                <Text style={styles.dateText}>24, January I 04:34PM</Text>
              </View>
            </View>
            <Text style={styles.priceText}>-$23.5</Text>
          </View>
          <Line1 style={styles.line} />
          <View style={styles.walletContainer}>
            <View style={styles.imageTextView}>
              <View>
                <LoadWallet height={50} width={50} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.loadWalletText}>Load wallet</Text>
                <Text style={styles.dateText}>24, January I 04:34PM</Text>
              </View>
            </View>
            <Text style={styles.priceText}>+$200</Text>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            //   Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={styles.centeredView}
            onPress={() => setModalVisible(false)}
            activeOpacity={0.9}
          >
            <View style={styles.modalView}>
              <Wallet height={50} width={50} />
              <Text style={styles.shareText}>
                Share your friends with split{'\n'} ride rexpenses
              </Text>
              <TouchableOpacity style={styles.inviteFriendButton}>
                <Share height={16} width={16} />
                <Text style={styles.inviteFriendText}>Invite friends</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

export default WalletSuccessScreen;
