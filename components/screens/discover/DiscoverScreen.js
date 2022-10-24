import React from 'react';
import {StatusBar, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {Image, Text} from 'react-native';

import {WhatIsCalorie, WhatIsProtein, WhatIsCarbohydrate, WhatIsFats} from '../../../assets/strings/Strings';
import CircleBackButton from '../../views/CircleBackButton';

export default function DiscoverScreen({route}) {
  const topic = route.params.topic;

  let title;
  let content;
  let imageHeader;

  if(topic == "Calorie"){
    title = WhatIsCalorie.title;
    content = WhatIsCalorie.content;
    imageHeader = require('../../../assets/images/img_calorie.jpg');
  }else if(topic == "Protein"){
    title = WhatIsProtein.title;
    content = WhatIsProtein.content;
    imageHeader = require('../../../assets/images/img_protein.jpg');
  }
  else if(topic == "Fat"){
    title = WhatIsFats.title;
    content = WhatIsFats.content;
    imageHeader = require('../../../assets/images/img_fats.png');
  }
  else if(topic == "Carb"){
    title = WhatIsCarbohydrate.title;
    content = WhatIsCarbohydrate.content;
    imageHeader = require('../../../assets/images/img_carb.png');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />

        <ImageBackground
          source={imageHeader}
          style={styles.image}>
          <CircleBackButton />
        </ImageBackground>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textContent}>{content}</Text>
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
  title: {
    color: '#444',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 15,
  },
  textContent: {
    color: '#444',
    marginHorizontal: 15,
    marginTop: 20,
    textAlign: 'justify',
    lineHeight: 25,
    marginBottom: 70,
  },
});
