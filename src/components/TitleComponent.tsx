import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/constantsColor';

interface TitleProps {
  title: string;
}

export const TitleComponent = ({title}: TitleProps) => {

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer:{
    backgroundColor:PRIMARY_COLOR,
    height:74,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    color: SECONDARY_COLOR,
    fontSize: 27,
    fontWeight: 'bold',
  },
});