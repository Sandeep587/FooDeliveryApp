import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Checkout = ({navigation}) => {
  const [value, setValue] = React.useState('GooglePay');
  return (
    <View style={{flex: 1}}>
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
            CHECKOUT
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            {/* MasterCard */}
            <View
              style={{
                flexDirection: 'row',
                height: 100,
                marginTop: 30,
                borderColor: '#DCDCDC',
                borderWidth: 2,
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
              }}>
              {/* left */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#DCDCDC',
                  width: 45,
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                <View
                  style={{
                    height: 52,
                    width: 52,
                    borderColor: '#DCDCDC',
                    borderWidth: 2,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={() => alert('Hello')}>
                    <Image
                      style={{
                        height: 45,
                        width: 45,
                      }}
                      source={require('../../assets/images/mastercard.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* middle */}

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000000',
                  }}>
                  Master Card
                </Text>
              </View>

              {/* right */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RadioButton value="MasterCard" color="#FF6347" />
              </View>
            </View>

            {/* Google Pay */}
            <View
              style={{
                flexDirection: 'row',
                height: 100,
                marginTop: 10,
                borderColor: '#DCDCDC',
                borderWidth: 2,
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
              }}>
              {/* left */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#DCDCDC',
                  width: 45,
                  marginLeft: 10,
                  marginTop: 5,
                }}>
                <View
                  style={{
                    height: 52,
                    width: 52,
                    borderColor: '#DCDCDC',
                    borderWidth: 2,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={() => alert('Hello')}>
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                      }}
                      source={require('../../assets/icons/gicon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* middle */}

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000000',
                  }}>
                  Google Pay
                </Text>
              </View>

              {/* right */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RadioButton value="GooglePay" color="#FF6347" />
              </View>
            </View>
          </RadioButton.Group>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Delivery Address
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: 70,
              marginTop: 10,
              borderColor: '#DCDCDC',
              borderWidth: 2,
              borderRadius: 12,
              marginLeft: 10,
              marginRight: 10,
              alignItems: 'center',
              jusitfyContent: 'center',
            }}>
            <Image
              style={{height: 40, width: 40, marginLeft: 20}}
              source={require('../../assets/icons/gps.png')}
            />

            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000000',
                marginLeft: 20,
              }}>
              300 Post Street San Francisco, CA
            </Text>
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Add Coupan
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#F0F0F0',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              height: 50,
              paddingLeft: 5,
              borderRadius: 6,
            }}>
            <View style={{flex: 1.6}}>
              <TextInput placeholder="Coupan Code"></TextInput>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF6347',
                borderRadius: 6,
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={require('../../assets/icons/applycoupan.png')}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            {/* Shadow */}
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 0}}
              colors={['#00000000', '#DCDCDC']}
              style={{
                position: 'absolute',
                top: -20,
                left: 0,
                right: 0,
                height: 200,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                marginTop: 40,
              }}
            />

            {/* BottomTabs */}
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                paddingHorizontal: 12,
                paddingBottom: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#ffffff',
                marginTop: 30,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 20,
                  margiRight: 20,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: '400',
                      fontSize: 15,
                    }}>
                    Subtotal
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 60,
                    }}>
                    $37.97
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 20,
                  margiRight: 20,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: '400',
                      fontSize: 15,
                    }}>
                    Shipping fee
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 60,
                    }}>
                    $0.00
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#DCDCDC',
                  borderBottomWidth: 1,
                  marginTop: 20,
                }}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 20,
                  margiRight: 20,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 22,
                    }}>
                    Total:
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      fontSize: 22,
                      marginLeft: 60,
                    }}>
                    $37.97
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('success')}
        style={styles.button}>
        <Text style={styles.buttonTxt}>Place your Order</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Checkout;
