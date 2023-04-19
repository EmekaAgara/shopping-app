import { StyleSheet, Text, View,Image,TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Signup = () => {

  const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSigninPressed = () => {
      navigation.navigate('Login');
    };

    const onRegisterPressed = () => {
      navigation.navigate('Home');
    };

    const onOrganizationPressed = () => {
      navigation.navigate('SignupOrganization');
    };

    const onPrivacyPolicyPressed = () => {
      navigation.navigate('Login');
    };


  return (


    <SafeAreaView>
      <View style={styles.root}>
        <Image
          source={require('../assets/XRP.png')}
          style={[styles.logo, {height:height * 0.2}]}
        />
        <Text style={styles.title}>Create an account</Text>
        <CustomInput name="name" placeholder="Fullname" rules={{required:'Enter your Fullname',}}/>
        {/* <CustomInput name="username" placeholder="Username" rules={{required:'Enter your username',}}/> */}
        <CustomInput name="email" placeholder="Email address" rules={{required:'Enter your email address'}}/>
        <CustomInput name="password" placeholder="Password" secureTextEntry rules={{required:'Enter your password',}} />
        <CustomInput name="password-repeat" placeholder="Confirm Password" secureTextEntry rules={{validate: value => value === pwd || 'Passwords do not match',}} />
        <CustomButton text="Create Account" onPress={onRegisterPressed}/>
        <Text style={styles.text}>To signup as an organization{' '}<Text style={styles.link} onPress={onOrganizationPressed}>Click Here</Text> <Text style={styles.link} onPress={onPrivacyPolicyPressed}></Text></Text>
        <CustomButton text="Have an account? Sign in" onPress={onSigninPressed} type="tertiary"/>

      </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
    paddingTop:'20%',
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
    alignSelf:'flex-start',
  },

  logo:{
    width:'70%',
    maxWidth:150,
    maxHeight:150,
    borderRadius:10,
    resizeMode:'cover',
    alignSelf:'flex-start',
  },

  text:{
    color:'gray',
    marginVertical:10,

  },

  link:{
    color:'#4765A9'

  }

});