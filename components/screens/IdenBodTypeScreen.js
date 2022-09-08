import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import bodyTypeImg from "../../assets/images/sample_body_type.jpg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import realm from '../realm';


export default function IdenBodTypeScreen({route}) {

  const saveUserInfo = (recordID, name, age, sex, weight, height, body_type) =>{
    realm.write(() => {
      const User = realm.create('UserInfo', {
        recordID: recordID,
        name: name,
        age: age,
        sex: sex,
        weight: weight,
        height: height,
        body_type: body_type
      });
    });
  }

  const name = route.params.name;
  const age = route.params.age;
  const sex = route.params.sex;
  const weight = route.params.weight;
  const height = route.params.height;

  let dummy_body_type = "Mesomorph";


  const saveAsync = async (key, value) =>{
    try{
      await AsyncStorage.setItem(key, value)
      alert('Data saved')
    }catch(e){
      alert('failed to save')
    }
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <StatusBar backgroundColor="black" />

          <View style={{margin: 15}}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'montserrat_semi_bold',
                color: '#444',
              }}>
              {'Identify your\nBody Type'}
            </Text>

            <Text style={{color: '#444', marginTop: 10, fontSize: 16}}>
            Take a picture of your body above the waist just like the sample picture below. This will identify your body type.
            </Text>
          </View>

          <Image source={bodyTypeImg} style={{alignSelf:'center', marginTop:100}}/>
        </View>

        <Text style={{color:'#444444', alignSelf:'center', marginTop:50 }}>Step 2/2</Text>

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
          onPress={() => {
            saveAsync("@firstTimeUser", "false")
            saveUserInfo(3, name, Number(age), sex, Number(weight), Number(height), dummy_body_type);
            navigation.navigate('FitnessInfo');
          }}>
          <Text style={{color: '#444444', fontSize: 15, fontWeight: '500'}}>
            Next
          </Text>
          <Image
            style={{
              height: 15,
              width: 30,
              justifyContent: 'center',
              resizeMode: 'contain',
            }}
            source={require('../../assets/images/ic_arrow_forward.png')}></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
