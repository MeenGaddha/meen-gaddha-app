import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../../components/shared/BottomTab';
import Header from '../../components/shared/Header';
import { useNavigation } from '@react-navigation/native';

const MyProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header
        showBack={true}
        showTitle={true}
        title="تعديل الحساب"
        onBackPress={() => navigation.goBack()}
      />

      



    </View>
  )
}

export default MyProfileScreen

const styles = StyleSheet.create({
  container: {

  }
})