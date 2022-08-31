import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { color } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { fontSize, space } from '../utils/sizes';

// <Text style={style.text}>Focus Time</Text> previous example

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={style.container}>
      <View style={style.textInput}>
        <TextInput
          label={'Focus'}
          onChangeText={setSubject}
          style={{ flex: 1, marginRight: space.X }}
        />
        <View style={{ justifyContent: 'center' }}>
          <RoundedButton
            size={fontSize.L}
            onPress={() => addSubject(subject)}
            title="add"
          />
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
  },
  textInput: {
    padding: space.XX,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  // text: {
  //   color: color.Black,
  // },
});
