import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function CircleBackButton() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffffff',
        height: 35,
        width: 35,
        borderRadius: 256 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin:20
      }}>
      <Image
        source={require('../../assets/images/ic_arrow_back.png')}
        style={{height: 20, width: 20}}></Image>
    </TouchableOpacity>
  );
}
