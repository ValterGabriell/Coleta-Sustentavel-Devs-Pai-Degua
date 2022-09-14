import apiDevs from '../../api/apiDevs'


export async function getBarracas() {
    try {
        const result = await apiDevs.get('denuncias')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}

export async function postDenuncia(title, description, photo, gravity,isDone,location,props) {
    try {
        await apiDevs.post('denuncias', {
            titulo:title,
            descricao:description,
            foto:photo,
            gravidade:gravity,
            status:isDone,
            localizacao:location
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
