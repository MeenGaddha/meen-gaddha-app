import React, { useState } from 'react'; 
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'; 
import colors from '../../utils/colors/Colors'; 
import globalStyles from '../../utils/globalStyle/GlobalStyle'; 
import Eye from '../../../assets/icons/Eye'; 
import Eye_off from '../../../assets/icons/Eye_off'; 

// تعريف الكومبوننت
const CustomInput = ({
  icon: Icon,          // أيقونة الحقل (Mail, Lock) نمررها كـ Component
  placeholder = '',    // النص الظاهر داخل الحقل
  secure = false,      // هل الحقل كلمة مرور؟ true = يظهر نقاط
  value,               // القيمة الحالية للحقل (controlled input)
  onChangeText,        // دالة تحديث القيمة عند الكتابة
  textAlign = 'right', // محاذاة النص (يمين للعربي)
}) => {

  const [passwordVisible, setPasswordVisible] = useState(false); 
  // حالة لإدارة إذا العين مضغوطة أو لا
  // false = النص مخفي، true = النص ظاهر

  return (
    <View style={[styles.inputContainer, { position: 'relative' }]}>
      {/* 
        حاوية الحقل، flex row عشان الأيقونة + TextInput جنب بعض
        position: 'relative' مهم عشان نقدر نثبت زر العين بـ absolute
      */}

      {Icon && (
        <View style={styles.iconContainer}>
            <Icon width={scale(20)} height={verticalScale(20)}/>
        </View>
      )}
      {/* 
        لو فيه أيقونة، نعرضها. 
        marginRight و marginLeft عشان ما تلصق النص كثير في الأيقونة
      */}

      <TextInput
        style={styles.textInput}       // تصميم الحقل (خلفية، حجم خط...)
        placeholder={placeholder}      // النص الظاهر قبل الكتابة
        secureTextEntry={secure && !passwordVisible} 
        // true لو الحقل كلمة مرور و passwordVisible=false → يظهر نقاط
        value={value}                  // القيمة الحالية (من الشاشة أو الفورم)
        onChangeText={onChangeText}    // عند التغيير، تحدث القيمة
        textAlign={textAlign}          // محاذاة النص: right للغة العربية
      />
      {/* 
        TextInput نفسه 
        flex:1 في الستاييل → يشغل باقي مساحة الحقل
        secureTextEntry → النقاط لو كلمة مرور
        value & onChangeText → التحكم بالحقل من الشاشة
      */}

      {secure && (
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeButton}
        >
          {passwordVisible 
            ? <Eye height={verticalScale(20)} width={scale(20)} /> 
            : <Eye_off height={verticalScale(20)} width={scale(20)} />}
        </TouchableOpacity>
      )}
      {/* 
        زر العين يظهر فقط لو الحقل كلمة مرور
        عند الضغط، نغيّر الحالة passwordVisible → النص يظهر أو يخفي
      */}

    </View>
  );
};

export default CustomInput; 
// نصدر الكومبوننت عشان نقدر نستخدمه في أي شاشة

// ستايلات الحقل
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e2e2e2',       // لون خلفية الحقل
    flexDirection: 'row',              // ترتيب الأيقونة + النص بجانب بعض
    borderRadius: moderateScale(15),  // زوايا الحقل دائرية
    marginHorizontal: scale(20),       // مسافة من حواف الشاشة
    marginVertical: verticalScale(10), // مسافة بين الحقول عموديًا
    alignItems: 'center',              // محاذاة عمودية للنص والأيقونة
    justifyContent: 'flex-end',        // خلي النص والأيقونة من الطرف الأيمن (للعربية)
    height: verticalScale(35),         // ارتفاع الحقل
  },
  textInput: {
    flex: 1,                            // يشغل باقي مساحة الحقل
    color: colors.text.default,         // لون الخط
    ...globalStyles.subTitle,           // تطبيق نمط الخطوط من المشروع
  },
  eyeButton: {
    marginRight : scale(15),             // مسافة بسيطة بين النص والعين
  },
  iconContainer:{
    marginLeft:scale(10),
    marginRight:scale(5)
  }
});
