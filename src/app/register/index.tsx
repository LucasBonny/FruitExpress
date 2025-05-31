import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import GradientBackground from '../../components/GradientBackground';
import { Botao } from '../../components/Botao';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
const MainScreen: React.FC = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={{marginBottom:10, width:200, height:210}} />

        <Text style={{fontWeight:700, fontSize:33}}>Registre-se</Text>
        <View style={[{flexDirection:'row',alignItems:'center', gap:10}]}>
          <Feather name="user" size={24} color="#7d7d7d" />
          <TextInput placeholder='Nome' style={{width:225, borderBottomColor:'#7d7d7d', borderBottomWidth:1}}></TextInput>
        </View>
        <View style={[{flexDirection:'row',alignItems:'center', gap:10}]}>
          <Feather name="mail" size={24} color="#7d7d7d" />
          <TextInput placeholder='E-mail' style={{width:225, borderBottomColor:'#7d7d7d', borderBottomWidth:1}}></TextInput>
        </View>
        <View style={[{flexDirection:'row',alignItems:'center', gap:10}]}>
          <Feather name="lock" size={24} color="#7d7d7d" />
          <TextInput placeholder='Senha' style={{width:225, borderBottomColor:'#7d7d7d', borderBottomWidth:1}}></TextInput>
        </View>

        <View style={{paddingTop:15, flexDirection:'row',width:255, alignItems:'center', justifyContent:'center', paddingBottom:20, gap: 5}}>
          <Feather name="check-circle" size={15} color="#1976D2" />
          <Text style={{fontWeight:'bold', justifyContent:'center', color: '#7d7d7d',fontSize:10, alignItems:'center'}}>
            Concordo com os <Text style={{color:'#1976D2'}}>Termos & Condições</Text>
          </Text>
        </View>
        <Botao name='Continuar Criando' onPress={() =>{router.navigate('/home')}}></Botao>
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
