import React from 'react';
import {StatusBar, View} from 'react-native';
import {ImageBackground} from 'react-native';
import { ScrollView } from 'react-native';
import {StyleSheet} from 'react-native';
import {Image, Text} from 'react-native';

import {WhatIsCalorie} from '../../../assets/strings/Strings';
import CircleBackButton from '../../views/CircleBackButton';

export default function DiscoverScreen() {
  return (
<ScrollView>
<View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground
        source={require('../../../assets/images/calorie_img.jpg')}
        style={styles.image}>
        <CircleBackButton />
      </ImageBackground>

      <Text style={styles.title}>{WhatIsCalorie.title}</Text>
      <Text style={styles.textContent}>{WhatIsCalorie.content}</Text>
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: '100%',
    paddingTop: StatusBar.currentHeight,
  },
  title:{
    color:"#444",
    fontFamily:'Montserrat-Bold',
    fontSize:20,
    marginTop:20,
    marginHorizontal:15
  },
  textContent:{
    color:"#444",
    marginHorizontal:15,
    marginTop:20,
    textAlign:'justify',
    lineHeight:25,
    marginBottom:70
  }
});
