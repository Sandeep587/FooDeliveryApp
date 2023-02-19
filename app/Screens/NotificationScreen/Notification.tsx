import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, SectionList} from 'react-native';
import dummyData from '../../Constants/dummyData';

const Item = ({title}) => (
  <View style={{backgroundColor: '#f9c2ff', padding: 20, marginVertical: 8}}>
    <Text style={{fontSize: 24}}>{title}</Text>
  </View>
);

const Notification = ({navigation}) => {
  const [notifications, setNotifications] = useState(dummyData.notification);
  console.log('data', JSON.stringify(notifications));

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
            Notification
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
  function renderNotificationList() {
    return (
      <View>
        <SectionList
          sections={notifications}
          renderSectionHeader={({section}) => {
            return (
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                {section.title}
              </Text>
            );
          }}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            console.log('item name', item.name);
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: '#DCDCDC',
                  borderRadius: 6,
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ff6347',
                    margin: 15,
                    borderRadius: 8,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 60,
                      height: 60,
                      marginLeft: 10,
                      marginRight: 10,
                    }}></Image>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#000000',
                      fontWeight: 'bold',
                      marginTop: 10,
                      marginLeft: 10,
                      margintRight: 10,
                    }}>
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 10,
                      margintRight: 10,
                    }}>
                    {item.offer}
                  </Text>

                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000000',
                      marginTop: 5,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            );
          }}></SectionList>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* header */}
      {renderHeader()}
      {/* Notification List */}
      {renderNotificationList()}
    </View>
  );
};
export default Notification;
