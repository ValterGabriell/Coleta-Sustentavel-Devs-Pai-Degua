import React from "react";
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image, Text } from "react-native";



const Item = ({ id, name, price}) => (

  <View style={styles.viewMain} >
    <View style={styles.viewImg} >
      <TouchableOpacity
        style={styles.item}>


        <View style={styles.viewOne}>
          <View>
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtComent}>{price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ItemRender({ id, name, price}) {
  return Item({ id, name, price})
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

