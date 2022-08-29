import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ItemRender from "./componentes/ItemRender";
import { StyleSheet, StatusBar, SafeAreaView, Image } from "react-native";
import ImgTeste from '../../assets/lixoVeropa.jpg'
import HeaderComponent from "./componentes/HeaderComponent";
import FabButton from "../../componentes/FabButton";
import logo from '../../../assets/logoAzul.png';
import { getDenuncias } from '../../services/requisicoes/apiDevs/denuncias'
import { verificarUsuarioAtual } from '../../services/requisicoes/apiDevs/users'

const App = (props) => {
  const isCatador = true
  const [denuncias, setDenuncias] = useState([])
  const [usuarioAtual, setUsuarioAtual] = useState({})

  useEffect(() => {
    (async () => {
      /**
       * Recupera todas as denuncias com este método
       */
      const result = await getDenuncias()
      setDenuncias(result)

      /**
       * Método para recuperar usuário atual de maneira estática
       */

      const currentUser = await verificarUsuarioAtual(1)
      setUsuarioAtual(currentUser)



    })()
  }, [])



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

  return <>{
    isCatador ?
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <FlatList
          data={denuncias}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={HeaderComponent({ nomeUser: usuarioAtual.nome })}
        />
        <FabButton navigation={props.navigation} />
      </SafeAreaView>

      : //se nao for catador ->
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <FlatList
          data={denuncias}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={HeaderComponent({ nomeUser: "xii" })}
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