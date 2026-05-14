import React from "react";
import {View, Text, TextInput, TouchableOpacity, 
  Alert, StyleSheet} from 'react-native';


export function TelaPergaminho({route, navigation}){
  const missaoRecebida = route.params?.missaoSelecionada;
  //lê os parâmetros recebidos da tela 1 (se existirem)
//entrada, processamento e saída de dados
  //estados que vao guardar o que o usuario digita (entrada)
  const[titulo, setTitulo] = useState(missaoRecebida ? missaoRecebida.titulo : '');
  const[xp, setXp] = useState(missaoRecebida ? missaoRecebida.xp.toString(): '');

  //tratamento de eventos e excessoes ( funcao acinada pelo clique do botao)
  const salvarMissao = () => {
    try{
      if (titulo.trim() === '' || xp.trim() === ''){
          //()trim remove os espaços em branco
          throw new Error('Os epaços não podem ficar vazios!');
      }
      //processamento
     const numeroXp =parseInt(xp); 
    if (isNaN(numeroXp)){
      throw new Error("Digite apenas valores numéricos!");
    }  
    //Saída
    Alert.alert("Sucesso!", "Missão registrada com sucesso!");

    navigation.goBack();
    //navegação que retorna para a tela anterior após salvar (lista)

    } catch(erro){
        Alert.alert("Falha na missão", erro.message);
        //exibe a mensagem de erro sem fechar o app
    }

  }

  return(
      

    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes da missão</Text>.
      <TextInput
      style={styles.input}
      placeholder="Digite a sua missão..."
      value={titulo}
      onChangeText={setTitulo}
      />
      <TextInput
      style={styles.input}
      placeholder="Recompensa (Ex: 500xp"
      value={xp}
      onChangeText={setXp}
      keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarMissao}>
        <Text style={styles.textoBotao}>Salvar Missão</Text>
      </TouchableOpacity>
    </View>
  )


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
    padding: 20
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a4a4a'
  },
  input:{
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  botaoSalvar:{
    width: '100%',
    height: 50,
    backgroundColor: '#8b4513',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  },
  textoBotao:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})