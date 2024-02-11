import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../commons/constantsColor';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const ButtonComponent = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: PRIMARY_COLOR,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 80,
  },
  buttonText: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
