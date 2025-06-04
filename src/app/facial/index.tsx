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

        <View style={{padding:15, alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>Selecione o destinatário</Text>
        </View>
        <View style={{padding:25,alignItems:'center'}}>
              <Image style={{width: 300, height:300, borderRadius:300}} source={require('../../../assets/facial-0.png')} />
              <Text style={{fontWeight:'600',fontSize:18, marginTop:20, textAlign:'center'}}>Sua conta protegida</Text>
              <Text style={{fontSize:17, textAlign:'center'}}>Em breve para acessar o aplicativo você deverá cadastrar a sua foto de Segurança. Sua imagem é confidencial e não será compartilhada.</Text>
              <Text style={{fontSize:14, marginTop:20, textAlign:'center', color:'#757575'}}>Ao clicar em continuar, você concorda com o armazenamento seguro deste dado pelo FruitExpress para fins de segurança</Text>
          </View>

        <Botao name='Continuar' variant='secondary' onPress={() => router.navigate('foto')}/>

        <StatusBar style="auto" />
    </View>
  )
}