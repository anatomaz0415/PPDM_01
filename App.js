import React, {useState} from 'react';
import {View, Text, TextInput,
TouchableOpacity,StyleSheet,
Alert
} from 'react-native';


export default function App() {
    //criar estados - memória
    /*o email guarda o texto e o setEmail é a função que
    altera esse texto*/

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const realizarLogin = () =>{
      if(email === '' || senha === ''){
        Alert.alert("Atenção, preencha todos os campos!");
      }
      else{
        Alert.alert("Login realizado", "Bem-vindo", +email);
      }
    }

    return(
     <View style={styles.container}>
        <Text style={styles.titulo}>ÁREA DO LOGIN</Text>
        <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
        onChangeText={setEmail} 
        keyboardType="email-addres" 
        />
        <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry={true} //transforma em pontinhos
        onChangeText={setSenha}
        />

        <TouchableOpacity
        style={styles.botao}
        onPress={realizarLogin} 
        >
          <Text style={styles.textoBotao}>Entrar</Text>

        </TouchableOpacity>
     </View>

    
  );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      padding: 20
    },
    titulo:{
      fontSize: 24,
      fontWeight: 'bold',
      margintBottom: 15,
      textAlign: 'center'
    },
    input:{
      borderBottomWidth:1,
      marginBottom: 15,
      padding: 10
    },
    botao:{
      backgroundColor: '#81c3e7',
      padding: 15,
      borderRadius: 5
    },
    textoBotao:{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    }
});

//hook