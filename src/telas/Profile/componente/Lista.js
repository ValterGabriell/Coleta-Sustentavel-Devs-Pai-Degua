import React,{useState, useEffect} from "react"
import ListaBarracasAtendidas from "./ListaBarracasAtendida"
import ListaSolicitacoes from "./ListaSolicitacoes"


export default function Lista({ props, isCatador }) {

    const [comment, setComment] = useState([])

    useEffect(() => {
        (async () => {
            const result = await getAllComments()
            setComment(result)
        })()

    }, [])


    return <>
        {!isCatador ?
            <ListaSolicitacoes props={props} comment={comment}/>
            :
            <ListaBarracasAtendidas props={props} comment={comment} />
        }

    </>
}