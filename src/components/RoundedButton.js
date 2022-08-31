import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { color } from '../utils/colors';
import {fontSize, space} from '../utils/sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.Black,
    borderWidth: 2,
  },
  text: { color: color.Black, fontSize: size / 3 },
});
