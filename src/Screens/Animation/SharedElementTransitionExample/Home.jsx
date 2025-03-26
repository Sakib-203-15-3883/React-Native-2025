import React from 'react';
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const gallery = {
  florence: {
    color: '#b58df1',
    title: 'Beautiful city of Florence',
    description:
      'Florence was a centre of medieval European trade and finance and one of the wealthiest cities of that era.',
  },
  countryside: {
    color: '#82cab2',
    title: 'Tuscan countryside',
    description:
      "Tuscany's picturesque hills attract millions of tourists each year craving postcard-perfect views.",
  },
  dawn: {
    color: '#87cce8',
    title: 'Tuscany at dawn',
    description:
      'Tuscany is known for its magical mists in the morning and at sunset.',
  },
};

export default function HomeScreen({ navigation }) {


  const goToDetails = (tag) => {
    console.log(tag)
    navigation.navigate('Details', { tag });
  };


  const { width } = Dimensions.get('screen');

  return (

    <Animated.ScrollView style={styles.homeContainer}>

      <Pressable onPress={() => goToDetails('countryside')}>
        <Animated.View
          sharedTransitionTag={'countryside'}
          style={[styles.imageOne, { backgroundColor: gallery.countryside.color }]}
        />
      </Pressable>

      <View style={styles.row}>
        <Pressable onPress={() => goToDetails('florence')}>
          <Animated.View
            sharedTransitionTag={'florence'}
            style={[{ width: width / 2 - 35 }, styles.imageTwo, { backgroundColor: gallery.florence.color }]}
          />
        </Pressable>

        <Pressable onPress={() => goToDetails('dawn')}>
          <Animated.View
            sharedTransitionTag={'dawn'}
            style={[{ width: width / 2 - 35 }, styles.imageThree, { backgroundColor: gallery.dawn.color }]}
          />
        </Pressable>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginHorizontal: 25,
  },
  row: {
    flexDirection: 'row',
  },
  imageOne: {
    width: '100%',
    height: 160,
    marginTop: 20,
    borderRadius: 15,
  },
  imageTwo: {
    height: 250,
    marginTop: 20,
    borderRadius: 15,
  },
  imageThree: {
    height: 250,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 15,
  },
});
