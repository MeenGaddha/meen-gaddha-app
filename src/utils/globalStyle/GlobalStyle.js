import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../colors/Colors";
import {Fonts} from '../../../assets/fonts/Fonts.js';

const globalStyles = StyleSheet.create({

  // Buttons 
  buttonLarge: {                           //زر الساين وبدءالقيم
    width: scale(155),
    height: verticalScale(30),
    borderRadius: moderateScale(20),
    backgroundColor: colors.button.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonMedium: {                           //زر الاجابه والاختيار
    width: scale(70),
    height: verticalScale(30),
    borderRadius: moderateScale(10),
    backgroundColor: colors.button.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFull: {                           //زر البروفايل والدفع
    width: scale(360),
    height: verticalScale(35),
    borderRadius: moderateScale(10),
    backgroundColor: colors.button.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAid: {                           //ازار وسائل المساعده
    width: scale(27),
    height: verticalScale(25),
    borderRadius: moderateScale(20),
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.button.AidButtons,
    borderColor: colors.border.light,
  },
  buttonText: {                           //نص داخل الازرار
    color: colors.button.text,
    fontFamily: Fonts.PrimaryFontBold,
    fontSize: 16,
    fontWeight: "bold",
  },

  // Text Styles 
  mainTitle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.PrimaryFontBold,
    fontWeight: 'bold',                    //Edited
  },
  subTitle: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.PrimaryFontBold,
  },
  bodyText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.fontMedium,
  },
  smallText: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.fontMedium,
  },
});

export default globalStyles;
