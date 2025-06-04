import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Botao } from '../../components/Botao';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

export default function index() {
  return (
    <View style={{flex:1}}>
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
        <View style={{padding:30}}>
        </View>
        <View style={{position:'absolute', bottom:0, backgroundColor:'#D9D9D9',width:'100%',height:'50%', padding:10}}>
            <Text style={{fontSize:28, fontWeight:'bold'}}>Digite a senha de pagamento</Text>
            <View style={{flexDirection:'row', gap:7}}>
              <Text style={{fontSize:24, fontWeight:'bold'}}>Valor do pagamento</Text>
              <Text style={{fontSize:24, fontWeight:'bold', color:'#4FC235'}}>R$ 300,00</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={{flexDirection:'row', margin: 10, gap:20}}>
                <View style={{backgroundColor: 'white', width:60, height:60}}></View>
                <View style={{backgroundColor: 'white', width:60, height:60}}></View>
                <View style={{backgroundColor: 'white', width:60, height:60}}></View>
                <View style={{backgroundColor: 'white', width:60, height:60}}></View>
              </View>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={styles.box}>
                <View style={styles.button}><Text style={styles.text}>1</Text></View>
                <View style={styles.button}><Text style={styles.text}>2</Text></View>
                <View style={styles.button}><Text style={styles.text}>3</Text></View>
              </View>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={styles.box}>
                <View style={styles.button}><Text style={styles.text}>4</Text></View>
                <View style={styles.button}><Text style={styles.text}>5</Text></View>
                <View style={styles.button}><Text style={styles.text}>6</Text></View>
              </View>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={styles.box}>
                <View style={styles.button}><Text style={styles.text}>7</Text></View>
                <View style={styles.button}><Text style={styles.text}>8</Text></View>
                <View style={styles.button}><Text style={styles.text}>9</Text></View>
              </View>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={styles.box}>
                <View style={[styles.button, {backgroundColor:'#D9D9D9'}]}></View>
                <View style={styles.button}><Text style={styles.text}>0</Text></View>
                <TouchableOpacity onPress={() => router.navigate('comprovante')} style={[styles.button, {backgroundColor:'#4FC235', borderRadius:30}]}><Feather name="arrow-right" size={24} color="white" /></TouchableOpacity>
              </View>
            </View>

        </View>

        <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width:10,
    height:10
  },
  box:{
    flexDirection:'row',
    margin: 7, 
    gap:15
  },
  button:{
    backgroundColor: 'white', 
    width:100, 
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize:28,
    fontWeight:'bold'
  }
})