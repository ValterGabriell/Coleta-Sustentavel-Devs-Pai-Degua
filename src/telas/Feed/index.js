import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ItemRender from "./componentes/ItemRender";
import ItemRenderFeirate from './componentes/ItemRenderFeirante'
import { StyleSheet, StatusBar, SafeAreaView, Image } from "react-native";
import ImgTeste from '../../assets/lixoVeropa.jpg'
import HeaderComponent from "./componentes/HeaderComponent";
import FabButton from "../../componentes/FabButton";
import logo from '../../../assets/logoAzul.png';
import { getBarracas } from '../../services/requisicoes/apiDevs/denuncias'
import { getUsers } from "../../services/requisicoes/apiDevs/users";
import { verificarUsuarioAtual } from '../../services/requisicoes/apiDevs/users'

const App = (props) => {
  const isCatador = false
  const [barracas, setbarracas] = useState([])
  const [catadores, setCatadores] = useState([])
  const [usuarioAtual, setUsuarioAtual] = useState({})

  useEffect(() => {
    (async () => {
      /**
       * Recupera todas as denuncias com este método
       */
      const result = await getBarracas()
      setbarracas(result)

      /**
       * Método para recuperar usuário atual de maneira estática
       */
      const currentUser = await verificarUsuarioAtual(1)
      setUsuarioAtual(currentUser)

      /**
       * Metodo para recuperar todos os usuarios teoricamente catadores
       */
       const cata = await getUsers()
       setCatadores(cata)



    })()
  }, [])



  /**
   * Trexo de codigo responsavel para renderizar lista caso o usuario seja catador
   */
  const renderItem = ({ item }) => (
    <ItemRender
      title={item.titulo}
      imagem={ImgTeste}
      descricao={item.descricao}
      local={item.localizacao}
      isAtendida={item.status}
      props={props}
    />
  );


  /**
   * Trexo de codigo responsavel para renderizar lista caso o usuario seja feirante
   */
  const renderItemFeirante = ({ item }) => (
    <ItemRenderFeirate
      name={item.nome}
      email={item.email}
      foto={item.foto}
      telefone={item.telefone}
      props={props}
    />
  );

  return <>{
    isCatador ?
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <FlatList
          data={barracas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={HeaderComponent({ nomeUser: usuarioAtual.nome })}
        />
        <FabButton navigation={props.navigation} />
      </SafeAreaView>

      : //se nao for catador, sera feirante e verá ->
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <FlatList
          data={catadores}
          renderItem={renderItemFeirante}
          keyExtractor={item => item.id}
          ListHeaderComponent={HeaderComponent({ nomeUser: "Feirante" })}
        />
        <FabButton navigation={props.navigation} />
      </SafeAreaView>

  }


  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  logo: {
    width: 70,
    height: 70,
    marginStart: 16,
    marginBottom: 10,
  }
});



export default App