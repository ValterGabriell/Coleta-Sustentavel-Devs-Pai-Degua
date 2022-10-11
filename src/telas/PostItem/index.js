import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TurboModuleRegistry } from "react-native";
import HeaderOfScreen from "./componentes/Feirante/HeaderOfScreen";
import MiddleOfScreen from "./componentes/Feirante/MiddleOfScreen";
import EndOfScreen from "./componentes/Feirante/EndOfScreen";
import LottieView from 'lottie-react-native'
import { getResiduesByRequestId } from '../../services/requisicoes/apiDevs/solicitacaoFeirante'

export default function PostItem(props) {
    const id = props.route.params.id
    const titulo = props.route.params.titulo
    const imagem = props.route.params.imagem
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = props.route.params.state
    const isAtentida = props.route.params.status
    const horario = props.route.params.data
    const qtd = props.route.params.quantidade
    const price = props.route.params.price
    const [loading, setLoading] = useState()
    const [finished, setfinished] = useState()
    const [residue, setResidues] = useState([])
    const [getResidues, setGetResidues] = useState([])

    var changeStatusOfColect = () => {
        var isGoingThere = isAtentida
        var finalizado = true
        setfinished(false)

        if (isGoingThere && !finalizado) {
            setLoading(isGoingThere)
        } else if (isGoingThere && finalizado) {
            setfinished(true)
        }
    }
   
    async function _getResiduesByRequestId(){
        var array = []
        const residues = await getResiduesByRequestId(id)
        residues.forEach(item =>{  
            array.push(item.name)
            array.push(" | ")
            setGetResidues(array)
          
        })
        console.log(array);
    }

    
    useEffect(() => {
        changeStatusOfColect()
        _getResiduesByRequestId()
    }, [])


    return <>
        
        <HeaderOfScreen titulo={titulo} localizacao={localizacao} />
        <MiddleOfScreen imagem={imagem} descricao={descricao} />
        <EndOfScreen material={getResidues} estado={estado} horario={horario} qtd={qtd} price={price} />

        {
            //se ainda ninguem aceitou a requisicao
            !loading ?
                <>
                    <View style={{ flex: 2 }}>
                        <LottieView source={require('../../assets/113756-ball-loader.json')} autoPlay loop />
                    </View>
                    <Text style={styles.txtLoading}>Aguardando coletor...</Text>
                </>
                : !finished ? //se alguem aceitou mas nao finalizou

                    <><View style={{ flex: 1 }}>
                        <LottieView source={require('../../assets/113683-biker-animation.json')} autoPlay loop />
                    </View>
                        <Text style={styles.txtLoading}>Coletor à caminho!</Text>

                    </>
                    ://se alguem  finalizou
                    <><View style={{ flex: 1 }}>
                        <LottieView source={require('../../assets/94227-ok-simple.json')} autoPlay loop />
                    </View>
                        <Text style={styles.txtLoading}>Coleta finalizada!</Text>

                    </>
        }


    </>
}


const styles = StyleSheet.create({
    txtLoading: {
        color: "#004444",
        fontWeight: "bold",
        alignSelf: "center",
        flex: 1
    }
});