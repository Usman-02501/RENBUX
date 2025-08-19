import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useThemeAwareObject } from '../../Theme';
import {Icon} from 'react-native-elements';
import { wp,hp,colors } from '../../constant';

const CustomCard = ({
  headerText,
  headerIcon,
  openModal,
  temperatureIcon,
  batteryTemperature,
  weatherText,
  smallCard,
  temperatureData,
  showDegreesSymbol,
}) => {
  const styles = useThemeAwareObject(createStyle);

  // SmallCard component to render individual temperature details
  const SmallCard = ({label, temperature, icon}) => (
    <View style={styles.smallCard}>
      <Icon name={icon} type="ionicon" size={wp(8)} color={colors.white} />
      <Text style={styles.temperatureDetailsHeading}>{label}</Text>
      <Text style={styles.temperatureDetailsText}>
        {temperature !== null ? `${temperature}` : 'Loading...'}
      </Text>
    </View>
  );

  const chunks = temperatureData
    ? temperatureData.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, [])
    : [];

  return (
    <View style={styles.mainCard}>
      {/* Header Section */}
      {headerText && (
        <View style={styles.headerCard}>
          <View style={styles.textContainer}>
            <Text style={styles.indoorText}>{headerText}</Text>
          </View>
          {headerIcon && (
            <TouchableOpacity
              onPress={openModal}
              style={{position: 'absolute', right: 0, padding: wp(3)}}>
              <Icon
                name={headerIcon.name}
                type={headerIcon.type}
                size={wp(6)}
                color={headerIcon.color}
              />
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Temperature Section */}
      <View style={styles.thermoAndTemp}>
        {temperatureIcon && (
          <View style={{alignItems: 'center', padding: hp(1)}}>
            <Icon
              name={temperatureIcon.name}
              type={temperatureIcon.type}
              size={wp(20)}
              color={temperatureIcon.color}
            />
            <Text style={styles.weatherText}>{weatherText}</Text>
          </View>
        )}
        <Text style={styles.temperatureText}>
          {React.isValidElement(batteryTemperature)
            ? batteryTemperature
            : `${batteryTemperature} ${showDegreesSymbol ? '°C' : ''}`}
        </Text>
      </View>

      {/* Small Card Section */}
      {smallCard && (
        <View style={{flex: 1, width: wp(90)}}>
          {/* Map through chunks to render each SmallCard */}
          {chunks.map((chunk, index) => (
            <View key={index} style={styles.row}>
              {chunk.map(item => (
                <SmallCard
                  key={item.id}
                  id={item.id}
                  temperature={item.temperature}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const createStyle = theme => {
  return StyleSheet.create({
    mainCard: {
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(95),
      flex: 1,
      margin: hp(1),
      backgroundColor: 'rgba(60, 87, 96, 0.5)',
      borderRadius: theme.radius.radius2,
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
      fontWeight: 'bold',
      color: theme.color.white,
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
  });
};

export default CustomCard;
