import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Video4 = () => {

  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate('SplashScreen4');
  };
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{uri:'https://emekaagara.com/wp-content/uploads/2023/04/pexels-cottonbro-studio-4008365-1080x2048-50fps.mp4'}}
        shouldPlay
        resizeMode='cover'
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      <Text style={styles.mainText}>4Refined Shopping experience</Text>
      <Text style={styles.subText}>Refined Shopping experience lorem ipsum lorem ipsum lorem ipsumlorem ipsum</Text>

      <TouchableOpacity onPress={onNextPress} style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Video4

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%'
  },

  video:{
    flex:1,
    alignSelf:'stretch',
    top:0,
    left:0,
    bottom:0,
    right:0,
  },

  ButtonContainer: {
    backgroundColor: "#E53F71",
    borderRadius: 5,
    paddingVertical: 20,
    width:'85%',
    position:'absolute',
    alignItems:'center',
    top:'90%',
    left:'7%'
  },

  ButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: 500,
    alignSelf: "center",
  },

  mainText: {
    color:'white',
    fontSize:30,
    fontWeight:600,
    textAlign:'left',
    width:'85%',
    position:'absolute',
    top:'74%',
    left:'7%'
  
  },

  subText: {
    color:'white',
    fontSize:15,
    fontWeight:300,
    textAlign:'left',
    width:'85%',
    position:'absolute',
    lineHeight:20,
    top:'83%',
    left:'7%'
  },

})