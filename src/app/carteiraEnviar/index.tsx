import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'flex-start', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Ionicons name="arrow-back" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
        </View>

            <Text style={styles.title}>Enviar</Text>
            <View style={{flexDirection:'row', justifyContent:'center',gap:20, paddingTop: 50}}>
                <TouchableOpacity onPress={() => router.navigate('destino')}>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <FontAwesome6 name="money-bill-wave" size={24} color="black" />
                        <Text>Transferir</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <Ionicons name="copy-outline" size={24} color="black" />
                        <Text>Pix Copia</Text>
                        <Text>e cola</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'center',gap:20, paddingTop: 50}}>
                <TouchableOpacity>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <AntDesign name="qrcode" size={24} color="black" />
                        <Text>Escanear</Text>
                        <Text>QR Code</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{borderRadius:26,alignItems:'center', justifyContent:'center', backgroundColor:'#D9D9D9',width:150, height:150}}>
                        <Ionicons name="share-social" size={24} color="black" />
                        <Text>Receber Pix</Text>
                    </View>
                </TouchableOpacity>
            </View>
        
            <View style={{paddingTop:70}}>
                <View style={{backgroundColor:'#D9D9D9', padding:20}}>
                    <View style={{backgroundColor:'white'}}>
                        <Text style={{paddingLeft:40,paddingTop:5, color:'#757575'}}>Chave Aleatória</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <View style={{flexDirection:'row',gap:10}}>
                                <Feather name="key" size={24} color="black" />
                                <Text style={{fontSize:20, fontWeight:'bold'}}>a123b45c-67de-8f9g-123</Text>
                            </View>
                            <View style={{flexDirection:'row',gap:10}}>
                                <Ionicons name="share-social" size={24} color="black" />
                                <Feather name="trash" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        fontSize:24, 
        paddingTop:25,
        paddingLeft:20
    }
})