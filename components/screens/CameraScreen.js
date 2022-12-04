import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-pytorch-core';
import classifyImage from '../logic/ImageClassifier';
import {useNavigation} from '@react-navigation/native';
import realm from '../realm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

export default function CameraScreen({route}) {
  const user_name = route.params.name;
  const age = route.params.age;
  const sex = route.params.sex;
  const weight = route.params.weight;
  const height = route.params.height;

  const navigation = useNavigation();
  const saveUserInfo = (
    recordID,
    name,
    age,
    sex,
    weight,
    height,
    body_type,
    bmr
  ) => {
    realm.write(() => {
      const User = realm.create('UserInfo', {
        recordID: recordID,
        name: name,
        age: age,
        sex: sex,
        weight: weight,
        height: height,
        body_type: body_type,
        bmr
      });
    });
  };

  const updateInfo = (
    age,
    sex,
    weight,
    height,
    body_type,
    bmr
  ) => {
    let update = realm.objects('UserInfo');
    realm.write(() => {
      update[0].age = age,
      update[0].sex = sex,
      update[0].weight = weight,
      update[0].height = height,
      update[0].body_type = body_type
      update[0].bmr = bmr
    });
  };

  const saveAsync = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      alert('failed to save data');
    }
  };

  const [label, setLabel] = useState(
    'Capture a whole body image or choose an image from the gallery.',
  );
  const [isVisibleDiagnosis, setIsVisibleDiagnosis] = useState(false);
  const [isFirstTimeUse, setIfFirstTimeUse] = useState(true);

  async function handleImage(image) {
    const result = await classifyImage(image);

    setLabel(result);
    setIsVisibleDiagnosis(true);

    //release image from memory
    image.release();
  }

  
  const checkIfFirstTimeUse = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstTimeUser');

      if (value === 'false') {
        setIfFirstTimeUse(false);
      } else {
        setIfFirstTimeUse(true);
      }
    } catch (e) {
      alert('failed to fetch data');
    }
  };

  useEffect(() => {
    checkIfFirstTimeUse();
  });

  var BMR = 0;

  if(sex === 'Male'){
    BMR = (10*weight) + (6.25*height) - (5*age) + 5
  }else if(sex === 'Female'){
    BMR = (10*weight) + (6.25*height) - (5*age) - 161
  }
  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar translucent backgroundColor="transparent" />
      <Camera style={[StyleSheet.absoluteFill]} onCapture={handleImage} />

      <View style={styles.labelContainer}>
        <Text
          style={
            isVisibleDiagnosis
              ? {color: '#444', fontSize: 15}
              : {display: 'none'}
          }>
          {'Diagnosis:'}
        </Text>
        <Text
          style={[
            isVisibleDiagnosis ? {fontSize: 20} : {fontSize: 15},
            {color: '#444', fontFamily: 'montserrat_medium'},
          ]}>
          {label}
        </Text>

        <TouchableOpacity  style={isVisibleDiagnosis ? {} : {display: 'none'}}>
          <Text
            style={{
              color: '#444444',
              fontSize: 15,
              textAlign: 'center',
              marginTop: 10,
              backgroundColor: '#4CD964',
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => {

              const mSquared = Math.pow(height / 100, 2);
              const BMI = weight / mSquared;

              const dateNow = Date.now();

              firestore().collection('history')
              .add({
                weight: weight,
                bmi: BMI,
                body_type: label,
                date: dateNow
              })
              .then(()=>{
                console.log('history added')
              })

              if(isFirstTimeUse){
                navigation.navigate('FitnessInfo');
                saveAsync('@firstTimeUser', 'false');
                saveUserInfo(
                  3,
                  user_name,
                  Number(age),
                  sex,
                  Number(weight),
                  Number(height),
                  label,
                  BMR
                );
                return
              }

              navigation.navigate('FitnessInfo', {bmr: BMR});
              updateInfo(
                Number(age),
                sex,
                Number(weight),
                Number(height),
                label,
                BMR
              );

              alert('Your data has been updated');
            }}>
            {'Continue'}
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    padding: 20,
    margin: 20,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
