import React from "react";
import { Platform, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleMaps from "./componente";
import { MaterialCommunityIcons} from '@expo/vector-icons';


export default function Mapa(props){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <GoogleMaps props={props}/>
        </View>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer:{
        //Android não considera statusbar para o layout, ios sim
        paddingTop: Platform.OS === 'android' ? 50 : 0
    },
    
})













