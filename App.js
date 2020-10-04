import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils'

export default function App() {
 // const [minuto, setMinuto] = useState(0)
  const [segundo, setSegundo ] = useState(0);

  useEffect(() => {
    if (segundo === 30){
      vibrate()
    }
  }, [segundo])
  function actualizarSegundo(){
    setSegundo(segundo+1)
  }
/*   useEffect(() => {
    console.log("cambio segundo: ", segundo)
  }, [segundo]) */

function inicio() {
  //setInterval(actualizarSegundo, 1000)
  setInterval(() => {
    setSegundo(segundo+1)
  }, 1000);
}
  
  return (
    <View style={styles.container}>
      <Text>{ segundo }</Text>
      <Button 
        title="Iniciar"
        onPress={setTimeout(() => {
          setSegundo(segundo+1)
        }, 1000)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
