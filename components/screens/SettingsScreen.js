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

import realm, {getUserInfo} from '../realm';
import settingsImgTop from '../../assets/images/img_on_settings.png';
import BottomNav from '../BottomNav';

import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen({route}) {
  const navigation = useNavigation();

  const name = getUserInfo().name;

  return (
    <View
      style={styles.container}>
      <ScrollView>
        <View>
        <StatusBar translucent backgroundColor='transparent' />

        <ImageBackground style={styles.imageTop}
        source={settingsImgTop}>
                <Text style={styles.screenTitle}>{'Settings'}</Text>

                <View style={{
                  position:'absolute', 
                  bottom:0,
                  marginHorizontal:20,
                  marginBottom:20,
                  flexDirection:'row',
                  alignItems:'center'
                }}>
                <Text style={{

                  fontFamily:'montserrat_semi_bold',
                  fontSize:20,
                  color:"#ffffff",
                  marginRight:20
                }}>{name}</Text>

                <TouchableOpacity>
                <Image source={require('../../assets/images/ic_edit.png')} style={{height:20, width:22, resizeMode:'contain'}}/>
                </TouchableOpacity>
                </View>

        </ImageBackground>

        <Text style={{color:'black'}}>Settings</Text>
        </View>
      </ScrollView>

      <BottomNav
      settingsActive={true}
      homePressed = {()=>{navigation.navigate('Home')}}
      profilePressed = {()=>{navigation.navigate('FitnessInfo')}}
      morePressed = {()=>navigation.navigate('More')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTop:{
    height: 250,
    paddingTop:20
  },
  screenTitle:{
    fontSize:20,
    fontFamily:'montserrat_semi_bold',
    color:'#ffffff',
    margin:20
  },
});
