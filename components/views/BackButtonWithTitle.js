import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export default function BackButtonWithTitle(props){
    return (
        <View style={styles.titleView}>
        <TouchableOpacity
          onPress={props.onPress}>
          <Image
            style={{height: 22, width: 22, resizeMode: 'contain'}}
            source={require('../../assets/images/ic_arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>{props.title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
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
})