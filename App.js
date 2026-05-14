//npm i @react-navigation/native  
//npm i @react-navigation/stack
//npm install react-native-screens react-native-safe-area-context
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TelaTaverna} from './src/screen/TelaTaverna';
import {TelaPergaminho} from './src/screens/TelaPergaminho';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Taverna'>
          <Stack.Screen
          name="Taverna"
          component={TelaTaverna}
          options={{title:'Diário de Missões'}}
          />

          <Stack.Screen
          name="Pergaminho"
          component={TelaPergaminho}
          options={{title:'Nova Missão'}}
          />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
