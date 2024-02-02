import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contatos</Text>
        {/* Adicione os ícones do menu, pesquisa e mais opções aqui */}
      </View>
      <View style={styles.profile}>
        <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
        <Text style={styles.name}>Lucas Carli</Text>
      </View>
      {/* Adicione a lista de contatos aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
  },
});