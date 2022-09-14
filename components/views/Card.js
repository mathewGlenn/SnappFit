import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Card(props) {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 20,
        marginHorizontal: 20,
        height: 110,
        backgroundColor: props.cardColor,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 15,
        elevation: 10,
      }}
      
      onPress={props.onPress}>
      <Text
        style={{
          fontSize: 17,
          color: '#ffffff',
          flex: 1,
          alignSelf: 'center',
          textAlign: 'center',
          padding: 10,
        }}>
        {props.text}
      </Text>

      <Image
        style={{
          flex: 1,
          height: '100%',
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}
        source={props.img}></Image>
    </TouchableOpacity>
  );
}

function ExercisesCard(props) {
  return (
    <TouchableOpacity style={{flex: 1, marginBottom: 20, elevation: 5}}>
      <ImageBackground
        style={{alignItems: 'center', justifyContent: 'center', height: 100}}
        imageStyle={{borderRadius: 10}}
        source={props.img}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'montserrat_semi_bold',
            color: '#ffffff',
          }}>
          {props.text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

function ToolsCard(props) {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
        borderRadius: 10,
        padding:5,
        marginRight:20
      }}
      onPress={props.onPress}>
      <Image
        style={{height: 25, marginBottom: 10, resizeMode: 'contain'}}
        source={props.img}></Image>
      <Text style={{textAlign:'center', color:"#1D1D1D", fontFamily:'montserrat_medium'}}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export {Card, ExercisesCard, ToolsCard};
