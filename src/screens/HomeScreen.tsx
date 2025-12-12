import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../componets/trendingMovies';
import MovieList from '../componets/movieList';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <View style={styles.mainContainer}>
      {/* Search bar */}
      <View style={{marginTop: 15}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#1f1f1f'} />
        <View style={styles.searchBarContainer}>
          <Bars3BottomLeftIcon size={30} strokeWidth={2} color={'white'} />
          <Text style={styles.moviesTextStyle}>
            <Text style={{color: '#eab308'}}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} color={'white'} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.trendingCarousalSliderStyle}>
          {/* Trending movie carousal */}
          <TrendingMovies data={trending} />

          {/* Upcoming Movie Row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* Top Rated Movie Row */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  searchBarContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 12,
  },
  moviesTextStyle: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  },
  trendingCarousalSliderStyle: {
    paddingBottom: 160,
  },
});
