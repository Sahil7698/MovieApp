import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Carousal from 'react-native-snap-carousel';
import useCustomNavigation from '../hooks/useCustomNavigation';

var {width, height} = Dimensions.get('window');
const TrendingMovies = ({data}) => {
  const navigation = useCustomNavigation('DemoScreen');
  const handleClick = (item: any) => {
    navigation.navigate('MovieScreen', item);
  };
  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingTextStyle}>Trending</Text>
      <Carousal
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.6}
        slideStyle={styles.sliderStyle}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require('../assets/images/poster1.jpg')}
        style={{
          width: width * 0.6,
          height: height * 0.35,
          borderRadius: 15,
          resizeMode: 'cover',
        }}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  trendingContainer: {
    margin: 8,
  },
  trendingTextStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  sliderStyle: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 15,
  },
});
