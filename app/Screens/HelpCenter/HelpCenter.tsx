import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const HelpCenter = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
        }}>
        {/* left */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#DCDCDC',
            borderWidth: 2,
            borderRadius: 12,
            width: 45,
            marginLeft: 10,
            marginTop: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require('../../assets/icons/back.png')}
            />
          </TouchableOpacity>
        </View>
        {/* middle */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            HELP CENTER
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 35,
              width: 35,
              marginRight: 10,
            }}
            source={require('../../assets/images/profile.png')}
          />
        </View>
      </View>
    );
  }

  function renderHelpCenterDetail() {
      return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
  
          <Text style={{
              color:'#000000',
              fontWeight:'bold',
              fontSize:18,
              marginTop:10
          }}>Name: Sandeep Sharma</Text>
          <Text 
          style={{
              color:'#000000',
              fontWeight:'bold',
              fontSize:18,
              marginTop:10
          }}>Email: sandeep.sharma1@gmail.com</Text>
          <Text 
          style={{
              fontWeight:'bold',
              fontSize:18,
              color: '#000000',
              marginTop:10
          }}>Contact Number: 9718803308</Text>
          <Text 
          style={{
              fontWeight:'bold',
              fontSize:18,
              color: '#000000',
              marginTop:10
          }}>Address: E-29,Sec-11,Noida,{'\n'}Successive Technologies Pvt Ltd.</Text>
        </View>
      )
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      {renderHeader()}
      {/* Help Center Detail */}
      {renderHelpCenterDetail()}
    </View>
  );
};
export default HelpCenter;
