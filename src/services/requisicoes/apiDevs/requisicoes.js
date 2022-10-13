import apiDevs from '../../api/apiDevs'





export async function getRequest() {
    try {
        const result = await apiDevs.get('requests')
        return result.data
    } catch (error) {
        console.log(error)
        return {}
    }
}


export async function postRequest(merchant_id, title, description, photo, localization, status, state, on_the_way, ideal_time, amount, price, residues, props) {
    try {
        await apiDevs.post('requests', {
            merchant_id: merchant_id,
            title: title,
            description: description,
            photo: photo,
            localization: localization,
            status: status,
            state: state,
            on_the_way: on_the_way,
            ideal_time: ideal_time,
            amount: amount,
            price: price,
            residues: residues
        }).then((response) => {
            if (response.status === 200) {
                props.navigation.navigate("MyTabsScreen")
            } else {
                alert('Erro ao salvar')
            }
        }).catch(erro => {
            alert(erro)

        })

    } catch (error) {
        return 'erro'
    }
}

export async function addRequestForScarvenger(requestId, scarvengerId) {
    try {
        await apiDevs.post(`scavengers/addRequest/${scarvengerId}/${requestId}`).then((res) => {
            if (res.status === 200) {
                return true
            } else {
                return false
            }
        }).catch((erro) => {
            console.log(erro);
            return false
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

export async function removeRequestForScarvenger(requestId, scarvengerId) {
    try {
        await apiDevs.post(`scavengers/removeRequest/${scarvengerId}/${requestId}`).then((res) => {
            if (res.status === 200) {
                return true
            } else {
                return false
            }
        }).catch((erro) => {
            console.log(erro);
            return false
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

export async function getRequestsByScarvengerId(scarvengerId) {
    try {
        const result = await apiDevs.get(`scavengers/${scarvengerId}`)
        return result.data.requests
    } catch (error) {
        console.log(error);
        return {}
    }
}


export async function getRequestsByMerchantId(merchant_id) {
    try {
        const result = await (await apiDevs.get(`merchants/${merchant_id}`))
        var listRequest = result.data.requests
        var arrayWithRequestThatHaveOnTheWayEqualsTrue = []

        for (let index = 0; index < listRequest.length; index++) {
            var isOnTheWay = listRequest[index].on_the_way
            if (isOnTheWay) {
                arrayWithRequestThatHaveOnTheWayEqualsTrue.push(listRequest[index])
            }
        }

        return arrayWithRequestThatHaveOnTheWayEqualsTrue
    } catch (error) {
        console.log(error);
        return {}
    }
}

export async function checkIfCurrentRequestBelongsToCurrentScarvenger(scarvengerId, requestId) {
    try {
        //recuperamos todas as requisicoes do catador
        const result = await (await apiDevs.get(`scavengers/${scarvengerId}`))
        var requests = result.data.requests
        //criando lista para receber a requisicao atual e que combina o id com as requisicoes aceitas pelo catador
        var listWithRequisitionsThatDontHaveTheSameIdAsOurScarvengerId = []

        //percorremos as requisicoes do catador
        for (let index = 0; index < requests.length; index++) {
            //salvamos os id das requisicoes na variavel element
            const element = requests[index].id;

            //checamos se o id da lista de requisicao aceita pelo usuario é igual ao id atual da requisicao
            if (element === requestId) {
                //se for, a gente salva na lista
                listWithRequisitionsThatDontHaveTheSameIdAsOurScarvengerId.push(element)
            }
        }

        //retornando a lista
        return listWithRequisitionsThatDontHaveTheSameIdAsOurScarvengerId



    } catch (error) {
        console.log(error);
        return {}
    }
}




