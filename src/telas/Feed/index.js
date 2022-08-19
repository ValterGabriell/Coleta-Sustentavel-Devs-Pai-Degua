import React from "react";
import { FlatList } from "react-native";
import ItemRender from "./componentes/ItemRender";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import ImgTeste from '../../assets/imgMapa.jpg'
import HeaderComponent from "./componentes/HeaderComponent";
import FabButton from "../../componentes/FabButton";





const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imagem: ImgTeste,
    title: 'First Item',
    local: 'ver-o-peso'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imagem: ImgTeste,
    title: 'Second Item',
    local: 'ver-o-peso'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imagem: ImgTeste,
    title: 'Third Item',
    local: 'ver-o-peso'
  },
];



const App = (props) => {
  const renderItem = ({ item }) => (
    <ItemRender
      title={item.title}
      imagem={item.imagem}
      local={item.local}
      props={props}
    />
  );

  return <>
    <SafeAreaView style={styles.container}>

     
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={HeaderComponent({ nomeUser: "Usuário" })}
      />
      <FabButton navigation={props.navigation} />
    </SafeAreaView>

  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});



export default App