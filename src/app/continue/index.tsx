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

        <ScrollView contentContainerStyle={{paddingBottom:100}}>
            <Text style={styles.title}>Vamos continuar criando sua conta</Text>
            <View style={{flexDirection:'row'}}>
                <View style={styles.view}>
                    <Text style={styles.viewText}>Nome</Text>
                    <TextInput style={[styles.viewInput, {width:155}]} placeholder='' onChangeText={()=>{}} />
                </View>
                <View style={styles.view}>
                    <Text style={styles.viewText}>Sobrenome</Text>
                    <TextInput style={[styles.viewInput, {width:155}]} placeholder='' onChangeText={()=>{}} />
                </View>
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Endereço de e-mail</Text>
                <TextInput style={[styles.viewInput]} placeholder='' onChangeText={()=>{}} />
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Número de telefone</Text>
                <TextInput style={[styles.viewInput]} placeholder='' onChangeText={()=>{}} />
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Senha</Text>
                <TextInput style={[styles.viewInput]} placeholder='' onChangeText={()=>{}} />
            </View>
            <View style={styles.view}>
                <Text style={styles.viewText}>Cidade</Text>
                <TextInput style={[styles.viewInput]} placeholder='' onChangeText={()=>{}} />
            </View>
            <View style={{padding:20, paddingTop:0}}>
                <View style={{paddingBottom:10}}>
                    <Text>Ao continuar, eu concordo com os <Text style={{color:'#1976D2'}}>Termos de Uso</Text> do FrutExpress e confirmo que li a <Text style={{color:'#1976D2'}}>Política de Privacidade</Text>.</Text>
                </View>
                <Text>Eu também concordo que o FrutExpress e seus representantes podem entrar em contato via e-mail, telefone ou SMS (inclusive por meios automatizados) no endereço de e-mail ou número que eu forneci, inclusive para fins de marketing.</Text>
            </View>
            <Botao variant="secondary" name='Continuar' onPress={()=>{}} />
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
