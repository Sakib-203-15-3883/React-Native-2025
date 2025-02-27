import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const InputComponent = () => {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = () => {
    inputRef.current.clear();
    setShowName(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Your Name"
          placeholderTextColor="black"
          onChangeText={text => {
            setName(text);
            setShowName(false);
          }}
          onSubmitEditing={handleSubmit}
          ref={inputRef}
        />
      </View>
      {showName && <Text> {name} </Text>}
    </SafeAreaView>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    color: 'black',
    borderWidth: 3,
    borderColor: 'blue',
    marginHorizontal: '10%',
    marginTop: '10%',
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 18,
    paddingLeft: 20,
  },
});
