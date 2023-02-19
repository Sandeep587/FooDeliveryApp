import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
  console.log("Item",item)
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: 16,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DCDCDC',
        ...containerStyle,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={require('../assets/icons/calories.png')}
            style={{width: 30, height: 30}}
          />
          <Text>{item.calories} Calories</Text>
        </View>

        <Image
          source={require('../assets/icons/love.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: item.isFavourite ? '#FF0000' : '#000000',
          }}
        />
      </View>

      {/* Images */}
      <View
        style={{
          height: 170,
          width: 170,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.image}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        <View
          style={{
            alignItems: 'center',
            marginTop: -35,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#000000',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 12,
            }}>
            {item.description}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#000000',
            }}>
            ${item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default VerticalFoodCard;
