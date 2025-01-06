import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';

var {width, height} = Dimensions.get('window');
const MovieScreen = () => {
  const navigation = useNavigation();
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourie] = useState(false);
  let movieName = 'Ant-Man and Wasp: Quantumania';
  const tabData = ['One', 'Two', 'Three'];
  const [isIndex, setIsIndex] = useState(0);
  useEffect(() => {
    // call the movie detail api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      style={styles.scrollViewStyle}>
      <View style={styles.subContainerStyle}>
        <SafeAreaView style={styles.safeAreaStyle}>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourie(!isFavourite)}>
            <HeartIcon size={35} color={isFavourite ? '#eab308' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../assets/images/poster2.jpg')}
            style={{width, height: height * 0.55}}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              width,
              height: height * 0.4,
              position: 'absolute',
              bottom: 0,
            }}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
        </View>
      </View>
      <View style={{marginTop: -(height * 0.09)}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          {movieName}
        </Text>
      </View>
      {/* <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {tabData.map((item, index) => {
          return (
            <TouchableOpacity
            key={index}
              style={{backgroundColor: isIndex === index ? 'blue' : 'black'}}
              onPress={() => setIsIndex(index)}>
              <Text style={{fontSize: 20}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View> */}
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  safeAreaStyle: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 12,
    width: '100%',
  },
  subContainerStyle: {
    flex: 1,
  },
  backButtonStyle: {
    backgroundColor: '#eab308',
    borderRadius: 7,
  },
});
