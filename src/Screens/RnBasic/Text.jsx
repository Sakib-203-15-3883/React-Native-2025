import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const TextComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>We need to follow a good roadmap</Text>
      <Text style={styles.title}>
        As a CSE student , i always try to learn something quickly. eventually ,
        i will achieve my goals
      </Text>
      <Text style={styles.subTitle}>
        For mobile dev , i use{' '}
        <Text style={styles.subTitleBold}>React native</Text>
      </Text>
    </SafeAreaView>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:"10%",
    paddingVertical:"10%",
    backgroundColor:"white"
  },

  header: {
    fontSize:32,
    lineHeight:38,
    marginVertical:"7%",
    color:'red',
    fontWeight:"500",
    marginHorizontal:"10%"

  },
  title: {
    fontSize:18,
    lineHeight:22,
    marginVertical:"5%",
    color:"green"
    


  },
  subTitle: {
    fontSize:17,
    marginVertical:"5%"

  },
  subTitleBold: {
    color:"blue",
    fontSize:20,
    fontWeight:"700"
  },
});
