import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, View} from "react-native";

//Icones
import Plastico from '../../assets/plasticoIcone.png';
import Organico from '../../assets/OrganicoIcone.png';
import Papel from '../../assets/PapelIcone.png';
import Vidro from '../../assets/VidroIcone.png';
import Metal from '../../assets/MetalIcone.png';

import Corpo from "./Corpo";


export default function Instrucao(){

    const data = [
        {
            imagem: Metal,
            titulo: 'Metal',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Ullamcorper eget nulla facilisi etiam dignissim. ',
        },
        {
            imagem: Organico,
            titulo: 'Orgânico',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Ullamcorper eget nulla facilisi etiam dignissim. ',
        },
        {
            imagem: Papel,
            titulo: 'Papel',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Ullamcorper eget nulla facilisi etiam dignissim. ',
        },
        {
            imagem: Plastico,
            titulo: 'Plastico',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Ullamcorper eget nulla facilisi etiam dignissim. ',
        },
        {
            imagem: Vidro,
            titulo: 'Vidro',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Ullamcorper eget nulla facilisi etiam dignissim. ',
        },

    ]

    itemSeparator = () => {
        return <View style={styles.separator}/>
    }


    function renderItem({item}){
        return <Corpo {...item}/>;
    }

    return<SafeAreaView style={styles.contanier}>
        <Text style={styles.titulo}>Como Realizar a preparação dos residuos?</Text>
        <FlatList
            data={data}
            keyExtractor={item => item.titulo}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeparator }
        />
    </SafeAreaView>  
}


const styles = StyleSheet.create({
    contanier:{
        flex: 1,
        backgroundColor: '#FFC4AB',
    },
    titulo:{
        marginTop: 50,
        marginStart: 16,
        fontSize: 20,
        fontWeight: '600',
        color: '#740000',
        paddingBottom: 12,
    },
    separator:{
        height: 1,
        width: '92%',
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 16,
    },
})