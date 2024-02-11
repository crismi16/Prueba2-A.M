import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent';

export const Screen2 = () => {
  return (
    <View>
      <TitleComponent title='Imagen 1'/>
      <BodyComponent>
        <Image source={{uri:'https://s0.smartresize.com/wallpaper/665/808/HD-wallpaper-game-of-thrones-cercei-game-jon-snow-lannister-ned-stark-stannis-stark-thrones-wolf.jpg'}}
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