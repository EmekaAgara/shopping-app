import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (

    <View style={styles.container}>
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor="#818589"
            style={[styles.input, {}] }
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#202020',
        width:'100%',
        // borderColor:'#899',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:6,
        padding:18,
    },
    input:{
      color:'#818589'
    },
}) 