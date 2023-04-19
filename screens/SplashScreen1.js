import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen1 = () => {

    const navigation = useNavigation();

    const onGetStartedPress = () => {
      navigation.navigate('WalletType');
    };

    const onNextPress = () => {
      navigation.navigate('SplashScreen2');
    };


  return (
    
    <View style={styles.container}>
        <Image style={styles.weatherAnimation}
            source={require('../assets/XRP.png')}
        />

      <Text style={styles.mainText}>Transfer XRP</Text>
      <Text style={styles.subText}>Transfer XRP from the standby account to the operational account and vice versa</Text>
        <TouchableOpacity onPress={onNextPress} style={styles.SecButtonContainer}>
            <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onGetStartedPress} style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default SplashScreen1

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
        // paddingHorizontal: 140,
        width:'85%'

    },

    SecButtonContainer: {
      backgroundColor: "#E63B60",
      // borderWidth:0.5,
      // borderColor:'white',
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 140,
      width:'85%',
      marginBottom:10,
    },


      TetButtonContainer: {
        // backgroundColor: "#5659C6",
        borderWidth:0.5,
        borderColor:'white',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 140,
        width:'85%',
        marginBottom:10,
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
  