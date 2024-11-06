import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  const { dados } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Gmail do Usuário:</Text>
      <TextInput 
        style={styles.input} 
        value={dados.data.usuario.email} 
        editable={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
});
