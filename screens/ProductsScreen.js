import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import products from '../src/data/products'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import { selectNumberOfItems } from '../store/cartSlice';


export default function ProductsScreen() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const numberOfItems = useSelector(selectNumberOfItems);
  const navigation = useNavigation();
  return (
    <>
    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ShoppingCart')}  >
        <Feather name="shopping-cart" size={24} color="black" />
        <Text style={styles.text}>{numberOfItems}</Text>
      </TouchableOpacity>
      
    <FlatList

    data={products}

    renderItem={({item}) => (
      <TouchableOpacity onPress={() => {
        dispatch(productsSlice.actions.setSelectedProduct(item.id));
       navigation.navigate('ProductDetails');}} style={styles.itemContainer}>
        <Image source={{ uri:item.image }} style={styles.image} />
      </TouchableOpacity>
    )}
  />
</>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'000',
      alignItems:'center',
      justifyContent:'center'
    },

    itemContainer: {
      

    },

    icon:{
      position:'absolute',
      top:60,
      zIndex:1,
      right:30,
      padding:13,
      backgroundColor:'white',
      borderRadius:7,
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 2,
      },
      shadowOpacity: 0.07,
      shadowRadius: 3.84,
      levation: 5,
      flexDirection:'row',

    },
  
    image:{
      width:'100%',
      aspectRatio:1,
    },

      
    text:{
      marginLeft:2,
      fontWeight:'400'
    }
  });