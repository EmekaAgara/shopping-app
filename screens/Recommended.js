import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import products from '../src/data/products'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import { selectNumberOfItems } from '../store/cartSlice';
import { Video } from 'expo-av';
import { useGetRecProductsQuery } from '../store/apiSlice';


export default function Recommended() {
  
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);
  const {data, isLoading, error} = useGetRecProductsQuery();
  const numberOfItems = useSelector(selectNumberOfItems);
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();

  if(isLoading){
    return <ActivityIndicator color="#3B71F3" size="small" style={styles.indicator}/>

  }

  if(error){
    console.log(error)
    return<Text>Error Fetching Products:{error.error}</Text>
  }

  const products = data.data;


  return (
    <>
    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Cart')}  >
        <Feather name="shopping-cart" size={24} color="black" />
        <Text style={styles.text}>{numberOfItems}</Text>
      </TouchableOpacity>
      
    <FlatList

    data={products}

    renderItem={({item}) => (

      
      <TouchableOpacity onPress={() => {
        // dispatch(productsSlice.actions.setSelectedProduct(item.id));
       navigation.navigate('RecProductDetails',  {id:item._id});}} style={styles.itemContainer}>
        {/* <Image source={{ uri:item.image }} style={styles.image} /> */}
        
        <Video
        ref={video}
        style={styles.video}
        // source={{uri:'https://emekaagara.com/wp-content/uploads/2023/04/pexels-cottonbro-studio-4008365-1080x2048-50fps.mp4'}}
        // source={item.video}
        source={{uri:item.video}}
        shouldPlay
        resizeMode='cover'
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />



      <View style={styles.uiContainer}>
      <Text style={styles.mainText}>{item.name}</Text>
      <Text style={styles.sellerText}>{item.seller}</Text>
      <Text style={styles.subText}>{item.shortdescription}</Text>
      <Text style={styles.priceText}>${item.price}</Text>
      {/* <Text style={styles.subText}>{item.description}</Text> */}

      </View>
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

    uiContainer: {
      display:'flex',
      justifyContent:'space-between'
      
      

    },

    mainText: {
      color:'white',
      fontSize:27,
      fontWeight:600,
      bottom:90,
      width:'90%',
      padding:25,
      paddingBottom:25,
      position:'absolute',
    },

    sellerText: {
      color:'white',
      fontSize:15,
      fontWeight:600,
      bottom:65,
      width:'90%',
      padding:25,
      paddingBottom:25,
      position:'absolute',
    },
  
    subText: {
      color:'white',
      fontSize:15,
      fontWeight:300,
      bottom:20,
      width:'100%',
      padding:25,
      paddingBottom:25,
      position:'absolute',
    },

    priceText: {
      color:'white',
      fontSize:17,
      fontWeight:500,
      bottom:100,
      // width:'90%',
      padding:25,
      paddingBottom:25,
      position:'absolute',
      alignSelf:'flex-end'
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
  
    video:{
      height:Dimensions.get('window').height,
      resizeMode:'contain',
      backgroundColor:'#000',
    },      
    text:{
      marginLeft:2,
      fontWeight:'400'
    },

    indicator: {
      flex: 1,
      
    }
  });