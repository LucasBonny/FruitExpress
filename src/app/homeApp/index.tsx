import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function MapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão negada');
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      currentLocation.coords.latitude = -15.864507744870222;
      currentLocation.coords.longitude = -48.03170448207285;
      setLocation(currentLocation);
    })();
  }, []);

  if (!location) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        region={{
          latitude: -15.864507744870222,
          longitude: -48.03170448207285,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location.coords} title="Você está aqui!" />
    </MapView>

        <View style={styles.topMenu}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{backgroundColor:'white', borderRadius:30, padding:14, borderWidth:0.8}}><Feather name="menu" size={24} color="black" /></TouchableOpacity>
            <View style={{backgroundColor:'#4FC235', padding: 29, paddingTop:14,paddingBottom:14,borderRadius:40}}><Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>R$ 0,00</Text></View>
            <View style={{backgroundColor:'white', borderRadius:30, padding:14, borderWidth:0.8}}><Feather name="search" size={24} color="black" /></View>
        </View>

        <View style={[styles.view, {bottom:-30}]}>
            <TouchableOpacity style={styles.button}>
            <View style={{backgroundColor:'#4FC235', height:100, width:100,borderRadius: 50,  alignItems:'center', justifyContent:'center'}}>
                <View style={{backgroundColor:'#fff', height:84, width:84,borderRadius: 50,  alignItems:'center', justifyContent:'center'}}>
                    <View style={{backgroundColor:'#4FC235', height:80, width:80,borderRadius: 50,  alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.textButton}>INICIAR</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        </View>
        <View style={styles.view}>
            <Text style={styles.text}>Você está offline</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topMenu: {
    justifyContent:'space-around',
    width:'100%',
    height:150,
    alignItems:'center',
    flexDirection:'row'
  },
  button: {
    position:'absolute',
    bottom:150,
  },
  textButton: {
    color: 'white',
    fontWeight:'bold',
    fontSize:20
  },
  view: {
    alignItems:'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left:0,
    backgroundColor: 'white',
    padding: 40,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  text: {
    color: 'black',
    fontSize:20,
    fontWeight: 'bold',
  },
});
