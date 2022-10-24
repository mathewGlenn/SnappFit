import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import BackButtonWithTitle from '../views/BackButtonWithTitle';
import {AboutTextContent} from '../../assets/strings/Strings';

export default function AboutUs() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" />

      <BackButtonWithTitle
        title="About"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Image
        style={styles.logo}
        source={require('../../assets/images/snappfit_logo.png')}></Image>

      <Text style={styles.textContent}>{AboutTextContent}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  screenTitle: {
    fontSize: 20,
    fontFamily: 'montserrat_semi_bold',
    color: '#444444',
    marginLeft: 20,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20,
    marginTop: 20,
  },
  logo: {
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 60,
  },
  textContent: {
    color: '#444',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
