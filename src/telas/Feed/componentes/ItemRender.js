import React from "react";
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image, Text } from "react-native";
import Save from '../../../assets/save.png'
import Place from '../../../assets/place.png'


const Item = ({ title, imagem, local, props }) => (
  <View style={styles.viewMain} >
    <View style={styles.viewImg} >
      <ImageBackground source={imagem} style={styles.imagem}  >

      
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={()=>{
            props.navigation.navigate('NoticiaScreen')
          }
          
          }
          activeOpacity={0.5}
          >
          <Image
            source={Save}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>


      </ImageBackground>
    </View>

    <Text style={styles.textFootViewMain}>{title}</Text>
    <View style={styles.viewFootViewMain}>
      <Image source={Place} style={styles.imgPLace}></Image>
      <Text style={styles.textFootViewMainInsideOfView}>{local}</Text>
    </View>
  </View>
);

export default function ItemRender({ title, imagem, local, props }) {
  return Item({ title, imagem,local, props})
}

const styles = StyleSheet.create({
  viewImg: {
    backgroundColor: '#808080',
    padding: 5,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  viewMain: {
    marginVertical: 8,
    elevation: 1
  },
  imgPLace: {
    width: 25,
    height: 25
  },
  textFootViewMain: {
    marginVertical: 3,
    marginHorizontal: 21,
  },
  textFootViewMainInsideOfView: {
    marginVertical: 3,
    marginHorizontal: 4,
  },
  viewFootViewMain: {
    marginVertical: 3,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  imagem: {
    borderRadius: 8,
    width: 315,
    height: 150,
    marginLeft: 1,
    padding: 5
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    marginLeft: 270
  },
  buttonImageIconStyle: {
    margin: 2,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  }
});

