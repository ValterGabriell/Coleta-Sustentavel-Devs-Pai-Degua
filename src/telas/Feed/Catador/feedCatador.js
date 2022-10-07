import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, View} from "react-native";
import VerlistaBotao from "../componentes/verLista";
import {ScrollSnap} from './feedCatador';
import HeaderComponent from "../FeiranteComponentes/HeaderComponent";

//Import de imagens


//Dados fakes
  
  

const renderItem = ({ item }) => (
    <ItemRender
      title={item.titulo}
      imagem={ImgTeste}
      descricao={item.descricao}
      local={item.localizacao}
      distancia = {item.distancia}
      isAtendida={item.status}
      props={props}
    />
  );

const CatadorFeed = () => {

    const [catadores, setCatadores] = useState([])



    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent/>
            <View>{ScrollSnap}</View>
            <Text style={{color: "#FF0000"}}>Novas Solicitações</Text>
            <View>
                <FlatList
                    data={barracas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <VerlistaBotao/>
            </View>
            <Text style={{color: "#FF0000"}}>Coletas Agendadas</Text>
            <View>
                <FlatList
                    data={barracas}
                    renderItem={renderItemFeirante}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={HeaderComponentCatadorDisponivel}
                />
                <VerlistaBotao/>
            </View>
    
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }

})