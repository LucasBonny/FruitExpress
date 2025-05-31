import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotaoProps {
  name: string;
  onPress: () => void;  // Sempre é bom passar
}

export const Botao: React.FC<BotaoProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor:'#4FC235',
        padding:10,
        width:250,
        borderRadius:30,
        alignItems:'center'
    },
    text: {
        fontSize: 17,
        color:'white',
        fontWeight: 'bold'
    }
});
