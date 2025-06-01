// screens/MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GradientBackground from '../../components/GradientBackground';
import { Botao } from '../../components/Botao';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const MainScreen: React.FC = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={{marginBottom:100, width:200, height:210}} />
        <Botao name='Cliente' onPress={() =>{}}></Botao>
        <Text style={styles.text}>ou</Text>
        <Botao name='Entregador' onPress={() => router.navigate('login')}></Botao>
        <StatusBar style="auto" />
      </View>
    </GradientBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight:'bold', 
    fontSize: 20,
    textTransform:'uppercase', 
    padding: 10
  }
});
