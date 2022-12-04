import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import realm, {getUserInfo} from '../realm';
import footStairImg from '../../assets/images/foot_stair.png';
import BottomNav from '../BottomNav';

import { useNavigation } from '@react-navigation/native';

export default function FitnessInfoScreen({route}) {

  const name = getUserInfo().name;
  const weight = getUserInfo().weight;
  const height = getUserInfo().height;
  const body_type = getUserInfo().body_type;
  const BMR = getUserInfo().bmr;

  

  const mSquared = Math.pow((height/100), 2)
  const BMI = weight/mSquared;

    var BMIStatus = '';
  
    if (BMI < 18.5) {
      BMIStatus = 'Underweight';
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      BMIStatus = 'Normal';
    } else if (BMI >= 25 && BMI <= 29.9) {
      BMIStatus = 'Overweight';
    } else if (BMI > 30) {
      BMIStatus = 'Obese';
    }

  const navigation = useNavigation();

  var suggestedGoal = '';
  var suggestedGoalMoreInfo = '';
  var suggestedWorkout = '';

  if (BMI < 18.5) {
    suggestedGoal = 'Gain weight';
    suggestedWorkout = 'Resistance Training'

  } else if (BMI >= 18.5 && BMI <= 24.9) {
    suggestedGoal = 'Maintain weight';
    suggestedWorkout = 'Flexibility Training'

  } else if (BMI >= 25 && BMI <= 29.9) {
    suggestedGoal = 'Lose weight';
    suggestedWorkout = 'Cardiovascular Training'

  } else if (BMI > 30) {
    suggestedGoal = 'Lose weight';

  }

  return (
    <View
      style={styles.container}>
      <ScrollView>
        <View>
        <StatusBar translucent backgroundColor='transparent' />

          <ImageBackground
          source={footStairImg}
          style={{height:250}}>

            <View style={{height: '100%', justifyContent:'center', paddingHorizontal:30}}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Montserrat-Bold',
                color: '#ffffff',
              }}>
              {'Your\ncalculated\nfitness info'}
            </Text>
            </View>

          </ImageBackground>

          <View style={{marginHorizontal: 15, marginTop:20}}>

            <Text style={styles.subtitle}>{'BMI:'}</Text>
            <Text style={styles.value}>{BMI.toFixed(2)}</Text>
            <Text style={{color: '#444'}}>
              {'Your Body Mass Index is ' +
                BMI.toFixed(2) +
                '. This is considered ' +
                BMIStatus +
                '.'}
            </Text>

            <Text style={styles.subtitle}>{'Body Type:'}</Text>
            <Text style={styles.value}>{body_type}</Text>

            <Text style={styles.subtitle}>{'Suggested Goal:'}</Text>
            <Text style={styles.value}>{suggestedGoal}</Text>

            <Text style={styles.subtitle}>{'Suggested Calorie Intake:'}</Text>
            <Text style={styles.value}>{BMR + ' kCal/day '}</Text>

            <Text style={styles.subtitle}>{'Suggested Protein Intake:'}</Text>
            <Text style={styles.value}>{(0.8*weight).toFixed(2) + ' grams/day '}</Text>
            
            <Text style={styles.subtitle}>{'Suggested Carbs Intake:'}</Text>
            <Text style={styles.value}>{(4*weight).toFixed(2) + ' grams/day '}</Text>

            <Text style={styles.subtitle}>{'Suggested Workout:'}</Text>
            <Text style={styles.value}>{suggestedWorkout}</Text>
            
            {/* <Text style={{color:"#000"}}>{JSON.stringify(getUserInfo())}</Text> */}
          </View>

          <TouchableOpacity
          style={{
            marginStart:15,
            marginTop:40,
            width: '70%',
            height: 45,
            borderRadius: 10,
            flexDirection:"row",
            alignItems:'center'
          }}
          onPress={()=>{navigation.navigate('GetInfo', {name: name})}}>
          <Text  style={{color:"#444444", fontSize:15, fontWeight:"500"}}>{'Retake fitness test'}</Text>
          <Image style={{height:15, width:30, justifyContent:'center', resizeMode:"contain"}} source={require('../../assets/images/ic_arrow_forward.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginStart:15,
            marginBottom:20,
            width: '70%',
            height: 45,
            borderRadius: 10,
            flexDirection:"row",
            alignItems:'center',
          }}
          onPress={()=>{navigation.navigate('History', {name: name})}}>

          <Text  style={{color:"#444444", fontSize:15, fontWeight:"500"}}>{'View history'}</Text>
          <Image style={{height:15, width:30, justifyContent:'center', resizeMode:"contain"}} source={require('../../assets/images/ic_arrow_forward.png')}></Image>
        </TouchableOpacity>

        </View>
      </ScrollView>

      <BottomNav
      profileActive={true}
      homePressed = {()=>{navigation.navigate('Home')}}
      settingsPressed = {()=>{navigation.navigate('Settings')}}
      morePressed = {()=>navigation.navigate('More')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 42,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#E3E3E3',
    marginTop: 30,
    color: '#000',
    fontFamily: 'montserrat_semi_bold',
    fontSize: 17,
    paddingHorizontal: 10,
  },
  subtitle:{
    fontFamily:'Montserrat-Bold',
    fontSize:17,
    color:"#000000",
    marginTop:15
  },
  value:{
    fontSize:17,
    color:"#000000",
  }
});
