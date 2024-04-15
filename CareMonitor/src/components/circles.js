import React from 'react';
import { View, StyleSheet } from 'react-native';

const TransparentCircle = ({ size, borderWidth }) => {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: borderWidth,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
  };

  return <View style={circleStyle} />;
};

export default TransparentCircle;
