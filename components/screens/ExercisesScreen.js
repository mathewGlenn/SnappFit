import React from 'react';
import {StatusBar, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {Image, Text} from 'react-native';

import {Excercises} from '../../assets/strings/Strings';
import CircleBackButton from '../views/CircleBackButton';

import {useNavigation} from '@react-navigation/native';

export default function ExercisesScreen({route}) {
  const exerciseType = route.params.exerType;

  let title;
  let content;
  let imagePath;

  let beginner_outdoor_content,
    intermediate_outdoor_content,
    advance_outdoor_content,
    beginner_indoor_content,
    intermediate_indoor_content,
    advance_indoor_content,
    beginner_outdoor_title,
    intermediate_outdoor_title,
    advance_outdoor_title,
    beginner_indoor_title,
    intermediate_indoor_title,
    advance_indoor_title

  if (exerciseType == 'flexibility') {
    title = 'Flexibility Excercises';
    imagePath = require('../../assets/images/img_flexibility.png');
    beginner_indoor_title = Excercises.flexibility.indoor.beginner.title;
    beginner_indoor_content = Excercises.flexibility.indoor.beginner.description;
    intermediate_indoor_title = Excercises.flexibility.indoor.intermediate.title;
    intermediate_indoor_content = Excercises.flexibility.indoor.intermediate.description;
    advance_indoor_title = Excercises.flexibility.indoor.advance.title;
    advance_indoor_content = Excercises.flexibility.indoor.advance.description
    beginner_outdoor_title = Excercises.flexibility.outdoor.beginner.title;
    beginner_outdoor_content = Excercises.flexibility.outdoor.beginner.description;
    intermediate_outdoor_title = Excercises.flexibility.outdoor.intermediate.title;
    intermediate_outdoor_content = Excercises.flexibility.outdoor.intermediate.description
    advance_outdoor_title = Excercises.flexibility.outdoor.advance.title;
    advance_outdoor_content = Excercises.flexibility.outdoor.advance.description;
  } else if (exerciseType == 'resistance') {
    title = 'Resistance Exercises';
    imagePath = require('../../assets/images/img_resistance.png');
    beginner_indoor_title = Excercises.resistance.indoor.beginner.title;
    beginner_indoor_content = Excercises.resistance.indoor.beginner.description;
    intermediate_indoor_title = Excercises.resistance.indoor.intermediate.title;
    intermediate_indoor_content = Excercises.resistance.indoor.intermediate.description;
    advance_indoor_title = Excercises.resistance.indoor.advance.title;
    advance_indoor_content = Excercises.resistance.indoor.advance.description
    beginner_outdoor_title = Excercises.resistance.outdoor.beginner.title;
    beginner_outdoor_content = Excercises.resistance.outdoor.beginner.description;
    intermediate_outdoor_title = Excercises.resistance.outdoor.intermediate.title;
    intermediate_outdoor_content = Excercises.resistance.outdoor.intermediate.description
    advance_outdoor_title = Excercises.resistance.outdoor.advance.title;
    advance_outdoor_content = Excercises.resistance.outdoor.advance.description;
  } else if (exerciseType == 'cardio') {
    title = 'Cardiovascular Exercises';
    imagePath = require('../../assets/images/img_cardio.png');
    beginner_indoor_title = Excercises.cardio.indoor.beginner.title;
    beginner_indoor_content = Excercises.cardio.indoor.beginner.description;
    intermediate_indoor_title = Excercises.cardio.indoor.intermediate.title;
    intermediate_indoor_content = Excercises.cardio.indoor.intermediate.description;
    advance_indoor_title = Excercises.cardio.indoor.advance.title;
    advance_indoor_content = Excercises.cardio.indoor.advance.description
    beginner_outdoor_title = Excercises.cardio.outdoor.beginner.title;
    beginner_outdoor_content = Excercises.cardio.outdoor.beginner.description;
    intermediate_outdoor_title = Excercises.cardio.outdoor.intermediate.title;
    intermediate_outdoor_content = Excercises.cardio.outdoor.intermediate.description
    advance_outdoor_title = Excercises.cardio.outdoor.advance.title;
    advance_outdoor_content = Excercises.cardio.outdoor.advance.description;
  }

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />

        <ImageBackground source={imagePath} style={styles.image}>
          <CircleBackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>

        

        <Text style={styles.subtitle1}>{'Indoor'}</Text>
        <Text style={styles.subtitle2}>{'Beginner'}</Text>
        <Text style={styles.subtitle3}>{beginner_indoor_title}</Text>
        <Text style={styles.textContent}>{beginner_indoor_content}</Text>
        <Text style={styles.subtitle2}>{'Intermediate'}</Text>
        <Text style={styles.subtitle3}>{intermediate_indoor_title}</Text>
        <Text style={styles.textContent}>{intermediate_indoor_content}</Text>
        <Text style={styles.subtitle2}>{'Advance'}</Text>
        <Text style={styles.subtitle3}>{advance_indoor_title}</Text>
        <Text style={styles.textContent}>{advance_indoor_content}</Text>

        <Text style={styles.subtitle1}>{'Outdoor'}</Text>
        <Text style={styles.subtitle2}>{'Beginner'}</Text>
        <Text style={styles.subtitle3}>{beginner_outdoor_title}</Text>
        <Text style={styles.textContent}>{beginner_outdoor_content}</Text>
        <Text style={styles.subtitle2}>{'Intermediate'}</Text>
        <Text style={styles.subtitle3}>{intermediate_outdoor_title}</Text>
        <Text style={styles.textContent}>{intermediate_outdoor_content}</Text>
        <Text style={styles.subtitle2}>{'Advance'}</Text>
        <Text style={styles.subtitle3}>{advance_outdoor_title}</Text>
        <Text style={styles.textContent}>{advance_outdoor_content}</Text>

        <View style={{height:70}}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: '100%',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    position:'absolute',
    bottom:0,
    width:'100%',
    textAlign:'center',
    marginBottom:40,
    color:'#fff'
  },
  textContent: {
    color: '#444',
    marginHorizontal: 15,
    textAlign: 'justify',
    lineHeight: 25,
    marginTop:5
  },
  subtitle1: {
    color: '#444',
    fontFamily: 'Montserrat-Bold',
    fontSize: 50,
    marginTop: 20,
    marginHorizontal: 15,
  },
  subtitle2: {
    color: '#444',
    fontFamily: 'Montserrat-Bold',
    fontSize: 27,
    marginTop: 10,
    marginHorizontal: 15,
  },
  subtitle3: {
    color: '#444',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginTop: 15,
    marginHorizontal: 15,
  },

});
