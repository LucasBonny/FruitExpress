import React from 'react'
import { Text, View } from 'react-native'
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

        <View style={{padding:15, alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>Selecione o destinatário</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center', padding:5,marginBottom:500, backgroundColor:'#D9D9D9',borderRadius:26, height:60, justifyContent:'space-between'}}>
            <Text style={{fontSize:20, color:'#757575'}}>Celular,CPF/CNPJ,aleatório ou e-email</Text>
        </View>

        <Botao name='Continuar' variant='secondary' onPress={() => router.navigate('valorConfirmar')}/>

        <StatusBar style="auto" />
    </View>
  )
}