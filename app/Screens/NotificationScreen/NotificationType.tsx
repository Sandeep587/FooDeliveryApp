import React,{useState} from 'react';
import {View, Image, Text, TouchableOpacity, Switch} from 'react-native';

const NotificationType = ({navigation}) => {
  const [isEnabled,setIsEnabled]=useState(false);
  const [isEnabledOne,setIsEnabledOne]=useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchOne = () => setIsEnabledOne(previousStateOne => !previousStateOne);
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
            NOTIFICATION
          </Text>
        </View>
      </View>
    );
  }

  function renderNotificationType() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            backgroundColor: '#DCDCDC',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 6,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems:'center',
              justifyContent:'center'
            }}>
            <Image source={require('../../assets/icons/notification.png')}
            style={{height:30,
            width:30,
            marginLeft:20,
            tintColor:"#ff6347"}}/>

            <View>
                <Text style={{
                    marginLeft:20,
                    fontWeight:'bold',
                    fontSize:18,
                    color:"#000000"
                }}>Notifications</Text>
                <Text style={{
                    marginLeft:20, 
                    fontSize:12  
                }}>You Will Receive Daily Updates</Text>
            </View>
          </View>
          <View style={{
              justifyContent:'center'
          }}>
              <Switch
              trackColor={{ false: "#767577", true: "#ff6347" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}/>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: 80,
            backgroundColor: '#DCDCDC',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 6,
            justifyContent: 'space-between',
          }}>
              <View
            style={{
              flexDirection: 'row',
              alignItems:'center',
              justifyContent:'center'
            }}>
            <Image source={require('../../assets/icons/notification.png')}
            style={{height:30,
            width:30,
            marginLeft:20,
            tintColor:"#ff6347"}}/>

            <View>
                <Text style={{
                    marginLeft:20,
                    fontWeight:'bold',
                    fontSize:18,
                    color:"#000000"
                }}>Promotional Notifications</Text>
                <Text style={{
                    marginLeft:20, 
                    fontSize:12  
                }}>You Will Receive Daily Updates</Text>
            </View>
          </View>
          <View style={{
              justifyContent:'center'
          }}>
              <Switch
              trackColor={{ false: "#767577", true: "#ff6347" }}
              thumbColor={isEnabledOne ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchOne}
              value={isEnabledOne}/>
          </View>
          </View>
      </View>
    );
  }

  return (
    <View>
      {/* Header */}
      {renderHeader()}

      {/* Notification Type */}
      {renderNotificationType()}
    </View>
  );
};
export default NotificationType;
