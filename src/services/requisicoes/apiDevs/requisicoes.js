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


export async function postRequest(merchant_id, title, description, photo, localization,status,state,on_the_way,ideal_time,amount, price,props) {
    try {
        await apiDevs.post('requests', {
            merchant_id:merchant_id,
            title:title,
            description:description,
            photo:photo,
            localization:localization,
            status:status,
            state:state,
            on_the_way:on_the_way,
            ideal_time:ideal_time,
            amount:amount,
            price:price
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
