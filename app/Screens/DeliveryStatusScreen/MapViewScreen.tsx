import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import constants from '../../Constants/constants';
import dummyData from '../../Constants/dummyData';
import utils from '../../utils/utils';
const MapViewScreen = () => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReaday] = useState(false);
  const [duration, setDuration] = useState('');

  useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };
    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);
    setRegion(initialRegion);
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}>
        {fromLoc && (
          <Marker
            key={'FromLoc'}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={require('../../assets/icons/right_arrow.png')}
            rotation={angle}
            anchor={{x: 0.5, y: 0.5}}
          />
        )}

        <MapViewDirection
          origin={fromLoc}
          destination={toLoc}
          apikey={'AIzaSyBhVUcIF04_cGnZoyHQES5-lQ15bc2PCpI'}
          strokeWidth={5}
          strokeColor={'#ff6347'}
          optimizeWaypoints={true}
          onReady={result => {
            setDuration(Math.ceil(result.duration));
            if (!isReady) {
              mapView.current.fitToCoordinates(result.coordinate, {
                edgePadding: {
                  right: Dimensions.get('window').width * 0.1,
                  bottom: 400,
                  left: Dimensions.get('window').width * 0.1,
                  top: Dimensions.get('window').width * 0.1,
                },
              });

              if (result.coordinate.length > 2) {
                let angle = utils.calculateAngle(result.coordinate);
                setAngle(angle);
              }
              setIsReaday(true);
            }
          }}></MapViewDirection>
      </MapView>
    );
  }

  function renderFooterInfo() {
    return (
      <View
        style={{
          padding: 6,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#ffffff',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/icons/clock.png')} />
          <View
            style={{
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#000000',
                fontWeight: 'normal',
              }}>
              Your delivery time
            </Text>

            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              8 min
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../assets/icons/gps.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
          <View
            style={{
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#000000',
                fontWeight: 'normal',
              }}>
              Your delivery time
            </Text>

            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              {dummyData.myProfile.address}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 65,
            backgroundColor: '#ff6347',
            marginTop: 20,
            borderRadius: 6,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              jusitfyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{width: 40, height: 40}}
            />
            <View>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 15,
                  marginLeft: 10,
                }}>
                {dummyData.myProfile.name}
              </Text>

              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                Delivery Man
              </Text>
            </View>
          </View>
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            marginRight:10
          }}>
          <Image
              source={require('../../assets/icons/call.png')}
              style={{width: 40, height: 40}}/>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {/* Map */}
      {renderMap()}
      {/* Header Button */}

      {/* Footer Info */}
      {renderFooterInfo()}
    </View>
  );
};
export default MapViewScreen;
