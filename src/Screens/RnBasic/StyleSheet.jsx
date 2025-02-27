import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', text: 'First item' },
  { id: '2', text: 'Second item' },
  { id: '3', text: 'Third item' },
  { id: '4', text: 'Fourth item' },
];

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const StyleSheetComponent = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item text={item.text} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    backgroundColor: '#140536',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default StyleSheetComponent;
