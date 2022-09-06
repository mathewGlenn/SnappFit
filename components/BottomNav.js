import React from 'react';

import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function BottomNav({
  homePressed,
  profilePressed,
  morePressed,
  settingsPressed,
  homeActive = false, 
  profileActive = false,
  moreActive = false,
  settingsActive = false,

}) {
  return (
    <View
      style={[
        {
          height: 60,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        styles.elevation,
      ]}>
      <TouchableOpacity onPress={homePressed} style={styles.touchableIcon}>
        <Image
          style={styles.navIcon}
          source={
            homeActive
            ? require('../assets/images/ic_home_green.png')
            : require('../assets/images/ic_home.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={profilePressed} style={styles.touchableIcon}>
        <Image
          style={styles.navIcon}
          source={
            profileActive
            ? require('../assets/images/ic_person_green.png')
            : require('../assets/images/ic_person.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={morePressed} style={styles.touchableIcon}>
        <Image
          style={styles.navIcon}
          source={
            moreActive
            ? require('../assets/images/ic_more_green.png')
            : require('../assets/images/ic_more.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={settingsPressed} style={styles.touchableIcon}>
        <Image
          style={styles.navIcon}
          source={
            settingsActive
              ? require('../assets/images/ic_settings_green.png')
              : require('../assets/images/ic_settings.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  touchableIcon:{
    padding:3
  },
  navIcon: {
    height: 20,
    resizeMode: 'contain',
  },

  elevation: {
    elevation: 17,
    shadowColor: '#52006A',
  },
});
