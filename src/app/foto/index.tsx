import React from 'react'
import { Image, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Botao } from '../../components/Botao';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'flex-start', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Ionicons name="arrow-back" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
        </View>

        <View style={{padding:15}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>Foto de segurança</Text>
        </View>
        <View style={{padding:25,alignItems:'center',paddingBottom:100}}>
          <Text style={{fontSize:18, marginBottom:40, padding:5, backgroundColor:'#4FC235'}}>Mantenha assim, não se mova</Text>
          <Image style={{width: 200, height:300}} source={require('../../../assets/facial-1.png')} />
        </View>

        <Botao name='Continuar' variant='secondary' onPress={() => {
          for(var i = 0; i < 2; i++) {
            router.back();
          }
        }}/>

        <StatusBar style="auto" />
    </View>
  )
}