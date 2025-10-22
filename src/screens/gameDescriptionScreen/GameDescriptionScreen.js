import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Header from '../../components/shared/Header';
import BottomTab from '../../components/shared/BottomTab';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../utils/globalStyle/GlobalStyle';
import Colors from '../../utils/colors/Colors';

import TeamFormationIcon from '../../../assets/icons/TeamFormationIcon.svg'
import CategorySelectionIcon from '../../../assets/icons/CategorySelectionIcon.svg'
import LiveTheEnthusiasmIcon from '../../../assets/icons/LiveTheEnthusiasmIcon.svg'
import NumberOfQuestionsSelectionIcon from '../../../assets/icons/NumberOfQuestionsSelectionIcon.svg'
import PayAttentionToTheTimeIcon from '../../../assets/icons/PayAttentionToTheTimeIcon.svg'
import LayoutIcon from '../../../assets/icons/LayoutIcon.svg'

const GameDescriptionScreen = () => {
  const navigation = useNavigation();
  const [selectedHelp, setSelectedHelp] = useState('chatgpt');

  const helpOptions = [
    {
    key: 'chatgpt',
    label: 'استدعاء العقل المدبّر 🤖',
    description: 'اطلبوا مساعدة الذكاء الاصطناعي للحصول على تلميح أو إجابة مختصرة لمرة وحدة.',
  },
  {
    key: 'double',
    label: 'تدبيل النقاط ✨',
    description: 'ضاعفوا نقاط سؤال واحد — فرصة لرفع رصيدكم بسرعة عند الحاجة.',
  },
  {
    key: 'silence',
    label: 'سكتهم عن الإجابة 🤫',
    description: 'امنعوا فريق الخصم من الإجابة على سؤال واحد — فرصتهم تضيع وتزيد فرصكم للفوز.',
  },
];


  return (
    <View style={styles.container}>
      <Header onProfilePress={() => navigation.navigate('SignIn')} />

      <SafeAreaView style={styles.content} edges={['left', 'right']}>
        <ScrollView contentContainerStyle={{ paddingBottom: verticalScale(180) }} showsVerticalScrollIndicator={false}>
          <Text style={[globalStyles.sectionTitle, styles.title]}> خطوات التحدي 🔥</Text>
          
          {/* خطوات التحدي */}
          <View style={styles.boxesWrapper}>
            <View style={styles.box}>
              <View style={styles.iconContainer}><TeamFormationIcon width={scale(28)} height={scale(28)} /></View>
              <Text style={styles.boxTitle}>كونوا فريقكم</Text>
              <Text style={styles.boxDesc}>قسموا أنفسكم لفريقين وحددوا من معاكم.</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.iconContainer}><CategorySelectionIcon width={scale(28)} height={scale(28)} /></View>
              <Text style={styles.boxTitle}>حددوا الفئات</Text>
              <Text style={styles.boxDesc}> حددوا عدد الفئات (4، 6، 8) وكل فريق يختار الفئات اللي هو شاطر فيها..</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.iconContainer}><NumberOfQuestionsSelectionIcon width={scale(28)} height={scale(28)} /></View>
              <Text style={styles.boxTitle}>حددوا عدد الأسئلة</Text>
              <Text style={styles.boxDesc}>اختاروا عدد الأسئلة اللي يناسبكم (4، 6، 8).</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.iconContainer}><LayoutIcon width={scale(28)} height={scale(28)} /></View>
              <Text style={styles.boxTitle}>خططوا!</Text>
              <Text style={styles.boxDesc}>٦ وسائل مساعدة.. استخدموها بحكمة!</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.iconContainer}><PayAttentionToTheTimeIcon width={scale(28)} height={scale(28)} /></View>
              <Text style={styles.boxTitle}>انتبه للوقت!</Text>
              <Text style={styles.boxDesc}>الفريق صاحب الدور: 1 دقيقة للإجابة. الآخر: 10 ثوانٍ فقط.</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.iconContainer}><LiveTheEnthusiasmIcon width={scale(28)} height={scale(28)} /></View>
              <Text style={styles.boxTitle}>عيشوا الحماس</Text>
              <Text style={styles.boxDesc}>تنافسوا واستمتعوا واجمعوا أعلى النقاط!</Text>
            </View>
          </View>

          {/* وسائل المساعدة */}
          <View style={styles.helpSection}>
            <Text style={[styles.subTitle]}>وسائل المساعدة</Text>

            {/* الصف الأول (زرين) */}
            <View style={styles.rowButtons}>
              {helpOptions.slice(0, 2).map(option => (
                <TouchableOpacity
                  key={option.key}
                  style={[
                    styles.helpButton,
                    selectedHelp === option.key && styles.helpButtonActive,
                  ]}
                  onPress={() => setSelectedHelp(option.key)}
                >
                  <Text
                    style={[
                      styles.helpButtonText,
                      selectedHelp === option.key && styles.helpButtonTextActive,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* الزر الثالث */}
            <View style={styles.centerButtonWrapper}>
              <TouchableOpacity
                style={[
                  styles.helpButton,
                  styles.centerButton,
                  selectedHelp === 'silence' && styles.helpButtonActive,
                ]}
                onPress={() => setSelectedHelp('silence')}
              >
                <Text
                  style={[
                    styles.helpButtonText,
                    selectedHelp === 'silence' && styles.helpButtonTextActive,
                  ]}
                >
                  {helpOptions[2].label}
                </Text>
              </TouchableOpacity>
            </View>

            {/* الوصف */}
            <Text style={styles.descriptionText}>
              {helpOptions.find(option => option.key === selectedHelp)?.description}
            </Text>
          </View>

        </ScrollView>
      </SafeAreaView>

      <BottomTab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.screen,
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(30),
  },
  title: {
    textAlign: 'center',
    marginBottom: verticalScale(40),
    ...globalStyles.mainTitle,
    color: Colors.text.primaryTitle,
  },
  boxesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '31%',
    backgroundColor: Colors.background.light,
    borderRadius: moderateScale(12),
    paddingTop: verticalScale(22),
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(6),
    marginBottom: verticalScale(20),
    alignItems: 'center',
    elevation: 2,
    position: 'relative',
  },
  iconContainer: {
    backgroundColor: Colors.background.dark,
    borderRadius: moderateScale(12),
    padding: moderateScale(6),
    position: 'absolute',
    top: -verticalScale(16),
    alignSelf: 'center',
    zIndex: 2,
  },
  boxTitle: {
    textAlign: 'center',
    marginBottom: verticalScale(4),
    color: Colors.text.primaryTitle,
    fontSize: moderateScale(11),
  },
  boxDesc: {
    textAlign: 'center',
    color: Colors.text.description,
    fontSize: moderateScale(9),
  },

  /* وسائل المساعدة */
  helpSection: {
    backgroundColor: Colors.background.light, 
    borderRadius: moderateScale(14),
    padding: moderateScale(12),
    marginTop: verticalScale(20),
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: verticalScale(15),
    color: Colors.text.primaryTitle,
    ...globalStyles.mainTitle
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  helpButton: {
    flex: 1,
    marginHorizontal: scale(3),
    ...globalStyles.buttonAid
  },
  helpButtonActive: {
    backgroundColor: Colors.background.dark,
    borderColor: Colors.background.dark,
  },
  helpButtonText: {
    textAlign: 'center',
    color: Colors.text.primaryTitle,
    ...globalStyles.smallText
  },
  helpButtonTextActive: {
    color: Colors.text.onDark,
  },
  centerButtonWrapper: {
    alignItems: 'center',
    marginBottom: verticalScale(15),
  },
  centerButton: {
    width: '60%',
  },
  descriptionText: {
    color: Colors.text.primaryTitle,
    ...globalStyles.subTitle,
    textAlign: 'center',
    lineHeight: moderateScale(15),
  },
});

export default GameDescriptionScreen;
