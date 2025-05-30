// screens/MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GradientBackground from './components/GradientBackground';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Botao } from './components/Botao';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const MainScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={{marginBottom:100, width:200, height:210}} />
        <Botao name='Cliente' onPress={() =>{}}></Botao>
        <Text style={styles.text}>ou</Text>
        <Botao name='Entregador' onPress={() => navigation.navigate('Login')}></Botao>
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
