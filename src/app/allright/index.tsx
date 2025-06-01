import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Botao } from '../../components/Botao';
import { router } from 'expo-router';

export default function index() {
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'center'}}></View>

        <View style={{padding:40, paddingTop:200,paddingBottom:200, alignItems: 'center', justifyContent:'center'}}>
            <AntDesign name="checkcircleo" size={48} color="#4FC235" />
            <Text style={{fontWeight:'bold',paddingTop:30, paddingBottom:10, fontSize:16}}>Tudo certo!</Text>
            <Text style={{fontSize:16,textAlign:'center'}}>Seu veículo foi cadastrado e aprovado com sucesso! Em breve, você poderá começar a rodar conosco.</Text>
        </View>

        <Botao onPress={() => router.replace('homeApp')} variant='secondary' name='Continuar' />
        <StatusBar style="auto" />
    </View>
  )
}
