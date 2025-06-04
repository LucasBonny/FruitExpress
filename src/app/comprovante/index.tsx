import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'flex-start', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Feather name="x" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.replace('homeApp')} />
        </View>

        <View style={{padding:20, width:'100%'}}>
            <Text style={styles.titleBox}>Comprovante de pagamento</Text>
            <Text style={styles.descBox}>20 MAR 2024 - 17:18:44</Text>
        </View>
        <View style={{padding:20, width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.title}>Valor</Text>
            <Text>R$ 300,00</Text>
        </View>
        <View style={{padding:20, width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.title}>Documento</Text>
        </View>
        <View style={{padding:20, width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.title}>Pagador</Text>
        </View>
        <View style={{padding:20, width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.title}>Agência</Text>
            <Text>0001</Text>
        </View>
        <View style={{padding:20, width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.title}>Conta</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <View style={{padding:40, borderRadius:26, backgroundColor:'#D9D9D9',width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.title}>Código de autenticação ***********************************************</Text>
            </View>
        </View>

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
        marginBottom:10,
        width:200
    },
    descBox: {
        fontWeight:'400',
        fontSize:16
    },
    title: {
        fontWeight:'bold',
        fontSize:17
    }
});