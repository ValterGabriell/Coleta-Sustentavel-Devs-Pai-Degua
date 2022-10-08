import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, View, StatusBar, props} from "react-native";
import HeaderComponent from "../FeiranteComponentes/HeaderComponent";


import ItemRenderCatador from "./ItemRenderPostCatador";

//Dados fakes

const barracas = [
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

]


const renderItem = ({ item }) => (
    <ItemRenderCatador
        id = {item.id}
        titulo = {item.titulo}
        distancia = {item.distancia}
        data = {item.data}
        props={props}
    />
  )

  //Fake
  /*
        id={item.id}
      name={item.name}
      email={item.email}
      photo={item.photo}
      phone={item.phone}
      props={props}
  
  */

itemSeparator = () => {
    return <View style={styles.separator}/>
}

  

export default function CatadorFeed({props}){


    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent nomeUser={"Coletor"} props={props}/>
            <Text style={styles.secondContainerName}>Novas Solicitações</Text>
            <FlatList
                data={barracas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ itemSeparator }
             />
            <Text style={styles.secondContainerName}>Coletas Agendadas</Text>
            <FlatList
                data={barracas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ itemSeparator }
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 16,
        
    },
    separator:{
        height: 1,
        width: '100%',
        backgroundColor: '#CCC',
    },
    secondContainerName: {
        marginVertical: 12,
        color: "#FF5353",
        fontSize: 18,
        fontWeight: '450'
    },

});