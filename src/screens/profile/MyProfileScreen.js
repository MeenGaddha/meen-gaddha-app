import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import globalStyles from "../../utils/globalStyle/GlobalStyle";
import Colors from '../../utils/colors/Colors';
import Header from '../../components/shared/Header';
import { useNavigation } from '@react-navigation/native';
import ProfileImagePicker from '../../components/shared/ProfileImagePicker';
import CustomInput from '../../components/shared/CustomInput'
import { Fonts } from '../../../assets/fonts/Fonts';


const MyProfileScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>

      {/* Header */}
      <Header
        showBack={true}
        showTitle={true}
        title="تعديل الحساب"
        onBackPress={() => navigation.goBack()}
      />
      <ProfileImagePicker />
      <View style={styles.inputContainer1}>
        <Text style={[globalStyles.subTitle, { color: Colors.text.default }, styles.labelText]}>الاسم الكامل</Text>
        <CustomInput
          placeholder='محمد باودود'
          value={fullName}
          onChangeText={setFullName}
          textAlign='right'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[globalStyles.subTitle, { color: Colors.text.default }, styles.labelText]}>الاسم الكامل</Text>
        <CustomInput
          placeholder=' mohamemd@gmail.com '
          value={email}
          onChangeText={setEmail}
          textAlign='right'

        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[globalStyles.subTitle, { color: Colors.text.default }, styles.labelText]}>الاسم الكامل</Text>
        <CustomInput
          placeholder='* * * * * * * * * *'
          value={password}
          onChangeText={setPassword}
          textAlign='right'
          editable={false}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditPassword')}>

          <Text style={[globalStyles.subTitle,
          { color: Colors.text.primaryTitle },
          styles.changePass]}>
            تعديل كلمة المرور
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[globalStyles.buttonFull, styles.button1]}
         onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={[globalStyles.mainTitle, { color: Colors.text.onDark }]}> حفظ </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[globalStyles.buttonFull, styles.button2]}
         onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={[globalStyles.mainTitle, { color: Colors.text.primaryTitle }]}> حذف الحساب</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default MyProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.screen,
  },
  labelText: {
    marginLeft: scale(25),
    marginBottom: verticalScale(-7),
  },
  changePass: {
    marginLeft: scale(10),
    marginBottom: verticalScale(-7),
    borderBottomWidth: 1,
    borderBottomColor: Colors.text.primaryTitle,
    paddingBottom: verticalScale(1),
    width: scale(104)
  },
  inputContainer: {
    marginTop: verticalScale(15)
  },
  inputContainer1: {
    marginTop: verticalScale(35)
  },
  buttonContainer:{
    alignItems:'center',
  },
  button1: {
    marginTop: verticalScale(40)
  },
  button2: {
    backgroundColor:"#ffffff",
    marginTop: verticalScale(10),
    borderColor: Colors.text.primaryTitle,
    borderWidth:1.5
  },
})