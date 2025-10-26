import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, I18nManager, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Fonts } from '../../../assets/fonts/Fonts';
import { useNavigation } from '@react-navigation/native';

// SVG
import TeamImage from '../../../assets/images/TeamImage.svg';
import ChooseCategories from '../../../assets/images/ChooseCategories.svg';
import ChooseCategoriesQu from '../../../assets/images/ChooseCategoriesQu.svg';

// تحديد إذا اللغة RTL
const isRTL = I18nManager.isRTL;

// Data
const onboardingData = [
  {
    id: '1',
    renderImage: () => (
      <TeamImage
        width={scale(300)}
        height={verticalScale(220)}
      />
    ),
    title: 'جمّع فريقك وتحدّوا بعض!',
    subtitle:
      'اختبروا معلوماتكم في أجواء مليانة تحدي وحماس 💡🔥\n كل سؤال يرفعكم… واللي يجمع أعلى نقاط هو اللي يفوز 🏆',
  },
  {
    id: '2',
    renderImage: () => (
      <View style={styles.rowImages}>
        <ChooseCategories
          width={scale(180)}
          height={verticalScale(200)}
          style={styles.svgMargin}
        />
        <ChooseCategoriesQu
          width={scale(100)}
          height={verticalScale(100)}
          style={styles.svgMargin && styles.svgMarginQu}
        />
      </View>
    ),
    title: '٨ فئات مليانة تحدي!',
    subtitle:
      'اختاروا عدد الأسئلة (٤، ٦، ٨) حسب جوكم 🎯\n واستمتعوا بـ ٤ وسائل مساعدة تزيد الحماس ⚡',
  },
];

const GameInstructions1 = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      handleDone();
    }
  };

  const handleSkip = () => {
    handleDone();
  };

  const handleDone = () => {
    navigation.navigate('HomeScreen');
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      {/* FlatList supports RTL */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.page}>
            {item.renderImage()}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        inverted={isRTL}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {currentIndex < onboardingData.length - 1 ? (
          <>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.buttonText}>تخطي</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <Text style={styles.buttonText}>التالي</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={handleDone}>
            <Text style={styles.buttonText}>دخول</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GameInstructions1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent: 'space-between',
  },
  page: {
    width: scale(360),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  rowImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  svgMargin: {
    
  },
  svgMarginQu: {
     marginBottom: verticalScale(160),
     marginLeft: scale(-50)
  },
  title: {
    fontFamily: Fonts.TajawalBold,
    fontSize: moderateScale(24),
    color: '#690303',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontFamily: Fonts.TajawalRegular,
    fontSize: moderateScale(15),
    color: '#B50C0C',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: verticalScale(20),
  },
  dot: {
    width: scale(50),
    height: verticalScale(9),
    borderRadius: 20,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: 'rgba(105, 3, 3, 1)',
  },
  inactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
  },
  buttonText: {
    fontFamily: Fonts.TajawalRegular,
    color: '#690303',
    fontSize: moderateScale(14),
  },
});
