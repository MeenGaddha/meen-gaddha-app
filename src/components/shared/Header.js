import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../../../assets/images/logo.svg';
import Colors from '../../utils/colors/Colors';
import Arrow_Back from '../../../assets/icons/Arrow_Back.svg';
import globalStyles from "../../utils/globalStyle/GlobalStyle";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { isAndroid } from '../../utils/helpers/Helpers'
const Header = ({
  showBack = false,
  showProfile = false,
  showTitle = false,
  title = '',
  onBackPress = () => { },
  onProfilePress = () => { },
}) => {
  return (
    <View style={styles.container}>



      <View style={styles.rightContainer}>
        {showBack && (
          <TouchableOpacity onPress={onBackPress}>
            <Arrow_Back width={scale(30)} height={verticalScale(30)} />
          </TouchableOpacity>
        )}


        {showProfile && (
          <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
            <Feather name="user" size={moderateScale(20)} color="#900B09" />
            <Text style={styles.profileText}>إنشاء حساب</Text>
          </TouchableOpacity>
        )}
      </View>

      {showTitle && <Text style={[globalStyles.mainTitle, { color: Colors.text.onDark }, styles.title]}> {title} </Text>}

      <Logo style={styles.logo} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: isAndroid() ? verticalScale(80) : verticalScale(95),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(12),
    paddingTop: isAndroid() ? verticalScale(20) : verticalScale(50),
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
  logo: {
    width: scale(90),
    height: verticalScale(45),
  },
  placeholder: {
    width: scale(90)
  },
  title: {
    marginLeft: scale(27)
  }
});

export default Header;
