import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../../../assets/images/logo.svg';
import Colors from '../../utils/colors/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Header = ({ onProfilePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
        <Feather name="user" size={moderateScale(20)} color="#900B09" />
        <Text style={styles.profileText}>إنشاء حساب</Text>
      </TouchableOpacity>

      <Logo width={scale(90)} height={verticalScale(45)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      height: Platform.OS === 'ios' ? verticalScale(95) : verticalScale(80),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: scale(12),
      paddingTop: Platform.OS === 'ios' ? verticalScale(50) : verticalScale(20),
      backgroundColor: Colors.background.primaryHeader,
      borderBottomLeftRadius: moderateScale(10),
      borderBottomRightRadius: moderateScale(10),
  },
  profileButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.background.screen, 
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(2),
      borderRadius: moderateScale(20),
  },
  profileText: {
      color: Colors.text.primaryTitle,
      marginLeft: scale(5),
      fontSize: moderateScale(14),
      fontWeight: 'bold',
  },
});

export default Header;
