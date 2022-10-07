import React from "react";
import { Platform, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleMaps from "./componente";
import { MaterialCommunityIcons} from '@expo/vector-icons';


export default function Mapa(props){
    return(
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
      
          <GoogleMaps props={props}/>

          <Text>Gravidade: </Text>
          <View style={styles.mensageGravidade}>
            <Text style={{color: '#E53935'}}>A situação está feia!</Text>
          </View>
        </View>
      </SafeAreaView>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer:{
        padding: 16,
        //Android não considera statusbar para o layout, ios sim
        paddingTop: Platform.OS === 'android' ? 50 : 0
    },

  
    endereco:{
      paddingStart: 8,
      color: '#3700B3',
      marginBottom: 16,
    },

    mensageGravidade:{
      alignItems: 'center',
      marginHorizontal: 16,
    },

    gravidade:{
      width:100,
      height: 100,
    }
    
})













