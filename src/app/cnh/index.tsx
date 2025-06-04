import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { Botao } from '../../components/Botao';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'center'}}>
            <Ionicons name="arrow-back" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
        </View>

        <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{paddingBottom:100}}>
            <Text style={styles.title}>Carteira Nacional de Habilitação com  EAR - CNH</Text>
            
            <View style={{padding:20, paddingTop:0}}>
                <View style={{paddingBottom:10}}>
                    <Text style={{fontSize:16}}>Para prosseguir, envie uma foto ou faça o upload da sua CNH e insira seu CPF sem pontos ou espaços.</Text>
                </View>
            </View>

            <View style={styles.view}>
                <Text style={styles.viewText}>CPF</Text>
                <TextInput style={[styles.viewInput]} placeholder='123.456.789-00' onChangeText={()=>{}} />
            </View>
            
            <View style={{backgroundColor:'#EDEDED', padding:20}}>
                <View>
                    <Text>Deposite arquivos aqui ou clique abaixar</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                        <View style={{width:150, height:50,alignItems:'center', justifyContent:'center',backgroundColor:'#D9D9D9',flexDirection:'row',gap:10}}>
                            <Feather name="key" size={24} color="black" />
                            <Text style={{fontSize:20, fontWeight:'bold'}}>Carregar</Text>
                        </View>
                        <View style={{width:150, height:50,alignItems:'center', justifyContent:'center',backgroundColor:'#D9D9D9',flexDirection:'row',gap:10}}>
                            <Feather name="camera" size={24} color="black" />
                            <Text style={{fontSize:20, fontWeight:'bold'}}>Foto</Text>
                        </View>
                    </View>
                    <Text>Você pode carregar arquivos de até um máximo de 2 GB</Text>
                </View>
                
            </View>
            <View style={{paddingTop:100}}>
                <Botao variant="secondary" name='Continuar' onPress={()=>router.back()} />
            </View>
        </ScrollView>
        <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        padding:20,
        fontSize: 25
    },
    view:{
        padding:20
    },
    viewText:{
        fontWeight:'600',
        fontSize:18
    },
    viewInput:{
        backgroundColor:'#00000040',
    }
});
