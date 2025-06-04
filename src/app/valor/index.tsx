import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
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
            <Text style={{fontSize:24, fontWeight:'bold'}}>João Silva Costa</Text>
            <Text style={{fontSize:16, color:'#757575'}}>***123456**</Text>
            <Text style={{fontSize:16, color:'#757575'}}>Nubank</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center', padding:20,marginBottom:300, backgroundColor:'#D9D9D9',borderRadius:26, height:117, justifyContent:'space-between'}}>
            <Text style={{fontSize:40, fontWeight:'bold'}}>R$ 300,00</Text>
            <FontAwesome6 name="pencil" size={40} color="black" />
        </View>

        <Botao name='Continuar' variant='secondary' onPress={() => {}}/>

        <StatusBar style="auto" />
    </View>
  )
}