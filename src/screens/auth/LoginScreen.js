import React, { useState } from 'react';
import { StyleSheet,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <Text>miojop</Text>    
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 165,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
