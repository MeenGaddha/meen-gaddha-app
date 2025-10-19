import { StyleSheet, KeyboardAvoidingView, ScrollView, Alert, TouchableOpacity, TextInput, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import globalStyles from "../../utils/globalStyle/GlobalStyle";
import colors from '../../utils/colors/Colors';
import Lock from "../../../assets/icons/Lock";
import Mail from "../../../assets/icons/Mail";
import User from "../../../assets/icons/User";
import CustomInput from '../../components/shared/CustomInput'


const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    const newErrors = { email: '', password: '', confirmPassword: '' };

    if (!email.includes('@')) {
      newErrors.email = 'البريد الإلكتروني يجب أن يحتوي على @';

    } else if (!email.endsWith('.com')) {
      newErrors.email = 'البريد الإلكتروني يجب أن ينتهي بـ .com'
    }

    if (password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون أكثر من 8 خانات';
    }

    if (password != confirmPassword) {
      newErrors.confirmPassword = 'كلمتا المرور غير متطابقتين'
    }
    setError(newErrors);
    if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      Alert.alert('تم إنشاء الحساب بنجاح ✅');
      navigation.navigate('SignIn');
    }

  };

  return (
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
        <View style={styles.topimageContainer}>
          <Image
            source={require("../../../assets/images/topimage.png")}
            style={styles.topImage}
          />
        </View>
        <View style={styles.welcomeTextContainer}>
          <Text style={[globalStyles.mainTitle, { color: colors.text.primaryTitle }]}> ياللّه حيه !</Text>
          <Text style={[globalStyles.mainTitle, { color: colors.text.primaryTitle }]}>انشئ حسابك و خلك قدها 👊🔥</Text>
        </View>
        <View >
          <CustomInput
            placeholder='اسم المستخدم'
            value={name}
            onChangeText={setName}
            textAlign='right'
            icon={User}
          />
          <CustomInput
            placeholder='البريد الإلكتروني '
            value={email}
            onChangeText={setEmail}
            textAlign='right'
            icon={Mail}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          <CustomInput
            placeholder='كلمة المرور'
            value={password}
            onChangeText={setPassword}
            textAlign='right'
            secure={true}
            icon={Lock} />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <CustomInput
            placeholder='تأكيد كلمة المرور  '
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            textAlign='right'
            secure={true}
            icon={Lock}
          />
          {errors.confirmPassword ? (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          ) : null}
        </View>

        <View style={styles.signUpTextcontainer}>
          <Text style={[styles.signUpText, { color: colors.text.primaryTitle }]}>عندك حساب؟</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>

            <Text style={[styles.signUpText, { color: colors.text.description }]}> سجل دخولك</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={globalStyles.buttonLarge} onPress={handleSignUp}>
            <Text style={[globalStyles.mainTitle, { color: colors.text.onDark }]}>إنشاء</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topimageContainer: {
    height: verticalScale(180),
  },
  topImage: {
    width: scale(300),
    height: verticalScale(195),
  },
  welcomeTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    marginBottom: scale(15)
  },
  textInput: {
    flex: 1,
    color: colors.text.default,
    ...globalStyles.subTitle,
  },
  eyeButton: {
    marginRight: scale(10)
  },
  signUpTextcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(25),
  },
  signUpText: {
    marginHorizontal: scale(2),
    ...globalStyles.smallText
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    marginRight: scale(25),
    fontSize: moderateScale(12),
    marginTop: verticalScale(3),
    
  },

})