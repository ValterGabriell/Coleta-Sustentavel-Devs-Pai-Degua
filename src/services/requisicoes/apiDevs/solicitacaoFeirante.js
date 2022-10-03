import apiDevs from '../../api/apiDevs'


export async function getRequestMerchant(userId){
    if(userId == undefined){
        getRequestMerchant(userId)
    }else{
        try {
            const result = await apiDevs.get(`merchants/${userId}`)
            var data = result.data.requests.reverse()
            return data
        } catch (error) {
            console.log(error)
            return {}
        }
    }
}
