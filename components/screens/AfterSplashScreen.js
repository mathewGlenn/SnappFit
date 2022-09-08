import React from "react";
import { Image } from "react-native";

export default function AfterSplashScreen(){
    return(

        <Image source={require('../../assets/images/splash.png')} style={{flex:1}}/>
    )
}