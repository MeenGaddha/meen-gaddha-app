import { StyleSheet, KeyboardAvoidingView, ScrollView, Alert, TouchableOpacity, TextInput, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import globalStyles from "../../utils/globalStyle/GlobalStyle";
import Colors from '../../utils/colors/Colors';
import Header from '../../components/shared/Header';
import { Platform } from 'react-native';
import CustomInput from '../../components/shared/CustomInput'

const EditPasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    const newErrors = { password: '', confirmPassword: '' };


    if (password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون أكثر من 8 خانات';
    }

    if (password != confirmPassword) {
      newErrors.confirmPassword = 'كلمتا المرور غير متطابقتين'
    }
    setError(newErrors);
    if (!newErrors.password && !newErrors.confirmPassword) {
      Alert.alert('تم إنشاء الحساب بنجاح ✅');
      navigation.navigate('SignIn');
    }

  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        showBack={true}
        showTitle={true}
        title="تغيير كلمة المرور"
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS يستخدم padding، Android يستخدم height
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // ضبط المسافة حسب الحاجة
      >

        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: verticalScale(50) }} // عشان مايعلق شي أسفل
          showsVerticalScrollIndicator={false} // إخفاء شريط التمرير لو تحب
          keyboardShouldPersistTaps="handled" // عشان لما تضغط على زر يتفاعل بدون غلق الكيبورد
        >

          <View >
            <Text style={[globalStyles.subTitle, { color: Colors.text.default }, styles.labelText1]}>كلمة المرور الجديدة</Text>

            <CustomInput
              placeholder="* * * * * * * *"
              value={password}
              onChangeText={setPassword}
              textAlign='right'
              secure={true}
           />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Text style={[globalStyles.subTitle, { color: Colors.text.default }, styles.labelText2]}>تأكيد كلمة المرور</Text>

            <CustomInput
              placeholder= "* * * * * * * *"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              textAlign='right'
              secure={true}
            />
            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
          </View>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={[globalStyles.buttonFull, styles.button1]}
         onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={[globalStyles.mainTitle, { color: Colors.text.onDark }]}> حفظ </Text>
        </TouchableOpacity>
      </View>


        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default EditPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.screen,
  },
  labelText1: {
    marginLeft: scale(25),
    marginBottom: verticalScale(-7),
    marginTop:verticalScale(95)
  },
  labelText2: {
    marginLeft: scale(25),
    marginBottom: verticalScale(-7),
    marginTop:verticalScale(15)
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginRight: scale(25),
    fontSize: moderateScale(12),
    marginTop: verticalScale(3),
  },
  buttonContainer:{
    alignItems:'center',
    marginTop:verticalScale(70)
  },
})