import React,{useState} from 'react';
import {
    View, Text, Flatlist, TouchableOpacity,
    StyleSheet, Alert
} from 'react-native';

export function TelaTaverna({navigation}){
    //estado que guarda missões na nossa lista
    const [missoes, setMissoes] = useState([
        {id: '1', titulo: 'Derrota o Bug -Gigante', xp: 500},
        {id: '2', titulo: 'Refatorar o código legado', xp: 1000}
    ]);
//tratamento gestual: O usuário segura o toque na missão (Long Press)
    const lidarComToqueLongo = (titulo) => {
        Alert.alert("Missão concluída!", `Você finalizou a missão: ${titulo}. XP adquirido!`)
    }
}

return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Quadro de Missões</Text>
//manipulação de lista na interface usando flatlist para performance
        <Flatlist
        data={missoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

        <TouchableOpacity
            style={styles.cartaoMissao}
            onPress={() => {
            //passagem de parâmetro entre telas
            navigation.navigate('Pergaminho', {missaoSelecionada: item});
        }}
        onLongPress={() => lidarComToqueLongo(item.titulo)}
        >
            <Text style={styles.textoMissao}>{item.titulo}</Text>
            <Text style={styles.textoMissao}>{item.xp}</Text>   
        </TouchableOpacity>
            )}
        />
        <TouchableOpacity
        style={styles.botao}NovaMissao
        onPress={() => navigation.navigate('Pergaminho')}
        >
    <Text style={styles.textoBotao}>+ Nova Missão</Text>


        </TouchableOpacity>
    </View>
    );
}