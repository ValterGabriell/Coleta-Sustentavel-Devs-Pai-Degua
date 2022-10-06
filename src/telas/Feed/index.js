/**
 * Imports do react native
 */

import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet, StatusBar, SafeAreaView, Image } from "react-native";
import { Button } from 'react-native-paper';

/**
 * Fim dos imports react native
 */


/**
 * Imports do feirante
 */
import ItemRenderFeirate from './FeiranteComponentes/ItemRenderFeirante'
import HeaderComponentFeirante from "./FeiranteComponentes/HeaderComponent";
import HeaderComponentCatadorDisponivel from "./FeiranteComponentes/HeaderComponentCatadorDisponivel";
import ItemRenderPostFeirante from './FeiranteComponentes/ItemRenderPostFeirante'
import ItemRenderColetasAgendadas from './FeiranteComponentes/ItemRenderColetasAgendadas'
import LixoVeropa from '../../assets/lixoVeropa.jpg'

/**
 * Fim do import de feirantes
 */


//import do metodo que faz requisição para ver todas as requisições dos feirantes
import {getRequestMerchant} from '../../services/requisicoes/apiDevs/solicitacaoFeirante'

import ItemRender from "./componentes/ItemRender";
import ImgTeste from '../../assets/lixoVeropa.jpg'
import HeaderComponent from "./componentes/HeaderComponent";
import logo from '../../../assets/logoAzul.png';


import { getBarracas } from '../../services/requisicoes/apiDevs/requisicoes'
import { getScavengers } from "../../services/requisicoes/apiDevs/users";
import { verificarUsuarioAtual } from '../../services/requisicoes/apiDevs/users'
import { AuthContext } from "../../contexts/auth";


/**
 * Dados estaticos para renderizar as recycler views
 */
const DATA_AGENDADAS = [{
  id:1,
  titulo: 'Refeições Regionais',
  material: '5kg de caroço de açai',
  local: 'praca de alimentacao',
  data: '29/08/2022',
  descricao: 'Jogada na rua preciso de ajuda',
  imagem: LixoVeropa
}]


const App = (props) => {

  const [barracas, setbarracas] = useState([])
  const [catadores, setCatadores] = useState([])
  const [requests, setrequest] = useState([])
  const [usuarioAtual, setUsuarioAtual] = useState({})
  const { userType } = useContext(AuthContext)
  const isCatador = userType.isCatador
  const userId= userType.userId
  const textForButton = "Nova Coleta"


  async function reloadCalls(){

     /**
       * Recupera todas as denuncias com este método
       */
      const result = await getBarracas()
      setbarracas(result)


    const currentUser = await verificarUsuarioAtual(userId)
    setUsuarioAtual(currentUser)

      /**
       * Método para recuperar usuário atual de maneira estática
       */
    const request = await getRequestMerchant(userId)
    setrequest(request)


      /**
       * Metodo para recuperar todos os usuarios
       */
       const scavengers = await getScavengers()
       setCatadores(scavengers)

  }


  useEffect(() => {
    (async () => {
     
      reloadCalls() 
      props.navigation.addListener('focus', () => {
        reloadCalls()
      });
    
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
      id={item.id}
      name={item.name}
      email={item.email}
      photo={item.photo}
      phone={item.phone}
      props={props}
    />
  );

  const renderItemPostFeirante = ({ item }) => (
    <ItemRenderPostFeirante
      id={item.id}
      description={item.description}
      photo={LixoVeropa}
      props={props}
      localization={item.localization}
      status={item.status}
      state={item.state}
      ideal_time={item.ideal_time}
      amount={item.amount}
      />
  )

  const renderItemColetasAgendadas = ({ item }) => (
    <ItemRenderColetasAgendadas
      imagem={item.imagem}
      titulo={item.titulo}
      material={item.material}
      data={item.data}
      descricao={item.descricao} />
  )

  return <>{
    /**
     * Trecho de codigo para definir as telas de catador
     */
    isCatador ?

      <SafeAreaView style={styles.container}>
        <HeaderComponentFeirante nomeUser={"Coletor"} props={props}/>
        <Text style={styles.secondContainerName}>Novas Solicitações</Text>
        <View style={styles.viewOut}>
          <FlatList
            data={barracas}
            renderItem={renderItemPostFeirante}
            keyExtractor={item => item.id}  
          />  
        </View>
        <View>
          <Text style={styles.secondContainerName}>Coletas agendadas</Text>

          <FlatList
            horizontal
            data={DATA_AGENDADAS}
            renderItem={renderItemColetasAgendadas}
            keyExtractor={item => item.id}
          />   
        </View> 
      </SafeAreaView>


      :  /**
      * Trecho de codigo para definir as telas de feirante
      */

      <SafeAreaView style={styles.container}>
        <HeaderComponentFeirante nomeUser={"Feirante"} />

        <Text style={styles.secondContainerName}>Suas postagens</Text>

        <View style={styles.viewOut}>
          <FlatList
            horizontal
            data={requests}
            renderItem={renderItemPostFeirante}
            keyExtractor={item => item.id}
          />

          <FlatList
            data={catadores}
            renderItem={renderItemFeirante}
            keyExtractor={item => item.id}
            ListHeaderComponent={HeaderComponentCatadorDisponivel}
          />
        </View>

        <Text style={styles.secondContainerName}>Coletas agendadas</Text>

        <FlatList
          horizontal
          data={DATA_AGENDADAS}
          renderItem={renderItemColetasAgendadas}
          keyExtractor={item => item.id}
        />

      

        <TouchableOpacity>
          <Button mode="elevated" color="#FF0000" style={{ backgroundColor: "#FFF", alignSelf: "center", marginBottom: 12, }} onPress={() => { props.navigation.navigate('CameraRotas') }}>
            {textForButton}
          </Button>
        </TouchableOpacity>




      </SafeAreaView>

  }


  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  secondContainerName: {
    marginLeft: 16,
    marginVertical: 10,
    color: "#FF0000",
    fontSize: 17
  },
  viewOut: {
    backgroundColor: '#FFFAFA',
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 4,
    height: "60%"
  },
  logo: {
    width: 70,
    height: 70,
    marginStart: 16,
    marginBottom: 10,
  },
});



export default App