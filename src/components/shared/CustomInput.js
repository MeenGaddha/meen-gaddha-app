import React, { useState } from 'react'; 
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'; 
import colors from '../../utils/colors/Colors'; 
import globalStyles from '../../utils/globalStyle/GlobalStyle'; 
import Eye from '../../../assets/icons/Eye'; 
import Eye_off from '../../../assets/icons/Eye_off'; 

// تعريف الكومبوننت
const CustomInput = ({
  icon: Icon,         
  placeholder = '',    
  secure = false,      // هل الحقل كلمة مرور؟ true = يظهر نقاط
  value,               
  onChangeText,        
  textAlign = 'right', 
  editable = true,
}) => {

  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [isFocused, setIsFocused] = useState(false);
 

  return (
    <View style={[styles.inputContainer, { position: 'relative' },
      {borderColor: isFocused ? '#B8B8B8' : '#e2e2e2',
        borderWidth: isFocused ? 2 : 1,
      }
    ]}>
   
      {Icon && (
        <View style={styles.iconContainer}>
            <Icon width={scale(20)} height={verticalScale(20)}/>
        </View>
      )}
     

      <TextInput
        style={styles.textInput}      
        placeholder={placeholder}      
        secureTextEntry={secure && !passwordVisible} 
        value={value}                  
        onChangeText={onChangeText}    
        textAlign={textAlign}  
        editable={editable} 
        onFocus={() => setIsFocused(true)}       
        onBlur={() => setIsFocused(false)}       
      />

      {secure && editable && (
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeButton}
        >
          {passwordVisible 
            ? <Eye height={verticalScale(20)} width={scale(20)} /> 
            : <Eye_off height={verticalScale(20)} width={scale(20)} />}
        </TouchableOpacity>
      )}
     

    </View>
  );
};

export default CustomInput; 

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: '#e2e2e2',
    flexDirection: 'row',              
    borderRadius: moderateScale(15),  
    marginHorizontal: scale(20),       
    marginVertical: verticalScale(10), 
    alignItems: 'center',              
    justifyContent: 'flex-end',        // خلي النص والأيقونة من الطرف الأيمن (للعربية)
    height: verticalScale(40),         // ارتفاع الحقل
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
