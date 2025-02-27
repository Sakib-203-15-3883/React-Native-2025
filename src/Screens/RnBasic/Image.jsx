import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Image1 from '../../assets/images/dark2.jpg';
import Image2 from '../../assets/images/dark3.jpg';

const ImageComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollableContent}>
        <Image style={styles.image} source={Image1} />
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
          }}
        />
        <Image style={styles.image} source={Image2} />
        <Image style={styles.image} source={Image1} />
        <Image style={styles.image} source={Image2} />

        <Image style={styles.image} source={Image1} />
        <Image style={styles.image} source={Image2} />
        <Image style={styles.image} source={Image1} />
        <Image style={styles.image} source={Image2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollableContent: {
    flexGrow: 1,
  },
  image: {
    height: 200,
    width: '50%',
    marginHorizontal: '10%',
    marginVertical: '10%',
    borderRadius: 10,
  },
});
