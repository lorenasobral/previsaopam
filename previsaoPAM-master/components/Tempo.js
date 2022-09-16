import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props){

    return(
        <>
            <Text style={styles.texto1}> Dia da Consulta: {props.data.date}</Text>
            <Text style={styles.texto1}> Descrição:{props.data.description}</Text>
            <Text></Text>
            <Text style={styles.texto}> Previsão para o resto do dia</Text>
            <Text style={styles.texto2}> Temperatura Min.: {props.data.min}</Text>
            <Text style={styles.texto2}> Temperatura Max.:{props.data.max}</Text>
            <Text style={styles.texto2}> Descrição:{props.data.description}</Text>
            <Text></Text>
            <Text style={styles.texto}> Tempo Amanhã</Text>
            <Text style={styles.texto3}> Temperatura Min.: {props.data.min}</Text>
            <Text style={styles.texto3}> Temperatura Max.:{props.data.max}</Text>
            <Text style={styles.texto3}> Descrição:{props.data.description}</Text>

        </>
    )

}
const styles = StyleSheet.create({
    texto1: {
      fontWeight: 'bold',
      fontSize: 17,
      marginTop:5,
      top: 55,
      width: '70%',
      padding: 5,
      borderRadius: 8, 
      left: 65,
      backgroundColor: 'white',
      opacity: 0.7
    },
    texto2: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop:5,
        top: 48,
        width: '70%',
        padding: 5,
        borderRadius: 8, 
        left: 65,
        backgroundColor: 'white',
        opacity: 0.7
      },
      texto3: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop:5,
        top: 38,
        width: '70%',
        padding: 5,
        borderRadius: 8, 
        left: 65,
        backgroundColor: 'white',
        opacity: 0.7
      },
      texto: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop:5,
        top: 40,
        width: '70%',
        padding: 5,
        borderRadius: 8, 
        left: 65,
        color: '#fff',
      },
});