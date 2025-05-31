// screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { router } from 'expo-router';

const HomeScreen: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/main');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={{marginBottom:100, width:200, height:210}} />
      <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FC235',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    fontSize: 16
  }
});
