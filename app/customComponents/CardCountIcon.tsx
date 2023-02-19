import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const CardCountIcon = ({CartContainerStyle, qunatity, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#FFA500',
        marginTop: 5,
        marginRight: 5,
        ...CartContainerStyle,
      }}
      onPress={onPress}>
      <Image
        source={require('../assets/icons/cart.png')}
        style={{
          width: 20,
          height: 20,
          tintColor: '#000000',
          ...iconStyle,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          height: 15,
          width: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          backgroundColor: '#FF6347',
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontWeight: '600',
            fontSize: 10,
          }}>
          {qunatity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CardCountIcon;
