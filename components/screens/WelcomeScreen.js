import React from "react";
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
    TouchableOpacity
  } from 'react-native';

  import { useNavigation } from "@react-navigation/native";

  
import bg from '../../assets/images/bg-green-1.png';
export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground style={styles.imageBG} source={bg}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginBottom: 'auto',
            marginTop: 100,
          }}>
          <Text style={[styles.welcome, {fontSize:25}]}>Welcome to</Text>
          <Text style={[styles.welcome, {fontSize:50}]}>SnappFit</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#4CD964',
            marginBottom: 50,
            width: '70%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 10,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:"row"
          }}
          onPress={()=>{navigation.navigate("GetName")}}>
          <Text style={{color:"#444444", fontSize:15, fontWeight:"500"}}>Continue</Text>
          <Image style={{height:15, width:30, justifyContent:'center', resizeMode:"contain"}} source={require('../../assets/images/ic_arrow_forward.png')}></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
  },

  welcome: {
    fontFamily:'Montserrat-Bold',
    color:"#ffffff"
  }
});
