import React from 'react';

import BottomNav from '../BottomNav';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {getUserInfo} from '../realm';
import {ExercisesCard, ToolsCard} from '../views/Card';

import {SuggestedGoal} from '../../assets/strings/Strings';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeScreen() {
  const name = getUserInfo().name;
  const weight = getUserInfo().weight;
  const height = getUserInfo().height;
  const BMR = getUserInfo().bmr;

  const mSquared = Math.pow(height / 100, 2);
  const BMI = weight / mSquared;

  var suggestedGoal = '';
  var suggestedGoalMoreInfo = '';

  if (BMI < 18.5) {
    suggestedGoal = 'Gain weight';
    suggestedGoalMoreInfo = SuggestedGoal.gain;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    suggestedGoal = 'Maintain weight';
    suggestedGoalMoreInfo = SuggestedGoal.maintain;
  } else if (BMI >= 25 && BMI <= 29.9) {
    suggestedGoal = 'Lose weight';
    suggestedGoalMoreInfo = SuggestedGoal.lose;
  } else if (BMI > 30) {
    suggestedGoal = 'Lose weight';
    suggestedGoalMoreInfo = SuggestedGoal.lose;
  }

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="black" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{marginHorizontal: 15, marginTop: 15}}>
          <Text
            style={{
              color: '#444444',
              fontSize: 20,
              fontFamily: 'montserrat_semi_bold',
            }}>
            Hello,
          </Text>
          <Text
            style={{
              color: '#444',
              fontSize: 30,
              fontFamily: 'Montserrat-Bold',
            }}>
            {name.split(' ')[0]}
          </Text>

          <Text
            style={{
              color: '#444444',
              fontSize: 17,
              marginTop: 22,
              marginBottom: 15,
            }}>
            {'Your Info'}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <ImageBackground
              source={require('../../assets/images/img_girl_body.png')}
              style={{
                height: 180,
                width: 150,
                justifyContent: 'center',
                marginEnd: 10,
              }}>
              <View style={{margin: 10}}>
                <Text style={{fontSize: 17}}>Body Type</Text>
                <Text
                  style={{fontSize: 20, fontFamily: 'montserrat_semi_bold'}}>
                  Mesomorph
                </Text>
              </View>
            </ImageBackground>

            <View>
              <ImageBackground
                source={require('../../assets/images/img_run_stair.png')}
                style={{
                  height: 85,
                  width: 160,
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <View>
                  <Text style={{fontSize: 17}}>BMI</Text>
                  <Text
                    style={{fontSize: 20, fontFamily: 'montserrat_semi_bold'}}>
                    {BMI.toFixed(2)}
                  </Text>
                </View>
              </ImageBackground>

              <ImageBackground
                source={require('../../assets/images/img_tape_measure.png')}
                style={{
                  height: 85,
                  width: 160,
                  marginTop: 10,
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 17}}>{'Height: '}</Text>
                  <Text
                    style={{fontSize: 17, fontFamily: 'montserrat_semi_bold'}}>
                    {height + ' cm'}
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 17}}>{'Weight: '}</Text>
                  <Text
                    style={{fontSize: 17, fontFamily: 'montserrat_semi_bold'}}>
                    {weight + ' kg'}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <Text style={styles.subtitle}>{'Suggested Goal:'}</Text>
          <Text style={styles.value}>{suggestedGoal}</Text>
          <Text style={styles.valueSecondary}>{suggestedGoalMoreInfo}</Text>

          <Text style={styles.subtitle}>{'Suggested Calorie Intake:'}</Text>
          <Text style={styles.value}>{BMR + ' kCal/day'}</Text>

          <View>
            <Text
              style={{
                fontSize: 17,
                color: '#444',
                marginTop: 40,
                marginBottom: 10,
                fontFamily: 'montserrat_semi_bold',
              }}>
              {'Exercises'}
            </Text>

            <ExercisesCard
              text="Flexibility Excercises"
              img={require('../../assets/images/img_flexibility.png')}
              onPress={() => {
                navigation.navigate('Exercises', {exerType: 'flexibility'});
              }}
            />
            <ExercisesCard
              text="Resistance Excercises"
              img={require('../../assets/images/img_resistance.png')}
              onPress={() => {
                navigation.navigate('Exercises', {exerType: 'resistance'});
              }}
            />
            <ExercisesCard
              text="Cardiovascular Excercises"
              img={require('../../assets/images/img_cardio.png')}
              onPress={() => {
                navigation.navigate('Exercises', {exerType: 'cardio'});
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 17,
                color: '#444',
                marginTop: 20,
                fontFamily: 'montserrat_semi_bold',
              }}>
              {'Other Tools'}
            </Text>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <ToolsCard
                onPress={() => {
                  navigation.navigate('BMICalc');
                }}
                img={require('../../assets/images/ic_fitness.png')}
                text={'BMI Calculator'}
              />

              <ToolsCard
                onPress={() => {
                  navigation.navigate('BodyTypeIdentifier');
                }}
                img={require('../../assets/images/ic_body.png')}
                text={'Body Type Identifier'}
              />
            </View>
          </View>

          <View style={{height: 70}}></View>
        </View>
      </ScrollView>

      <BottomNav
        homeActive={true}
        profilePressed={() => {
          navigation.navigate('FitnessInfo');
        }}
        morePressed={() => {
          navigation.navigate('More');
        }}
        settingsPressed={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  subtitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#000000',
    marginTop: 15,
  },
  value: {
    fontSize: 22,
    color: '#000000',
  },
  valueSecondary: {
    fontSize: 15,
    color: '#000000',
  },
});
