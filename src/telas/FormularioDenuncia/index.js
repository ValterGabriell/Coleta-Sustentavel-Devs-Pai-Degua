import React, { useState, useEffect, useContext, useRef } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Button } from "react-native-paper";
import { View } from "react-native";
import * as Location from 'expo-location';
import { TextInput, Image, TouchableOpacity } from "react-native";
import { postRequest } from "../../services/requisicoes/apiDevs/requisicoes";
import { AuthContext } from "../../contexts/auth";
import { Picker } from '@react-native-picker/picker';
import SelectableChips from 'react-native-chip/SelectableChips'


export default function FormularioDenuncia(props) {

    //recebe a foto
    const uri = props.route.params.uri
    //receber se é catador ou nao
    const { userType } = useContext(AuthContext)
    const userId = userType.userId


    const [latitude, setLatitude] = useState("Carregando localização...");
    const [longitude, setLongitude] = useState(null);
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [quality, setQuality] = useState();
    const [Qtd, setQtd] = useState();
    const [price, setPrice] = useState();
    const [horario, setHorario] = useState();
    const [arrayChip, setArrayChip] = useState([]);


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para localização foi negada');
                alert(errorMsg)
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)

        })();
    }, []);


    function setArrayOfMaterials(chips) {

        setArrayChip(chips)
      
    }


    function sendToDatabase() {        
        if (title != "" && description != "" && uri != "") {
            var localization = latitude + ',' + longitude
            postRequest(
                userId,
                title,
                description,
                uri,
                localization,
                false,
                quality,
                false,
                horario,
                Qtd,
                price,
                arrayChip,
                props
            )
        } else {
            alert("Preencha tudo corretamente")
        }
    }

    const pickerRef = useRef();


    return <>
        {

            <SafeAreaView>
                <ScrollView>
                    <FontAwesome style={styles.iconHeader} name="chevron-left" size={20} color="#000" />
                    <TextInput
                        placeholder="Digite um título!"
                        style={styles.input}
                        onChangeText={settitle}
                        value={title}
                    />

                    <Image style={styles.imgModal} source={{ uri }} />

                    <TextInput
                        placeholder="Descrição"
                        style={styles.inputDescricao}
                        onChangeText={setdescription}
                        value={description}
                        multiline={true}
                        numberOfLines={10}
                    />

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome style={styles.iconPerson} name="map-marker" size={20} color="#000" />
                        <Text style={styles.txtCoordenadas}>{latitude}</Text>
                        <Text style={styles.txtCoordenadas}>{longitude}</Text>
                    </View>

                    <View>
                        <Text style={styles.materiaisName}>{"Horário"}</Text>
                    
                        <TextInput
                            placeholder="Basta por o valor inteiro. Ex. 12 se tornará 12:00"
                            style={styles.inputHorario}
                            onChangeText={setHorario}
                            value={horario}
                            keyboardType={"numeric"}
                        />

                    </View>




                    <Text style={styles.materiaisName}>{"Materiais"}</Text>


                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.materiaisName}>{"1 - Plástico"}</Text>
                        <Text style={styles.materiaisName}>{"2 - Papelão"}</Text>
                        <Text style={styles.materiaisName}>{"3 - Vidro"}</Text>
                        <Text style={styles.materiaisName}>{"4 - Oléos"}</Text>

                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 8, marginTop: 8, justifyContent: 'center' }}>
                        <SelectableChips initialChips={[1, 2, 3, 4]} onChangeChips={(chips) =>
                            setArrayOfMaterials(chips)
                        } alertRequired={false} />


                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Text style={styles.materiaisName}>{"Quantidade"}</Text>
                            <TextInput
                                placeholder="Ex. 1"
                                style={styles.inputQuantidade}
                                onChangeText={setQtd}
                                value={Qtd}
                                keyboardType={"number-pad"}
                            />

                        </View>

                        <View>
                            <Text style={styles.materiaisName}>{"Valor em R$"}</Text>
                            <TextInput
                                placeholder="Ex. 1"
                                style={styles.inputQuantidade}
                                onChangeText={setPrice}
                                value={price}
                                keyboardType={"number-pad"}
                            />

                        </View>



                        <View>
                            <Text style={styles.materiaisName}>{"Qualidade"}</Text>

                            <Picker
                                style={{ width: 120, marginLeft: 8 }}
                                ref={pickerRef}
                                selectedValue={quality}
                                onValueChange={(itemValue, itemIndex) =>
                                    setQuality(itemValue)
                                }>
                                <Picker.Item label="Excelente" value="Excelente" />
                                <Picker.Item label="Bom" value="Bom" />
                                <Picker.Item label="Normal" value="Normal" />
                                <Picker.Item label="Ruim" value="Ruim" />

                            </Picker>
                        </View>

                    </View>


                    <TouchableOpacity>
                        <Button mode="elevated" color="#FF0000" style={styles.buttonSend} onPress={() => {
                            sendToDatabase()
                        }}>
                            Enviar
                        </Button>
                    </TouchableOpacity>


                </ScrollView>
            </SafeAreaView >


        }

    </>
}

const styles = StyleSheet.create({
    txtMain: {
        fontSize: 24,
        marginLeft: 8,
        marginTop: 16
    },
    viewMaterial: {
        borderRadius: 32, marginLeft: 8, marginRight: 8
    },
    materiaisStyle: {
        fontWeight: 'bold',
        marginTop: 4,
        alignSelf: 'center',
        marginLeft: 8,
        marginRight: 8
    },
    buttonSend: {
        marginTop: 16,
        backgroundColor: "#FFF", alignSelf: "center",
        borderRadius: 12,
        elevation: 8
    },
    buttonHour: {
        backgroundColor: "#d3d3d3", alignSelf: "center",
        borderRadius: 12,
        elevation: 8
    },
    txtCoordenadas: {
        fontSize: 16,
        marginLeft: 8,
        alignSelf: "center"
    },
    imgModal: {
        width: '95%', height: 350, borderRadius: 20, marginLeft: 8, marginRight: 8
    },
    input: {
        height: 40,
        margin: 12,
        fontWeight: 'bold',
        fontSize: 24,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    inputDescricao: {
        height: "10%",
        margin: 12,
        padding: 10,
        fontWeight: 'bold',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
    },
    inputQuantidade: {
        marginLeft: 20,
        marginTop: 8,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        textAlign: 'center'
    },
    inputHorario: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        textAlign: 'center'
    },
    iconPerson: {
        marginTop: 1,
        marginLeft: 16
    },
    iconHeader: {
        marginTop: 24,
        marginLeft: 16
    },
    materiaisName: {
        alignSelf: "flex-start",
        fontSize: 16,
        lineHeight: 38,
        marginTop: 16,
        marginLeft: 16,
        color: "#cc0000",
    },
})