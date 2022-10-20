import apiDevs from '../../api/apiDevs'





export async function getRequest() {
    try {
        const result = await apiDevs.get('requests')
        var newList = []
        var list = result.data
        list.forEach((el) => {
            if (!el.on_the_way) {
                newList.push(el)
            }
        })

        return newList


    } catch (error) {
        console.log(error)
        return {}
    }
}


export async function getPointsCollect() {
    try {
        const result = await apiDevs.get('collection_points')
        var newList = []
        var list = result.data
        list.forEach((el) => {
            if (!el.on_the_way) {
                newList.push(el)
            }
        })

        return newList


    } catch (error) {
        console.log(error)
        return {}
    }
}


export async function postRequest(merchant_id, title, description, photo, localization, status, state, on_the_way, ideal_time, amount, price, residues, props) {

    try {
        let filename = photo.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();
        formData.append('photo', { uri: photo, name: filename, type });
        console.log(formData.get());
       
        await apiDevs.post('requests', {
            merchant_id: merchant_id,
            title: title,
            description: description,
            photo: formData[0],
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
                console.log("passou");
                props.navigation.navigate("MyTabsScreen")
            } else {
                console.log("falhou");
                alert('Erro ao salvar')
            }
        }).catch(erro => {
            console.log(erro.message);
            alert(erro.message)
        })

    } catch (error) {
        console.log(error.message);
        return 'erro'
       
    }
}

export async function addRequestForScarvenger(requestId, scarvengerId, props) {
    try {
        await apiDevs.post(`scavengers/addRequest/${scarvengerId}/${requestId}`).then((res) => {
            if (res.status === 200) {

                props.navigation.goBack()
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

export async function removeRequestForScarvenger(requestId, scarvengerId, props) {
    try {
        await apiDevs.post(`scavengers/removeRequest/${scarvengerId}/${requestId}`).then((res) => {
            if (res.status === 200) {
                props.navigation.goBack()
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

export async function checkIfCurrentRequestBelongsToCurrentScarvenger(scarvengerId) {
    try {
        //recuperamos todas as requisicoes do catador
        const result = await (await apiDevs.get(`scavengers/${scarvengerId}`))
        var requests = result.data.requests
        //retornando a lista
        return requests



    } catch (error) {
        console.log(error);
        return {}
    }
}




