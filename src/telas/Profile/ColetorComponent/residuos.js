import React, {useState, useEffect}from "react";
import { View, StyleSheet, SafeAreaView, Modal, Linking, ScrollView, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import 'react-native-gesture-handler';

//Icones
import Plastico from '../../../assets/plasticoIcone.png';
import Organico from '../../../assets/OrganicoIcone.png';
import Papel from '../../../assets/PapelIcone.png';
import Vidro from '../../../assets/VidroIcone.png';
import Metal from '../../../assets/MetalIcone.png';


 const CheckBoxPage = () => {

    //residuos
    const optionMultiple = [
        {text: 'Metal', id: 1},
        {text: 'Orgânico', id: 2},
        {text: 'Papel', id: 3},
        {text: 'Plastico', id: 4},
        {text: 'Vidro', id: 5},
    ];

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [complianceModal, setcomplianceModal] = useState(true)


    return(
    
            <View>
                    <Modal
                    animationType="slide"
                    transparent= {true}
                    visible={complianceModal}
                    >
                        <View style={styles.modalContanier}>
                            <View style={styles.modalView}>
                                <Plastico size={24}/>
                                <Text>Plastico</Text>
                            </View>
                           
                        </View>   
                    </Modal>
            </View>

    );
}

    const styles = StyleSheet.create({
        contanier:{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
        },
        btn:{
            marginHorizontal: 8,
        },
        modalContanier:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0, .6)',
        },
        modalView:{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 20,
            padding: 20,
            alignItems: 'center',
        },
    });

export default CheckBoxPage;