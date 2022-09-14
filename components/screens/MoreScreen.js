import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import BottomNav from '../BottomNav';
import {Card} from '../views/Card';
import img from '../../assets/images/img_run_stair.png';

import {useNavigation} from '@react-navigation/native';

export default function MoreScreen({route}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <StatusBar backgroundColor="#000000" />

          <Text style={styles.screenTitle}>{'Discover'}</Text>

          <View>

            <Card
              text={'What is a Calorie?'}
              img={require('../../assets/images/img_calorie.jpg')}
              cardColor="#9756A7"
              onPress={()=>{navigation.navigate('Discover')}}
            />

            <Card
              text={'What is a Protein?'}
              img={require('../../assets/images/img_protein.jpg')}
              cardColor="#66A8B1"
            />
            

          </View>
        </View>
      </ScrollView>

      <BottomNav
        moreActive={true}
        homePressed={() => {
          navigation.navigate('Home');
        }}
        profilePressed={() => {
          navigation.navigate('FitnessInfo');
        }}
        settingsPressed={() => navigation.navigate('Settings')}
      />
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
    margin: 20,
  },
});
