import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import BackArrow from '../../../Components/assets/svg/BackArrow.svg';
import Pencil from '../../../Components/assets/svg/Pencil.svg';
import { styles } from './styles';
import { colors,hp,wp } from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const ProfilePage = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [group, setGroup] = useState('');
  const [kyc, setKyc] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('Kamran');
  const [isEditingName, setIsEditingName] = useState(false);

  const openGallery = () => {
    ImagePicker.openPicker({
      // width: wp(30),
      // height: hp(15),
      cropping: true,
      cropperCircleOverlay: false, // Optional if you want square crop
      mediaType: 'photo',
    })
      .then(image => {
        console.log('Selected Image:', image);
        setSelectedImage({ uri: image.path });
      })
      .catch(error => {
        console.log('Image selection cancelled:', error);
      });
  };

  const handleNameChange = text => {
    const letter = /^[A-Za-z]*$/;

    if (letter.test(text) && text.length <= 10) {
      setName(text);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Name should be only letters',
        position: 'top',
        visibilityTime: 2000,
      });
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.veryDark} />
      <View style={styles.profileContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.arrowView}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackArrow height={hp(2)} width={wp(2)} />
          </TouchableOpacity>
          <View style={styles.profileTextView}>
            <Text style={styles.profileText}>Profile</Text>
          </View>
          <View style={styles.rightSpacer} />
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.backgroundImage}
            source={
              selectedImage
                ? selectedImage
                : require('../../../Components/assets/images/PersonImage.png')
            }
          >
            <TouchableOpacity onPress={openGallery} style={styles.opacity}>
              <View style={styles.profileLogoView}></View>
              <View style={styles.pencilViewContainer}>
                <Pencil height={25} width={25} />
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.nameContainer}>
          {isEditingName ? (
            <TextInput
              style={styles.inputnameText}
              value={name}
              onChangeText={handleNameChange}
              autoFocus={true}
              onBlur={() => setIsEditingName(false)}
              maxLength={10}
              keyboardType="default"
            />
          ) : (
            <Text style={styles.nameText}>{name}</Text>
          )}
          {!isEditingName && (
            <TouchableOpacity onPress={() => setIsEditingName(true)}>
              <Pencil />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <LinearGradient
          colors={[colors.darkCharcoal, colors.blackOlive]}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.titleInput}
            value={number}
            onChangeText={setNumber}
            placeholder="Emergency contact number"
            placeholderTextColor={colors.white}
          />
          <TouchableOpacity>
            <Text style={styles.settingsText}>+ Add</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={[colors.darkCharcoal, colors.blackOlive]}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.titleInput}
            value={group}
            onChangeText={setGroup}
            placeholder="Blood group"
            placeholderTextColor={colors.white}
          />
          <TouchableOpacity>
            <Text style={styles.settingsText}>+ Add</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={[colors.darkCharcoal, colors.blackOlive]}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.titleInput}
            value={kyc}
            onChangeText={setKyc}
            placeholder="KYC details"
            placeholderTextColor={colors.white}
          />
          <TouchableOpacity>
            <Text style={styles.settingsText}>+ Add</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ProfilePage;
