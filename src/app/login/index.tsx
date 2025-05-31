// screens/MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import GradientBackground from '../../components/GradientBackground';
import { Botao } from '../../components/Botao';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

const MainScreen: React.FC = () => {

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={{marginBottom:10, width:200, height:210}} />

        <Text style={{fontWeight:700, fontSize:33}}>Login</Text>
        <View style={[{flexDirection:'row',alignItems:'center', gap:10}]}>
          <Feather name="at-sign" size={24} color="#7d7d7d" />
          <TextInput placeholder='E-mail' style={{width:225, borderBottomColor:'#7d7d7d', borderBottomWidth:1}}></TextInput>
        </View>
        <View style={[{flexDirection:'row',alignItems:'center', gap:10}]}>
          <Feather name="lock" size={24} color="#7d7d7d" />
          <TextInput placeholder='Senha' style={{width:225, borderBottomColor:'#7d7d7d', borderBottomWidth:1}}></TextInput>
        </View>

        <View style={{paddingTop:5, flexDirection:'row',width:255, justifyContent:'flex-end', paddingBottom:30}}>
          <Text style={{fontWeight:'bold', color: '#7d7d7d'}}>Esqueceu a senha?</Text>
        </View>
        <Botao name='Acessar' onPress={() =>{}}></Botao>
        <Text style={styles.text}>ou</Text>
        <TouchableOpacity style={{backgroundColor:'#4FC235',padding:10,width:250,borderRadius:30,alignItems:'center'}}>
          <Text style={{fontSize: 17,color:'white',fontWeight: 'bold'}}>
            <AntDesign name="google" size={24} color="white" /> Entrar com Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('/register')} style={{padding:12}}>
          <Text style={{color:'#7D7D7D', fontWeight:'bold'}}>
            Ainda não possui um conta? Cadastre-se
          </Text>
        </TouchableOpacity>
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
