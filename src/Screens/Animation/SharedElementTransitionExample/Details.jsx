import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

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

export default function DetailsScreen({ route, navigation }) {
  const { tag } = route.params;

  return (
    <View style={styles.detailContainer}>

      <Animated.View
        sharedTransitionTag={tag}
        style={[styles.detailsImage, { backgroundColor: gallery[tag].color }]}
      />

      <View style={styles.wrapper}>

        <Animated.Text entering={FadeIn.delay(150).duration(1000)} style={[styles.header, styles.font28]}>
          {gallery[tag].title}
        </Animated.Text>
        
        <Animated.Text entering={FadeIn.delay(300).duration(1000)} style={styles.text}>
          {gallery[tag].description}
        </Animated.Text>
        <Animated.View entering={FadeIn.delay(500).duration(1000)} style={styles.callToActionWrapper}>
          <Pressable style={styles.callToAction} onPress={() => navigation.goBack()}>
            <Text style={styles.callToActionText}>see for yourself</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 25,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
  },
  font28: {
    fontSize: 28,
  },
  detailsImage: {
    width: '100%',
    height: 400,
  },
  callToActionWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  callToAction: {
    backgroundColor: '#add8e6',
    padding: 16,
    width: 250,
    borderRadius: 5,
  },
  callToActionText: {
    color: '#015571',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
