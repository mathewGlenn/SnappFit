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
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import bodyTypeImg from "../../assets/images/sample_body_type.jpg";


export default function IdenBodTypeScreen() {

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
            navigation.navigate('FitnessInfo', {
              height: 12,
              weight: 12,
            });
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
