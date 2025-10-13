import { StyleSheet, TouchableOpacity, TextInput, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import globalStyles from "../../utils/globalStyle/GlobalStyle";
import colors from '../../utils/colors/Colors';
import Lock from "../../../assets/icons/Lock";
import Mail from "../../../assets/icons/Mail";
import CustomInput from '../../components/shared/CustomInput'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topimageContainer}>
        <Image
          source={require("../../../assets/images/topimage.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={[globalStyles.mainTitle, { color: colors.text.primaryTitle }]}> هلا واللّه 😎</Text>
        <Text style={[globalStyles.mainTitle, { color: colors.text.primaryTitle }]}>سجّل دخولك و خلّنا نشوف شطارتكم من جديد🔥</Text>
      </View>
      <View >
        <CustomInput
        placeholder='البريد الإلكتروني '
        value={email}
        onChangeText={setEmail}
        textAlign='right'
        icon={Mail}
        />
        <CustomInput
        placeholder='كلمة المرور'
        value={password}
        onChangeText={setPassword}
        textAlign='right'
        secure={true}
        icon={Lock}
        />
      </View>

      <View style={styles.signUpTextcontainer}>
                <Text style={[styles.signUpText, { color: colors.text.primaryTitle }]}>ما عندك حساب؟</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>

          <Text style={[styles.signUpText, { color: colors.text.description }]}>انشئ حسابك</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={globalStyles.buttonLarge} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={[globalStyles.mainTitle, { color: colors.text.onDark }]}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topimageContainer: {
    height: verticalScale(230),
  },
  topImage: {
    width: scale(320),
    height: verticalScale(230),
  },
  welcomeTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(30),
    marginBottom: scale(60)
  },
  inputContainer: {
    backgroundColor: "#e2e2e2",
    flexDirection: "row",
    borderRadius: moderateScale(15),
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    alignItems: "center",
    justifyContent: 'flex-end',
    height: verticalScale(35),

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
    marginVertical: verticalScale(35)
  },
  signUpText: {
    marginHorizontal: scale(2),
    ...globalStyles.smallText
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',

  }

})