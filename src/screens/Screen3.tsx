import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';

export const Screen3 = () => {
  return (
    <View>
      <TitleComponent title='Imagen 2'/>
      <BodyComponent>
        <Image source={{uri:'https://i0.wp.com/iblogmovil.es/wp-content/uploads/2022/09/Syrax-Rhaenyra-Targaryen-House-of-the-Dragon-wallpaper.jpg?resize=770%2C1666&ssl=1'}}
        style={styles.avatar}/>
      </BodyComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode:'cover'
  },
});
