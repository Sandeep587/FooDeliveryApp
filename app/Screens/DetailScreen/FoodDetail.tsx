import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import dummyData from '../../Constants/dummyData';
import CardCountIcon from '../../customComponents/CardCountIcon';
import TextButton from '../../customComponents/TextButton';
import TextIconButton from '../../customComponents/TextIconButton';
import TextRatingButton from '../../customComponents/TextRatinButton';
import Rating from '../../customComponents/Rating';
import AddMinusButton from '../../customComponents/AddMinusButton';

const FoodDetail = ({navigation}) => {
  const [foodItems, setFoodItems] = useState(dummyData.vegBiryani);
  const [size, setSize] = useState('');
  const [qty, setQty] = useState('1');

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
          <TouchableOpacity onPress={() => alert('Hello')}>
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
            DETAILS
          </Text>
        </View>
        {/* right component */}
        <CardCountIcon
          CartContainerStyle={{}}
          qunatity={3}
          iconStyle={{}}
          onPress={() => console.log('card count')}
        />
      </View>
    );
  }
  function renderFoodDetail() {
    return (
      <View
        style={{
          marginTop: 10,
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            height: 190,
            borderRadius: 16,
            backgroundColor: '#DCDCDC',
          }}>
          {/* Calories and Favourite */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            {/* calories */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../assets/icons/calories.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 2,
                }}>
                {foodItems.calories} calories
              </Text>
            </View>

            {/* Favorite */}
            <Image
              source={require('../../assets/icons/love.png')}
              style={{
                width: 20,
                height: 20,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 10,
                tintColor: foodItems?.isFavourite ? '#FF6347' : '#000000',
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 180,
                height: 180,
              }}
              source={foodItems.image}></Image>
          </View>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000000',
            fontSize: 25,
            marginTop: 10,
          }}>
          {foodItems.name}
        </Text>

        <Text
          style={{
            fontSize: 14,
            marginTop: 10,
          }}>
          {foodItems.detailDescription}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TextRatingButton
            ContainerStyle={{
              width: '25%',
              height: 40,
              alignItems: 'center',
              borderRadius: 6,
              backgroundColor: '#FF6347',
            }}
            icon={require('../../assets/icons/star.png')}
            iconStyle={{
              tintColor: '#ffffff',
            }}
            label={foodItems.rating}
            labelStyle={{
              color: '#ffffff',
              fontWeight: 'bold',
              marginLeft: 5,
            }}
            onPress={() => console.log('')}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../../assets/icons/clock.png')} />
            <Text
              style={{
                color: '#000000',
                fontSize: 15,
                marginLeft: 10,
              }}>
              {' '}
              30 min{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Image source={require('../assets/icons/clock.png')} /> */}

            <Text
              style={{
                color: '#000000',
                fontSize: 15,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              {' '}
              ${' '}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 15,
              }}>
              {' '}
              Free shipping{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#000000',
              fontWeight: 'bold',
            }}>
            Size:
          </Text>
          {dummyData.sizes.map((item, index) => {
            return (
              <TextButton
                label={item.size + '"'}
                labelStyle={{
                  fontSize: 16,
                }}
                buttonContainerStyle={{
                  width: 60,
                  height: 60,
                  marginLeft: 15,
                  alignItems: 'center',
                  borderRadius: 6,
                  backgroundColor: item.id == size ? '#FF6347' : '#DCDCDC',
                }}
                onPress={() => setSize(item.id)}></TextButton>
            );
          })}
        </View>

        <View
          style={{
            borderBottomColor: '#DCDCDC',
            borderBottomWidth: 1,
            marginTop: 20,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require('../../assets/images/logo.png')}
          />

          <View
            style={{
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              {dummyData.myProfile.name}
            </Text>
            <Text>{dummyData.myProfile.address}</Text>
          </View>

          {/* Rating */}

          <Rating
            rating={5}
            iconStyle={{
              marginLeft: 8,
            }}></Rating>
        </View>

        <View
          style={{
            borderBottomColor: '#DCDCDC',
            borderBottomWidth: 1,
            marginTop: 20,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            height: 120,
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 4,
            justifyContent: 'space-between',
          }}>
          <AddMinusButton
            ContainerStyle={{}}
            testID="addToCartMinus"
            value={qty}
            onAdd={() => setQty(qty + 1)}
            onMinus={() => {
              if (qty > 1) {
                setQty(qty - 1);
              }
            }}></AddMinusButton>

          <TextButton
            label={'Buy Now    $15.99'}
            labelStyle={{
              fontSize: 16,
            }}
            buttonContainerStyle={{
              width: 160,
              height: 50,
              marginLeft: 15,
              alignItems: 'center',
              borderRadius: 6,
              backgroundColor: '#FF6347',
            }}
            onPress={() => navigation.navigate("myCart")}></TextButton>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      <ScrollView>
        {/* Food Detail */}
        {renderFoodDetail()}
      </ScrollView>
    </View>
  );
};
export default FoodDetail;
