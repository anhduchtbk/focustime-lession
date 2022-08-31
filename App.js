import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
// import Constants from 'expo-constants';
import { Focus } from './src/feature/Focus';
import { Timer } from './src/feature/Timer';
import {FocusHistory} from './src/feature/FocusHistory';
// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          onSubject={currentSubject}
          onTimeEnd={(subject) => {setHistory([...history, subject])}}
          clearSubject={() => {setCurrentSubject(null)}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
