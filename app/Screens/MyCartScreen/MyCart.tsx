import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import CardCountIcon from '../../customComponents/CardCountIcon';
import {SwipeListView} from 'react-native-swipe-list-view';
import dummyData from '../../Constants/dummyData';
import {styles} from './styles';
import AddMinusButton from '../../customComponents/AddMinusButton';
import TextIconButton from '../../customComponents/TextIconButton';
import LinearGradient from 'react-native-linear-gradient';

const MyCart = ({navigation}) => {
  const [myCartList, setMyCartList] = useState(dummyData.MyCart);
  const [qty, setQty] = useState(1);

  function updateQuantityHandler(newQty, id) {
    const newMycartList = myCartList.map(cl =>
      cl.id === id ? {...cl, qty: newQty} : cl,
    );

    setMyCartList(newMycartList);
  }

  function removeMyCartHandler(id) {
    let newMyCartList = [...myCartList];
    const index = newMyCartList.findIndex(cart => cart.id === id);
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  }

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
            MY CART
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

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          marginTop: 10,
          paddingHorizontal: 16,
          paddingBottom: 32,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: '#DCDCDC',
                ...styles.cartItemContainer,
              }}>
              <View
                style={{
                  width: 90,
                  height: 100,
                  marginLeft: -10,
                }}>
                <Image
                  source={data.item.image}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 10,
                  }}></Image>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#000000',
                  }}>
                  {data.item.name}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#ff6347',
                  }}>
                  ${data.item.price}
                </Text>
              </View>
              <AddMinusButton
                ContainerStyle={{}}
                value={data.item.qty}
                onAdd={() =>
                  updateQuantityHandler(data.item.qty + 1, data.item.id)
                } //setQty(qty + 1)
                onMinus={() => {
                  if (data.item.qty > 1) {
                    //setQty(qty - 1);
                    updateQuantityHandler(data.item.qty - 1, data.item.id);
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem={(data, roadMap) => (
          <TextIconButton
            ContainerStyle={{
              flex: 1,
              justifyContent: 'flex-end',
              backgroundColor: '#ff6347',
              ...styles.cartItemContainer,
            }}
            label={''}
            labelStyle={{}}
            icon={require('../../assets/icons/bin.png')}
            iconStyle={{
              marginRight: 10,
              tintColor: '#ffffff',
            }}
            onPress={() => removeMyCartHandler(data.item.id)}></TextIconButton>
        )}></SwipeListView>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#00000000', '#DCDCDC']}
          style={{
            position: 'absolute',
            top: -10,
            left: 0,
            right: 0,
            height: 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            paddingHorizontal: 12,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#ffffff',
          }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                color: '#000000',
              }}>
              SubTotal
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              $37.97
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginBottom: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'noraml',
                color: '#000000',
              }}>
              Shipping fee
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              $0.00
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: '#DCDCDC',
              borderBottomWidth: 1,
            }}></View>

          <View
            style={{
              marginTop: 10,
              marginBottom: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              $37.90
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>navigation.navigate("myCard")}
            style={styles.button}>
            <Text style={styles.buttonTxt}>Place Your Order</Text>
          </TouchableOpacity>
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

      <ScrollView>
        {renderCartList()}

        {/* Footer Shipping Fees */}
        {renderFooter()}
      </ScrollView>
      {/* cart List */}
    </View>
  );
};
export default MyCart;
