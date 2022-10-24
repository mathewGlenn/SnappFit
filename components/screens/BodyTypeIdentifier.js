import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-pytorch-core';
import classifyImage from '../logic/ImageClassifier';
import {useNavigation} from '@react-navigation/native';


export default function BodyTypeIdentifier({route}) {

  const navigation = useNavigation();

var mLabel = 'Capture a whole body image or choose an image from the gallery.'
  const [label, setLabel] = useState(
    mLabel
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
                setIsVisibleDiagnosis(false);
                setLabel(mLabel)
            }}>
            {'Capture Again'}
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
