import apiDevs from '../../api/apiDevs'


export async function getUsersOrgs(){
    try {
        const result = await apiDevs.get('orgaos')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}
