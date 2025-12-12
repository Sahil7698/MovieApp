import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import {DemoScreen, HomeScreen, MovieScreen, ProfileScreen} from '../screens';
import {TabStackParamList} from '../types/RootStackProps';
import {AppIcons} from '../assets/icons';
import {Color} from '../assets/styles/colors';

const BottomTab = createBottomTabNavigator<TabStackParamList>();

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      //   safeAreaInsets={{bottom: Platform.OS === 'ios' ? hp(3) : hp(1.5), top: 0}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.RED,
        tabBarInactiveTintColor: Color.WHITE,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: hp(9.5),
          backgroundColor: Color.BLACK,
          borderRadius: 20,
          borderTopWidth: 0,
          bottom: 0,
          position: 'absolute',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 7,
          shadowOpacity: 0.2,
          elevation: 30,
          paddingTop: hp(1.3),
          marginBottom: 5,
        },
      }}>
      <BottomTab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? AppIcons.focusHomeTab : AppIcons.homeTab}
              style={{
                height: RFValue(21),
                width: RFValue(21),
                tintColor: focused ? Color.RED : Color.WHITE,
              }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 12,
            textAlign: 'center',
            // paddingHorizontal: Platform.OS === 'web' ? 0 : 10,
            fontWeight: '400',
          },
        }}
      />
      <BottomTab.Screen
        name={'DemoScreen'}
        component={DemoScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? AppIcons.focusChatTab : AppIcons.chatTab}
              style={{
                height: RFValue(23),
                width: RFValue(23),
                tintColor: focused ? Color.RED : Color.WHITE,
              }}
            />
          ),
          tabBarLabel: 'Demo',
          tabBarLabelStyle: {
            fontSize: RFValue(11),
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
      />
      <BottomTab.Screen
        name={'MovieScreen'}
        component={MovieScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? AppIcons.focusListTab : AppIcons.listTab}
              style={{
                height: RFValue(21),
                width: RFValue(21),
                tintColor: focused ? Color.RED : Color.WHITE,
              }}
            />
          ),
          tabBarLabel: 'Movie',
          tabBarLabelStyle: {
            fontSize: RFValue(11),
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
      />
      <BottomTab.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? AppIcons.focusProfileTab : AppIcons.profileTab}
              style={{
                height: RFValue(21),
                width: RFValue(21),
                tintColor: focused ? Color.RED : Color.WHITE,
              }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: RFValue(11),
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;
