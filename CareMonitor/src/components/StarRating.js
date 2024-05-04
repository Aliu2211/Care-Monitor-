import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars > 0.5;

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={20} color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<Ionicons key="half" name="star-half" size={20} color="#FFD700" />);
    }

    return stars;
  };

  return <View style={styles.ratingContainer}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RatingStars;
