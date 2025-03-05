import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ControlledVsUncontrolled = () => {
  const nameRef = useRef();

  const handleSubmit = () => {
    nameRef.current.clear();
  };

  const [age, setAge] = useState(null);
  const [showAge, setShowAge] = useState(false);
  const handleAgeSubmit = () => {
    setShowAge(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="black"
        style={styles.input}
        ref={nameRef}
        onSubmitEditing={handleSubmit}
      />

      <TextInput
        placeholder="Enter Your Age"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={text => {
          setAge(text);
          setShowAge(false);
        }}
        onSubmitEditing={handleAgeSubmit}
      />

      {showAge && <Text>{age}</Text>}
    </SafeAreaView>
  );
};

export default ControlledVsUncontrolled;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '10%',
  },
  input: {
    borderWidth: 1,
    padding: '2%',
    borderRadius: 10,
    paddingLeft: '7%',
    color: 'black',
    marginVertical: '5%',
  },
});
