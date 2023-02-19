import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import VerticalFoodCard from '../../customComponents/VerticalFoodCard';
import dummyData from '../../Constants/dummyData';

const FavouriteScreen = ({navigation}) => {
  const [fav, setFav] = useState(dummyData.MyCart);
  let favDate = dummyData?.MyCart?.find(a => a.isFavourite == true);
  console.log('data', fav);

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
            MY FAVOURITE
          </Text>
        </View>
        
      </View>
    );
  }
  function renderFavItemList() {
    console.log('fav', fav);

    return (
      <FlatList
        data={fav}
        keyExtractor={item => `${item.id}`}
        showVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
            if(item.isFavourite==true){
                return (
                    <View
                      style={{
                        flexDirection:'row',
                        height: 120,
                        backgroundColor: '#DCDCDC',
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 6,
                        justifyContent:'space-between'
                      }}>
                      <View style={{flex:1,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={{
                            height: 100,
                            width: 100,
                            alignSelf:'center',
                            top:10
                          }}
                          source={item.image}></Image>
        
                        <View>
                          <Text style={{
                              fontWeight:'bold',
                              color:'#000000',
                              fontSize:18
                          }}>{item.name}</Text>
                          <Text
                          style={{
                            fontWeight:'bold',
                            color:'#000000',
                            fontSize:18}}
                          >${item.price}</Text>
                        </View>
                      </View>
        
                      <View style={{flexDirection:'row',right:10 }}>
                          <Image
                          source={require('../../assets/icons/calories.png')}
                          style={{
                              height:40,
                              width:40,
                              top:10 , 
                          }}/>
                          <Text style={{
                              top:15,
                          }}>{item.calories} Calories</Text>
                      </View>
                    </View>
                  );
            }
         

          // <VerticalFoodCard
          // containerStyle={{
          //     marginLeft: index == 0 ? 16 : 18,
          //     marginRight: index == fav.length - 1 ? 16 : 0,
          //   }}
          //   item={item}
          //   onPress={() =>
          //     console.log('Vertical Food Card')
          //   }
          // ></VerticalFoodCard>
        }}></FlatList>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
          {/* Header */}
          {renderHeader()}
          {/* Favourite Items */}
      {renderFavItemList()}
    </View>
  );
};
export default FavouriteScreen;
