import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice'

const ShoppingCartTotals = ()=> {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    return (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>${subtotal}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>${deliveryFee}</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>${total}</Text>
        </View> 
    </View>
)
    }


const ShoppingCart = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const checkout = () => {
        console.warn('add to cart')
    }

  return (
    <>
    <FlatList
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item}/>}
        ListFooterComponent={ShoppingCartTotals}
    />
        <TouchableOpacity style={styles.button} onPress={checkout}>
            <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>

    </>
  )
}

const styles = StyleSheet.create({
    totalsContainer:{
        margin:20,
        paddingTop:10,
        borderColor:'gray',
        borderTopWidth:0.2

    },

    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2,
    },

    text:{
        fontSize:16,
        color:'gray'
    },

    textBold:{
        fontSize:16,
        fontWeight:'500'

    },

    button:{
        position:'absolute',
        backgroundColor:'black',
        // top:'63%',
        bottom:30,
        width:'90%',
        alignSelf:'center',
        padding:25,
        borderRadius:10,
        alignItems:"center",
      },
    
      buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:16,
      }

});

export default ShoppingCart