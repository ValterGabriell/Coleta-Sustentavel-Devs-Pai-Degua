import apiDevs from '../../api/apiDevs'





export async function getBarracas() {
    try {
        const result = await apiDevs.get('requests')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}

export async function postDenuncia(title, description, photo, gravity,isDone,location,props, userId) {
    try {
        await apiDevs.post('denuncias', {
            titulo:title,
            descricao:description,
            foto:photo,
            gravidade:gravity,
            status:isDone,
            localizacao:location,
            id_usuario:userId
        }).then((response)=>{
            if (response.status === 200) {
                props.navigation.navigate('MyTabsScreen')
                alert('Salvo com sucesso')
            } else {
                alert('Erro ao salvar')
            }
        })
      
    } catch (error) {
        return 'erro'
    }
}
