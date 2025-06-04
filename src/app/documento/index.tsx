import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
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
            <Text style={styles.title}>Documento do veículo</Text>
            
            <View style={{padding:20, paddingTop:0}}>
                <View style={{paddingBottom:10}}>
                    <Text style={{fontSize:18}}>Preencha os campos abaixo com as informações do seu veículo para continuar o processo.</Text>
                </View>
            </View>            

            <View style={styles.view}>
                <Text style={styles.viewText}>Renavam</Text>
                <TextInput style={[styles.viewInput]} placeholder='00987654321' onChangeText={()=>{}} />
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Placa</Text>
                <TextInput style={[styles.viewInput]} placeholder='AAA-1B23' onChangeText={()=>{}} />
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Modelo</Text>
                <TextInput style={[styles.viewInput]} placeholder='Honda CB 500F' onChangeText={()=>{}} />
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Marca</Text>
                <TextInput style={[styles.viewInput]} placeholder='Honda' onChangeText={()=>{}} />
            </View>
            
            <View style={{paddingTop:30}}><Botao variant="secondary" name='Continuar' onPress={()=>router.back()} /></View>
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
