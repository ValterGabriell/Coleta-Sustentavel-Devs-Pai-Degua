import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, Modal, TextInput} from "react-native";
import ColetorFoto from '../../../assets/ColetorFoto.jpg';
import {trocarNomeCatador} from '../../../services/requisicoes/apiDevs/usersCatador';
import CustomButton from '../../../componentes/CustomButton';

import { AntDesign } from '@expo/vector-icons';
import cameraEdite from '../../../assets/camera.png';

const {width} = Dimensions.get('screen');

export default function TopoPerfil({ userId, fotoUser, nomeUser, emailUser }){

    const [nameVisible, setnameVisible] = useState(false)
    const [newNAME, setnewNAME] = useState(nomeUser)

    return<View>
        <View style = {styles.topo}>
            <View style={styles.editeFoto}>
                <Image source={ColetorFoto} style={styles.picture}/>
                <TouchableOpacity style={styles.editeCamera} onPress={() => {}}>
                    <Image source={cameraEdite}/>
                </TouchableOpacity>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 22}}>
                <AntDesign name="star" size={20} color="#FF8C8C" />
                <Text>{'4,8'}</Text>
            </View>
            <Text style={styles.username}>{nomeUser}</Text>
            <Text style={styles.email} >{emailUser}</Text>
        </View>
        <TouchableOpacity style={styles.editarTopo} onPress={() => {setnameVisible(true)}}>
            <AntDesign name="edit" size={18} color="#777778"/>
        </TouchableOpacity>
        {nameVisible &&
                <Modal animationType="slide" visible={nameVisible}>
                    <View style={{marginTop:32}}>
                        <TextInput style={styles.textInput} placeholder={nomeUser} onChangeText={setnewNAME} clearButtonMode={"while-editing"}></TextInput>
                        <CustomButton onPress={() => {
                            setnameVisible(false)
                            trocarNomeCatador(userId, newNAME)
                        }} text={"Salvar"} />

                        <CustomButton onPress={() => {
                            setnameVisible(false)
                        }} text={"Cancelar"} />
                    </View>
                </Modal>}

        
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
    editarTopo:{
        position: 'absolute',
        marginStart: 280,
        marginTop: 192,
    },
    textInput: {
        backgroundColor: "white",
        width: 320,
        height: 60,
        borderRadius: 16,
        marginVertical: 16,
        padding: 16,
        borderColor: "#FF5353",
        borderWidth: 1,
        fontWeight: '500',
        alignSelf: "center"
    },

})