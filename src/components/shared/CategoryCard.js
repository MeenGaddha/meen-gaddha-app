import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors/Colors';

const CategoryCard = ({ title, image: Icon }) => {
  return (
    <View style={styles.card}>
      {/* SVG  */}
      <View style={styles.imageWrapper}>
        <Icon width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
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
    width: 120,
    height: 150,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // للـ Android
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
    paddingVertical: 4,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
