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
import bodyTypeImg from "../../assets/images/body_placeholder.png";

import AsyncStorage from "@react-native-async-storage/async-storage";
import realm from '../realm';


export default function IdenBodTypeScreen({route}) {


  const user_name = route.params.name;
  const age = route.params.age;
  const sex = route.params.sex;
  const weight = route.params.weight;
  const height = route.params.height;


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

          <Image source={bodyTypeImg} style={{alignSelf:'center', marginTop:50, height:300, resizeMode:'contain'}}/>
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
            navigation.navigate('Camera', {
              name: user_name, 
              age: age,
              sex: sex,
              weight:weight,
              height:height
            });
          }}>
          <Text style={{color: '#444444', fontSize: 15, fontWeight: '500'}}>
            {"Select a Photo"}
          </Text>
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
