//npm install @react-native-vector-icons/Ionicons
//import { Ionicons } from '@expo/vector-icons'; /
import { StatusBar } from 'expo-status-bar'; // Importa a barra de status do dispositivo
import React, { useState } from 'react'; // Importa o React e o Hook useState para gerenciar dados
import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet,
  Alert, ImageBackground,  KeyboardAvoidingView, Image, Platform,
  Modal
} from 'react-native'; // Importa os componentes nativos do React Native
import { Ionicons } from '@expo/vector-icons'; // Importa a biblioteca de ícones

export default function App() {
      //criar estados - memória
  // Estados para o formulário de Login
  const [email, setEmail] = useState(''); // Guarda/ Armazena o texto do e-mail de login
  //setEmail é a função que altera o texto
  const [senha, setSenha] = useState(''); // Armazena o texto da senha de login
  
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  // Estado que controla se a senha está visível (true) ou oculta (false)

  
  // Estados para o Modal e formulário de Cadastro
  const [modalVisivel, setModalVisivel] = useState(false); // Controla se o Modal de cadastro está aberto
  const [nomeCadastro, setNomeCadastro] = useState(''); // Armazena o nome no cadastro
  const [emailCadastro, setEmailCadastro] = useState(''); // Armazena o e-mail no cadastro
  const [senhaCadastro, setSenhaCadastro] = useState(''); // Armazena a senha no cadastro

  // Função disparada ao clicar no botão "Entrar"
  const realizarLogin = () => {
    if (email === '' || senha === '') {
      Alert.alert("Atenção", "Preencha todos os campos!"); // Alerta se houver campos vazios
    } else {
      Alert.alert("Login realizado", "Bem-vindo, " + email); // Feedback de sucesso
    }
  }

  // Função disparada ao finalizar o cadastro dentro do Modal
  //aninhar --> if dentro de if, função dentro de função 
  const finalizarCadastro = () => { ////
    // Validação básica: verifica se algum campo está vazio
    if (nomeCadastro === '' || emailCadastro === '' || senhaCadastro === '') {
      Alert.alert("Erro", "Preencha todos os campos do cadastro!");
      return; // Interrompe a função aqui
    }

    Alert.alert("Sucesso", "Conta criada com sucesso!");
    setModalVisivel(false); // Fecha o modal após o sucesso
    // Limpa os campos do cadastro para a próxima utilização
    setNomeCadastro('');
    setEmailCadastro('');
    setSenhaCadastro('');
  }

  return (
    // Fundo da tela com imagem
    <ImageBackground
      source={require('./assets/react-native.png')}
      resizeMode="cover"
      style={styles.fundo}>
      
      {/* Configura a cor dos ícones da barra de status (bateria, rede) */}
      <StatusBar style="auto" />

      {/* Componente que empurra o conteúdo para cima quando o teclado abre */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView} ////
      >
        {/* Caixa principal do Login (Card) */}
        <View style={styles.container}>
          {/* Logo do App */}
          <Image //////////
            source={require('./assets/react-native.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>ÁREA DO LOGIN</Text>
          
          {/* Campo de E-mail */}
          <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            onChangeText={setEmail} // Salva o texto digitado no estado 'email'
            keyboardType="email-address" // Otimiza o teclado para e-mail (@)
          />

          {/* Área da Senha (Input + Ícone) */}
          <View style={styles.areaSenha}> ////
            <TextInput
              placeholder="Digite sua senha"
              style={styles.inputSenhaInterno}
              secureTextEntry={!mostrarSenha} //tirei o true
              // USA O OPERADOR DE NEGAÇÃO: se mostrarSenha é false, oculta.
              // se for true mostra
              value={senha}///
              onChangeText={setSenha}
            />
            {/* Botão do Olhinho */}
            <TouchableOpacity ///troquei
              onPress={() => setMostrarSenha(!mostrarSenha)}
               // Inverte o valor de true para false e vice-versa
                  //isso aqui define que quando o ícone for pressionado,
          //o estado mostrarSenha é invertido 
          //(se for true, vira false; se for false, vira true)
              style={styles.botaoOlho}
            > 
              {/* OPERADOR TERNÁRIO: Define o nome do ícone baseado no estado */}
              //condição ? expressão_se_verdadeira : expressão_se_falsa
              //O oerador ternário define qual ícone aparece

              <Ionicons ////
                name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          {/* Botão de Entrar */} ////
          <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>

          {/* Link para Esqueci Senha */} ////
          <TouchableOpacity onPress={() => Alert.alert("Recuperação", "E-mail enviado!")}>
            <Text style={styles.forgotPasswd}>Esqueci minha senha</Text>
          </TouchableOpacity>

          {/* Botão para abrir o Modal de Cadastro */}
          <TouchableOpacity onPress={() => setModalVisivel(true)}> ////
            <Text style={styles.criarConta}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

        {/* --- JANELA MODAL DE CADASTRO --- */} ///
        <Modal
          animationType="slide" // Efeito de deslizar ao abrir
          transparent={true} // Permite ver o fundo escurecido atrás do modal
          visible={modalVisivel} // Controlado pelo estado modalVisivel
          onRequestClose={() => setModalVisivel(false)} // Função para o botão "voltar" do Android
        >
          <View style={styles.modalCentralizado}>
            <View style={styles.modalConteudo}>
              <Text style={styles.tituloModal}>Nova Conta</Text>
              
              {/* Inputs do Cadastro */}
              <TextInput 
                placeholder="Nome Completo" 
                style={styles.input} 
                onChangeText={setNomeCadastro}
              />
              <TextInput 
                placeholder="E-mail" 
                style={styles.input} 
                keyboardType="email-address"
                onChangeText={setEmailCadastro}
              />
              <TextInput 
                placeholder="Senha" 
                style={styles.input} 
                secureTextEntry={true} // Campo sempre oculto no cadastro
                onChangeText={setSenhaCadastro}
              />

              <TouchableOpacity style={styles.botao} onPress={finalizarCadastro}>
                <Text style={styles.textoBotao}>Finalizar Cadastro</Text>
              </TouchableOpacity>

              {/* Botão para fechar o Modal sem cadastrar */}
              <TouchableOpacity onPress={() => setModalVisivel(false)}>
                <Text style={styles.botaoVoltar}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

// Estilização do componente
const styles = StyleSheet.create({
    container: {
    width: '85%', // apaga o height
    padding: 25,
    borderRadius: 20, 
    backgroundColor: 'rgba(31, 35, 31, 0.5)', // Fundo escuro com 50% de transparência
  },
  fundo: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswd: {
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
    input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 8,
    width: '100%',
  },
  botao: {
    backgroundColor: '#81c3e7',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }, //acrescenta as propriedades abaixo
  keyboardView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  areaSenha: {
    flexDirection: 'row', // Alinha input e ícone na horizontal
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
  },
  inputSenhaInterno: {
    flex: 1, // Ocupa o máximo de espaço possível
    height: '100%',
    paddingHorizontal: 15,
  },
  botaoOlho: {
    paddingHorizontal: 10,
  },
  criarConta: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 15,
    color: '#fff',
    textAlign: 'center',
  },
  modalCentralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)', // Escurece o fundo atrás do modal
  },
  modalConteudo: {
    width: '90%',
    backgroundColor: '#6022b6',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 10, // Sombra no Android
  },
  tituloModal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  botaoVoltar: {
    marginTop: 15,
    color: '#fff',
    fontWeight: 'bold',
  }
});

 //e uma função para atualizá-lo. No exemplo acima, usamos useState para criar 
// estados para o email, senha e a visibilidade da senha.
