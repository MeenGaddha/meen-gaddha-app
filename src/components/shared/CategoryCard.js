import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import globalStyles from '../../utils/globalStyle/GlobalStyle';

const CategoryCard = ({ title, image: Icon }) => {
  return (
    <View style={styles.card}>
      {/* SVG  */}
      <View style={styles.imageWrapper}>
        <Icon width={scale(100)} height={verticalScale(100)}  />
      </View>

      {/* Title */}
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scale(100),
    height: verticalScale(110),
    borderRadius: moderateScale(12),
    marginLeft: verticalScale(10),
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    shadowOffset: { height: verticalScale(2) },
    elevation: moderateScale(3), // للـ Android
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.background.dark,
    paddingVertical: verticalScale(3),
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    ...globalStyles.subTitle,
  },
});

export default CategoryCard;
