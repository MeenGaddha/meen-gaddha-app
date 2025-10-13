import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Onboarding from 'react-native-onboarding-swiper';
import { Fonts } from '../../../assets/fonts/Fonts';
import { useNavigation } from '@react-navigation/native';

const DoneButtonComponent = ({ ...rest}) =>{
  return(
    <TouchableOpacity { ...rest} style={{marginHorizontal:scale(20)}}>
      <Text style={styles.buttonComponentText}>دخول</Text>
    </TouchableOpacity>
  )
}
const NextButtonComponent  = ({ ...rest}) =>{
  return(
    <TouchableOpacity { ...rest} style={{marginHorizontal:scale(20)}}>
      <Text style={styles.buttonComponentText}>التالي</Text>
    </TouchableOpacity>
  )
}
const SkipButtonComponent  = ({ ...rest}) =>{
  return(
    <TouchableOpacity { ...rest} style={{marginHorizontal:scale(20)}}>
      <Text style={styles.buttonComponentText}>تخطي</Text>
    </TouchableOpacity>
  )
}
const DotComponent  = ({ isLight, selected }) =>{
// from min 13
  return (
    <View
      style={{
        width: 60,
        height: 9,
        marginHorizontal: 3,
        borderRadius: 20,
        backgroundColor  :selected ?'rgba(105, 3, 3, 1)' : 'rgba(0, 0, 0, 0.3)' ,
      }}
    />
  );
};

const GameInstructions1 = () => {
  const navigation = useNavigation();
  const onDone= () => {
    navigation.navigate("HomeScreen")
  };
  const onSkip= () => {
    navigation.navigate("HomeScreen")
  };

  return (
    <Onboarding 
    onDone={onDone}
    onSkip={onSkip}

  bottomBarColor="#F4F4F4" // خليها نفس لون الصفحة عشان يبدو شفاف

    DoneButtonComponent={DoneButtonComponent}
    SkipButtonComponent ={SkipButtonComponent }
    NextButtonComponent ={NextButtonComponent  }
    DotComponent ={DotComponent }
    titleStyles={{
      fontFamily:Fonts.TajawalBold,
      fontSize:moderateScale(24),
      color:"#690303"
    }}
     subTitleStyles={{
      fontFamily:Fonts.TajawalRegular,
      fontSize:moderateScale(15),
      color:"#B50C0C"
     }}
      pages={[
        {
          backgroundColor: '#F4F4F4',
          image: <Image source={require('../../../assets/images/TeamImage.png')} style={{width:scale(300),height:verticalScale(190)}}/>,
          title: 'جمّع فريقك وتحدّوا بعض!',
          subtitle: 'اختبروا معلوماتكم في أجواء مليانة تحدي وحماس 💡🔥\n كل سؤال يرفعكم… واللي يجمع أعلى نقاط هو اللي يفوز 🏆',
        },
        {
          backgroundColor: '#F4F4F4',
          image: <Image source={require('../../../assets/images/Choose_Categories.png')} style={{width:scale(280),height:verticalScale(280),marginLeft:moderateScale(70)}}/>,
          title: '٨ فئات مليانة تحدي!', 
          subtitle: 'اختاروا عدد الأسئلة (٤، ٦، ٨) حسب جوكم 🎯\n واستمتعوا بـ ٤ وسائل مساعدة تزيد الحماس ⚡',
        },
        
  ]}
    />
  )
}

export default GameInstructions1

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonComponentText:{
    fontFamily:Fonts.TajawalRegular,
    color:"#690303",
    fontSize:moderateScale(14)
  }
})