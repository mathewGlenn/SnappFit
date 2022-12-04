import React from 'react';
import { StyleSheet } from 'react-native';
import {TouchableOpacity, Text, Image, View} from 'react-native';

export default function HistoryCard(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.card}>
           <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.historyData}>Weight: {props.weight}</Text>
      <Text style={styles.historyData}>Body Type: {props.bodyType}</Text>
      <Text style={styles.historyData}>BMI: {props.bmi.toFixed(2)}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    historyData:{
        fontSize:17,
        color: '#000'
    },
    date:{
        fontStyle:'italic',
        color:'#000',
        fontSize:14,
        marginBottom:10
    },
    card: {
        height: 125,
        backgroundColor: '#CCCCCC',
        width: '90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:10,
        borderRadius:10,
        padding:10,
        justifyContent:'center'
    }
  });
  