import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/images/logo.svg';
import Colors from '../../utils/colors/Colors';

const Header = ({ onProfilePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
        <Ionicons name="person" size={20} color="#900B09" />
        <Text style={styles.profileText}>إنشاء حساب</Text>
      </TouchableOpacity>

      <Logo style={styles.logo}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      height: Platform.OS === 'ios' ? 105 : 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingTop: Platform.OS === 'ios' ? 60 : 20,
      backgroundColor: Colors.background.primaryHeader,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
  },
  profileButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.background.screen, 
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 20,
  },
  profileText: {
      color: Colors.text.primaryTitle,
      marginLeft: 5,
      fontSize: 14,
      fontWeight: 'bold',
  },
  logo: {
      width: 90,
      height: 45,
  },
})
export default Header;
