import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  SectionList,
  Dimensions,
} from 'react-native';
import dummyData from '../../Constants/dummyData';
import HorizontalFoodCard from '../../customComponents/HorizontalFoodCard';
import VerticalFoodCard from '../../customComponents/VerticalFoodCard';
import FilterModal from './FilterModal';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';

const HomeScreen = ({navigation}:any) => {
  console.log("nav",navigation)
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  //Handler
  function handleChangeCategory(categoryId, menuTypeId) {
    //Select the popular menu
    let selectedPopular = dummyData.menu.find(a => a.name == 'Popular');

    //Select the recommended menu
    let selectedRecommended = dummyData.menu.find(a => a.name == 'Recommended');

    //Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);

    //set the popular menu based in the categoryId
    setPopular(
      selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
    );
    //set the recommended menu base on the categoryId
    setRecommends(
      selectedRecommended?.list.filter(a => a.categories.includes(categoryId)),
    );
    //set the menu based on the categoryId
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
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
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
          
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require('../../assets/icons/menu.png')}
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
            HOME
          </Text>
        </View>

        {/* right */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 45,
              width: 45,
              marginLeft: 10,
              alignSelf: 'center',
            }}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          backgroundColor: '#DCDCDC',
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 6,
          marginTop: 10,
        }}>
        {/* left */}
        <View
          style={{
            justifyContent: 'center',
            borderColor: '#DCDCDC',
            borderWidth: 2,
            borderRadius: 12,
            width: 45,
            marginLeft: 10,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require('../../assets/icons/search.png')}
          />
        </View>
        {/* middle */}

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <TextInput placeholder="Search food..."></TextInput>
        </View>

        {/* right */}
        <TouchableOpacity
          onPress={() => setShowFilterModal(true)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              marginRight: 10,
              alignSelf: 'center',
            }}
            source={require('../../assets/icons/filter.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMenuType() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              marginLeft: 16,
              marginRight: index == dummyData.menu.length - 1 ? 16 : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}>
            <Text
              style={{
                color: selectedMenuType == item.id ? '#FF6347' : '#000000',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderRecommendedSection() {
    return (
      <View
        style={{
          marginTop: 20,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              flex: 0.8,
              marginLeft: 20,
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Recommended
          </Text>
          <TouchableOpacity
            onPress={() => console.log('Show All')}
            style={{
              flex: 0.2,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#FF6347',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginTop: 10}}
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: Dimensions.get('window').width * 0.85,
                marginLeft: index == 0 ? 16 : 18,
                marginRight: index == recommends.length - 1 ? 16 : 0,
                paddingRight: 12,
                alignItems: 'center',
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() =>
                console.log('Horizontal Food Card')
              }></HorizontalFoodCard>
          )}
        />
      </View>
    );
  }

  function renderPopularNearYou() {
    return (
      <View
        style={{
          marginTop: 20,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              flex: 0.8,
              marginLeft: 20,
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Popular Near You
          </Text>
          <TouchableOpacity
            onPress={() => console.log('Show All')}
            style={{
              flex: 0.2,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#FF6347',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginTop: 10}}
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? 16 : 18,
                marginRight: index == popular.length - 1 ? 16 : 0,
              }}
              item={item}
              onPress={() =>
                console.log('Vertical Food Card')
              }></VerticalFoodCard>
          )}
        />
      </View>
    );
  }

  function renderFoodCategory() {
    return (
      <View>
        <FlatList
          style={{marginTop: 10}}
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedCategoryId);
              }}
              style={{
                flexDirection: 'row',
                height: 55,
                marginTop: 16,
                marginLeft: index == 0 ? 16 : 18,
                marginRight: index == dummyData.categories.length - 1 ? 16 : 0,
                paddingHorizontal: 8,
                borderRadius: 16,
                backgroundColor:
                  selectedCategoryId == item.id ? '#FF6347' : '#DCDCDC',
              }}>
              <Image
                source={item.icon}
                style={{
                  height: 50,
                  width: 50,
                  marginTop: 5,
                }}></Image>

              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 16,
                  marginRight: 5,
                  color: selectedCategoryId == item.id ? '#FFFFFF' : '#000000',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  function renderDeliveryTo() {
    return (
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 16,
        }}>
        <Text
          style={{
            color: '#FF6347',
            fontWeight: 'bold',
          }}>
          DELIVERY TO
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {dummyData?.myProfile?.address}
          </Text>

          <Image
            style={{
              height: 40,
              width: 40,
              tintColor: '#FF6347',
            }}
            source={require('../../assets/icons/dropdown.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      {renderHeader()}
      {/* Search */}
      {renderSearch()}

      {/* FilterModal */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Delivery To */}
            {renderDeliveryTo()}
            {/* Food Category */}
            {renderFoodCategory()}
            {/* Popular Near You */}
            {renderPopularNearYou()}
            {/* Recommended Section */}
            {renderRecommendedSection()}
            {/* Menu Type */}
            {renderMenuType()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: 12,
                marginBottom: 16,
                marginTop: 10,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() =>
                console.log('HorizontalFoodCard')
              }></HorizontalFoodCard>
          );
        }}
      />

      <View
        style={{
          height: 10,
          justifyContent: 'flex-end',
        }}>
        {/* Shadow */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#00000000', '#DCDCDC']}
          style={{
            position: 'absolute',
            top: -8,
            left: 0,
            right: 0,
            height: 50,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />

        {/* BottomTabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#ffffff',
          }}>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       