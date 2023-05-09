import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);
  const oldNumberRef = useRef();
  
 // Não re-renderiza o componente  
  useEffect(() => {
    numberRef.current = Math.random();
    // setNumber((prevNumber) => prevNumber + 10);
  })
  
 // Referência  do valor anterior
  useEffect(() => {
    oldNumberRef.current = count;

    // Monitora a alteração do Count V
  }, [count])
 
 
  console.log(numberRef)

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>O number é: {number} </Text>
      <Text style={{color: 'white'}}>O numero do UseRef é: {numberRef.current} </Text>
      <Text style={{color: 'white'}}>O contador anterior era: {oldNumberRef.current} </Text>
     <Text style={{color: 'white'}}>O contador é: {count} </Text>
      <TouchableOpacity  onPress={() => setCount(count+1)} >
        <Text style={{ padding: 15, borderRadius:8, marginTop: 10, backgroundColor: '#505050', color: '#00c92b', fontSize: 20}}>Incrementar</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555555',
  
  },
});
