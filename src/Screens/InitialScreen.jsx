import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TextComponent');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}> Text Component</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ImageComponent');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Image Component</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('InputComponent');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Input Component</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StyleSheetComponent');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>StyleSheet </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UseRef');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>useRef </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: '10%',
    marginVertical: '4%',
    backgroundColor: '#D5D0E1',
    height: 'auto',
    width: '80%',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    padding: '5%',
    fontSize: 21,
    lineHeight: 24,
  },
});
