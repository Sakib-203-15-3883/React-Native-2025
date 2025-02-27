//  1. here we use useRef hook to clear the  input field when user press submit button
//  by accessing the propertices of TextInput component by creating a reference of it
//   with useRef

// 2. we also use useRef to focus into a particullar input field based on
// user interection like button press

// 3. useRef returns a object where we can access the value using .current

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const UseRef = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [showFormData, setShowFormData] = useState(false);

  const nameInputRef = useRef(null);
  const addressInputRef = useRef(null);

  const handleNameSubmit = () => {
    addressInputRef.current.focus();
  };

  const handleAddressSubmit = () => {};

  const handleFormSubmit = () => {
    nameInputRef.current.clear();
    addressInputRef.current.clear();
    setShowFormData(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="black"
        style={styles.inputField}
        onChangeText={text => {
          setName(text);
          setShowFormData(false);
        }}
        value={name}
        ref={nameInputRef}
        onSubmitEditing={handleNameSubmit}
      />
      <TextInput
        placeholder="Enter Your Address"
        placeholderTextColor="black"
        style={styles.inputField}
        onChangeText={text => {
          setAddress(text);
          setShowFormData(false);
        }}
        value={address}
        ref={addressInputRef}
        onSubmitEditing={handleAddressSubmit}
      />
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {showFormData && (
        <View style={styles.output}>
          <Text style={styles.outputText}>Name Is : {name}</Text>

          <Text style={styles.outputText}>Address is : {address}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UseRef;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: '10%',
    marginTop: '5%',
    borderRadius: 10,
    color: 'black',
    paddingLeft: '5%',
    fontSize: 16,
    lineHeight: 18,
  },
  button: {
    marginHorizontal: '30%',
    marginTop: '5%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'red',
    backgroundColor: '#CFDCEB',
  },
  buttonText: {
    fontSize: 25,
    lineHeight: 28,
    padding: '5%',
    textAlign: 'center',
  },
  output: {
    margin: '20%',
  },
  outputText: {
    fontSize: 16,
    lineHeight: 24,
    margin: '5%',
    fontWeight: 'bold',
  },
});
