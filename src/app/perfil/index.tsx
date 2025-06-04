import React from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';

export default function index() {
  return (
    <View>
        <View style={{width:'100%', backgroundColor:'#4FC235',height:70, justifyContent:'flex-start', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Ionicons name="arrow-back" style={{marginLeft:20}} size={30} color="white" onPress={()=> router.back()} />
            <Text style={{fontSize:24, color:'white', fontWeight:'bold'}}>Perfil</Text>
        </View>

        <View style={{padding:25,paddingTop:19}}>
            <Text style={{fontSize:16}}>Ao fornecer um atendimetno de qualidade aos seus clientes, além de melhorar suas estatísticas, você terá mais oportunidades de ganhar.</Text>

            <Text style={{fontWeight:'600',fontSize:20, marginTop:50}}>Viagens</Text>

            <View style={{flexDirection:'row', gap: 20}}>
                <View style={styles.box}>
                    <Text style={styles.titleBox}>0%</Text>
                    <Text style={styles.descBox}>Taxa de cancelamento</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.titleBox}>100%</Text>
                    <Text style={styles.descBox}>Taxa de aceitação</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.titleBox}>5,00<Entypo name="star" size={26} color="black" /></Text>
                <Text style={styles.descBox}>Avaliação média em estrelas</Text>
            </View>
            <Text style={{fontWeight:'600',fontSize:20, marginTop:50}}>Destaques da trajetória</Text>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={{width:200,height:105,marginLeft:-15}} source={require('../../../assets/perfil-0.png')} />
                    <Text style={styles.titleBox}>1.000</Text>
                    <Text style={styles.descBox}>Total de viagens</Text>
                </View>
                <View>
                    <Image style={{width:200,height:100,marginTop:-1}} source={require('../../../assets/perfil-1.png')} />
                    <Text style={[styles.titleBox,{paddingTop:5}]}>11 meses</Text>
                    <Text style={[styles.descBox, {width:150}]}>Tempo usando o app do FruitExpress</Text>
                </View>
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
        marginBottom:10
    },
    descBox: {
        fontWeight:'400',
        fontSize:16,
        width:140
    }
});