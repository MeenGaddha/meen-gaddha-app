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
import LogoWithQu from '../../../assets/images/logoWithQu.svg';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    console.log('Profile button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header onProfilePress={handleProfilePress} />

      {/* ContentScreen */}
      <SafeAreaView style={styles.content} edges={['left', 'right']}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
          <View style={styles.sectionStartGame}>
            {/* Logo */}
            <LogoWithQu style={styles.logo}/>

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
    paddingHorizontal: 16,
    paddingTop: 25,
  },
  sectionStartGame: {
    width: '100%',
    backgroundColor: Colors.background.dark,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: width * 0.45, 
    height: width * 0.20,
    resizeMode: 'contain',
  },
  sectionTitle: {
    ...globalStyles.mainTitle,
    color: Colors.text.onDark,
    marginBottom: 6,
    textAlign: 'center',
    fontFamily: 'PrimaryFontBold'
  },
  sectionDesc: {
    ...globalStyles.subTitle,
    color: Colors.text.onDark,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
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
    paddingVertical: 12,
    paddingRight: 12,
  },

  sectionsCategories: {
    backgroundColor: Colors.background.light,
    borderRadius: 12,
    marginTop: 20,
  },

  textSectionsCategories: {
    ...globalStyles.mainTitle,
    fontWeight: 'bold',
    color: Colors.text.primaryTitle,
    textAlign: 'left',
    marginTop: 25,
    marginBottom: -12,
  },

});

export default HomeScreen;

