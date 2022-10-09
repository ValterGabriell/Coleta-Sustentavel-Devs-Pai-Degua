import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import ColetorFoto from '../../../assets/ColetorFoto.jpg';

import { AntDesign } from '@expo/vector-icons';

import ImagePicker from 'react-native-image-picker';
import cameraEdite from '../../../assets/camera.png';

const {width} = Dimensions.get('screen');

export default function TopoPerfil(user){

    function ImagePickerCallback(data){
        console.log(data);
    }

    return<View style = {styles.topo}>
            <View style={styles.editeFoto}>
                <Image source={ColetorFoto} style={styles.picture}/>
                <TouchableOpacity style={styles.editeCamera} onPress={() => ImagePicker.launchImageLibrary({


                }, ImagePickerCallback)}>
                    <Image source={cameraEdite}/>
                </TouchableOpacity>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 22}}>
                <AntDesign name="star" size={20} color="#FF8C8C" />
                <Text>{'4,8'}</Text>
            </View>
            <Text style={styles.username}>{'Biel Javeiro'}</Text>
            <Text style={styles.email} >{'bieljaveiro@gmail'}</Text>
    </View>
}

const styles = StyleSheet.create({
    topo:{
        width:'100%',
        height: 578/ 928 * width, 
        alignItems: 'center',
        backgroundColor: '#E4E4E4',
    },

    picture:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    username:{
        marginVertical:6,
        fontSize: 20,
        color: '#C60D0D',
    },
    editeFoto:{
        alignItems: 'center',
        marginTop: 36,
    },
    editeCamera:{
        position: 'absolute',
        marginTop: 80,
    },

})