import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:250, gap:10}}>
            <View style={{paddingTop:30 ,flexDirection:'row', gap:10}}>
                <Feather name="x" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
                <Text style={{fontSize:24, color:'white', fontWeight:'bold'}}>Carteira</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={{padding:40, borderRadius:26, backgroundColor:'#D9D9D9',width:'80%'}}>
                    <Text>Minha Carteira (R$)</Text>
                    <Text style={styles.title}>R$ 300.23</Text>
                </View>
            </View>
        </View>

        
            <View style={{flexDirection:'row', justifyContent:'center',gap:20, paddingTop: 50}}>
                <View>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <FontAwesome6 name="money-bill-wave" size={24} color="black" />
                        <Text>Transferências</Text>
                    </View>
                </View>

                <View>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <AntDesign name="mobile1" size={30} color="black" />
                        <Text>Recarregar celular</Text>
                    </View>
                </View>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'center',gap:20, paddingTop: 50}}>
                <View>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <AntDesign name="barcode" size={30} color="black" />
                        <Text>Escanear boleto</Text>
                    </View>
                </View>
                <View>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#fff',width:150, height:150}}></View>
                </View>
            </View>
        

        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        fontSize:24
    }
})