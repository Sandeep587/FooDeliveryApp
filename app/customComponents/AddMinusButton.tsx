import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import TextIconButton from './TextIconButton';

const AddMinusButton = ({ContainerStyle, value = 1, onAdd, onMinus}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        width: 130,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        ...ContainerStyle,
      }}>
      <TextIconButton
        ContainerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        label={''}
        labelStyle={{
         
        }}
        icon={require('../assets/icons/minus.png')}
        iconStyle={{
            height:15,
            width:15,
            tintColor:value>1?'#FF6347' : '#000000'
        }}
        onPress={onMinus}
      />

      <View
      style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      }}>
          <Text style={{
              fontWeight:'bold',
              fontSize:18
          }}>{value}</Text>
      </View>

<TextIconButton
        ContainerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        label={''}
        labelStyle={{
          
        }}
        icon={require('../assets/icons/plus.png')}
        iconStyle={{
            height:15,
            width:15,
            tintColor:'#FF6347'
        }}
        onPress={onAdd}
      />
    </View>
  );
};
export default AddMinusButton;
