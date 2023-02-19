import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import dummyData from '../../Constants/dummyData';

const MyCoupon = ({navigation}) => {
  const [coupon, setCoupon] = useState(dummyData.coupons);
  const [clickState, setClickState] = useState('Available');

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
            MY COUPON
          </Text>
        </View>
        
      </View>
    );
  }
  function renderButton() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => [setClickState('Available'), renderCoupanList()]}
          style={{
            flex: 1,
            backgroundColor: clickState == 'Available' ? '#ff6347' : '#DCDCDC',
            height: 50,
            marginLeft: 10,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: clickState == 'Available' ? '#ffffff' : '#000000',
            }}>
            Available
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => [setClickState('Used'), renderCoupanList()]}
          style={{
            flex: 1,
            backgroundColor: clickState == 'Used' ? '#ff6347' : '#DCDCDC',
            height: 50,
            marginLeft: 5,
            marginRight: 10,
            marginTop: 10,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: clickState == 'Used' ? '#ffffff' : '#000000',
            }}>
            Used
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderCoupanList() {
    return (
      <View>
        <FlatList
          data={coupon}
          keyExtractor={item => `${item.id}`}
          showVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            //  console.log('clickState', item.status);
            if (clickState == 'Used') {
              if (item.status == 'Used') {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 120,
                      backgroundColor: '#DCDCDC',
                      marginTop: 10,
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 6,
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: 60,
                          width: 60,
                          alignSelf: 'center',
                          top: 10,
                          marginLeft: 20,
                        }}
                        source={item.image}></Image>

                      <View
                        style={{
                          marginLeft: 30,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: '#000000',
                            fontSize: 20,
                          }}>
                          {item.off}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                          }}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }
            } else {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    height: 120,
                    backgroundColor: '#DCDCDC',
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 6,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 60,
                        width: 60,
                        alignSelf: 'center',
                        top: 10,
                        marginLeft: 20,
                      }}
                      source={item.image}></Image>

                    <View
                      style={{
                        marginLeft: 30,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#000000',
                          fontSize: 20,
                        }}>
                        {item.off}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                        }}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }
          }}></FlatList>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
        {/* Header */}
        {renderHeader()}
      {/* Button */}
      {renderButton()}
      {/* coupanList */}
      {renderCoupanList()}
    </View>
  );
};
export default MyCoupon;
