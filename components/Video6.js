import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Video6 = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate('Login');
  };
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        // source={{uri:'https://emekaagara.com/wp-content/uploads/2023/04/pexels-cottonbro-studio-4008365-1080x2048-50fps.mp4'}}
        source={require('../assets/video1.mp4')}
        shouldPlay
        resizeMode='cover'
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      <Text style={styles.mainText}>Refined Shopping experience</Text>
      <Text style={styles.subText}>Refined Shopping experience lorem ipsum lorem ipsum lorem ipsumlorem ipsum</Text>

      <TouchableOpacity onPress={onNextPress} style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Video6

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
    position:'absolute',
    backgroundColor:'#E53F71',
    bottom:35,
    width:'90%',
    alignSelf:'center',
    padding:25,
    borderRadius:10,
    alignItems:"center",
  },

  ButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 500,
    alignSelf: "center",
  },

  mainText: {
    color:'white',
    fontSize:30,
    fontWeight:600,
    bottom:150,
    width:'90%',
    padding:25,
    paddingBottom:25,
    position:'absolute',
  },

  subText: {
    color:'white',
    fontSize:15,
    fontWeight:300,
    bottom:100,
    width:'90%',
    padding:25,
    paddingBottom:25,
    position:'absolute',
  },

})