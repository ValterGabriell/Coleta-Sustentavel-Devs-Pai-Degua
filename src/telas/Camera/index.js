import React, { useState, useEffect, useRef } from "react"
import { Camera } from "expo-camera";
import { SafeAreaView, StyleSheet, Image, Button } from "react-native";
import { View } from "react-native";
import { TouchableOpacity, Modal } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen(props) {
    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [caputuredPhoto, setCapturePhoto] = useState(null)
    const [open, setOpen] = useState(false)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log("Result: " + result);

        if (!result.cancelled) {
            props.navigation.navigate("FormularioScreen",{
                uri:result.uri
            })
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
            setHasPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <View />
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync()
            setCapturePhoto(data.uri)
            setOpen(true)
        }
    }

    async function savePicture() {
        const asset = await MediaLibrary.createAssetAsync(caputuredPhoto).then(() => {
            props.navigation.navigate('FormularioScreen',{
                uri:caputuredPhoto
            })
            setOpen(false)
        }).catch(error => {
            alert('Erro ao salvar a foto' + error)
        })
    }

    return (
        <SafeAreaView style={styles.container}>


            <Camera
                style={{ borderRadius:32, flex:0 }}
                type={type}
                ref={camRef}

            >

                <View style={styles.modalView}>

                    <TouchableOpacity style={styles.buttom} onPress={() => {
                        //setando o tipo de camera
                        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
                    }}>
                        <FontAwesome name="rotate-left" size={45} color="#FFF"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttom} onPress={takePicture}>
                        <FontAwesome name="camera" size={45} color="#FFF"  />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttom} onPress={pickImage}>
                        <FontAwesome name="picture-o" size={45} color="#FFF"  />
                    </TouchableOpacity>

                </View>
            </Camera>




            {caputuredPhoto &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={open}
                >
                    <View style={styles.modalViewMain}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => 
                                setOpen(false)
                                }>
                                <FontAwesome name="window-close" size={50} color="#FF0000"></FontAwesome>
                            
                            </TouchableOpacity>

                            <TouchableOpacity style={{ margin: 10 }} onPress={savePicture}>
                                <FontAwesome name="upload" size={50} color="#121212"></FontAwesome>
                            </TouchableOpacity>
                        </View>

                        <Image style={styles.imgModal} source={{ uri: caputuredPhoto }} />
                    </View>
                </Modal>
            }


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttom: {
        borderRadius: 10,
        height: 50,
        marginLeft: 35,
        marginRight: 35,
        size: 45
    },
    switchSide: {
        fontSize: 20, marginBottom: 13, color: "#FFF"
    },
    modalViewMain: {
        flex: 1, justifyContent: "flex-end", alignItems: "center"
    },
    modalView: {
        marginTop: 550, flexDirection: 'row', alignSelf: 'center'
    },
    imgModal: {
        width: '100%', height: 500, borderRadius: 20, marginBottom:45, marginLeft:10, marginRight:10
    }
})