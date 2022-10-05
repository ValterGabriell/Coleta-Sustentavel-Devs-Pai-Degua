import React from "react";
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image, Text } from "react-native";
import Profile from '../../../assets/sorriso.jpg'


const Item = ({ id, name, email, photo, phone, props }) => (

  <View style={styles.viewMain} >
    <View style={styles.viewImg} >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate('PerfilUser', {
            id:id,
            name: name,
            email: email,
            photo:photo,
            phone: phone
          })
        }
        }>


        <View style={styles.viewOne}>
          <Image source={Profile} style={styles.imgPerson}></Image>
          <View>
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtComent}>{email}</Text>
            <Text style={styles.txtComent}>{phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ItemRender({ id, name, email, photo, phone, props }) {
  return Item({ id,name, email, photo, phone, props})
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

