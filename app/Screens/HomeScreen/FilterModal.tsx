import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import constants from '../../Constants/constants';
import TwoPointSlider from '../../customComponents/TwoPointSlider';
import TextButton from '../../customComponents/TextButton';
import TextIconButton from '../../customComponents/TextIconButton';
import {styles} from './styles';

const FilterModal = ({isVisible, onClose}) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [rating, setRating] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const ModalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Dimensions.get('window').height,
      Dimensions.get('window').height - 640,
    ],
  });

  function renderDistance() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000000',
            marginTop: 5,
          }}>
          Distance
        </Text>

        <View
          style={{
            alignItems: 'center',
          }}>
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            prefix=""
            postfix="km"
            onValuesChange={values => console.log(values)}></TwoPointSlider>
        </View>
      </View>
    );
  }

  function renderDeliveryTime() {
    return (
      <View
        style={{
          flexDirection: 'column',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000000',
            marginTop: 5,
          }}>
          Delivery Time
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                label={item.label}
                labelStyle={{
                  color: item.id == deliveryTime ? '#ffffff' : '#000000',
                  fontWeight: 'bold',
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 6,
                  backgroundColor:
                    item.id == deliveryTime ? '#FF6347' : '#DCDCDC',
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderPricingRange() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000000',
            marginTop: 10,
          }}>
          Pricing Range
        </Text>

        <View
          style={{
            alignItems: 'center',
          }}>
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            prefix="$"
            postfix=""
            onValuesChange={values => console.log(values)}></TwoPointSlider>
        </View>
      </View>
    );
  }

  function renderRating() {
    return (
      <View
        style={{
          flexDirection: 'column',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000000',
            marginTop: 5,
          }}>
          Rating
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                ContainerStyle={{
                  flex: 1,
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 6,
                  backgroundColor: item.id == rating ? '#FF6347' : '#DCDCDC',
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == rating ? '#ffffff' : '#000000',
                  fontWeight: 'bold',
                }}
                icon={require('../../assets/icons/star.png')}
                iconStyle={{
                  tintColor: item.id == rating ? '#ffffff' : '#000000',
                }}
                onPress={() => setRating(item.id)}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderTags() {
    return (
      <View
        style={{
          flexDirection: 'column',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000000',
            marginTop: 5,
          }}>
          Tags
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? '#ffffff' : '#000000',
                  fontWeight: 'bold',
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: 6,
                  backgroundColor: item.id == tags ? '#FF6347' : '#DCDCDC',
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}></View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: ModalY,
            width: '100%',
            height: '100%',
            padding: 16,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            backgroundColor: '#ffffff',
          }}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 0.8,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#000000',
                }}>
                Filter Your Search
              </Text>
            </View>

            <View
              style={{
                flex: 0.2,
              }}>
              <TouchableOpacity
                onPress={() => setShowFilterModal(false)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#DCDCDC',
                  borderWidth: 2,
                  borderRadius: 12,
                  width: 45,
                  marginLeft: 10,
                  marginTop: 5,
                  padding: 8,
                }}>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    tintColor: '#000000',
                  }}
                  source={require('../../assets/icons/cancel.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}>
            {/* Distance */}
            {renderDistance()}

            {/* DeliveryTime */}
            {renderDeliveryTime()}

            {/* DeliveryTime */}
            {renderPricingRange()}

            {/* Rating */}
            {renderRating()}

            {/* Tags */}
            {renderTags()}
          </ScrollView>
        </Animated.View>
      </View>
      {/* Apply Button */}
      <TouchableOpacity onPress={() => setShowFilterModal(false)} style={styles.button}>
        <Text style={styles.buttonTxt}>Apply Filter</Text>
      </TouchableOpacity>
    </Modal>
  );
};
export default FilterModal;
