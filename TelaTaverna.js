import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export function TelaTaverna({ navigation }) {
  // Estado que guarda as missões da nossa lista
  const [missoes, setMissoes] = useState([
    { id: '1', titulo: 'Derrotar o Bug Gigante', xp: 500 },
    { id: '2', titulo: 'Refatorar o Código Legado', xp: 1000 },
    { id: '3', titulo: 'abraçar um urso', xp: 1000 },

  ]);

  // 2.2.6 Tratamento gestual: O que acontece ao segurar o toque na missão (Long Press)
  const lidarComToqueLongo = (titulo) => {
    Alert.alert("Missão Concluída!", `Você finalizou a missão: ${titulo}. XP Adquirido!`);
    // Aqui você poderia colocar a lógica para remover da lista, por exemplo.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quadro de Missões</Text>

      {/* 2.2.2 Manipulação de listas na interface: Usando FlatList para performance */}
      <FlatList
        data={missoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          // 2.2.6 Tratamento gestual: TouchableOpacity lida com o gesto de "toque" (onPress) e "toque longo" (onLongPress)
          <TouchableOpacity 
            style={styles.cartaoMissao}
            onPress={() => {
              // 2.2.4 Navegação entre telas: Indo para a tela 'Pergaminho'
              // 2.2.5 Passagem de parâmetros entre telas: Enviando o 'item' inteiro para a próxima tela ler
              navigation.navigate('Pergaminho', { missaoSelecionada: item });
            }}
            onLongPress={() => lidarComToqueLongo(item.titulo)}
          >
            <Text style={styles.textoMissao}>{item.titulo}</Text>
            <Text style={styles.textoXp}>XP: {item.xp}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão para criar uma missão nova, navega sem passar parâmetros */}
      <TouchableOpacity 
        style={styles.botaoNovaMissao}
        onPress={() => navigation.navigate('Pergaminho')} 
      >
<Text style={styles.textoBotao}>+ Nova Missão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a4a4a',
    textAlign: 'center',
  },
  cartaoMissao: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 2,
  },
  textoMissao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  textoXp: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  botaoNovaMissao: {
    backgroundColor: '#8b4513',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
