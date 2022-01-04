import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const imc = peso /(altura * altura);
    
    if(imc < 18.6){
      alert('Você está abaixo do peso! IMC: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal! IMC: ' + imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Você está acima do peso! IMC: ' + imc.toFixed(2))
    }
    else{
      alert('Erro!!!' + alt)
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      > 
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input:{
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFFF',
    backgroundColor: '#121212',
    fontSize: 23,
  },
  button:{
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 25,
  }
});