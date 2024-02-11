import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR } from '../commons/constantsColor';

interface UserForm{
  number1: string;
  number2: string;
}

export const Screen4 = () => {

  const [frase,setFrase] = useState('');

  const [numero,setNumero] = useState<UserForm>({
    number1:'0',
    number2:'0',
  });

  const handlerChangeText=(name: string, value: string)=>{
    setNumero(prevState =>({
      ...prevState,
      [name]:value
    }))
  }

  const handlerSendInfo=()=>{
    let num1:number=parseInt(numero.number1);
    let num2:number=parseInt(numero.number2);
    let resultado : string = '';
    if (num1==num2) {
      resultado=num1+' es igual que '+num2
      setFrase(resultado)
    }
    if (num1>num2) {
      resultado=num1+' es mayor que '+num2,
      setFrase(resultado)
    }
    if (num2>num1) {
      resultado=num2+' es mayor que '+num1,
      setFrase(resultado)
    }
  }

  return (
    <View>
      <TitleComponent title='Formulario'/>
        <BodyComponent>
            <View>
              <InputComponent placeholder='Número 1' name='number1' onChangeText={handlerChangeText}/>
              <InputComponent placeholder='Número 2' name='number2' onChangeText={handlerChangeText}/>
              <ButtonComponent title='>=' onPress={handlerSendInfo}/>
              <Text style={styles.text}>{frase}</Text>
            </View>
        </BodyComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'black',
    backgroundColor:PRIMARY_COLOR,
    marginTop:80,
    padding:20,
    borderRadius:10,
  },
})