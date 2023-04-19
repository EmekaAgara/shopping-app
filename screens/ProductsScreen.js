import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import products from '../src/data/products'
import { StatusBar } from 'expo-status-bar'

export default function ProductsScreen() {
  return (
    <FlatList
    data={products}
    renderItem={({item}) => (
      <Image source={{ uri:item.image }} style={styles.image} />
    )}
  />
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'000',
      alignItems:'center',
      justifyContent:'center'
    },
  
    image:{
      width:'100%',
      aspectRatio:1,
      // height:'10%'
    }
  });