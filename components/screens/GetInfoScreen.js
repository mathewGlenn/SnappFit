import React, {useState, useEffect, FC} from 'react';
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
import Dropdown from '../../components/Dropdown';

import {useNavigation} from '@react-navigation/native';

export default function GetInfoScreen({route}) {
  const sexChoices = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
  ];
  const user_name = route.params.name;

  useEffect(() => {
    // readData();
    const firstName = user_name.split(' ')[0];
    setName(firstName);
  });

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState(undefined);

  const [height, onChangeHeight] = useState(0);
  const [weight, onChangeWeight] = useState(0);

  const REC_ID = 2;

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
              {name}
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
                onChangeText={setAge}
                value={age}
              />
              <Dropdown label="Sex" data={sexChoices} onSelect={setSex} />

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

        <Text style={{color: '#444444', alignSelf: 'center', marginTop: 50}}>
          Step 1/2
        </Text>

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
            if (age != '' && sex != undefined && weight != 0 && height != 0) {
              navigation.navigate('IdenBodType', {
                name: user_name,
                age: age,
                sex: sex.label,
                weight: weight,
                height: height,
              });
            } else {
              alert('Please fill all information');
            }
            //saveUserInfo(REC_ID, user_name, Number(age), sex, Number(weight), Number(height));
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  input: {
    borderColor: 'transparent',
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
