import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react/cjs/react.development';
import constants from '../../Constants/constants';
import TextButton from '../../customComponents/TextButton';

const DeliveryStatus = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(3);
  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: 10,
          paddingHoriontal: 6,
        }}>
        {constants.track_order_status.map((item, index) => {
          return (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: -5,
                }}>
                <Image
                  source={require('../../assets/icons/checked.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginLeft: 10,
                    tintColor: index <= currentStep ? '#ff6347' : '#DCDCDC',
                  }}
                />

                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 16,
                      color: '#000000',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                    }}>
                    {item.sub_title}
                  </Text>
                </View>
              </View>
              {index < constants.track_order_status.length - 1 && (
                <View>
                  {index < currentStep && (
                    <View
                      style={{
                        height: 50,
                        width: 3,
                        marginLeft: 26,
                        backgroundColor: '#ff6347',
                        zIndex: -1,
                      }}
                    />
                  )}
                  {index >= currentStep && (
                    <View>
                      <Image
                        source={require('../../assets/icons/dotted_line.png')}
                        resizeMode="cover"
                        style={{
                          width: 4,
                          height: 50,
                          marginLeft: 26,
                        }}
                      />
                    </View>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          DELIVERY STATUS
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text>Estimated Delivery</Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          12 Sept 2020/12:30 PM
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#DCDCDC',
          borderRadius: 4,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 15,
              fontWeight: '600',
              color: '#000000',
            }}>
            Track Order
          </Text>
          <Text
            style={{
              marginRight: 10,
              fontSize: 15,
            }}>
            NY021SNI
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#C0C0C0',
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 10, marginBottom: 20}}>
          {renderTrackOrder()}
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate("foodDetail")}
          style={{
            flex: 1,
            height: 50,
            backgroundColor: '#DCDCDC',
            margin: 10,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
              <Text style={{
                  fontSize:15,
                  color:"#ff6347"
              }}>Cancel</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("mapViewScreen")}
          style={{
            flex: 1,
            height: 50,
            backgroundColor: '#ff6347',
            margin: 10,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
               <Text style={{
                  fontSize:15,
                  color:"#ffffff"
              }}>Map View</Text>
          </TouchableOpacity> 
      </View>
      {/* {currentStep==constants.track_order_status.length-1 &&
        <TextButton 
        label={"DONE"}
        labelStyle={{
          fontSize:15,
        }}
        buttonContainerStyle={{
          height:50,
        }}
        onPress={()=>navigation.navigate("FoodDetails")}/>
        } */}
    </View>
  );
};
export default DeliveryStatus;
