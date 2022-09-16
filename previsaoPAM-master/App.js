import React, {useState} from 'react';
import { StyleSheet, Image, ImageBackground, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';


const image = { uri: "https://i.pinimg.com/originals/66/41/6c/66416cb792cc582f29d239892445fdaa.jpg" };

export default function App() {
  const [dados, setDados] = useState("");
  const [cidade, setCidade] = useState("");
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,time,forecast,max,min,date,description&key=3d5afcfa&city_name=${cidade}`)
      setDados(response.data.forecast[0]);
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
      <View>
        <Text style={styles.titulo}>Previsão do Tempo</Text>
        </View>

        <View>
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
        placeholder='Digite sua cidade'
        style={styles.input}
        onChangeText = {(value)=>setCidade(value)}
        />
        </View>

        <View>
          <TouchableOpacity style={styles.botao} onPress={carregaDados}>
            <Text style={styles.txtBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Tempo data = {dados}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
   
  },
  titulo: {
    fontSize:30,
    textAlign:'center',
    top: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  input:{
    width:'80%',
    marginLeft:'10%',
    borderColor: 'green',
    borderBottomWidth:2,
    marginTop: 20,
    fontSize: 20,
    top: 30,
    color: '#fff',
  },
  
  label:{
    fontSize:20, 
    top:40,
    color: '#fff',
  },
  botao:{
    width:'60%',
    top: 45,
    marginLeft: '25%',
    right: 20,
    fontSize: 28,
    textAlign:'center',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 8
  },
  txtBotao:{
    fontSize:25,
    textAlign:'center',
    color: '#fff',
    top: 8
  },
  
});