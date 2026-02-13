import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Splash from './Splash';


export default function App() {
  const [carregando, setCarregando] = useState(true);//hook 
  

  if(carregando){
    return<Splash finalizou = {() => setCarregando(false)
          }
      />

}
  return (
    <View style={styles.tela}> 
      <Text>Bem-vindo ao App principal!</Text>
    </View>
  );
    }

const styles = StyleSheet.create({
    tela:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  
});
