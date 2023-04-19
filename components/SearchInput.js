import{StyleSheet,TextInput,View, Text}from'react-native';
import React, { Component } from 'react'

export class SearchInput extends Component {
  handleChangeText = (newLocation) => {
    this.props.location = newLocation;
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.HelloText}>Enter your Location</Text>
        <TextInput
            autoCorrect={false}
            placeholder="Search any city"
            placeholderTextColor="#818589"
            style={styles.textInput}
            underlineColorAndroid="transparent"
            clearButtonMode="always"
            onChangeText={this.handleChangeText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#212125',
        height: 55,
        width: '90%',
        marginHorizontal: 20,
        paddingHorizontal: 25,
        alignSelf: 'flex-start',
        borderRadius:7,
        color:'#818589'
    },
})

export default SearchInput