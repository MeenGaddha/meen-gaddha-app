import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image ,Text} from 'react-native';
import { verticalScale, moderateScale, scale } from 'react-native-size-matters';



const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>"تسجيل الدخول"</Text>

          </TouchableOpacity>




    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',     
    alignItems: 'center',        
    paddingHorizontal: moderateScale(24),
    marginTop: verticalScale(100),
  },

});
