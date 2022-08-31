import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import {color} from '../utils/colors';

export const Timeset = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.container}>
        <RoundedButton size={75} title="6s" onPress={() => onChangeTime(0.1)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
