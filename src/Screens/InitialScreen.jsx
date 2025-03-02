import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const InitialScreen = () => {
  const navigation = useNavigation();

 
  const buttons = [
    { title: 'Text Component', screen: 'TextComponent' },
    { title: 'Image Component', screen: 'ImageComponent' },
    { title: 'Input Component', screen: 'InputComponent' },
    { title: 'StyleSheet', screen: 'StyleSheetComponent' },
    { title: 'useRef', screen: 'UseRef' },
  ];

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      style={styles.button}>
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={buttons}
        keyExtractor={(item) => item.screen}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 20,
  },
  button: {
    marginHorizontal: '10%',
    marginVertical: '4%',
    backgroundColor: '#D5D0E1',
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 21,
    lineHeight: 24,
  },
});
