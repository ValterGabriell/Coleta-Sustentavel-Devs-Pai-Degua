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
            descricao: 'Além de todos os tipos de latas de alumínio, é possível reciclar tampinhas, pregos e parafusos. Atenção: clipes, grampos, canos e esponjas de aço devem ficar de fora. ',
        },
        {
            imagem: Organico,
            titulo: 'Orgânico',
            descricao: 'O lixo orgânico é aquele que provém de origem animal ou vegetal, como: restos de alimentos, madeira,cascas, sementes, etc, e deve ser descartado em um recipiente próprio',
        },
        {
            imagem: Papel,
            titulo: 'Papel',
            descricao: 'Todos os tipos são recicláveis, inclusive caixas do tipo longa-vida e de papelão. Não recicle papel com material orgânico, como caixas de pizza cheias de gordura, pontas de cigarro, fitas adesivas, fotografias, papéis sanitários e papel-carbono.',
        },
        {
            imagem: Plastico,
            titulo: 'Plastico',
            descricao: '90% do lixo produzido no mundo são à base de plástico. Por isso, esse material merece uma atenção especial. Recicle sacos de supermercados, garrafas de refrigerante (pet), tampinhas e até brinquedos quebrados.',
        },
        {
            imagem: Vidro,
            titulo: 'Vidro',
            descricao: 'Quando limpos e secos, todos são recicláveis, exceto lâmpadas, cristais, espelhos, vidros de automóveis ou temperados, cerâmica e porcelana.',
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