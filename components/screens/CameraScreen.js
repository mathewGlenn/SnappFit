import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-pytorch-core';
import classifyImage from '../logic/ImageClassifier';
import {useNavigation} from '@react-navigation/native';
import realm from '../realm';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      });
    });
  };

  const saveAsync = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      alert('Data saved');
    } catch (e) {
      alert('failed to save');
    }
  };

  const [label, setLabel] = useState(
    'Capture a whole body image or choose an image from the gallery.',
  );
  const [isVisibleDiagnosis, setIsVisibleDiagnosis] = useState(false);

  async function handleImage(image) {
    const result = await classifyImage(image);

    setLabel(result);
    setIsVisibleDiagnosis(true);

    //release image from memory
    image.release();
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

        <TouchableOpacity style={isVisibleDiagnosis ? {} : {display: 'none'}}>
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
              );
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
