import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import HeaderOfScreen from "./componentes/Feirante/HeaderOfScreen";
import MiddleOfScreen from "./componentes/Feirante/MiddleOfScreen";
import EndOfScreen from "./componentes/Feirante/EndOfScreen";
import LottieView from 'lottie-react-native'
import { getResiduesByRequestId } from '../../services/requisicoes/apiDevs/solicitacaoFeirante'

export default function PostItem(props) {
    const id = props.route.params.id
    const titulo = props.route.params.titulo
    const imagem = props.route.params.photo
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = props.route.params.state
    const isFinished = props.route.params.status
    const on_the_way = props.route.params.on_the_way
    const horario = props.route.params.data
    const qtd = props.route.params.quantidade
    const price = props.route.params.price
    const [on_way, setOnWay] = useState()
    const [finished, setfinished] = useState(false)
    const [getResidues, setGetResidues] = useState([])

    var changeStatusOfColect = () => {
        if (on_the_way && !isFinished) {
            setOnWay(on_the_way)
        } else if (isFinished) {
            setOnWay(true)
            setfinished(true)
        }
    }
   
    async function _getResiduesByRequestId(){
        var array = []
        const residues = await getResiduesByRequestId(id)
        residues.forEach(item =>{  
            array.push(item.name)
            array.push(" | ")
        })
        setGetResidues(array)
    }

    
    useEffect(() => {
    
        changeStatusOfColect()
        _getResiduesByRequestId()
    }, [])


    return <>
        
        <HeaderOfScreen titulo={titulo} localizacao={localizacao}  />
        <MiddleOfScreen imagem={imagem} descricao={descricao} />
        <EndOfScreen material={getResidues} estado={estado} horario={horario} qtd={qtd} price={price} />

        {
            //se ainda ninguem aceitou a requisicao
            !on_way ?
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