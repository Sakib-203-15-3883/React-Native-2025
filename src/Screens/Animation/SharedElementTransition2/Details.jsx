import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Animated, {FadeInDown, FadeIn} from 'react-native-reanimated';

const Details = ({route}) => {
  const {item} = route.params;

  return (
    <Animated.ScrollView
      style={styles.container}
      entering={FadeIn.duration(500)}>
      <Animated.Image
        source={item.image}
        style={styles.image}
        sharedTransitionTag={`image-${item.name}`}
        entering={FadeInDown.delay(100).duration(600).springify()}
      />
      <Animated.View style={styles.infoContainer}>
        <Animated.Text
          style={styles.title}
          entering={FadeInDown.delay(300).duration(800).springify()}>
          {item.name}
        </Animated.Text>
        <Animated.Text
          style={styles.description}
          entering={FadeInDown.delay(500).duration(1000).springify()}>
          {item.description}
        </Animated.Text>
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    height: 300,
    width: '90%',
    borderRadius: 20,
    marginTop: '10%',
    alignSelf: 'center',
  },
  infoContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: '2%',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
