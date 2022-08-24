import React from "react";
import { Platform, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleMaps from "./componente";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Detalhe from "./buttonMais";

export default function Mapa(){
    return(
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.LinkEndereco}>
            <Text style={styles.titulo}>Barraca da cheirosinha</Text>

            <TouchableOpacity style={styles.mapa}>
              <MaterialCommunityIcons name="google-maps" size={22} color="#0078AA" />
              <Text style={{color:'#0078AA'}}>Endereço do gps</Text>
            </TouchableOpacity>
          </View>

          <GoogleMaps/>

          <Detalhe text='Detalhes do local' onPress={() => {
              navigation.navigate('')
          }}/>

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

    LinkEndereco:{
      marginBottom: 10,
      color: '#2E7D32', 
    },

    titulo:{
      fontSize: 20,
      fontWeight: '500',
      
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

    mapa:{
      flexDirection: 'row',
    },

    gravidade:{
      width:100,
      height: 100,
    }
    
})













