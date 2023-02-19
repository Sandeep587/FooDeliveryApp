import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Rating = ({
  rating,
  iconStyle,
  activeColor = '#FF6347',
  inActiveColor = '#DCDCDC',
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Image
        source={require('../assets/icons/star.png')}
        style={{
          tintColor: rating > 1 ? activeColor : inActiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={require('../assets/icons/star.png')}
        style={{
          tintColor: rating > 2 ? activeColor : inActiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={require('../assets/icons/star.png')}
        style={{
          tintColor: rating > 3 ? activeColor : inActiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={require('../assets/icons/star.png')}
        style={{
          tintColor: rating > 4 ? activeColor : inActiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={require('../assets/icons/star.png')}
        style={{
          tintColor: rating > 5 ? activeColor : inActiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});

export default Rating;