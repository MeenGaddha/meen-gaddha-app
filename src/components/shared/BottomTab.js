import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import SubscribeIconFooter from '../../../assets/icons/SubscribeIconFooter.svg';
import CategoriesIconFooter from '../../../assets/icons/CategoriesIconFooter.svg';
import HomeIconFooter from '../../../assets/icons/HomeIconFooter.svg';
import HowToPlayIconFooter from '../../../assets/icons/HowToPlayIconFooter.svg';
import ProfileIconFooter from '../../../assets/icons/ProfileIconFooter.svg';
import ArrowIconFooter from '../../../assets/icons/ArrowIconFooter.svg';
import Colors from '../../utils/colors/Colors';
import globalStyles from '../../utils/globalStyle/GlobalStyle';

const { width } = Dimensions.get('window');

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
        const isActive = route.name === section.screen; // يتحقق من الشاشة الحالية

        return (
          <TouchableOpacity
            key={section.id}
            style={styles.section}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(section.screen)}
          >
            <View style={[styles.iconWrapper, isActive && styles.activeCircle]}>
              {React.createElement(section.icon, {
                width: isActive ? 48 : 28,
                height: isActive ? 48 : 28,
              })}
            </View>

            {isActive ? (
              <ArrowIconFooter width={16} height={16} />
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
    paddingVertical: 8,
    backgroundColor: Colors.background.screen,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: width,
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
  },
  section: {
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: Colors.background.accent,
    borderRadius: 25,
  },
  label: {
    ...globalStyles.smallText,
    color: Colors.text.description,
  },
});

export default BottomTab;
