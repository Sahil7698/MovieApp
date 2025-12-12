import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import {RFValue} from 'react-native-responsive-fontsize';
import {AppIcons} from '../assets/icons';
import {Color} from '../assets/styles/colors';

const FeedbackScreen = () => {
  const navigation = useCustomNavigation('FeedbackScreen');
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = () => {
    console.log('Feedback submitted:', feedbackText);
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title={'Feedback'}
        headerLeftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={AppIcons.backIcon}
              style={styles.headerBackIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback"
        multiline
        value={feedbackText}
        onChangeText={setFeedbackText}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.feedbackButtonStyle}>
        <Text style={styles.feedbackButtonText}>{'Add Feedback'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  headerBackIconStyle: {
    height: RFValue(22),
    width: RFValue(22),
  },
  container: {
    backgroundColor: Color.RED,
    flex: 1,
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    // margin: 15,
    padding: 10,
    // backgroundColor: Color.WHITE,
    backgroundColor: 'green',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  feedbackButtonStyle: {
    alignItems: 'center',
    width: '93%',
    backgroundColor: Color.BLACK,
    // height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  feedbackButtonText: {
    color: Color.WHITE,
    textAlign: 'center',
    fontWeight: '600',
    margin: 10,
  },
});
