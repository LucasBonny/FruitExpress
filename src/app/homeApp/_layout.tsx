import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false, drawerLabelStyle: { margin: 0 }}} drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Caixa de entrada',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView style={{margin:-15}} {...props}>
      <View style={{ padding: 25, flexDirection:'row', gap:15, alignItems:'center' }}>
        <View style={{backgroundColor:'white', borderRadius:30, padding:14, borderWidth:0.8}}><MaterialIcons name="add-a-photo" size={16} color="black" /></View>
        <View>
          <Text style={{fontSize: 16 }}>Lucas</Text>
          <View style={{flexDirection:'row', alignItems:'center', gap:2}}>
            <FontAwesome name="star" size={10} color="black" />
            <Text style={{ fontSize: 10 }}>4.90</Text>
          </View>
        </View>
      </View>

      {/* <DrawerItemList {...props} /> */}

      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Perfil"
        style={[styles.item, {borderTopWidth:1, borderColor:'#454545'}]}
        onPress={() => router.navigate('perfil')}
      />
      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Caixa de entrada"
        style={styles.item}
        onPress={() => router.navigate('mail')}
      />
      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Oportunidades"
        style={styles.item}
        onPress={() => {}}
      />
      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Ganhos"
        style={styles.item}
        onPress={() => router.navigate('ganhos')}
      />
      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Conta"
        style={styles.item}
        onPress={() => router.navigate('carteira')}
      />
      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Ajuda"
        style={styles.item}
        onPress={() => {}}
      />
      <DrawerItem
        labelStyle={{fontSize:30, color: 'black'}}
        label="Sair"
        style={styles.item}
        onPress={() => router.replace('login')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius:0, 
    borderBottomColor:'#454545',
    borderBottomWidth:1,
    padding:10
  }
});