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
} from 'react-native';

import bg from '../../assets/images/bg-green-2.png';

import {useNavigation} from '@react-navigation/native';

export default function GetNameScreen() {
  const navigation = useNavigation();

  const [name, onChangeName] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground style={styles.imageBG} source={bg}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginBottom: 'auto',
            marginTop: 'auto',
          }}>
          <Text style={{fontFamily: 'montserrat_semi_bold', fontSize: 20}}>
            What is your name?
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}></TextInput>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#4CD964',
            marginBottom: 50,
            width: '70%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            //saveData(name);
            navigation.navigate('GetInfo', {name: name});
          }}>
          <Text style={{color: '#444444', fontSize: 15, fontWeight: '500'}}>
            Continue
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 42,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#E3E3E3',
    marginTop: 30,
    color: '#000',
    fontFamily: 'montserrat_semi_bold',
    fontSize: 17,
    textAlign: 'center',
  },
});
