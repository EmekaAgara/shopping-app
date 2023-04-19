import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

    const navigation = useNavigation();
    const onGetStartedPress = () => {
      navigation.navigate('WalletType');
    };

  return (
    
    <View style={styles.container}>
        <Image style={styles.weatherAnimation}
            source={require('../assets/XRP.png')}
        />

      <Text style={styles.mainText}>Check the weather in your Location</Text>
      <Text style={styles.subText}>Select your current location and get the weather forcast in seconds</Text>
        <TouchableOpacity onPress={onGetStartedPress} style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:50
    },

    mainText:{
        color:'white',
        fontSize:30,
        fontWeight:700,
        textAlign:'center',
        paddingHorizontal:50,
        paddingBottom:20,
    },

    subText:{
        color:'white',
        fontSize:15,
        fontWeight:500,
        textAlign:'center', 
        paddingHorizontal:50,
        color:'#818589',
        lineHeight:20,
        paddingBottom:30,
    },

    ButtonContainer: {
        backgroundColor: "#5659C6",
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 140
    },


    ButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: 500,
        alignSelf: "center",
    },

    weatherAnimation:{
        width:350,
        resizeMode:'contain',
    }
  });
  