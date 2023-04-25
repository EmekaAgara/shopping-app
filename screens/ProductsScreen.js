import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import products from '../src/data/products'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import { selectNumberOfItems } from '../store/cartSlice';
import { Video } from 'expo-av';

export default function ProductsScreen() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const numberOfItems = useSelector(selectNumberOfItems);
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
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
        {/* <Image source={{ uri:item.image }} style={styles.image} /> */}
        
        <Video
        ref={video}
        style={styles.image}
        // source={{uri:'https://emekaagara.com/wp-content/uploads/2023/04/pexels-cottonbro-studio-4008365-1080x2048-50fps.mp4'}}
        // source={{uri:item.video}}
        source={item.video1}
        shouldPlay
        resizeMode='cover'
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      </TouchableOpacity>
    )}

    pagingEnabled
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
      // width:'100%',
      // height:100,
      height:Dimensions.get('window').height,
      resizeMode:'contain',
      // aspectRatio:1,
      backgroundColor:'#000'
    },

      
    text:{
      marginLeft:2,
      fontWeight:'400'
    },

    video:{
      flex:1,
      alignSelf:'stretch',
      top:0,
      left:0,
      bottom:0,
      right:0,
    },
  });