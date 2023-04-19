import { StyleSheet, View} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import ProductsScreen from './ProductsScreen'
import ProductDetails from './ProductDetails'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      <ProductDetails/>

      {/* <StatusBar style='auto'/> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'000',
  },

});
  