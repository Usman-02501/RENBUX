import {StyleSheet} from 'react-native';
import { wp,hp } from '../../constant';

const createStyle = theme => {
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: hp(2),
    },
    text: {
      fontSize: theme.size.statusSize,
      fontWeight: 'bold',
      color: theme.color.white,
    },
    threeBtn: {
      justifyContent: 'center',
      flexDirection: 'row',
      padding: wp(2),
      backgroundColor: theme.color.primaryColor,
    },
    sameBtnStyle: {
      padding: wp(2),
      paddingHorizontal: wp(4),
      borderWidth: 1,
      borderColor: theme.color.grey,
    },
    btnText: {
      fontSize: theme.size.small,
      color: theme.color.white,
    },
    textPressed: {
      fontSize: theme.size.small,
      color: theme.color.primaryColor,
    },
    buttonPressed: {
      backgroundColor: theme.color.white,
    },
    buttonUnselected: {
      backgroundColor: theme.color.lightGreenishBlue,
    },
    mainCard: {
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(95),
      // height: hp(30),
      flex: 1,
      backgroundColor: 'rgba(60, 87, 96, 0.5)',
      borderTopLeftRadius: theme.radius.radius2,
      borderTopRightRadius: theme.radius.radius2,
      borderBottomLeftRadius: theme.radius.radius2,
      borderBottomRightRadius: theme.radius.radius2,
    },
    headerCard: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: wp(3),
      borderBottomWidth: 0.5,
      borderColor: theme.color.grey,
    },
    textContainer: {
      flex: 1, // Take up remaining space to center text
      alignItems: 'center',
    },
    indoorText: {
      fontSize: theme.size.statusSize,
      fontWeight: 'bold',
      color: theme.color.white,
    },
    temperatureText: {
      fontSize: theme.size.xxLarge,
      color: theme.color.white,
      fontWeight: 'bold',
      // marginRight: wp(5),
    },
    thermoAndTemp: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: wp(3),
    },
    weatherText: {
      fontSize: theme.size.small,
      color: theme.color.white,
    },
    smallCard: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: wp(2),
      gap: wp(1),
      flex: 0.3,
      borderTopLeftRadius: theme.radius.radius1,
      borderTopRightRadius: theme.radius.radius1,
      borderBottomLeftRadius: theme.radius.radius1,
      borderBottomRightRadius: theme.radius.radius1,
      backgroundColor: theme.color.primaryColor,
    },
    temperatureDetailsHeading: {
      fontSize: theme.size.small,
      color: theme.color.white,
    },
    temperatureDetailsText: {
      fontSize: theme.size.statusSize,
      color: theme.color.white,
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: wp(1),
    },
    airQualityView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      padding: wp(2),
      gap: wp(1),
      flex: 0.3,
      width: wp(90),
      marginVertical: hp(1),
      borderRadius: theme.radius.radius2,
      backgroundColor: theme.color.primaryColor,
    },
    airQualityText: {
      fontSize: theme.size.statusSize,
      color: theme.color.white,
    },
    centeredView: {
      width: wp(80),
      // height: hp(20),
      flex: 0.5,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: theme.radius.radius3,
      borderColor: theme.color.primaryColor,
      backgroundColor: theme.color.primaryColor,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 5,
    },
    closeIconView: {
      alignSelf: 'flex-end',
      paddingHorizontal: wp(3),
      marginVertical: wp(0.5),
    },
    modalView: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      // backgroundColor: 'red'
    },
    modalHeadingView: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    appUpdate: {
      fontWeight: '500',
      fontSize: theme.size.statusSize,
      color: theme.color.white,
    },
    desc: {
      lineHeight: hp(3),
      color: theme.color.white,
      fontSize: theme.size.small,
      textAlign: 'left',
    },
    fullScreenOverlay: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
};

export default createStyle;
