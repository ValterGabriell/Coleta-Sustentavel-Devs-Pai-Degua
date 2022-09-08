import React from "react";
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image, Text } from "react-native";
import Profile from '../../../assets/sorriso.jpg'


const Item = ({  name, email, foto, telefone, props }) => (

  <View style={styles.viewMain} >
    <View style={styles.viewImg} >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate('FeiranteScreen', {
            name: name,
            email: email,
            telefone: telefone
          })
        }
        }>


        <View style={styles.viewOne}>
          <Image source={Profile} style={styles.imgPerson}></Image>
          <View>
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtComent}>{email}</Text>
            <Text style={styles.txtComent}>{telefone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ItemRender({ name, email, foto, telefone, props }) {
  return Item({ name, email, foto, telefone, props})
}

const styles = StyleSheet.create({
  viewOne:{
    flexDirection:'row'
  },
  viewImg: {
    marginTop:4,
   
  },
  viewMain: {
   
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
    fontWeight:'bold',
    fontSize:18
  },
  txtComent:{
    marginLeft:16,
    fontSize:14
  }
});

