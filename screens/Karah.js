import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { OPENAI_API_KEY } from "@env";
import { MaterialIcons } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";
import * as Speech from "expo-speech";

const Karah = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState(
    "Results will be shown here"
  );

  const handleButtonClick = () => {
    console.log(inputMessage);
    const message = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createdAt: new Date(),
      user: { _id: 1 },
    };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [message])
    );
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `your name is Karah, act as my personal stylist, answer questions and recommend outifts with a short sentence.\n
                 Topic: ${inputMessage}\n`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].text);
        setInputMessage("");
        setOutputMessage(data.choices[0].text.trim());
        const message = {
          _id: Math.random().toString(36).substring(7),
          text: data.choices[0].text.trim(),
          createdAt: new Date(),
          user: { _id: 2, name: "Karah" },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [message])
        );
        options = {};
        Speech.speak(data.choices[0].text, options);
      });
  };

  const handleTextInput = (text) => {
    setInputMessage(text);
    console.log(text);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Ask Karah</Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <Text>{outputMessage}</Text> */}
        <GiftedChat
          messages={messages}
          renderInputToolbar={() => {}}
          user={{ _id: 1 }}
          minInputToolbarHeight={0}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            marginBottom: 20,
            backgroundColor: "#202020",
            borderRadius: 10,
            borderColor: "gray",
            borderWidth: 1,
            height: 55,
            marginLeft: 20,
            marginRight: 10,
            justifyContent: "center",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <TextInput
            placeholder="Enter your question"
            style={{ color: "white" }}
            placeholderTextColor={"gray"}
            onChangeText={handleTextInput}
            value={inputMessage}
          />
        </View>

        <TouchableOpacity onPress={handleButtonClick}>
          <View
            style={{
              backgroundColor: "#E53F71",
              padding: 5,
              marginRight: 10,
              marginBottom: 20,
              borderRadius: 100,
              width: 50,
              height: 50,
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="send"
              size={25}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Karah;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141518",
    // backgroundColor:'#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 70,
    color: "#fff",
    alignSelf: "center",
  },
});
