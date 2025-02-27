import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import useCustomNavigation from '../hooks/useCustomNavigation';

var {width, height} = Dimensions.get('window');

const MovieList = ({title, data}) => {
  const navigation = useCustomNavigation('MovieScreen');
  let movieName = 'Ant-man and the wasp: Quantumania';
  return (
    <View style={styles.upcomingContainer}>
      <View style={styles.upcomingView}>
        <Text style={styles.trendingTextStyle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllTextStyle}>{'See All'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('MovieScreen', item)}
              style={styles.cardContainer}>
              <View style={styles.upcomingMovieContainer}>
                <Image
                  source={require('../assets/images/poster2.jpg')}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.movieNameTextStyle}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + '...'
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  trendingTextStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  upcomingContainer: {
    marginHorizontal: 12,
    paddingTop:15
  },
  upcomingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllTextStyle: {
    fontSize: 20,
    color: '#eab308',
  },
  cardContainer: {
    borderRadius: 10,
  },
  movieNameTextStyle: {
    color: 'white',
    paddingHorizontal: 5,
  },
  upcomingMovieContainer: {
    marginVertical: 12,
    marginHorizontal: 8,
  },
});
