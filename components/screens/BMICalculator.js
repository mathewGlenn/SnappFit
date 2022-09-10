import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function BMICalculator() {

    const navigation = useNavigation();

    const [weight, onChangeWeight] = useState("");
    const [height, onChangeHeight] = useState("");

    const [yourBMI, setYourBMI] = useState("");
    const [yourBMIStatus, setyourBMIStatus] = useState("");

      const calculateBMI = () => {

        const mSquared = Math.pow((Number(height)/100), 2)
        const BMI = Number(weight)/mSquared;
      
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


          setYourBMI('BMI: ' + BMI.toFixed(2));
          setyourBMIStatus('Your BMI is ' + BMI.toFixed(2) + '.' + 'This is considered ' + BMIStatus + '.');

      }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" />

      <View style={styles.titleView}>
        <TouchableOpacity
        onPress={()=>{navigation.goBack()}}>
          <Image
            style={{height: 22, width: 22, resizeMode: 'contain'}}
            source={require('../../assets/images/ic_arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>{'BMI Calculator'}</Text>
      </View>

      <Text
        style={{
          color: '#444444',
          marginHorizontal: 20,
          marginTop: 15,
          textAlign: 'justify',
        }}>
        {
          'Body mass index (BMI) is a medical screening tool that measures the ratio of your height to your weight to estimate the amount of body fat you have.\n\nFill the information below to calculate your BMI.'
        }
      </Text>

      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#8A8A8A"
          placeholder="Weight(kg)"
          onChangeText={onChangeWeight}
          value={weight}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#8A8A8A"
          placeholder="Height(cm)"
          onChangeText={onChangeHeight}
          value={height}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#4CD964',
            marginVertical: 50,
            width: '70%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={()=>{calculateBMI()}}>
          <Text style={{color: '#444444', fontSize: 15, fontWeight: '500'}}>
            Calculate BMI
          </Text>
        </TouchableOpacity>

        <View style={{height:2, backgroundColor:"#666", width:'80%'}}></View>

        <View style={{ marginHorizontal:20, marginTop:20}}>
            <Text style={{fontSize:20,fontFamily:'montserrat_semi_bold', color:"#444"}}>{yourBMI}</Text>
            <Text style={{color:"#444", marginTop:15}}>{yourBMIStatus}</Text>
            </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 20,
    fontFamily: 'montserrat_semi_bold',
    color: '#444444',
    marginLeft: 20,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20,
    marginTop: 20,
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
});
