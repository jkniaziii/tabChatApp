import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { ColorPicker } from 'react-native-color-picker'
 
const Picker = () => {
    console.log('c0l0r')
  return(
  <ColorPicker
    onColorSelected={color => console.log(color)}
    hideSliders= {true}
    style={{flex: 1}}
  />
  )
}


export default Picker;