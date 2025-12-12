import {
  FlatList,
  Image,
  ImageSourcePropType,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/styles/colors';
import {AppIcons} from '../assets/icons';
import useCustomNavigation from '../hooks/useCustomNavigation';

type ProfileOption = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  onPress?: () => void;
};

const ProfileScreen = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigation = useCustomNavigation('FeedbackScreen');

  const PROFILE_OPTION_DATA = [
    {
      id: 1,
      icon: AppIcons.profileIcon,
      name: 'Account Information',
    },
    {
      id: 2,
      icon: AppIcons.feedBackIcon,
      name: 'Leave Feedback',
      onPress: () => {
        navigation.navigate('FeedbackScreen');
      },
    },
    {
      id: 3,
      icon: AppIcons.refralIcon,
      name: 'Invite Friends',
    },
    {
      id: 4,
      icon: AppIcons.privacyIcon,
      name: 'Privacy policy',
    },
    {
      id: 5,
      icon: AppIcons.servicesIcon,
      name: 'Terms of service',
    },
    {
      id: 6,
      icon: AppIcons.logoutIcon,
      name: 'Log out',
      onPress: () => {
        setShowLogoutModal(!showLogoutModal);
      },
    },
  ];

  const renderProfileOption = ({item}: {item: ProfileOption}) => (
    <TouchableOpacity style={styles.optionContainer} onPress={item?.onPress}>
      <View style={styles.firstContainer}>
        <View style={styles.optionIconContainer}>
          <Image source={item?.icon} style={styles.optionIconStyle} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{item?.name}</Text>
        </View>
      </View>
      <Image source={AppIcons.forwardIcon} style={styles.forwardIconStyle} />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topViewContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/images/profile.jpeg')}
              style={styles.profileImageView}
            />
            <TouchableOpacity
              style={styles.editButtonContainer}
              activeOpacity={0.8}>
              <Image
                source={AppIcons?.editIcon}
                style={styles.editButtonStyle}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.userNameTextStyle}>{'Alex'}</Text>
          <Text style={styles.ageTextStyle}>{'Age 25, Male'}</Text>
        </View>
        <Text style={styles.userNameTextStyle}>Information</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PROFILE_OPTION_DATA}
          renderItem={renderProfileOption}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={showLogoutModal}
          onRequestClose={() => {
            setShowLogoutModal(!showLogoutModal);
          }}
          statusBarTranslucent>
          <View style={styles.modalView}>
            <View style={styles.subModalView}>
              <Text style={styles.titleTextStyle}>
                Are you sure you want to logout?
              </Text>
              <View style={styles.buttonOptionContainer}>
                <TouchableOpacity
                  onPress={() => setShowLogoutModal(false)}
                  style={styles.optionButtonStyle}>
                  <Text style={styles.buttonTextStyle}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowLogoutModal(false)}
                  style={styles.optionButtonStyle}>
                  <Text style={styles.buttonTextStyle}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 12,
  },
  optionContainer: {
    padding: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    marginVertical: 4,
    borderWidth: 2,
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIconContainer: {
    backgroundColor: Color.BLACK,
    height: wp(8),
    width: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(15),
  },
  listContainer: {
    paddingTop: hp(1),
  },
  optionIconStyle: {
    height: wp(4),
    width: wp(4),
    resizeMode: 'contain',
    tintColor: Color.WHITE,
  },
  optionText: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: Color.GREY,
  },
  optionTextContainer: {
    paddingLeft: RFValue(16),
  },
  forwardIconStyle: {
    height: wp(3),
    width: wp(3),
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: '#CED0CE',
    width: '100%',
  },
  profileImageView: {
    height: 130,
    width: 130,
    borderRadius: 200,
    borderWidth: 3,
  },
  topViewContainer: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    backgroundColor: 'white',
    height: 130,
    width: 130,
    borderRadius: 200,
  },
  editButtonContainer: {
    position: 'absolute',
    height: 35,
    width: 35,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    borderWidth: 2,
  },
  editButtonStyle: {
    height: 20,
    width: 20,
  },
  userNameTextStyle: {
    fontSize: 25,
    fontWeight: '600',
  },
  ageTextStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  subModalView: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 3,
  },
  titleTextStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
  },
  optionButtonStyle: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
