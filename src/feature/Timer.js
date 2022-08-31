import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { color } from '../utils/colors';
import { space } from '../utils/sizes';
import { Timeset } from './Timeset'; 
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ onSubject, clearSubject, onTimeEnd }) => {
  const [onPause, setOnPause] = useState(false);
  const [progress, setOnProgress] = useState(1);
  const [minute, setMinutes] = useState(0);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setOnProgress(1);
    setOnPause(false);
    reset();
    onTimeEnd(onSubject);
  }
  useKeepAwake();
  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <Countdown
          minutes={minute}
          isPaused={!onPause}
          onProgress={(progress) => {setOnProgress(progress)}}
          onEnd={onEnd}
        />
        <View style={styles.focus}>
          <Text style={styles.focuscontent} >Focussing on:</Text>
          <Text style={styles.focuscontent} >{onSubject}</Text>
        </View>
      </View>

      <View style={{paddingTop: '2%'}}>
        <ProgressBar progress={progress} color={color.Black} style={{height: 20}}/>
      </View>

      <View style={styles.timeset}>
        <Timeset onChangeTime={setMinutes} />
      </View>

      <View style={styles.button}>
        {!onPause && (
          <RoundedButton title="Start" onPress={() => setOnPause(true)} />
        )}
        {onPause && (
          <RoundedButton title="Pause" onPress={() => setOnPause(false)} />
        )}
      </View>

      <View style={styles.cancel} >
        <RoundedButton title={"Back"} onPress={clearSubject} size={60}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focus: {
    paddingTop: space.V,
  },
  focuscontent: {
    color: color.Black,
    textAlign: 'center',
    
  },

  timeset: {
    flex: 0.1,
    padding: '5%',
    flexDirection: 'row',
  },

  cancel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
