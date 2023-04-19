import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Video5 from '../components/Video5';

const SplashScreen4 = () => {
  return (
    <View style={styles.container}>
      <Video5/>
    </View>
  )
}

export default SplashScreen4

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:0
  },
});
  