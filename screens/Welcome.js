import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Video6 from '../components/Video6';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Video6/>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:0
  },
});
  