import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: '#DCDCDC',
        ...containerStyle,
      }}>
      {/* Image */}
      <Image source={item.image} style={imageStyle} />

      {/* Info */}
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {item.name}
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'gray',
          }}>
          {item.description}
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {item.price}
        </Text>
      </View>
      {/* calories */}

      <View
      style={{
          flexDirection:'row',
          position:'absolute',
          top:5,
          right:16
      }}>
          <Image
          source={require('../assets/icons/calories.png')}
          style={{width:30,height:30}}/>

          <Text style={{
              color:"#000000",
              fontSize:12
          }}>{item.calories} Calories</Text>

      </View>
    </TouchableOpacity>
  );
};
export default HorizontalFoodCard;
