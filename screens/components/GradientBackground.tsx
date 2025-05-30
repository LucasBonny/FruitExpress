import React from 'react';
import { StyleSheet, ViewStyle, StyleProp, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  style,
  colors = ['#4FC235', '#FFF', '#FFF', '#FFF'] as const 
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, style]}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
