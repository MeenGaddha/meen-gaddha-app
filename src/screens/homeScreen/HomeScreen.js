import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Header from '../../components/shared/Header';
import BottomTab from '../../components/shared/BottomTab';
import CategoryCard from '../../components/shared/CategoryCard';
import { mostPopularCategories, exclusiveCategories } from '../../data/Categories';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../utils/globalStyle/GlobalStyle';
import Colors from '../../utils/colors/Colors';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import QuestionMarkLogo from '../../../assets/images/QuestionMarkLogo.svg';


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header onProfilePress={() => navigation.navigate('SignIn')} />

      {/* ContentScreen */}
      <SafeAreaView style={styles.content} edges={['left', 'right']}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          <View style={styles.sectionStartGame}>

            {/* Logo */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: verticalScale(-14) }}>
              <LogoWhite width={75} height={75} />   
              <QuestionMarkLogo width={110} height={110} style={{ marginLeft: scale(-18), marginTop: verticalScale(8)}} />
            </View>

            {/* Title */}
            <Text style={styles.sectionTitle}>فريقكم سر قوتكم.. قد التحدي؟</Text>

            {/* Description */}
            <Text style={styles.sectionDesc}>
              أسئلة سريعة، منافسة حامية، و متعة سعودية ما تنسى 🔥
            </Text>

            {/* Button */}
            <TouchableOpacity style={styles.startGameButton} 
            onPress={() => navigation.navigate("CategoryScreen")}>
              <Text style={styles.startGameText}>ابدأ اللعب !</Text>
            </TouchableOpacity>
          </View>

          {/* Cateogry: MostPopular */}
          <Text style={styles.textSectionsCategories}>الفئات الأكثر شهرة</Text>
          <View style={styles.sectionsCategories}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollRow}
              inverted
            >
              {mostPopularCategories.map((cat) => (
                <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
              ))}

            </ScrollView>
          </View>

          {/* Cateogry: Exclusive */}
          <Text style={styles.textSectionsCategories}>الفئات الحصرية</Text>
          <View style={styles.sectionsCategories}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollRow}
              inverted
            >
              {exclusiveCategories.map((cat) => (
                <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
              ))}

            </ScrollView>
          </View>

        </ScrollView>
      </SafeAreaView>

      {/* BottomTab */}
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
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(25),
  },
  sectionStartGame: {
    width: '100%',
    backgroundColor: Colors.background.dark,
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 20,
    resizeMode: 'contain',
  },
  sectionTitle: {
    ...globalStyles.mainTitle,
    color: Colors.text.onDark,
    marginTop: verticalScale(-8),
    marginBottom: verticalScale(2),
    textAlign: 'center',
    fontFamily: 'PrimaryFontBold'
  },
  sectionDesc: {
    ...globalStyles.subTitle,
    color: Colors.text.onDark,
    textAlign: 'center',
    marginBottom: verticalScale(22),
    lineHeight: verticalScale(20),
  },
  startGameButton: {
    ...globalStyles.buttonLarge,
    backgroundColor: '#FFFFFF',
  },
  startGameText: {
    ...globalStyles.mainTitle,
    color: Colors.text.primaryTitle,
  },
  scrollRow: {
    paddingVertical: verticalScale(12),
    paddingRight: scale(12),
  },
  sectionsCategories: {
    backgroundColor: Colors.background.light,
    borderRadius: moderateScale(12),
    marginTop: verticalScale(20),
  },
  textSectionsCategories: {
    ...globalStyles.mainTitle,
    fontWeight: 'bold',
    color: Colors.text.primaryTitle,
    textAlign: 'left',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(-12),
  },
});

export default HomeScreen;

