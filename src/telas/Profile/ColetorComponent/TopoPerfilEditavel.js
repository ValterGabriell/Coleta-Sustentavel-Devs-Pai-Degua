import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import ColetorFoto from '../../../assets/ColetorFoto.jpg';

import { AntDesign } from '@expo/vector-icons';

import ImagePicker from 'react-native-image-picker';
import cameraEdite from '../../../assets/camera.png';

const { width } = Dimensions.get('screen');

export default function TopoPerfil({ user }) {

    function ImagePickerCallback(data) {
        console.log(data);
    }

    const [photoUser, setPhotoUser] = useState(`http://68.183.143.117:3333${user.photo}`)

    useEffect(()=>{
        setPhotoUser(`http://68.183.143.117:3333${user.photo}`)
        console.log(`http://68.183.143.117:3333${user.photo}`);
    },[])


    return <>
        <View style={styles.topo}>
            <View style={styles.editeFoto}>
                <Image source={{uri:photoUser}} style={styles.picture} />
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.email} >{user.email}</Text>
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                    <AntDesign name="star" size={20} color="#FF8C8C" />
                    <Text>{'4,8'}</Text>
                </View>


            </View>

        </View>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 928 * width,
        alignItems: 'center',
        backgroundColor: '#E4E4E4',
    },

    picture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    username: {
        marginTop: 16,
        fontSize: 20,
        color: '#C60D0D',
    },
    editeFoto: {
        alignItems: 'center',
        marginTop: 36,
    },
    editeCamera: {
        position: 'absolute',
        marginTop: 80,
    },

})