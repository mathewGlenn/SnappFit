import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import BackButtonWithTitle from '../views/BackButtonWithTitle';
import HistoryCard from '../views/HistoryCard';

import firestore from '@react-native-firebase/firestore'
export default function AboutUs() {
  const navigation = useNavigation();

  const [history, setHistory] = useState([]);

  useEffect(()=>{

    const subscriber = firestore()
    .collection('history')
    .onSnapshot(querySnapshot => {

      const allHistory = [];

      querySnapshot.forEach(documentSnapshot => {
        allHistory.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
        console.log('history: ', documentSnapshot.data())
      });
      setHistory(allHistory);
    });
    //unsubscribe to event when no longer in use
    return ()=> subscriber();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" />

      <BackButtonWithTitle
        title="History"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={{marginTop:20}}>

        {history.map(dataItem => (
          
                <HistoryCard 
                date = {new Date(dataItem.date).toDateString()}
                weight={dataItem.weight}
                bodyType = {dataItem.body_type}
                bmi = {dataItem.bmi}/>
                
        ))}
</View>

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
