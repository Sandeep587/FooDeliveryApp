import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const TwoPointSlider = ({values, min, max,prefix, postfix, onValuesChange}) => {
  return (
    <MultiSlider
      value={values}
      sliderLength={Dimensions.get('window').width - 32 - 30}
      min={min}
      max={max}
      step={1}
      minMarkerOverlapDistance={10}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: '#FF6347',
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
      }}
      customMarker={e => {
        return (
          <View
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: '#ffffff',
                backgroundColor: '#FF6347',
                ...styles,
              }}/>
            <Text
              style={{
                marginTop: 5,
                color: '#000000',
              }}>
              {prefix}{e.currentValue}
              {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={values => onValuesChange(values)}
    />
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});
export default TwoPointSlider;
