import { useState, useRef } from 'react';
import { View, Text, StatusBar } from 'react-native';
import BikePerson from '../../../Components/assets/svg/BikePerson.svg';
import Cycle from '../../../Components/assets/svg/Cycle.svg';
import ButtonIcon from '../../../Components/assets/svg/ButtonIcon.svg';
import SwipeButton from 'rn-swipe-button';
import Swiper from 'react-native-swiper';
import { styles } from './styles';
import { colors } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeButtonRef = useRef(null);
  const swiperRef = useRef(null);
  const insets = useSafeAreaInsets();

  const slides = [
    {
      id: 1,
      image: <BikePerson height={250} width={250} />,
      title: 'Lets choose your fav bike and enjoy ride with Renbux app',
      description:
        'Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar',
      buttonText: 'Enjoy ride with us',
      isLast: false,
    },
    {
      id: 2,
      image: <Cycle height={250} width={250} />,
      title: 'Lets choose your fav bike and enjoy ride with Renbux app',
      description:
        'Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar',
      buttonText: 'Swipe to get started',
      isLast: true,
    },
  ];

  const currentScreen = slides[currentIndex];

  const handleSwipeSuccess = () => {
    if (currentIndex < slides.length - 1) {
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1);
      }
    } else {
      navigation.navigate('Brand');
    }

    setTimeout(() => {
      if (swipeButtonRef.current && swipeButtonRef.current.reset) {
        swipeButtonRef.current.reset();
      }
    }, 100);
  };

  const handleIndexChanged = index => {
    setCurrentIndex(index);
    setTimeout(() => {
      if (swipeButtonRef.current && swipeButtonRef.current.reset) {
        swipeButtonRef.current.reset();
      }
    }, 100);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={currentScreen.backgroundColor}
      />
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        showsPagination={false}
        onIndexChanged={handleIndexChanged}
        scrollEnabled={false}
      >
        {slides.map(item => (
          <View key={item.id} style={styles.content}>
            <View style={styles.imageContainer}>{item.image}</View>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                Lets choose your <Text style={styles.boldText}>fav</Text>
                {'\n'}
                <Text style={styles.boldText}>bike</Text> and{' '}
                <Text style={styles.boldText}>enjoy ride</Text>
                {'\n'}
                with <Text style={styles.brandText}>Renbux</Text> app
              </Text>
              <Text style={styles.subText}>{item.description}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      <View style={styles.swipeButtonContainer}>
        <SwipeButton
          ref={swipeButtonRef}
          title={currentScreen.buttonText}
          titleStyles={styles.swipeButtonText}
          railBackgroundColor={colors.black}
          railBorderColor="transparent"
          railStyles={styles.swipeButtonRail}
          thumbIconStyles={styles.swipeButtonThumb}
          onSwipeSuccess={handleSwipeSuccess}
          shouldResetAfterSuccess={true}
          resetAfterSuccessAnimDelay={0}
          thumbIconComponent={() => <ButtonIcon />}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
