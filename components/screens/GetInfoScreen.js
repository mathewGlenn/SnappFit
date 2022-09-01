import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function GetInfoScreen({route}) {

  const [height, onChangeHeight] = useState(0);
  const [weight, onChangeWeight] = useState(0);

  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      keyboardVerticalOffset={-200}
      enabled>
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
              {'Hello,'}
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                color: '#444',
                fontSize: 35,
              }}>
              {route.params.name}
            </Text>

            <Text style={{color: '#444', marginTop: 10, fontSize: 16}}>
              Please fill the information below to test your fitness. This will
              identify your BMI, your body type, and then the app will suggest
              to you exercises based on your preferences.
            </Text>

            <View style={{alignItems: 'center', marginTop: 25}}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor="#8A8A8A"
                placeholder="Age"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#8A8A8A"
                placeholder="Sex"
              />
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


            </View>
          </View>
        </View>

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
        
        onPress={()=>{
          navigation.navigate('Result',{
            height:height,
            weight:weight
          })
          }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
          Next
        </Text>
        <Image
          style={{
            height: 25,
            width: 30,
            justifyContent: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/ic_arrow_forward.png')}></Image>
      </TouchableOpacity>
      </ScrollView>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
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
