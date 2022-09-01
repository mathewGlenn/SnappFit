import React from 'react';
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


export default function ResultScreen({route}) {

    const {height, weight} = route.params;
    const mSquared = Math.pow((height/100), 2)
    const BMI = weight/mSquared;

    var BMIStatus = "";

    if(BMI < 18.5){
        BMIStatus = "Underweight"
    } else if(BMI >= 18.5 && BMI <= 24.9){
        BMIStatus = "Normal"
    } else if(BMI >= 25 && BMI <= 29.9){
        BMIStatus = "Overweight"
    } else if(BMI > 30){
        BMIStatus = "Obese"
    }


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
              {'Result'}
            </Text>
            <Text style={{color:"#444", fontSize:17, marginTop:50 }}>{"Your Body Mass Index is " + BMI.toFixed(2) + ". This is considered " + BMIStatus + '.'}</Text>
          </View>
        </View>
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
