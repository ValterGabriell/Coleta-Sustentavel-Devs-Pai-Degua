import React, { useState, useEffect, useContext, useRef } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Button } from "react-native-paper";
import { View } from "react-native";
import * as Location from 'expo-location';
import { TextInput, Image, TouchableOpacity } from "react-native";
import { postDenuncia } from "../../services/requisicoes/apiDevs/denuncias";
import { AuthContext } from "../../contexts/auth";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from '@react-native-picker/picker';
import SelectableChips from 'react-native-chip/SelectableChips'



const dataSource = [
    "Volvo", "Alpha Sports", "Ford", "Gräf & Stift", "Aston Martin", "BMW", "Tarrant Automobile", "Push", "Österreichische Austro-Fiat", "Mazda", "Rosenbauer"
]

export default function FormularioDenuncia(props) {

    //recebe a foto
    const uri = props.route.params.uri
    //receber se é catador ou nao
    const { userType } = useContext(AuthContext)
    const isCatador = userType.isCatador

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [latitude, setLatitude] = useState("Carregando localização...");
    const [longitude, setLongitude] = useState(null);
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [timeOne, setTimeOne] = useState("")
    const [timeTwo, setTimeTwo] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [Qtd, setQtd] = useState();
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


    /**
     * Seletor de hora
     */
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date = new Date()) => {
        const hora = date.getHours() + ":" + date.getMinutes()
        if (timeOne === "") {
            setTimeOne(hora)
        } else {
            setTimeTwo(hora)
        }
        hideDatePicker();
    };

    /**
     * Fim do seletor de hora
     */

    function sendToDatabase() {
        if (title != "" && description != "" && uri != "") {
            var location = latitude + ',' + longitude
            postDenuncia(
                title,
                description,
                "'",
                "15",
                false,
                location,
                props
            )
        } else {
            alert("Preencha tudo corretamente")
        }
    }

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return <>
        {
            /**
             * Se for feirante
             */
            isCatador ?
                <SafeAreaView>
                    <ScrollView>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome style={styles.iconPerson} name="user-o" size={20} color="#000" />
                            <Text style={styles.txtMain}>Olá, user!</Text>
                        </View>

                        <TextInput
                            placeholder="Digite aqui seu título!"
                            placeholderTextColor={"#000"}
                            style={styles.input}
                            onChangeText={settitle}
                            value={title}
                        />
                        <Image style={styles.imgModal} source={{ uri }} />

                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome style={styles.iconPerson} name="map-marker" size={20} color="#000" />
                            <Text style={styles.txtCoordenadas}>{latitude}</Text>
                            <Text style={styles.txtCoordenadas}>{longitude}</Text>
                        </View>

                        <TextInput
                            placeholder="Descreva sua denúncia"
                            style={styles.input}
                            onChangeText={setdescription}
                            value={description}
                        />




                        <Button onPress={sendToDatabase}>Enviar</Button>
                        <Button onPress={() => {
                            props.navigation.navigate("MyTabsScreen")
                        }}>Cancelar</Button>


                    </ScrollView>
                </SafeAreaView>

                : /**
                Se for catador */

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

                        <View style={{ flexDirection: "row", marginTop: 6, marginLeft: 8 }}>
                            <Text style={styles.txtCoordenadas}>Horário: </Text>

                            <TouchableOpacity>
                                <Button mode="elevated" color="#000" style={styles.buttonHour} onPress={showDatePicker}>
                                    {timeOne}
                                </Button>
                            </TouchableOpacity>
                            <Text style={styles.txtCoordenadas}>às </Text>
                            <TouchableOpacity>
                                <Button mode="elevated" color="#000" style={styles.buttonHour} onPress={showDatePicker}>
                                    {timeTwo}
                                </Button>
                            </TouchableOpacity>


                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="time"

                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />

                        </View>





                        <Text style={styles.materiaisName}>{"Materiais"}</Text>


                        <View style={{ flexDirection:"column", marginLeft: 8, marginTop: 8, justifyContent: 'center' }}>
                            
                            <SelectableChips initialChips={["Plastico", "Organico", "Papel", "Vidro", "Metal"]} onChangeChips={(chips) => setArrayChip(chips)} alertRequired={false} />
                            

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
                                <Text style={styles.materiaisName}>{"Qualidade"}</Text>

                                <Picker
                                    style={{ width: 120, marginLeft: 8 }}
                                    ref={pickerRef}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item label="Bom" value="bom" />
                                    <Picker.Item label="Medio" value="medio" />
                                    <Picker.Item label="Ruim" value="ruim" />
                                </Picker>
                            </View>



                        </View>




                        <TouchableOpacity>
                            <Button mode="elevated" color="#FF0000" style={styles.buttonSend} onPress={sendToDatabase}>
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
        marginTop:8,
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