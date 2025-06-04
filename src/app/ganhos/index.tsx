import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Botao } from '../../components/Botao';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'flex-start', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Ionicons name="arrow-back" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
            <Text style={{fontSize:24, color:'white', fontWeight:'bold'}}>Ganhos</Text>
        </View>

        <View style={{flexDirection:'row', gap:10, padding:25}}>
            <View>
                <Text style={{fontSize:14}}>24 de mar. - 31 de mar.</Text>
                <Text style={{fontSize:24,fontWeight:'bold'}}>R$ 300.23</Text>
            </View>
            <View style={{flexDirection:'row', gap:9,alignItems:'flex-end', paddingTop:20}}>
                <View style={{alignItems:'flex-end'}}>
                    <View style={{backgroundColor:'#4FC235', padding:4, paddingTop:30}}></View>
                    <Text>S</Text>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <View style={{backgroundColor:'#4FC235', padding:4, paddingTop:20}}></View>
                    <Text>T</Text>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <View style={{backgroundColor:'#4FC235', padding:4, paddingTop:10}}></View>
                    <Text>Q</Text>
                </View>
                <Text>Q</Text>
                <Text>S</Text>
                <Text>S</Text>
                <Text>D</Text>
            </View>
        </View>

        <View style={{gap:30, marginTop:50}}>
            <View style={{borderBottomColor:'#DADADA', borderBottomWidth:1, justifyContent:'space-between', padding:10, flexDirection:'row'}}>
                <Text style={{fontSize:16}}>Online</Text>
                <Text style={{fontSize:16}}>8 h 22 m</Text>
            </View>
            <View style={{borderBottomColor:'#DADADA', borderBottomWidth:1, justifyContent:'space-between', padding:10, flexDirection:'row'}}>
                <Text style={{fontSize:16}}>Viagens</Text>
                <Text style={{fontSize:16}}>10</Text>
            </View>
            <View style={{borderBottomColor:'#DADADA', borderBottomWidth:1, justifyContent:'space-between', padding:10, flexDirection:'row'}}>
                <Text style={{fontSize:16}}>Pontos</Text>
                <Text style={{fontSize:16}}>16</Text>
            </View>
        </View>

        <View style={{padding:20, paddingRight:50, paddingTop:40}}>
            <Text style={{fontSize:24, fontWeight:'bold',paddingBottom:15}}>Saldo: 300.23</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',paddingBottom:150}}>
                <Text>Seus ganhos podem ser resgatados a qualquer momento, sem custo algum</Text>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <Botao name='Carteira' variant='secondary' onPress={() => {}}/>

        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    box:{
        marginTop:14,
        borderWidth:1,
        padding:15,
        width:170,
        height:130,
        borderRadius:10,
        borderColor:'#D9D9D9'
    },
    titleBox: {
        fontSize:26,
        fontWeight:'bold',
        marginBottom:10
    },
    descBox: {
        fontWeight:'400',
        fontSize:16,
        width:140
    }
});