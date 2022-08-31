import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const Item = ({ title }) => {
  return (
    <View style={{ paddingTop: 10 }}>
      <Text>- {title}</Text>
    </View>
  );
};

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <View style={styles.container}>
        <Text>No history yet 😁😁😁</Text>
      </View>
    );

  const renderItem = ({ item }) => {
    return <Item title={item} />;
  };
  return (
    <View style={styles.container}>
      <Text>History:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});
