import React, {useState, useEffect}from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const CheckBox = ({options = []},onChange) => {

    const [selected,setSelected] = useState([]);

    function toggle(id){
        let index = selected.findIndex((i) => i === id);
        let arraySelecteds = [...selected];
        if(index !== -1){
            arraySelecteds.splice(index,1);
        }else{
            arraySelecteds.push(id);
        }
        setSelected(arraySelecteds);
    }

    useEffect(() => onChange(selected), [selected]);
    return(
        <View style={styles.contanier}>
            {
                options.map((op, index) => (
                    <View style={styles.optionContanier}>
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={() => toggle(op?.id)}
                        >
                            {
                                selected.findIndex(i=> i === op.id) !== -1 ? (
                                <Icon name="check-bold" color={#FF5353} size={16}/>
                                ): null
                            }
                                 
                        </TouchableOpacity>
                        <Text style={styles.optext}>{op?.id}</Text>
                    </View>    
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    contanier:{
        marginLeft: 12,
    },
    optionContanier:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    optext:{
        marginLeft: 12,
        color: '#555',
        fontSize: 16,
    },
    touchable:{
        height: 22,
        width: 22,
        borderRadius: 4,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
    },
})