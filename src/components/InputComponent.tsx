import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';

interface InputProps{
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string)=>void;
}

export const InputComponent = ({placeholder,name,onChangeText}:InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        keyboardType='numeric'
        onChangeText={(value:string)=>onChangeText(name,value)}
        style={styles.inputText}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:80,
      },
    inputText:{
      color:TEXT_COLOR,
      backgroundColor:PRIMARY_COLOR,
      fontWeight: 'bold',
      paddingHorizontal:20,
      borderRadius:10,
    },
})