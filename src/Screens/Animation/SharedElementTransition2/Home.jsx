import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Cricket from '../../../assets/images/cricket.jpg';
import Football from '../../../assets/images/football.webp';
import Tenis from '../../../assets/images/tenis.jpg';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInUp, FadeOut, FadeIn} from 'react-native-reanimated';

const Home = () => {
  const navigation = useNavigation();
  const sportsData = [
    {
      image: Cricket,
      name: 'Cricket',
      description:
        'Cricket is a globally beloved sport that originated in England and is now a passion in countries like India, Australia, and Pakistan. Played between two teams of 11 players, it features three main formats: Test matches (traditional five-day games), ',
    },
    {
      image: Football,
      name: 'Football',
      description:
        'Football, known as soccer in some countries, is the worlds most popular sport, captivating billions with its simplicity and excitement. Played between two teams of 11 players, the objective is to score goals by getting the ball into the opponents net . ',
    },
    {
      image: Tenis,
      name: 'Tenis',
      description: 'A dynamic racket sport played globally.',
    },
  ];

  const goToDetails = item => {
    navigation.navigate('Details', {item});
  };

  const renderItem = ({item}) => (
    <Animated.View
      style={styles.listContainer}
      entering={FadeInUp.duration(600)}
      exiting={FadeOut}>
      <TouchableOpacity onPress={() => goToDetails(item)} activeOpacity={0.8}>
        <Animated.Image
          source={item.image}
          style={styles.image}
          sharedTransitionTag={`image-${item.name}`}
        />
        <Animated.Text style={styles.title}>{item.name}</Animated.Text>
        <Animated.Text style={styles.description}>
          {item.description}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sportsData}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },

  listContainer: {
    marginVertical: '7%',
  },

  image: {
    height: 150,
    width: '100%',
    borderRadius: 20,
    marginBottom: '5%',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: '2%',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
