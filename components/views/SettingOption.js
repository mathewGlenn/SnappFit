import React from "react";

import { TouchableOpacity, Text, Image, View } from "react-native";

export default function SettingOption(props){

    return (
        <TouchableOpacity
        onPress={props.onPress}
        style={{marginTop: 20, marginLeft: 20, flexDirection: 'row'}}>
        <Image source={props.image} style={{height: 25, width: 25}}></Image>
        <Text
          style={{
            color: '#1C1D1D',
            fontFamily: 'montserrat_semi_bold',
            fontSize: 17,
            marginStart: 20,
          }}>
          {props.text}
        </Text>

        <Image
          source={require('../../assets/images/ic_arrow_no_tail.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginLeft: 'auto',
            marginRight: 20,
          }}></Image>
      </TouchableOpacity>
    )
}