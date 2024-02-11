import React from 'react';
import {StatusBar, View} from 'react-native';
import {TitleComponent} from '../components/TitleComponent';
import {BodyComponent} from '../components/BodyComponent';
import {PRIMARY_COLOR} from '../commons/constantsColor';
import {ButtonComponent} from '../components/ButtonComponent';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Screen1'> {}

export const Screen1 = ({navigation}: Props) => {
  
  const handlerSendInfo = () => {
    console.log('Hola');
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Bienvenido"/>
      <BodyComponent>
        <ButtonComponent
          title="Imagen 1"
          onPress={() => navigation.navigate('Screen2')}
        />
        <ButtonComponent
          title="Imagen 2"
          onPress={() => navigation.navigate('Screen3')}
        />
        <ButtonComponent
          title=">="
          onPress={() => navigation.navigate('Screen4')}
        />
        <ButtonComponent
          title="<="
          onPress={() => navigation.navigate('Screen5')}
        />
      </BodyComponent>
    </View>
  );
};
