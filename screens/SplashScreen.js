import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Video1 from '../components/Video1';

const SplashScreen = () => {

    const navigation = useNavigation();

    const onGetStartedPress = () => {
      navigation.navigate('WalletType');
    };

    const onNextPress = () => {
      navigation.navigate('SplashScreen1');
    };

  return (
    <View style={styles.container}>
      <Video1/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:0
  },
});
  