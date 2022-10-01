import apiDevs from '../../api/apiDevs'


export async function getRequestMerchant(userId){
    try {
        const result = await apiDevs.get(`merchants/${userId}`)
        var data = result.data.requests
        return data
    } catch (error) {
        console.log(error)
        return {}
    }
}
