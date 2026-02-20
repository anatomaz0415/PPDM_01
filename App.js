import React, {useState} from 'react';
import {View, Text, TextInput,
TouchableOpacity,StyleSheet,
Alert, ImageBackground
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
      <ImageBackground 
      source={require('./assets/adaptive-icon.png')}
      resizeMode="cover"
      style={styles.fundo}>
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
        <Text style={styles.forgotPasswd}>Esqueci minha senha</Text>
     </View>
      </ImageBackground>
    
  );
}


const styles = StyleSheet.create({
    container:{
      width: '70%',
      height: '50%',
      padding: 40,
      borderRadius: 20,
      backgroundColor: '#f6974e'
    },
    fundo:{
     flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
    },
    forgotPasswd:{
      fontWeight: 'bold',
      paddingTop: 10,
      color: '#392e8af5',
      textDecorationLine: 'underline',
      textAlign: 'center'
    }
});

//hook