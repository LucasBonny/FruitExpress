import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Botao } from '../../components/Botao';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function index() {
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'center'}}></View>

        <Text style={styles.title}>Olá, entregador</Text>
        <Text style={[styles.title,{fontSize:17}]}>Etapas obrigatórias</Text>
        <Text style={{padding:20, paddingTop:0, fontSize:13}}>Veja aqui o que você precisa fazer para criar sua conta.</Text>
        <View style={{paddingBottom:50}}>
            <TouchableOpacity onPress={() => router.navigate('facial')} style={{padding:30, paddingBottom:15, paddingTop:20,borderBottomWidth:1, borderBottomColor:'#E3E3E3', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', gap: 12, alignItems:'center'}}>
                    <Ionicons name="document-text" size={24} color="black" />
                    <View>
                        <Text style={{fontWeight:'bold',color:'black'}}>Verificação farcial</Text>
                        <Text style={{color:'#757575'}}>Tudo pronto para começar</Text>
                    </View>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('cnh')} style={{padding:30, paddingBottom:15, paddingTop:20,borderBottomWidth:1, borderBottomColor:'#E3E3E3', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', gap: 12, alignItems:'center'}}>
                    <Ionicons name="document-text" size={24} color="black" />
                    <View>
                        <Text style={{fontWeight:'bold', maxWidth:250 ,color:'black'}}>Carteira Nacional de Habilitação com EAR - CNH</Text>
                        <Text style={{color:'#757575'}}>Tudo pronto para começar</Text>
                    </View>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('anexar')} style={{padding:30, paddingBottom:15, paddingTop:20,borderBottomWidth:1, borderBottomColor:'#E3E3E3', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', gap: 12, alignItems:'center'}}>
                    <Ionicons name="document-text" size={24} color="black" />
                    <View>
                        <Text style={{fontWeight:'bold',color:'black'}}>Comprovante de Residência</Text>
                        <Text style={{color:'#757575'}}>Tudo pronto para começar</Text>
                    </View>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('documento')} style={{padding:30, paddingBottom:15, paddingTop:20,borderBottomWidth:1, borderBottomColor:'#E3E3E3', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', gap: 12, alignItems:'center'}}>
                    <Ionicons name="document-text" size={24} color="black" />
                    <View>
                        <Text style={{fontWeight:'bold',color:'black'}}>Informações do Veículo</Text>
                        <Text style={{color:'#757575'}}>Tudo pronto para começar</Text>
                    </View>
                </View>
                <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <Botao onPress={()=>router.navigate('allright')} variant='secondary' name='Continuar' />
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
