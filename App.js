import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AppRotas from './src/rotas/AppRotas';
import { criaTabela } from './src/services/sqlite/tabelas/Token';
import { InfoProvider } from './src/contexts/GlobalContext';

export default function App() {

  useEffect(()=>{
    criaTabela()
  },[])

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <InfoProvider>
    <AppRotas />
    </InfoProvider>
  </SafeAreaView>
}
