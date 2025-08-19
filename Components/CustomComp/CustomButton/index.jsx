import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Text from '../CustomText';
import {useThemeAwareObject} from '../../Theme/ThemeAwareObjectHook';

const CustomButton = props => {
  const styles = useThemeAwareObject(createStyle);

  return (
    <TouchableOpacity
      onPress={props.onPress ?? null}
      disabled={props?.disabled}
      style={props?.style ? props.style : styles.mainContainer}>
      {props?.loading ? (
        <ActivityIndicator
          color={
            props.indicatorColor ? props.indicatorColor : styles.indicatorColor
          }
          size="small"
        />
      ) : (
        <>
          <View style={styles.contentContainer}>
            {props.icon && (
              <View style={styles.iconContainer}>{props.icon}</View>
            )}
            {props?.text && (
              <Text style={[styles.buttonText, props.textStyle]}>
                {props?.text}
              </Text>
            )}
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const createStyle = theme => {
  const themeStyle = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: wp(90),
      borderRadius: theme.radius.radius1,
      backgroundColor: theme.color.darkWhite,
    },
    contentContainer: {
      // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      alignSelf: 'center',
      fontSize: wp(4),
      color: theme.color.black,
    },
    indicatorColor: theme.color.white,
  });
  return themeStyle;
};

export default CustomButton;
