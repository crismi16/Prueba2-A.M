import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {SECONDARY_COLOR} from '../commons/constantsColor';

export const BodyComponent = (props: any) => {
  const {height} = useWindowDimensions();

  return <View style={styles.bodyContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: SECONDARY_COLOR,
    height: '90%',
    flexDirection:'row',
    flexWrap: 'wrap',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent:'space-evenly',
  },
});
