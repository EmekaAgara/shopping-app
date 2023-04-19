import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Video2 from '../components/Video2';

const SplashScreen1 = () => {
  return (
    <View style={styles.container}>
      <Video2/>
    </View>
  )
}

export default SplashScreen1

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:0
  },
});
  