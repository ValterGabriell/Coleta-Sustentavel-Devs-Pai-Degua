/**
 * Imports do react native
 */

import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { StyleSheet, StatusBar, SafeAreaView, Dimensions } from "react-native";

/**
 * Fim dos imports react native
 */
import TrendingCard from "./componentes/TrendingCard";
/**
 * Imports do feirante
 */
import ItemRenderFeirate from './FeiranteComponentes/ItemRenderFeirante'
import HeaderComponentFeirante from "./FeiranteComponentes/HeaderComponent";
import HeaderComponentCatadorDisponivel from "./FeiranteComponentes/HeaderComponentCatadorDisponivel";
import ItemRenderPostFeirante from './FeiranteComponentes/ItemRenderPostFeirante'
import ItemRenderColetasAgendadas from './FeiranteComponentes/ItemRenderColetasAgendadas'
import LixoVeropa from '../../assets/lixoVeropa.jpg'
import PhotoPerfil from '../../assets/ColetorFoto.jpg'
import ListaEmpty from "./FeiranteComponentes/ListaEmpty";
/**
 * Fim do import de feirantes
 */


//import do metodo que faz requisição para ver todas as requisições dos feirantes
import { getRequestMerchant } from '../../services/requisicoes/apiDevs/solicitacaoFeirante'

import ItemRender from "./Catador/ItemRenderPostCatador";

import { getRequest, getRequestsByScarvengerId, getRequestsByMerchantId } from '../../services/requisicoes/apiDevs/requisicoes'
import { getScavengers } from "../../services/requisicoes/apiDevs/users";

import { AuthContext } from "../../contexts/auth";

import HeaderComponentCatador from "./Catador/HeaderComponentCatador";
import Coleta1 from '../../assets/barraca.png';
import Coleta2 from '../../assets/sorriso.jpg';
import Coleta3 from '../../assets/lixoVeropa.jpg';


/**
 * Dados estaticos para renderizar as recycler views
 */

const DATA_AGENDADAS = [
  {
    id: 1,
    titulo: "Preciso de catador Urgente",
    distancia: '0.8 Km',
    data: '29/08/2022'
  },
  {
    id: 2,
    titulo: "Preciso de catador Urgente",
    distancia: '0.8 Km',
    data: '29/08/2022'
  }
];


const anuncios = [
  {
    id: 1,
    title: 'Os melhores produtos para utilizar na manipulação de residuos',
    url: Coleta1,
  },
  {
    id: 2,
    title: 'Dia nacional da coleta seletiva',
    url: Coleta2,

  },
  {
    id: 3,
    title: 'Sesi abre inscrições para o curso de reciclagem',
    url: Coleta3,
  }

]






const App = (props) => {

  const [request, setRequest] = useState([])
  const [catadores, setCatadores] = useState([])
  const [requests, setrequest] = useState([])
  const [requestByScarvengerId, setRequestByScarvengerId] = useState([])
  const [requestByMerchantId, setRequestByMerchantId] = useState([])

  const { userType } = useContext(AuthContext)
  const isCatador = userType.isCatador
  const userId = userType.userId



  async function reloadCalls() {

    /**
      * Recupera todas as denuncias com este método
      */
    const result = await getRequest()
    setRequest(result)

    /**
          * Recupera lista de request aceita pelo id do usuario
          */
    const listOfRequestByScarvengerId = await getRequestsByScarvengerId(userId)
    setRequestByScarvengerId(listOfRequestByScarvengerId)

    const getRequestByMerchantId = await getRequestsByMerchantId(userId)
    setRequestByMerchantId(getRequestByMerchantId)

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
  const renderItemCatador = ({ item }) => (
    <ItemRender
      id={item.id}
      userId={userId}
      merchant_id={item.merchant_id}
      on_the_way={item.on_the_way}
      titulo={item.title}
      ideal_time={item.ideal_time}
      description={item.description}
      localization={item.localization}
      props={props}
      price={item.price}
      requestByScarvengerId={requestByScarvengerId}
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
      photo={PhotoPerfil}
      phone={item.phone}
      props={props}
    />
  );

  const renderItemPostFeirante = ({ item }) => (
    <ItemRenderPostFeirante
      id={item.id}
      title={item.title}
      description={item.description}
      photo={LixoVeropa}
      props={props}
      localization={item.localization}
      status={item.status}
      state={item.state}
      on_the_way={item.on_the_way}
      ideal_time={item.ideal_time}
      amount={item.amount}
      price={item.price}
    />
  )

  const renderItemColetasAgendadas = ({ item }) => (
    <ItemRenderColetasAgendadas
      imagem={LixoVeropa}
      title={item.title}
      description={item.description}
      ideal_time={item.ideal_time}
/>
  )

  //Item render dos anuncios
  const renderItemAnuncio = ({ item }) => (
    <TrendingCard
      id={item.id}
      title={item.title}
      url={item.url}
    />
  )

  //Linha separador dos itens da fatlist
  itemSeparator = () => {
    return <View style={styles.separator} />
  }

  //Pegar a dimensão da tela
  const { width, heigth } = Dimensions.get('window')

  return <>{
    /**
     * Trecho de codigo para definir as telas de catador
     */
    isCatador ?


      <SafeAreaView style={styles.container_1}>

        <HeaderComponentCatador nomeUser={"Coletor"} props={props} />

        <FlatList
          data={anuncios}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment={'start'}
          scrollEventThrottle={16}
          decelerationRate='fast'
          renderItem={renderItemAnuncio}
          keyExtractor={item => item.id}
          style={{ marginTop: 30 }}
        />

        <Text style={styles.secondContainerName}>Novas Solicitações</Text>
        <FlatList
          data={request}
          renderItem={renderItemCatador}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={itemSeparator}
        />
        <Text style={styles.secondContainerName}>Coletas Agendadas</Text>
        <FlatList

          data={requestByScarvengerId}
          renderItem={renderItemCatador}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={itemSeparator}
        />

      </SafeAreaView>


      :  /**
      * Trecho de codigo para definir as telas de feirante
      */

      <SafeAreaView style={styles.container}>
        <HeaderComponentFeirante nomeUser={"Feirante"} props={props} />

        <Text style={styles.secondContainerName}>Suas postagens</Text>

        <View style={styles.viewOut}>
          <FlatList
            horizontal
            data={requests}
            renderItem={renderItemPostFeirante}
            keyExtractor={item => item.id}
            ListEmptyComponent={ListaEmpty}
          />

          <FlatList
            data={catadores}
            renderItem={renderItemFeirante}
            keyExtractor={item => item.id}
            ListHeaderComponent={HeaderComponentCatadorDisponivel}
            ListEmptyComponent={ListaEmpty}
          />
        </View>

        <Text style={styles.secondContainerName}>Coletas agendadas</Text>

        <FlatList
          horizontal
          data={requestByMerchantId}
          renderItem={renderItemColetasAgendadas}
          keyExtractor={item => item.id}
          ListEmptyComponent={ListaEmpty}
        />


      </SafeAreaView>


  }


  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
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
  container_1: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,

  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',

  },
  secondContainerName: {
    marginVertical: 12,
    color: "#FF5353",
    fontSize: 16,
    fontWeight: '500'
  }
});



export default App