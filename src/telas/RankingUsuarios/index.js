import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Head from './Componentes/Head';
import ListaRanking from './Componentes/ListRanking';


const RankingUsuarios = () => {
  return (
    <View style={styles.container}>
     <Head/>
     <ListaRanking/>
    </View>
  );
};
export default RankingUsuarios;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});