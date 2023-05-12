import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import {OPENAI_API_KEY} from "@env"
import {MaterialIcons} from "@expo/vector-icons"
import { GiftedChat } from 'react-native-gifted-chat';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

const Karah = () => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [outputMessage, setOutputMessage] = useState("Results will be shown here")
  
  const handleButtonClick = () => {
    console.log(inputMessage)
    const message = {
      _id:Math.random().toString(36).substring(7),
      text:inputMessage,
      createdAt:new Date(),
      user:{_id:1}
    }
    setMessages((previousMessages)=>
      GiftedChat.append(previousMessages,[message])
    )
    fetch("https://api.openai.com/v1/completions",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `your name is Karah, act as my personal stylist and answer with a short sentence only.\n
                 Topic: ${inputMessage}\n`,
      })
    }).then((response) => response.json()).then((data) => {
      console.log(data.choices[0].text)
      setOutputMessage(data.choices[0].text.trim())
      const message = {
        _id:Math.random().toString(36).substring(7),
        text:(data.choices[0].text.trim()),
        createdAt:new Date(),
        user:{_id:2, name:"Karahh"}
      }
      setMessages((previousMessages)=>
        GiftedChat.append(previousMessages,[message])
      )
    })
  }


  const handleTextInput = (text) => {
    setInputMessage(text)
    console.log(text)
  }
  
  return (
    <KeyboardAvoidingView behavior='padding' enabled={true} style={styles.container}>
      <Text style={styles.title}>Harah</Text>
      <View style={{ flex:1, justifyContent:'center'}}>
        {/* <Text>{outputMessage}</Text> */}
        <GiftedChat messages={messages} renderInputToolbar={() => {}} user={{_id:1}} minInputToolbarHeight={0}/>
      </View>

      <View style={{flexDirection:'row'}}>
        <View style={{ flex:1,marginLeft: 10, marginBottom:20, backgroundColor:"white", borderRadius:10, borderColor:"gray", borderWidth:1, height:60, marginLeft:20, marginRight:10,justifyContent:'center', paddingLeft:10, paddingRight:10}}>
          <TextInput placeholder='Enter your question' onChangeText={handleTextInput}/>
        </View>

        <TouchableOpacity onPress={handleButtonClick}>
          <View style={{backgroundColor:"red",padding:5, marginRight:10, marginBottom:20, borderRadius:100, width:60, height:60, justifyContent:"center"}}>
            <MaterialIcons name="send" size={30} color="white" style={{marginLeft:10}}/>
          </View>

        </TouchableOpacity>
        <StatusBar style='auto'/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Karah

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#000',
    // backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
    marginTop:70,
    color:"#fff"
  },


})