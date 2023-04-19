import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Video4 from '../components/Video4';

const SplashScreen3 = () => {
  return (
    <View style={styles.container}>
      <Video4/>
    </View>
  )
}

export default SplashScreen3

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:0
  },
});
  