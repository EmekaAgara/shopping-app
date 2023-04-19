import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Video3 from '../components/Video3';

const SplashScreen2 = () => {
  return (
    <View style={styles.container}>
      <Video3/>
    </View>
  )
}

export default SplashScreen2

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:0
  },
});
  