import apiDevs from '../../api/apiDevs'


export async function getDenuncias(){
    try {
        const result = await apiDevs.get('denuncias')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}

