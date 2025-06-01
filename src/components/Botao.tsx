import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BotaoProps {
  name: string;
  variant?: 'primary' | 'secondary'
  onPress: () => void;
}

export const Botao: React.FC<BotaoProps> = ({ name, variant = 'primary', onPress }) => {
  const buttonStyle = variant === 'primary' ? styles.primary : styles.secondary;
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>  
    </View>
  );
};
const styles = StyleSheet.create({
    button: {
        alignItems:'center',
        backgroundColor:'#4FC235',
    },
    text: {
        fontSize: 17,
        color:'white',
        fontWeight: 'bold'
    },
    primary: {
        width:250,
        borderRadius:30,
        padding:10,
    },
    secondary: {
        borderRadius:10,
        width: '90%',
        padding:10,
    }
});
