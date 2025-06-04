import React from 'react'
import { Text, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'flex-start', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Ionicons name="arrow-back" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
            <Text style={{fontSize:24, color:'white', fontWeight:'bold'}}>Caixa de entrada</Text>
        </View>

        <View style={{padding:25,alignItems:'center',paddingTop:150}}>
            <Image style={{width: 300, height:300}} source={require('../../../assets/mascote-1.png')} />
            <Text style={{fontWeight:'600',fontSize:16, marginTop:50, textAlign:'center'}}>Você não tem notificações  no momento</Text>
            <Text style={{fontSize:15, textAlign:'center'}}>Assim que tiver uma notificação será, mostrada nessa tela.</Text>

        </View>


        <StatusBar style="auto" />
    </View>
  )
}