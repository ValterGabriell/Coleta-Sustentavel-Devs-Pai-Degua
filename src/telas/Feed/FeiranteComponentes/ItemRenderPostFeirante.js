import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

//pegar o id da request e recuperar os residuos

const Item = ({ id,title,description, photo, props,localization,status,state,on_the_way,ideal_time,amount, price}) => (

    <View>
        <View >
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                   props.navigation.navigate("PostItem",{
                    id:id,
                    titulo: title,
                    imagem:photo,
                    data:ideal_time,
                    descricao:description,
                    localizacao:localization,
                    status:status,
                    state:state,
                    on_the_way:on_the_way,
                    quantidade:amount,
                    price:price
                   })
                   
                }
                }>
                <View style={styles.viewOne}>
                    <Image source={photo} style={styles.imgLixo}></Image>
                    <View>
                        <Text style={styles.txtName}>{title}</Text>
                        <Text style={styles.txtData}>{ideal_time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

export default function ItemRender({ id, title,description, photo, props,localization,status,state,on_the_way,ideal_time,amount,price}) {
    return Item({ id,title,description, photo, props,localization,status,state,on_the_way,ideal_time,amount, price})
}

const styles = StyleSheet.create({
    viewOne: {
      
        paddingBottom:15
    },
    imgLixo: {
        width: 95,
        height: 60,
        borderRadius:16
    },
    title: {
        fontSize: 32
    },
    item: {
        padding: 8
    },
    txtName: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 18
    },
    txtComent: {
        marginLeft: 8,
        fontSize: 14
    },
    txtData: {
        marginRight: 8,
        fontSize: 14,
        marginLeft:8
    }
});

