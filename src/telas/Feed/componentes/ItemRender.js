import React from "react";
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image, Text } from "react-native";
import Profile from '../../../assets/sorriso.jpg'


const Item = ({ title, imagem, local, descricao, isAtendida, props }) => (

  <View style={styles.viewMain} >
    <View style={styles.viewImg} >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate('BarracaScreen', {
            titulo: title,
            place: local,
            image: imagem,
            descricao: descricao,
            isAtendida: isAtendida
          })
        }
        }>


        <View style={styles.viewOne}>
          <Image source={Profile} style={styles.imgPerson}></Image>
          <View>
            <Text style={styles.txtName}>{title}</Text>
            <Text style={styles.txtComent}>{descricao}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ItemRender({ title, imagem, local, descricao, isAtendida, props }) {
  return Item({ title, imagem, local, descricao, isAtendida, props })
}

const styles = StyleSheet.create({
  viewOne:{
    flexDirection:'row'
  },
  viewImg: {
    backgroundColor: '#d3d3d3',
    padding: 5,
    borderRadius: 8,
    marginTop:4,
    marginHorizontal: 16,
  },
  viewMain: {
    marginVertical: 8,
    elevation: 1
  },
  imgPerson: {
    width: 65,
    height: 65,
    borderRadius:32
  },
  title: {
    fontSize: 32,
  },
  item: {
    padding: 8
  },
  txtName:{
    marginLeft:16,
    marginTop:5,
    fontWeight:'bold',
    fontSize:18
  },
  txtComent:{
    marginLeft:16,
    fontSize:14
  }
});

