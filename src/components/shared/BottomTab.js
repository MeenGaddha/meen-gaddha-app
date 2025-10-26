import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import SubscribeIconFooter from '../../../assets/icons/SubscribeIconFooter.svg';
import CategoriesIconFooter from '../../../assets/icons/CategoriesIconFooter.svg';
import HomeIconFooter from '../../../assets/icons/HomeIconFooter.svg';
import HowToPlayIconFooter from '../../../assets/icons/HowToPlayIconFooter.svg';
import ProfileIconFooter from '../../../assets/icons/ProfileIconFooter.svg';
import ArrowIconFooter from '../../../assets/icons/ArrowIconFooter.svg';
import Colors from '../../utils/colors/Colors';
import globalStyles from '../../utils/globalStyle/GlobalStyle';

const sections = [
  { id: 1, name: 'الاشتراك', icon: SubscribeIconFooter, screen: 'SubscribeScreen' },
  { id: 2, name: 'الفئات', icon: CategoriesIconFooter, screen: 'CategoryScreen' },
  { id: 3, name: 'الرئيسية', icon: HomeIconFooter, screen: 'HomeScreen' },
  { id: 4, name: 'طريقة اللعب', icon: HowToPlayIconFooter, screen: 'GameDescriptionScreen' },
  { id: 5, name: 'حسابي', icon: ProfileIconFooter, screen: 'ProfileScreen' },
];

const BottomTab = () => {
  const navigation = useNavigation();
  const route = useRoute(); // معلومات الشاشة الحالية

  return (
    <View style={styles.container}>
      {sections.map((section) => {
        const isActive = route.name === section.screen;

        return (
          <TouchableOpacity
            key={section.id}
            style={styles.section}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(section.screen)}
          >
            <View style={[styles.iconWrapper, isActive && styles.activeCircle]}>
              {React.createElement(section.icon, {
                width: isActive ? scale(30) : scale(22),
                height: isActive ? verticalScale(30) : verticalScale(22),
              })}
            </View>

            {isActive ? (
              <ArrowIconFooter width={moderateScale(16)} height={moderateScale(16)} />
            ) : (
              <Text style={styles.label}>{section.name}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.background.screen,
    paddingVertical: verticalScale(8),
    borderTopWidth: moderateScale(1),
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: Platform.OS === 'ios' ? verticalScale(20) : verticalScale(18),
  },
  section: {
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: scale(45),
    height: verticalScale(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: Colors.background.accent,
    borderRadius: moderateScale(20),
  },
  label: {
    ...globalStyles.smallText,
    color: Colors.text.description,
  },
});

export default BottomTab;
