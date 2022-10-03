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


export async function postRequest(merchant_id, description, photo, localization,status,state,ideal_time,amount, props) {
    try {
        await apiDevs.post('requests', {
            merchant_id:merchant_id,
            description:description,
            photo:photo,
            localization:localization,
            status:status,
            state:state,
            ideal_time:ideal_time,
            amount:amount
        }).then((response)=>{
            if (response.status === 200) {
                props.navigation.navigate("MyTabsScreen")
            } else {
                alert('Erro ao salvar')
            }
        }).catch(erro=>{
            alert(erro)
            
        })
      
    } catch (error) {
        return 'erro'
    }
}
